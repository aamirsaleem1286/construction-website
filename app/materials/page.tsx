import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BrandGrid } from "@/components/sections/BrandGrid";
import { EquipmentShowcase } from "@/components/sections/EquipmentShowcase";
import { ContactCta } from "@/components/sections/ContactCta";
import { brands } from "@/lib/data/brands";

export const metadata: Metadata = {
  title: "Materials & Equipment",
  description:
    "Material systems and application equipment used by Prime Projects International: waterproofing membranes, polyurea, spray foam, protective coatings, repair mortars and resin flooring from referenced manufacturers.",
  alternates: { canonical: "/materials" },
  openGraph: {
    title: "Materials & Equipment | Prime Projects International",
    description:
      "Compatible, project-specified material systems supported by specialist application equipment.",
    url: "/materials",
  },
};

const families = [
  {
    name: "Cementitious waterproofing",
    note: "Rigid, brush-applied systems for compatible concrete substrates and detail work.",
  },
  {
    name: "Liquid-applied membranes",
    note: "Seamless elastomeric coatings for roofs, terraces, podiums and wet areas.",
  },
  {
    name: "Polyurea & spray systems",
    note: "Fast-cure, high-build protection for demanding exposures and fast programmes.",
  },
  {
    name: "Thermal insulation",
    note: "Boards and spray systems for roof, wall and specialist insulation applications.",
  },
  {
    name: "Protective coatings",
    note: "Anti-carbonation and decorative finishes that support concrete durability.",
  },
  {
    name: "Repair materials",
    note: "Structural mortars, grouts and bonding agents for concrete rehabilitation.",
  },
  {
    name: "Resin flooring",
    note: "Epoxy and polyurethane build-ups for industrial and commercial interiors.",
  },
  {
    name: "Sealants & accessories",
    note: "Joint sealants, tapes and termination details that complete the system.",
  },
];

const criteria = [
  {
    title: "Substrate compatibility",
    description:
      "The system must be suited to the actual substrate, its condition, moisture state and preparation method.",
  },
  {
    title: "Exposure",
    description:
      "UV, salt, chemical, thermal and traffic exposure determine the protective performance required.",
  },
  {
    title: "Movement",
    description:
      "Joints, cracks and differential movement require details that accommodate displacement without failure.",
  },
  {
    title: "Service life",
    description:
      "The intended life, maintenance regime and consequence of failure set the appropriate level of system.",
  },
];

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials & equipment"
        title={["QUALITY MATERIALS.", "TRUSTED PERFORMANCE."]}
        description="Material systems are selected against the asset, not chosen from a catalogue. The right product is the one that is compatible, applicable and maintainable over the required service life."
        image="/images/industrial-machinery.jpg"
        imageAlt="Industrial coating and application equipment"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Materials" }]}
        meta={[
          `${String(brands.length).padStart(2, "0")} referenced manufacturers`,
          "Specialist application equipment",
          "Project-specific specification",
        ]}
      />

      <section className="relative bg-bone py-24 text-ink md:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Selection logic"
                index="01"
                title={["THE SYSTEM", "BEFORE THE BRAND."]}
                description="Two products can carry the same description and behave very differently. Selection begins with the conditions the system must survive, then narrows to materials with a credible track record in that exposure."
                theme="light"
              />
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-concrete-dark">
                We specify compatible primers, membranes, reinforcement and finishes as a
                single system. Where a manufacturer&apos;s approved build-up applies, it is followed.
                Where site conditions differ from the design assumption, the specification is
                reviewed before application.
              </p>
            </div>

            <div className="lg:col-span-6">
              <ul className="border-t border-ink/12">
                {criteria.map((criterion, index) => (
                  <Reveal key={criterion.title} delay={index * 0.05} as="li">
                    <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-ink/10 py-5">
                      <span className="font-mono text-[9px] leading-6 tracking-[0.16em] text-accent-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight">
                          {criterion.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-concrete-dark">
                          {criterion.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-ink py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Material families"
            index="02"
            title={["THE MATERIAL", "TOOLKIT."]}
            description="Core families used across our service lines. The final build-up is confirmed against substrate tests, exposure and the approved method statement."
            className="max-w-3xl"
          />

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {families.map((family, index) => (
              <Reveal key={family.name} delay={(index % 4) * 0.04} className="h-full">
                <div className="group flex h-full min-h-[200px] flex-col justify-between bg-ink p-6 transition-colors duration-500 hover:bg-charcoal">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-white/30 transition-colors group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-10">
                    <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-white">
                      {family.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-concrete">{family.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-bone py-24 text-ink md:py-32">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              eyebrow="Referenced manufacturers"
              index="03"
              title={["SYSTEMS FROM", "ESTABLISHED SOURCES."]}
              description="We work with material manufacturers whose systems are supported by technical documentation, local availability and application guidance."
              theme="light"
              className="lg:col-span-8"
            />
            <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-accent-deep lg:col-span-4 lg:text-right">
              Approved Applicators &amp; Systems
            </p>
          </div>

          <Reveal className="mt-12">
            <BrandGrid tone="light" />
          </Reveal>

          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-concrete-dark">
            Material systems are specified according to project requirements, substrate condition,
            and exposure criteria in full coordination with manufacturer technical representatives
            and Saudi Building Code requirements.
          </p>
        </div>
      </section>

      <EquipmentShowcase index="04" />

      <ContactCta
        title={["SPECIFY WITH", <>CONFIDENCE. <span className="text-accent">TALK TO US.</span></>]}
        description="Send the asset details and exposure conditions. We will advise on suitable systems and the information needed to confirm the specification."
      />
    </>
  );
}
