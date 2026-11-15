"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type LineRevealProps = {
  lines: React.ReactNode[];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  triggerOnMount?: boolean;
  start?: string;
};

export function LineReveal({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
  triggerOnMount = false,
  start = "top 88%",
}: LineRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll<HTMLElement>("[data-line-inner]");
    if (!inners.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(inners, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { yPercent: 112, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          delay: triggerOnMount ? delay : 0,
          stagger,
          ease: "expo.out",
          scrollTrigger: triggerOnMount
            ? undefined
            : {
                trigger: el,
                start,
                once: true,
              },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, stagger, start, triggerOnMount]);

  return (
    <Tag
      ref={ref as any}
      className={cn(className)}
    >
      {lines.map((line, index) => (
        <span
          key={index}
          className={cn("block overflow-hidden pb-[0.09em] -mb-[0.09em]", lineClassName)}
        >
          <span
            data-line-inner=""
            className="block"
            style={{ opacity: 0, transform: "translate3d(0, 112%, 0)" }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
