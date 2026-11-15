import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Note } from "@/components/ui/Note";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { ContactCta } from "@/components/sections/ContactCta";
import { hsePillars } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "HSE & Quality",
  description:
    "Prime Projects International's approach to health, safety and environmental control, quality assurance and quality control: planned methods, defined inspection points and retained records.",
  alternates: { canonical: "/hse-quality" },
  openGraph: {
    title: "HSE & Quality | Prime Projects International",
    description:
      "Safe methods and verifiable quality, planned before mobilisation and checked as work progresses.",
    url: "/hse-quality",
  },
};

const qualityStages = [
  {
    title: "Plan",
    description:
      "Inspection and test plans, acceptance criteria and hold points are agreed with the project requirements before work starts.",
  },
  {
    title: "Prepare",
    description:
      "Materials are checked against the specification. Substrates are assessed, prepared and approved for the next stage.",
  },
  {
    title: "Apply",
    description:
      "Application is controlled for method, environment, film build and detail treatment by trained applicators under supervision.",
  },
  {
    title: "Verify",
    description:
      "Completed work is inspected and recorded. Non-conformances are addressed and closed before handover.",
  },
];

const controls = [
  "Material identification and batch traceability",
  "Substrate condition and moisture checks",
  "Surface preparation and profile verification",
  "Environmental conditions at application",
  "Film thickness and continuity checks",
  "Detail and termination inspections",
  "Cure and protection before handover",
  "Inspection records and completion documentation",
];

export default function HseQualityPage() {
  return (
    <>
      <PageHero
        eyebrow="HSE & quality"
        title={["SAFETY IS OUR", "FOUNDATION.", "QUALITY IS OUR", "PROMISE."]}
        description="Safe methods and verifiable quality are not separate procedures. They are planned into the work, supervised on site and checked before the work is covered up."
        image="/images/engineer-site.jpg"
        imageAlt="Engineer supervising construction works on site"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "HSE & Quality" }]}
        meta={["Health & safety", "Quality assurance", "Quality control", "Risk management"]}
      />

      <section className="relative bg-bone py-24 text-ink md:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our position"
                index="01"
                title={["PLANNED METHODS.", "CHECKED WORK."]}
                description="Protective systems are unforgiving of poor preparation. A coating cannot compensate for a contaminated substrate, and a membrane cannot compensate for a missed detail. Our HSE and quality approach exists to make the critical stages visible and verifiable."
                theme="light"
              />
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-concrete-dark">
                Before mobilisation, the work is planned: method statement, risk assessment,
                access, materials and inspection points. During execution, supervision checks
                that the method is being followed and that conditions remain suitable.
                Completed work is inspected against agreed criteria, with records retained.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-ink/10 bg-white p-6 shadow-sm">
                <p className="label-mono text-accent-deep">Prequalification &amp; Compliance</p>
                <p className="mt-3 text-sm leading-relaxed text-concrete-dark">
                  Formal HSE manuals, ISO certifications (ISO 9001:2015, ISO 14001:2015, ISO 45001:2018),
                  and project-specific quality documentation are readily provided during tender
                  prequalification and technical submittals.
                </p>
              </div>

              <div className="mt-6 border border-ink/12 bg-white p-6">
                <p className="label-mono text-accent-deep">Site principle</p>
                <p className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight">
                  No activity starts without a method, a risk assessment and the access to do
                  it correctly.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-concrete-dark">
                  If conditions change, work stops and the method is reviewed. Programme
                  pressure does not override a safety or quality hold point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-ink py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Five pillars"
            index="02"
            title={["CONTROL BEFORE", "CONSEQUENCE."]}
            description="Health, safety, environment and quality are managed as one delivery system, with clear responsibilities and defined checks."
            className="max-w-3xl"
          />

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {hsePillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={(index % 3) * 0.05} className="h-full">
                <div className="group flex h-full flex-col bg-ink p-7 transition-colors duration-500 hover:bg-charcoal">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-white/12 text-accent transition-colors group-hover:border-accent/45">
                      <Icon name={pillar.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.18em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-lg font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-concrete">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}

            <div className="flex h-full min-h-[220px] flex-col justify-between bg-charcoal p-7">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                Documentation
              </span>
              <div>
                <p className="font-display text-lg font-semibold leading-snug tracking-tight text-white">
                  If it is not recorded, it cannot be verified.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-concrete">
                  Inspection records, material data and completion information are retained and
                  issued at handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-bone py-24 text-ink md:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Quality control"
                index="03"
                title={["FOUR STAGES.", "NO ASSUMPTIONS."]}
                description="Quality is designed into the sequence. Each stage creates the conditions for the next, and each has a point where work can be checked before it is concealed."
                theme="light"
              />
              <Reveal className="mt-9">
                <ParallaxImage
                  src="/images/engineer-industrial.jpg"
                  alt="Engineer inspecting industrial works"
                  className="aspect-[4/3] w-full"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  intensity={6}
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ol className="border-t border-ink/12">
                {qualityStages.map((stage, index) => (
                  <Reveal key={stage.title} delay={index * 0.05} as="li">
                    <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-ink/10 py-6 md:gap-8 md:py-7">
                      <span className="font-display text-3xl font-semibold leading-none tracking-tight text-accent-deep/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-tight">
                          {stage.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-concrete-dark">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>

              <div className="mt-10 border-t border-ink/12 pt-6">
                <p className="label-mono text-concrete-dark">Typical control points</p>
                <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
                  {controls.map((control) => (
                    <li
                      key={control}
                      className="flex items-start gap-3 border-b border-ink/10 py-3 text-sm text-ink"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-deep"
                        aria-hidden="true"
                      />
                      {control}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-concrete-dark">
                  Control points are adapted to the system, access and project specification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title={["QUALITY IS A", <>CONVERSATION. <span className="text-accent">START IT.</span></>]}
        description="If you need our HSE and quality approach for a tender, prequalification or live project, contact the team to discuss the requirement."
      />
    </>
  );
}
