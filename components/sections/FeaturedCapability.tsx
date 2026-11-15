import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { LineReveal } from "@/components/ui/LineReveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { featuredServices } from "@/lib/data/services";

export function FeaturedCapability() {
  const feature = featuredServices[0];

  return (
    <section className="relative overflow-hidden bg-bone py-24 text-ink md:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage
                src="/images/concrete-surface.jpg"
                alt="Close inspection of a concrete surface before repair"
                className="aspect-[4/5] w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
                intensity={6}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 border border-white/25 bg-ink/35 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  Capability spotlight
                </div>
              </ParallaxImage>
            </Reveal>
            <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-concrete-dark">
              <span>Diagnosis-led repair</span>
              <span className="text-accent-deep">PPI / 03</span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-deep">
                03
              </span>
              <span className="h-px w-8 bg-accent-deep/50" aria-hidden="true" />
              <span className="label-mono text-concrete-dark">Structural systems</span>
            </div>

            <LineReveal
              as="h2"
              lines={["WHEN REPAIR HAS", "TO BE ENGINEERED."]}
              className="display-section mt-7"
            />

            <p className="mt-7 max-w-2xl text-sm leading-relaxed text-concrete-dark md:text-base">
              {feature.description}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-concrete-dark">
              Repair is planned around the cause of deterioration, not the surface symptom.
              Where capacity is affected, strengthening is coordinated with the structural
              requirement and the temporary works needed to execute it safely.
            </p>

            <Reveal delay={0.08} className="mt-9">
              <p className="label-mono text-concrete-dark">Scope typically includes</p>
              <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {feature.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 border-t border-ink/10 pt-3 text-sm text-ink"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-deep" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={feature.href} variant="outlineDark">
                Structural strengthening
              </Button>
              <ArrowLink href="/services/concrete-repair-rehabilitation" tone="dark">
                Concrete repair
              </ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
