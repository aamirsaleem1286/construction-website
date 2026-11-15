import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MountReveal } from "@/components/ui/MountReveal";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { HeroStage } from "@/components/sections/HeroStage";

export function Hero() {
  return (
    <section className="relative isolate min-h-[85svh] sm:min-h-[90svh] lg:min-h-[100svh] overflow-hidden bg-ink">
      <HeroVisual />

      {/* Screen-reader and SEO accessible heading */}
      <h1 className="sr-only">
        Prime Projects International — Building Saudi Arabia&apos;s Future
      </h1>

      <div className="shell relative z-10 flex min-h-[85svh] sm:min-h-[90svh] lg:min-h-[100svh] flex-col justify-between lg:justify-end pb-8 pt-24 sm:pt-28 lg:pb-12 lg:pt-32">
        {/* Invisible spacer so mobile layout balances cleanly with justify-between */}
        <div className="hidden lg:block" aria-hidden="true" />

        <HeroStage>
          {/* Bottom subtle bar for navigation and explore cue */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <MountReveal delay={0.2} y={10} className="flex flex-wrap items-center gap-3">
              {/* <Button href="/services" size="sm">
                Explore Our Services
              </Button>
              <Button href="/contact#quote" variant="outline" size="sm">
                Request a Quote
              </Button> */}
            </MountReveal>

            <MountReveal delay={0.3} y={10}>
              <a
                href="#introduction"
                className="group inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
              >
                <span className="scroll-cue block h-8 w-px bg-white/20" aria-hidden="true" />
                Scroll to explore
                <ArrowDown
                  className="h-3 w-3 transition-transform duration-500 group-hover:translate-y-1"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </a>
            </MountReveal>
          </div>
        </HeroStage>
      </div>
    </section>
  );
}
