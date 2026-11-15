"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap, registerGsap } from "@/lib/gsap";

export function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    registerGsap();
    const wrap = wrapRef.current;
    const layer = scrollRef.current;
    if (!wrap || !layer) return;

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

    const ctx = gsap.context(() => {
      gsap.to(layer, {
        yPercent: isDesktop ? 10 : 4,
        scale: isDesktop ? 1.04 : 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [reduceMotion]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    if (pointerRef.current) {
      pointerRef.current.style.transform = `translate3d(${(-x * 14).toFixed(2)}px, ${(
        -y * 10
      ).toFixed(2)}px, 0)`;
    }
  }

  function resetPointer() {
    if (pointerRef.current) pointerRef.current.style.transform = "translate3d(0,0,0)";
  }

  return (
    <div
      ref={wrapRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient blurred backdrop for portrait / tall viewports on mobile & tablet */}
      <div className="absolute inset-0 overflow-hidden lg:hidden" aria-hidden="true">
        <Image
          src="/images/hero-saudi-future.png"
          alt=""
          fill
          quality={35}
          className="object-cover blur-2xl opacity-40 scale-110"
        />
      </div>

      <div ref={scrollRef} className="absolute inset-0 will-change-transform">
        <div
          ref={pointerRef}
          className="absolute inset-0 lg:-inset-[5%] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        >
          <Image
            src="/images/hero-saudi-future.png"
            alt="Prime Projects International - Saudi Arabia Construction Future"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-contain lg:object-cover object-center lg:object-[center_32%]"
          />
        </div>
      </div>

      {/* Responsive top fade for the navigation header */}
      <div className="absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-b from-ink/90 via-ink/40 to-transparent z-[1]" />

      {/* Responsive bottom transition into subsequent sections */}
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 lg:h-36 bg-gradient-to-t from-ink via-ink/50 to-transparent z-[1]" />

      {/* Warm golden amber architectural highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_28%,rgba(233,162,59,0.12),transparent_58%)] pointer-events-none z-[1]" />
    </div>
  );
}
