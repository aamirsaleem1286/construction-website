"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Reveal3DProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
  y?: number;
  duration?: number;
};

export function Reveal3D({
  children,
  className,
  delay = 0,
  rotate = 14,
  y = 46,
  duration = 1.05,
}: Reveal3DProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion ? false : { opacity: 0, y, rotateX: rotate, scale: 0.965 }
      }
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
