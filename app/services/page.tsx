import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { AdditionalServicesShowcase } from "@/components/sections/AdditionalServicesShowcase";
import { ContactCta } from "@/components/sections/ContactCta";
import { services } from "@/lib/data/services";
import { additionalServices } from "@/lib/data/additional";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Prime Projects International's specialist services: waterproofing, spray foam insulation, polyurea coatings, concrete repair, structural strengthening, epoxy flooring, cathodic protection, GRP lining, damp proofing and asphalt paving.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Specialist Construction & Protection Services",
    description:
      "Eleven core specialist service lines delivered as coordinated systems across Saudi Arabia.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our capabilities"
        title={["SPECIALIST", "SERVICES."]}
        description="Eleven core service lines covering the protection, repair and rehabilitation of buildings, industrial assets and infrastructure."
        image="/images/construction-site.jpg"
        imageAlt="Construction site with structural works in progress"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        meta={[
          `${String(services.length).padStart(2, "0")} core services`,
          `${String(additionalServices.length).padStart(2, "0")} additional capabilities`,
          "Kingdom of Saudi Arabia",
        ]}
      />

      <section className="relative bg-bone py-20 text-ink md:py-24">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              eyebrow="Core systems"
              index="01"
              title={["THE RIGHT SYSTEM", "FOR THE ASSET."]}
              description="Each service is a system, not a product. Selection responds to substrate, exposure, movement, programme and the required service life."
              theme="light"
              className="lg:col-span-9"
            />
            <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-concrete-dark lg:col-span-3 lg:text-right">
              Specifications are confirmed per project
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink pb-24 pt-16 md:pb-32 md:pt-20">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 0.05} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/35">
            Service descriptions are representative of typical scope. Final systems, materials
            and methods are specified against the project requirements and approved
            documentation.
          </p>
        </div>
      </section>

      <ApproachSection index="02" />
      <AdditionalServicesShowcase index="03" />

      <ContactCta
        title={["NEED A SYSTEM", <>THAT <span className="text-accent">PERFORMS?</span></>]}
        description="Share the asset type, exposure and current condition. We will recommend the appropriate assessment and protection route."
      />
    </>
  );
}
