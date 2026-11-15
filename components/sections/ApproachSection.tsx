import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approachSteps } from "@/lib/data/company";

export function ApproachSection({ index = "03" }: { index?: string }) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="How we work"
              index={index}
              title={["ASSESS.", "SPECIFY.", "EXECUTE.", "VERIFY."]}
              description="A consistent four-stage approach keeps technical decisions connected to what is actually built on site."
            />
            <Reveal delay={0.1} className="mt-10">
              <ParallaxImage
                src="/images/meeting.jpg"
                alt="Project team reviewing technical documents"
                className="aspect-[4/3] w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
                intensity={6}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
                  Technical review before mobilisation
                </p>
              </ParallaxImage>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-4">
            <ol className="border-t border-white/10">
              {approachSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.06} as="li">
                  <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-white/10 py-7 md:gap-8 md:py-8">
                    <span className="font-display text-3xl font-semibold leading-none tracking-tight text-accent/80 md:text-4xl">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-concrete">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.1} className="mt-7">
              <p className="max-w-xl text-xs leading-relaxed text-white/40">
                Documentation, inspection records and handover information are agreed at the
                start so that verification is part of the programme, not an afterthought.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
