import { describe, expect, it, vi } from "vitest";
import { initializeDecorativeMedia } from "./decorativeMedia";

describe("decorative media", () => {
  it("withholds animation URLs for reduced motion and follows live preference changes", () => {
    const frame = {
      dataset: { src: "https://giphy.com/embed/example" },
      src: "",
      removeAttribute(attribute: string) {
        if (attribute === "src") this.src = "";
      },
    };
    const preference = { matches: true, addEventListener: vi.fn() };
    const onChange = vi.fn();
    initializeDecorativeMedia([frame], preference, onChange);
    expect(frame.src).toBe("");
    const update = preference.addEventListener.mock.calls[0]?.[1] as () => void;
    preference.matches = false;
    update();
    expect(frame.src).toBe(frame.dataset.src);
    preference.matches = true;
    update();
    expect(frame.src).toBe("");
    expect(onChange).toHaveBeenCalledTimes(3);
  });

  it("automatically loads configured media when motion is allowed", () => {
    const frame = {
      dataset: { src: "https://giphy.com/embed/example" },
      src: "",
      removeAttribute: vi.fn(),
    };
    initializeDecorativeMedia(
      [frame],
      { matches: false, addEventListener: vi.fn() },
      () => {},
    );
    expect(frame.src).toBe(frame.dataset.src);
    expect(frame.removeAttribute).not.toHaveBeenCalled();
  });
});
