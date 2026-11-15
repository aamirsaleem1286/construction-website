import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "onDark" | "onLight";
  className?: string;
  href?: string;
  compact?: boolean;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-10 w-10", className)}
    >
      <path
        d="M8 41V7h17.5C33 7 38 12.2 38 19.5S33 32 25.5 32H16v9H8Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
      <path d="M16 17.5h9" stroke="#E9A23B" strokeWidth="3" />
      <path d="M8 41h24" stroke="#E9A23B" strokeWidth="3" />
    </svg>
  );
}

export function Logo({ variant = "onDark", className, href = "/", compact = false }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Prime Projects International — home"
      className={cn(
        "group inline-flex items-center gap-3",
        variant === "onDark" ? "text-white" : "text-ink",
        className
      )}
    >
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 md:h-10 md:w-10" />
      <span className={cn("flex flex-col", compact && "sr-only sm:flex")}>
        <span className="font-display text-[13px] font-extrabold uppercase leading-none tracking-[0.13em] md:text-[15px]">
          Prime Projects
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[8px] uppercase leading-none tracking-[0.38em] md:text-[9px]",
            variant === "onDark" ? "text-concrete" : "text-concrete-dark"
          )}
        >
          International
        </span>
      </span>
    </Link>
  );
}
