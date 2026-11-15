import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LineReveal } from "@/components/ui/LineReveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { ContactCta } from "@/components/sections/ContactCta";
import { siteConfig } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { additionalServices } from "@/lib/data/additional";
import { brands } from "@/lib/data/brands";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Prime Projects International is a Saudi-based specialist contractor delivering waterproofing, insulation, protective coatings, concrete repair, structural rehabilitation and infrastructure works.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Prime Projects International",
    description:
      "A specialist contractor focused on the systems that protect, repair and extend the life of built assets.",
    url: "/about",
  },
};

const facts = [
  { value: String(services.length).padStart(2, "0"), label: "Core specialist services" },
  { value: String(additionalServices.length).padStart(2, "0"), label: "Additional capabilities" },
  { value: String(brands.length).padStart(2, "0"), label: "Referenced manufacturers" },
  { value: "KSA", label: "Service area" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PPI"
        title={["A SPECIALIST", "CONTRACTOR."]}
        description="Prime Projects International delivers advanced protection and rehabilitation systems for buildings, industry and infrastructure across the Kingdom of Saudi Arabia."
        image="/images/architecture-tower.jpg"
        imageAlt="Contemporary tower architecture against the sky"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        meta={["Specialist delivery", "Technical assessment", "Documented quality"]}
      />

      <section className="relative bg-bone py-24 text-ink md:py-32">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
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
                lines={["WE PROTECT WHAT", "HAS ALREADY BEEN", "BUILT."]}
                className="display-section mt-7"
              />

              <div className="mt-9 grid gap-7 sm:grid-cols-2">
                <Reveal>
                  <p className="text-sm leading-relaxed text-concrete-dark">
                    Prime Projects International is a specialist contractor working across
                    waterproofing, thermal insulation, protective coatings, concrete repair,
                    structural rehabilitation and infrastructure.
                  </p>
                </Reveal>
                <Reveal delay={0.06}>
                  <p className="text-sm leading-relaxed text-concrete-dark">
                    Our focus is the layer between a structure and its environment — the
                    systems that determine how long an asset performs and how predictably it
                    can be maintained.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-sm leading-relaxed text-concrete-dark">
                    Projects are approached as engineering problems. We review the asset and
                    its exposure, select compatible materials, plan access and preparation, and
                    agree inspection points before work begins.
                  </p>
                </Reveal>
                <Reveal delay={0.14}>
                  <p className="text-sm leading-relaxed text-concrete-dark">
                    On site, trained applicators work under supervision to the agreed method.
                    Where information is incomplete, we say so. Where a simpler solution is
                    appropriate, we recommend it.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.18} className="mt-9">
                <ArrowLink href="/services" tone="dark">
                  Explore our capabilities
                </ArrowLink>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <ParallaxImage
                  src="/images/construction-crew.jpg"
                  alt="Construction team reviewing works on site"
                  className="aspect-[4/5] w-full"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  intensity={6}
                />
              </Reveal>

              <div className="mt-8 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-bone p-5">
                    <p className="font-display text-3xl font-semibold tracking-tight text-ink">
                      {fact.value}
                    </p>
                    <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-concrete-dark">
                      {fact.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-concrete-dark">
                Service area reflects {siteConfig.region}. Manufacturer references are subject
                to project specification and supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ApproachSection />
      <ValuesSection />
      <SectorsSection />
      <ContactCta
        title={["LET'S DISCUSS", <>THE <span className="text-accent">ASSET.</span></>]}
        description="Share the project type, location and current condition. We will advise on the appropriate assessment and protection strategy."
      />
    </>
  );
}
