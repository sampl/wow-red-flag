export type BrowserPattern = {
  id: string;
  aliases: readonly string[];
  tags: readonly string[];
};

export function createPatternBrowser(patterns: readonly BrowserPattern[]) {
  let selectedTag: string | null = null;
  const patternIds = new Map<string, string>();
  for (const pattern of patterns) {
    patternIds.set(pattern.id, pattern.id);
    for (const alias of pattern.aliases) patternIds.set(alias, pattern.id);
  }

  const snapshot = () => {
    const visibleIds = patterns
      .filter((pattern) => !selectedTag || pattern.tags.includes(selectedTag))
      .map((pattern) => pattern.id);
    return { selectedTag, visibleIds };
  };

  return {
    snapshot,
    toggleTag(tag: string) {
      selectedTag = selectedTag === tag ? null : tag;
      return snapshot();
    },
    navigate(fragment: string) {
      let decodedFragment: string;
      try {
        decodedFragment = decodeURIComponent(fragment.replace(/^#/, ""));
      } catch {
        return null;
      }
      const targetId = patternIds.get(decodedFragment);
      if (!targetId) return null;
      selectedTag = null;
      return { targetId, ...snapshot() };
    },
  };
}
