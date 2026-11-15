import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Reveal3D } from "@/components/ui/Reveal3D";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/lib/data/services";

export function ServicesPreview() {
  const preview = services.slice(0, 6);

  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Core capabilities"
            index="02"
            title={["SPECIALIST SYSTEMS.", "INTEGRATED DELIVERY."]}
            description="Eleven specialist service lines, delivered as coordinated systems rather than isolated trades — each selected for the asset, the exposure and the required service life."
            className="max-w-3xl"
          />
          <ArrowLink href="/services" className="shrink-0 md:mb-2">
            All services
          </ArrowLink>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service, index) => (
            <Reveal3D key={service.slug} delay={(index % 3) * 0.06} className="h-full">
              <ServiceCard service={service} />
            </Reveal3D>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-relaxed text-concrete">
            Five further capabilities cover cathodic protection, GRP lining, damp proofing,
            industrial painting and asphalt paving.
          </p>
          <Button href="/services" variant="outline">
            View all 11 services
          </Button>
        </div>
      </div>
    </section>
  );
}
