import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  className,
  tone = "dark",
}: {
  items: Crumb[];
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex flex-wrap items-center gap-2", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                    tone === "dark"
                      ? "text-concrete hover:text-accent"
                      : "text-concrete-dark hover:text-accent-deep"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.18em]",
                    tone === "dark" ? "text-white" : "text-ink"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <ChevronRight
                  className={cn(
                    "h-3 w-3",
                    tone === "dark" ? "text-white/30" : "text-ink/30"
                  )}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
