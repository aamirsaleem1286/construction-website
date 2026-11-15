"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const StructureScene = dynamic(() => import("@/components/three/StructureScene"), {
  ssr: false,
  loading: () => null,
});

export function HeroCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = wrapRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0" style={{ opacity: visible ? 1 : 0, transition: "opacity 600ms ease" }}>
        {visible ? <StructureScene reduced={Boolean(reduceMotion)} /> : null}
      </div>
    </div>
  );
}
