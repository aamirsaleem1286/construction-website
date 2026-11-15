"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBlurDataURL } from "@/lib/image-blur";
import { equipment } from "@/lib/data/equipment";
import { cn } from "@/lib/utils";

export function EquipmentShowcase({ index = "06" }: { index?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = equipment[activeIndex];
  const blur = getBlurDataURL(active.image);

  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Equipment & application"
          index={index}
          title={["PRECISION IN", "EVERY APPLICATION."]}
          description="Specialist application and preparation equipment supports consistent film build, correct surface profile and a cleaner, better-controlled site."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ul className="border-t border-white/10">
              {equipment.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={item.slug} className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      className="group flex w-full items-center gap-5 py-5 text-left"
                    >
                      <span
                        className={cn(
                          "font-mono text-[10px] tracking-[0.18em] transition-colors",
                          isActive ? "text-accent" : "text-white/30"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            "block font-display text-lg font-semibold leading-snug tracking-tight transition-colors",
                            isActive ? "text-white" : "text-white/60 group-hover:text-white"
                          )}
                        >
                          {item.name}
                        </span>
                        <span
                          className={cn(
                            "mt-1 block text-xs transition-colors",
                            isActive ? "text-concrete" : "text-white/30"
                          )}
                        >
                          {item.capability}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center border transition-colors",
                          isActive
                            ? "border-accent/60 text-accent"
                            : "border-white/15 text-white/40 group-hover:border-white/30"
                        )}
                      >
                        <Icon name={item.icon} className="h-4 w-4" />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden border border-white/10 bg-ink">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    quality={80}
                    placeholder={blur ? "blur" : "empty"}
                    blurDataURL={blur}
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(equipment.length).padStart(2, "0")}
                </p>
                <p className="max-w-[60%] text-right font-mono text-[9px] uppercase tracking-[0.16em] text-white/60">
                  {active.capability}
                </p>
              </div>
            </div>

            <div className="mt-5 min-h-[72px]">
              <h3 className="font-display text-lg font-semibold text-white">{active.name}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-concrete">
                {active.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
