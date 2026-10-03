type DecorativeFrame = Pick<
  HTMLIFrameElement,
  "dataset" | "src" | "removeAttribute"
>;
type MotionPreference = Pick<MediaQueryList, "matches" | "addEventListener">;

export function initializeDecorativeMedia(
  frames: readonly DecorativeFrame[],
  preference: MotionPreference,
  onChange: () => void,
) {
  const update = () => {
    for (const frame of frames) {
      // CSS cannot stop animation inside a third-party iframe.
      if (preference.matches) frame.removeAttribute("src");
      else if (frame.dataset.src) frame.src = frame.dataset.src;
    }
    onChange();
  };
  preference.addEventListener("change", update);
  update();
}
