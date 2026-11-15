"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBlurDataURL } from "@/lib/image-blur";
import { additionalServices } from "@/lib/data/additional";
import { cn } from "@/lib/utils";

export function AdditionalServicesShowcase({ index = "07" }: { index?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = additionalServices[activeIndex];
  const blur = getBlurDataURL(active.image);

  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <SectionHeading
            eyebrow="Additional capabilities"
            index={index}
            title={["ONE TEAM.", "COMPLETE DELIVERY."]}
            description="Beyond our core specialist systems, PPI supports the wider construction package — coordinating finishes and building works around the protection strategy."
            className="md:col-span-8"
          />
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 md:col-span-4 md:text-right">
            {String(additionalServices.length).padStart(2, "0")} additional services
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <ul className="border-t border-white/10">
              {additionalServices.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={service.slug} className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      aria-expanded={isActive}
                      aria-controls={`additional-${service.slug}`}
                      className="group flex w-full items-start gap-4 py-5 text-left"
                    >
                      <span
                        className={cn(
                          "mt-1 font-mono text-[10px] tracking-[0.18em] transition-colors",
                          isActive ? "text-accent" : "text-white/30"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            "flex items-center gap-3 font-display text-xl font-semibold tracking-tight transition-colors md:text-2xl",
                            isActive ? "text-white" : "text-white/60 group-hover:text-white"
                          )}
                        >
                          {service.title}
                          <span
                            className={cn(
                              "hidden h-7 w-7 shrink-0 items-center justify-center border transition-all duration-300 sm:flex",
                              isActive
                                ? "rotate-45 border-accent/50 text-accent"
                                : "border-white/15 text-white/35"
                            )}
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                          </span>
                        </span>
                        <span
                          id={`additional-${service.slug}`}
                          className={cn(
                            "block overflow-hidden text-sm leading-relaxed text-concrete transition-all duration-500",
                            isActive ? "max-h-32 pt-3 opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          {service.description}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center border transition-colors sm:flex",
                          isActive
                            ? "border-accent/40 text-accent"
                            : "border-white/10 text-white/35"
                        )}
                      >
                        <Icon name={service.icon} className="h-4 w-4" />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-charcoal">
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
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      quality={80}
                      placeholder={blur ? "blur" : "empty"}
                      blurDataURL={blur}
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(additionalServices.length).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white">
                    {active.title}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-white/35">
                Supporting works are coordinated with the specialist scope and delivered under
                the same supervision and quality controls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
