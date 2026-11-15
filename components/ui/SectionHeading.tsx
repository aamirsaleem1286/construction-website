import { LineReveal } from "@/components/ui/LineReveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  index?: string;
  title: React.ReactNode[] | string;
  description?: string;
  theme?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  theme = "dark",
  align = "left",
  className,
  titleClassName,
  children,
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : title.split("\n");

  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        align === "center" ? "max-w-3xl" : "",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" && "justify-center"
        )}
      >
        {index ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            {index}
          </span>
        ) : null}
        <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
        <span
          className={cn(
            "label-mono",
            theme === "dark" ? "text-concrete" : "text-concrete-dark"
          )}
        >
          {eyebrow}
        </span>
      </div>

      <LineReveal
        as="h2"
        lines={lines}
        className={cn(
          "display-section mt-6",
          theme === "dark" ? "text-white" : "text-ink",
          titleClassName
        )}
      />

      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed",
            align === "center" && "mx-auto",
            theme === "dark" ? "text-concrete" : "text-concrete-dark"
          )}
        >
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  );
}
