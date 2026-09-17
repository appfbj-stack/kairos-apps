import { cn } from "@/lib/cn";

/**
 * Frame de "celular" estilizado que envolve um mockup SVG.
 * Use com um accent color (from/to em classes Tailwind).
 */
export function MockupFrame({
  className,
  children,
  variant = "phone",
  label,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "phone" | "browser";
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[26px] overflow-hidden glass",
        variant === "phone"
          ? "p-2 ring-1 ring-white/10"
          : "p-1 ring-1 ring-white/10",
        className
      )}
    >
      {variant === "browser" && (
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          {label && (
            <span className="ml-2 text-[10px] text-white/40 truncate">
              {label}
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          "rounded-[20px] overflow-hidden",
          variant === "phone"
            ? "aspect-[9/19] bg-gradient-to-b from-[#0b1542] to-[#04081a]"
            : "aspect-[16/10] bg-[#060d2a]"
        )}
      >
        {children}
      </div>
    </div>
  );
}