import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ContactCta } from "@/components/sections/ContactCta";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of specialized works delivering durable engineering protection across commercial towers, industrial hubs, transport infrastructure, and giga-project developments in Saudi Arabia.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Prime Projects International",
    description:
      "Engineered systems and verified execution across Saudi Arabia's major infrastructure.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project portfolio"
        title={["OUR PROJECTS.", "OUR COMMITMENT."]}
        description="A structured overview of specialist engineering works delivered across commercial, industrial, and infrastructure sectors throughout the Kingdom of Saudi Arabia."
        image="/images/city-skyline.jpg"
        imageAlt="City skyline with contemporary towers"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        meta={[
          `${String(projects.length).padStart(2, "0")} Selected Works`,
          "Kingdom of Saudi Arabia",
          "Tier-1 Standards",
        ]}
      />

      <section className="relative bg-bone py-20 text-ink md:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <SectionHeading
              eyebrow="Portfolio & Delivery"
              index="01"
              title={["ENGINEERED SYSTEMS.", "VERIFIED EXECUTION."]}
              description="From deep sub-structure waterproofing in Riyadh to marine cathodic protection along the Red Sea coast, our projects reflect technical discipline, manufacturer-certified systems, and strict Saudi Building Code compliance."
              theme="light"
              className="lg:col-span-7"
            />

            <div className="border-l-2 border-accent-deep bg-white p-6 lg:col-span-5 shadow-sm">
              <p className="label-mono text-accent-deep">QA/QC &amp; Standards Compliance</p>
              <p className="mt-3 text-sm leading-relaxed text-concrete-dark">
                Every project scope is executed following approved Method Statements, Inspection &amp;
                Test Plans (ITPs), and manufacturer-certified hold points. Full inspection dossiers,
                electronic leak detection reports, and warranty certificates are issued at handover.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-accent-deep">
                <span>ASTM Certified</span>
                <span>•</span>
                <span>SBC Compliant</span>
                <span>•</span>
                <span>ISO 9001 Audited</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 md:py-24">
        <div className="shell">
          <ProjectGallery />
        </div>
      </section>

      <ContactCta
        title={["YOUR PROJECT", <>COULD BE <span className="text-accent">NEXT.</span></>]}
        description="Tell us about the asset and the protection or repair challenge. We will advise on assessment, scope and the appropriate system."
      />
    </>
  );
}
