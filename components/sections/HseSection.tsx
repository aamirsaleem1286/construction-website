import { ArrowLink } from "@/components/ui/ArrowLink";
import { Icon } from "@/components/ui/Icon";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hsePillars } from "@/lib/data/company";

export function HseSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="HSE & quality"
              index="08"
              title={[
                "SAFETY IS OUR",
                "FOUNDATION.",
                "QUALITY IS OUR",
                "PROMISE.",
              ]}
              description="Safe methods and verifiable quality are treated as part of the work itself — planned before mobilisation and checked as the work progresses."
            />

            <Reveal delay={0.1} className="mt-9">
              <ArrowLink href="/hse-quality">Our HSE & quality approach</ArrowLink>
            </Reveal>

            <Reveal delay={0.12} className="mt-10">
              <ParallaxImage
                src="/images/engineer-site.jpg"
                alt="Engineer reviewing works on site"
                className="aspect-[16/10] w-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
                intensity={6}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
                    Method / Supervision / Verification
                  </p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                    HSE
                  </span>
                </div>
              </ParallaxImage>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <ul className="border-t border-white/10">
              {hsePillars.map((pillar, index) => (
                <li
                  key={pillar.title}
                  className="group grid grid-cols-[auto_1fr] gap-5 border-b border-white/10 py-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center border border-white/12 text-accent transition-colors group-hover:border-accent/45">
                    <Icon name={pillar.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                        {pillar.title}
                      </h3>
                      <span className="font-mono text-[9px] tracking-[0.18em] text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-concrete">
                      {pillar.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Reveal delay={0.08}>
              <div className="mt-7 border border-white/10 bg-white/[0.02] p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                  Working principle
                </p>
                <p className="mt-3 text-sm leading-relaxed text-concrete">
                  No activity starts without a method statement, a risk assessment and the
                  access required to do it correctly. Inspection points are agreed before work
                  is covered up.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
