import { describe, expect, it } from "vitest";
import { redFlags } from "./redFlags";
import { TAGS } from "./tags";

describe("red flags", () => {
  it("keeps every public relationship and tag reference valid", () => {
    const canonicalIds = new Set(redFlags.map((redFlag) => redFlag.id));
    const tagIds = new Set(TAGS.map((tag) => tag.id));
    const alternateNameIds = new Set<string>();

    expect(canonicalIds.size).toBe(redFlags.length);

    for (const redFlag of redFlags) {
      expect(redFlag.tags.every((tagId) => tagIds.has(tagId))).toBe(true);

      for (const relatedFlag of redFlag.seeAlso) {
        expect(canonicalIds.has(relatedFlag.id)).toBe(true);
      }

      for (const alternateName of redFlag.alternateNameLinks) {
        expect(canonicalIds.has(alternateName.id)).toBe(false);
        expect(alternateNameIds.has(alternateName.id)).toBe(false);
        alternateNameIds.add(alternateName.id);
      }
    }
  });
});
