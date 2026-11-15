import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandGrid } from "@/components/sections/BrandGrid";

export function BrandsSection() {
  return (
    <section className="relative bg-bone py-24 text-ink md:py-32">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow="Materials & supply"
            index="05"
            title={["QUALITY MATERIALS.", "TRUSTED PERFORMANCE."]}
            description="Systems are selected for compatibility, exposure and service life — sourced from established manufacturers and specified per project."
            theme="light"
            className="lg:col-span-8"
          />
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <ArrowLink href="/materials" tone="dark">
              Materials & equipment
            </ArrowLink>
          </div>
        </div>

        <BrandGrid tone="light" className="mt-14" />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
          <p className="max-w-2xl text-xs leading-relaxed text-concrete-dark">
            Approved applicator and technical specification partner for leading global construction
            chemical systems across commercial, infrastructure, and industrial developments in Saudi Arabia.
          </p>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent-deep">
            Manufacturer-Certified Warranties Available
          </span>
        </div>
      </div>
    </section>
  );
}
