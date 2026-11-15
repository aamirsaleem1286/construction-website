"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    registerGsap();
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("custom-cursor");
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    let visible = false;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const render = () => {
      dotX(targetX);
      dotY(targetY);
      ringX(targetX);
      ringY(targetY);
      frame = 0;
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.35, overwrite: true });
      }
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest<HTMLElement>("a, button, [data-cursor]");
      if (interactive) {
        setActive(true);
        setLabel(interactive.dataset.cursor ?? "");
      } else {
        setActive(false);
        setLabel("");
      }
    };

    const onLeave = () => {
      visible = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.25, overwrite: true });
    };

    const onDown = () => {
      gsap.to(ring, { scale: 0.82, duration: 0.2, overwrite: true });
    };
    const onUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.3, overwrite: true });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[120] hidden [@media(hover:hover)_and_(pointer:fine)]:block"
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent opacity-0"
      />
      <div
        ref={ringRef}
        data-active={active}
        className="fixed left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-[9px] font-medium uppercase tracking-[0.16em] text-accent opacity-0 transition-[width,height,background-color,border-color] duration-300 data-[active=true]:h-16 data-[active=true]:w-16 data-[active=true]:border-accent/50 data-[active=true]:bg-accent/[0.07] data-[active=true]:backdrop-blur-[1px]"
      >
        <span className="text-center leading-tight">{active ? label : ""}</span>
      </div>
    </div>
  );
}
