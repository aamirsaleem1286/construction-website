"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/lib/data/navigation";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/site";
import { cn, toTelHref } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef(0);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = 0;
        setScrolled(window.scrollY > 24);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${progress})`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          solid
            ? "border-b border-white/10 bg-ink/92 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/85 via-ink/35 to-transparent"
        )}
      >
        <div className="shell flex h-[76px] items-center justify-between gap-6 md:h-[92px]">
          <Logo variant="onDark" compact />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                const hasDropdown = item.href === "/services";

                return (
                  <li key={item.href} className={cn("relative", hasDropdown && "group/nav")}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative flex items-center gap-1.5 py-2 font-mono text-[10px] uppercase tracking-[0.17em] transition-colors",
                        active ? "text-white" : "text-white/60 hover:text-white"
                      )}
                    >
                      {item.label}
                      {hasDropdown ? (
                        <ChevronDown
                          className="h-3 w-3 transition-transform duration-300 group-hover/nav:rotate-180"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      ) : null}
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-500",
                          active ? "w-full" : "w-0 group-hover/nav:w-full"
                        )}
                        aria-hidden="true"
                      />
                    </Link>

                    {hasDropdown ? (
                      <div className="pointer-events-none absolute left-1/2 top-full w-[min(88vw,660px)] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:pointer-events-auto group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                        <div className="border border-white/10 bg-charcoal/98 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                          <p className="label-mono mb-4 text-accent">Capabilities</p>
                          <div className="grid grid-cols-2 gap-x-6">
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group/link flex items-baseline gap-3 border-b border-white/[0.06] py-2.5 text-sm text-concrete transition-colors hover:text-white"
                              >
                                <span className="font-mono text-[9px] text-white/30 transition-colors group-hover/link:text-accent">
                                  {service.index}
                                </span>
                                <span>{service.shortTitle}</span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-5 flex items-center justify-between">
                            <p className="text-xs text-white/40">
                              Full capability statement
                            </p>
                            <Link
                              href="/services"
                              className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent transition-colors hover:text-white"
                            >
                              All services
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={toTelHref(siteConfig.contact.phone)}
              className="hidden items-center gap-2 border border-white/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-accent hover:text-white xl:inline-flex"
            >
              <Phone className="h-3 w-3 text-accent" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <Button href="/contact#quote" size="sm" className="hidden sm:inline-flex">
              Request Quote
            </Button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        <span
          ref={progressRef}
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-accent"
        />
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) setOpen(false);
            }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink pt-[76px] lg:hidden"
          >
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="shell relative flex flex-1 flex-col pb-10 pt-8">
              <nav aria-label="Mobile" className="flex-1">
                <ul>
                  {mainNav.map((item, index) => {
                    const active = isActive(pathname, item.href);
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + index * 0.045, duration: 0.5 }}
                        className="border-b border-white/10"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-baseline gap-4 py-4"
                        >
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "display-sub transition-colors",
                              active ? "text-accent" : "text-white hover:text-accent"
                            )}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-8 shrink-0"
              >
                <Button href="/contact#quote" size="lg" className="w-full">
                  Start a Project
                </Button>
                <div className="mt-6 space-y-2 text-sm text-concrete">
                  <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-white">
                    {siteConfig.contact.email}
                  </a>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="block hover:text-white">
                    {siteConfig.contact.phone}
                  </a>
                  <p className="pt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                    {siteConfig.region}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
