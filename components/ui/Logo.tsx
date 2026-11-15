import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "onDark" | "onLight";
  className?: string;
  href?: string;
  compact?: boolean;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-white/95 p-0.5 shadow-sm ring-1 ring-white/10",
        className
      )}
    >
      <Image
        src="/logo.jpeg"
        alt="NEXACORE"
        width={96}
        height={64}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export function Logo({ variant = "onDark", className, href = "/", compact = false }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="NEXACORE Ventures Co. — home"
      className={cn(
        "group inline-flex items-center gap-3 transition-transform duration-300 hover:opacity-95",
        variant === "onDark" ? "text-white" : "text-ink",
        className
      )}
    >
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-white/95 p-1 shadow-sm ring-1 ring-white/15 transition-all duration-300 group-hover:scale-105 group-hover:ring-accent/50">
        <Image
          src="/logo.jpeg"
          alt="NEXACORE Ventures Co."
          width={160}
          height={107}
          className="h-10 w-auto object-contain md:h-12"
          priority
        />
      </div>
      <span className="sr-only">NEXACORE Ventures Co.</span>
    </Link>
  );
}
