import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function Note({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 border p-4 text-xs leading-relaxed",
        tone === "dark"
          ? "border-accent/25 bg-accent/[0.04] text-concrete"
          : "border-ink/15 bg-ink/[0.03] text-concrete-dark",
        className
      )}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}
