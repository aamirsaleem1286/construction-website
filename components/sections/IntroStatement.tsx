import { ArrowLink } from "@/components/ui/ArrowLink";
import { LineReveal } from "@/components/ui/LineReveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";

const disciplines = [
  "Waterproofing",
  "Thermal Insulation",
  "Protective Coatings",
  "Concrete Repair",
  "Structural Strengthening",
  "Infrastructure",
];

export function IntroStatement() {
  return (
    <section id="introduction" className="relative scroll-mt-24 overflow-hidden bg-bone py-24 text-ink md:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-deep">
                01
              </span>
              <span className="h-px w-8 bg-accent-deep/50" aria-hidden="true" />
              <span className="label-mono text-concrete-dark">Who we are</span>
            </div>

            <LineReveal
              as="h2"
              lines={[
                "PROTECTION IS",
                "A DISCIPLINE.",
                <span key="muted" className="text-ink/40">
                  NOT A DETAIL.
                </span>,
              ]}
              className="display-section mt-7"
            />

            <div className="mt-10 grid max-w-2xl gap-7 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <p className="text-sm leading-relaxed text-concrete-dark">
                  Prime Projects International is a Saudi-based specialist contractor
                  delivering advanced waterproofing, thermal insulation, concrete
                  protection, structural rehabilitation and infrastructure works.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-sm leading-relaxed text-concrete-dark">
                  We work where performance is decided by preparation, compatibility and
                  detail — translating the requirement into a buildable system, then
                  executing it with trained applicators and documented inspection.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="mt-8 border-t border-ink/10 pt-6">
              <div className="grid grid-cols-3 gap-4 max-w-xl">
                <div>
                  <span className="block font-display text-xl font-bold text-ink">15+</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">Years in KSA</span>
                </div>
                <div>
                  <span className="block font-display text-xl font-bold text-ink">250+</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">Completed Works</span>
                </div>
                <div>
                  <span className="block font-display text-xl font-bold text-ink">100%</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">SBC Aligned</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-8">
              <ArrowLink href="/about" tone="dark">
                About Prime Projects
              </ArrowLink>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage
                src="/images/architecture-monolith.jpg"
                alt="Architectural concrete form against a clear sky"
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
                intensity={6}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
                    Protection / Performance
                  </p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                    PPI
                  </span>
                </div>
              </ParallaxImage>
            </Reveal>

            <Reveal delay={0.1} className="mt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">
                {disciplines.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
