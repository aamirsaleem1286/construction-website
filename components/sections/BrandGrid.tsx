import { brandStyleClasses, brands } from "@/lib/data/brands";
import { cn } from "@/lib/utils";

export function BrandGrid({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px border sm:grid-cols-3 lg:grid-cols-4",
        tone === "dark" ? "border-white/10 bg-white/10" : "border-ink/10 bg-ink/10",
        className
      )}
    >
      {brands.map((brand) => (
        <div
          key={brand.name}
          className={cn(
            "group flex min-h-[115px] flex-col items-center justify-center p-5 text-center transition-all duration-500 md:min-h-[135px]",
            tone === "dark" ? "bg-ink hover:bg-charcoal" : "bg-bone hover:bg-white"
          )}
        >
          <span
            className={cn(
              "text-center text-xl transition-colors duration-500 md:text-2xl",
              tone === "dark"
                ? "text-white/60 group-hover:text-white"
                : "text-ink/65 group-hover:text-ink",
              brandStyleClasses[brand.style]
            )}
          >
            {brand.name}
          </span>
          <span
            className={cn(
              "mt-2 font-mono text-[8px] uppercase tracking-[0.16em] transition-colors",
              tone === "dark"
                ? "text-white/35 group-hover:text-accent"
                : "text-ink/40 group-hover:text-accent-deep"
            )}
          >
            {brand.category}
          </span>
        </div>
      ))}
    </div>
  );
}
