import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outlineDark" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: boolean;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  type?: never;
  disabled?: never;
  onClick?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  external?: never;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "group/btn sheen relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-[2px] font-mono text-[11px] uppercase tracking-[0.16em] transition-[color,background-color,border-color,transform,box-shadow] duration-500 hover:-translate-y-px active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink shadow-[0_16px_36px_-18px_rgba(233,162,59,0.7)] hover:bg-white hover:shadow-[0_20px_44px_-18px_rgba(255,255,255,0.35)]",
  outline:
    "border border-white/25 text-white backdrop-blur-sm hover:border-accent hover:text-accent",
  outlineDark:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  ghost: "text-white hover:text-accent",
  light: "bg-white text-ink shadow-[0_16px_36px_-20px_rgba(0,0,0,0.6)] hover:bg-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5",
  md: "h-12 px-6 md:px-7",
  lg: "h-14 px-7 md:px-9",
};

function Inner({ children, icon }: { children: React.ReactNode; icon?: boolean }) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      {icon ? (
        <span className="relative z-10 flex h-5 w-5 items-center justify-center overflow-hidden">
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-4 group-hover/btn:-translate-y-4"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <ArrowUpRight
            className="absolute h-4 w-4 -translate-x-4 translate-y-4 transition-transform duration-500 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className, icon = true } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const external = props.external ?? /^https?:\/\//.test(props.href);
    if (external) {
      return (
        <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer">
          <Inner icon={icon}>{children}</Inner>
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        <Inner icon={icon}>{children}</Inner>
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes}
    >
      <Inner icon={icon}>{children}</Inner>
    </button>
  );
}
