"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glow?: boolean;
};

export function TiltCard({ children, className, maxTilt = 4, glow = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(pointerY, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 150,
    damping: 22,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 150,
    damping: 22,
    mass: 0.6,
  });

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    pointerX.set(x);
    pointerY.set(y);
    if (glowRef.current) {
      glowRef.current.style.setProperty("--mx", `${x * 100}%`);
      glowRef.current.style.setProperty("--my", `${y * 100}%`);
      glowRef.current.style.opacity = "1";
    }
  }

  function handleLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative [will-change:transform]", className)}
    >
      {glow ? (
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(233,162,59,0.14), transparent 65%)",
          }}
        />
      ) : null}
      {children}
    </motion.div>
  );
}
