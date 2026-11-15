import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
  label?: string;
};

export function ArrowLink({
  href,
  children,
  className,
  tone = "light",
  label,
}: ArrowLinkProps) {
  const external = /^https?:\/\//.test(href);
  const classes = cn(
    "link-line group/al font-mono text-[10px] uppercase tracking-[0.2em] transition-colors",
    tone === "light" ? "text-white hover:text-accent" : "text-ink hover:text-accent-deep",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        className="h-3.5 w-3.5 transition-transform duration-500 group-hover/al:translate-x-0.5 group-hover/al:-translate-y-0.5"
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={label}>
      {content}
    </Link>
  );
}
