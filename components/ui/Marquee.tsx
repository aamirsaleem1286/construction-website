import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  trackClassName?: string;
  variant?: "gold" | "dark" | "light" | "outline";
  duration?: number;
  reverse?: boolean;
  separator?: string;
};

const variants = {
  gold: "bg-accent text-ink border-y border-accent",
  dark: "bg-ink text-white border-y border-white/10",
  light: "bg-bone text-ink border-y border-ink/10",
  outline: "text-white/70",
};

export function Marquee({
  items,
  className,
  trackClassName,
  variant = "gold",
  duration = 46,
  reverse = false,
  separator = "◆",
}: MarqueeProps) {
  return (
    <div className={cn("marquee relative select-none", variants[variant], className)}>
      <div
        className={cn("marquee-track", reverse && "marquee-reverse", trackClassName)}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {[0, 1].map((half) => (
          <div
            key={half}
            className="flex shrink-0 items-center py-4 md:py-5"
            aria-hidden={half === 1 ? true : undefined}
          >
            {items.map((item, index) => (
              <span key={`${half}-${index}`} className="flex items-center">
                <span className="whitespace-nowrap font-display text-xl font-semibold uppercase tracking-tight md:text-2xl">
                  {item}
                </span>
                <span className="mx-5 text-[8px] md:mx-7 md:text-[10px]">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
