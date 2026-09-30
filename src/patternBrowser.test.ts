import { describe, expect, it } from "vitest";
import { createPatternBrowser } from "./patternBrowser";

const patterns = [
  { id: "gaslighting", aliases: ["questioning-reality"], tags: ["lying"] },
  { id: "physical-violence", aliases: [], tags: ["violence"] },
  { id: "double-binds", aliases: [], tags: [] },
];

describe("pattern browser", () => {
  it("shows every pattern initially and toggles one tag at a time", () => {
    const browser = createPatternBrowser(patterns);
    expect(browser.snapshot().visibleIds).toEqual(
      patterns.map((pattern) => pattern.id),
    );
    expect(browser.toggleTag("lying").visibleIds).toEqual(["gaslighting"]);
    expect(browser.toggleTag("violence").visibleIds).toEqual([
      "physical-violence",
    ]);
    expect(browser.toggleTag("violence").visibleIds).toEqual(
      patterns.map((pattern) => pattern.id),
    );
  });

  it("resets filters by selecting the active tag again", () => {
    const browser = createPatternBrowser(patterns);
    browser.toggleTag("lying");
    expect(browser.toggleTag("lying")).toEqual({
      selectedTag: null,
      visibleIds: patterns.map((pattern) => pattern.id),
    });
  });

  // cspell:ignore aslighting — the initial letter is percent-encoded.
  it.each(["#gaslighting", "#questioning-reality", "#%67aslighting"])(
    "reveals canonical and alternate pattern links: %s",
    (fragment) => {
      const browser = createPatternBrowser(patterns);
      browser.toggleTag("violence");
      expect(browser.navigate(fragment)).toEqual({
        targetId: "gaslighting",
        selectedTag: null,
        visibleIds: patterns.map((pattern) => pattern.id),
      });
    },
  );

  it("clears filters even when the linked pattern already matches", () => {
    const browser = createPatternBrowser(patterns);
    browser.toggleTag("lying");
    expect(browser.navigate("#gaslighting")?.selectedTag).toBeNull();
  });

  it.each(["#%", "#%E0%A4", "#unknown", "#resources", "", "#"])(
    "ignores invalid or unrelated fragments without changing filters: %s",
    (fragment) => {
      const browser = createPatternBrowser(patterns);
      browser.toggleTag("lying");
      expect(browser.navigate(fragment)).toBeNull();
      expect(browser.snapshot().visibleIds).toEqual(["gaslighting"]);
    },
  );
});
