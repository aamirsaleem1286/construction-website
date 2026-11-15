"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { getBlurDataURL } from "@/lib/image-blur";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  parallax?: boolean;
  intensity?: number;
  children?: React.ReactNode;
};

export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  quality = 82,
  parallax = true,
  intensity = 7,
  children,
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const blur = getBlurDataURL(src);

  useEffect(() => {
    if (!parallax) return;
    registerGsap();
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: -intensity, rotateX: 3.5 },
        {
          yPercent: intensity,
          rotateX: -2.5,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [intensity, parallax]);

  return (
    <div
      ref={wrapRef}
      className={cn("relative isolate overflow-hidden bg-charcoal", className)}
      style={parallax ? { perspective: "1400px" } : undefined}
    >
      <div
        ref={innerRef}
        className={cn(
          "absolute inset-x-0 -top-[8%] bottom-[-8%]",
          parallax ? "will-change-transform" : ""
        )}
        style={parallax ? { transform: `translate3d(0, -${intensity}%, 0)` } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={cn("object-cover", imgClassName)}
          placeholder={blur ? "blur" : "empty"}
          blurDataURL={blur}
        />
      </div>
      {children}
    </div>
  );
}
