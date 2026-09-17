import type { Screenshot as ScreenshotT } from "@/lib/apps.config";
import { Mockup, mockupRegistry } from "@/components/mockups";
import { MockupFrame } from "@/components/mockup-frame";
import { cn } from "@/lib/cn";

interface Props {
  screenshot: ScreenshotT;
  className?: string;
  frame?: "phone" | "browser" | "none";
}

/**
 * Resolve uma entrada da config:
 *  - { kind: "image", src } → <img> com Next/Image-friendly wrapper
 *  - { kind: "svg", component } → mockup SVG (com frame se frame !== "none")
 */
export function Screenshot({ screenshot, className, frame = "phone" }: Props) {
  const inner = (() => {
    if (screenshot.kind === "image") {
      return (
        <img
          src={screenshot.src}
          alt={screenshot.alt ?? ""}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      );
    }
    // svg mockup
    const exists = Boolean(mockupRegistry[screenshot.component]);
    return (
      <Mockup
        name={screenshot.component}
        className={exists ? "" : "opacity-50"}
      />
    );
  })();

  if (frame === "none") {
    return (
      <div className={cn("relative w-full h-full", className)}>
        {inner}
        {screenshot.kind === "svg" && (
          <span className="absolute bottom-2 right-2 text-[9px] uppercase tracking-wider text-white/30">
            mockup
          </span>
        )}
      </div>
    );
  }

  return (
    <MockupFrame className={className} variant={frame}>
      {inner}
    </MockupFrame>
  );
}