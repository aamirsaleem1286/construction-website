import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { getService, serviceSlugs, services } from "@/lib/data/services";
import { approachSteps } from "@/lib/data/company";
import { siteConfig } from "@/lib/data/site";
import { toTelHref } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.excerpt,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Prime Projects International`,
      description: service.intro,
      url: `/services/${service.slug}`,
      images: [{ url: service.image, width: 1600, height: 1067, alt: service.imageAlt }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const related = [1, 2, 3].map((offset) => services[(currentIndex + offset) % services.length]);
  const previous = services[(currentIndex - 1 + services.length) % services.length];
  const next = services[(currentIndex + 1) % services.length];

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.index} — ${service.shortTitle}`}
        title={[service.title]}
        description={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
        meta={[service.applications[0], service.applications[1], "Kingdom of Saudi Arabia"]}
      />

      <section className="relative bg-bone py-24 text-ink md:py-32">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-deep">
                  {service.index}
                </span>
                <span className="h-px w-8 bg-accent-deep/50" aria-hidden="true" />
                <span className="label-mono text-concrete-dark">Service overview</span>
              </div>

              <h2 className="display-sub mt-6 max-w-2xl">
                {service.title}
              </h2>

              {service.description.map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <p
                    className={
                      index === 0
                        ? "mt-7 text-lg leading-relaxed text-ink/80"
                        : "mt-5 text-base leading-relaxed text-concrete-dark"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}

              <div className="mt-14">
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/12 pb-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    Scope & systems
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-concrete-dark">
                    Typical
                  </span>
                </div>
                <ul className="mt-2 grid sm:grid-cols-2 sm:gap-x-10">
                  {service.highlights.map((highlight, index) => (
                    <Reveal key={highlight} delay={(index % 2) * 0.04} as="li">
                      <div className="flex items-start gap-3 border-b border-ink/10 py-4 text-sm text-ink">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-deep" aria-hidden="true" />
                        {highlight}
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  Typical applications
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.applications.map((application) => (
                    <li
                      key={application}
                      className="border border-ink/15 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-concrete-dark"
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14 border-t border-ink/12 pt-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  Delivery approach
                </h3>
                <ol className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {approachSteps.map((step) => (
                    <li key={step.number} className="border-t border-ink/10 pt-4">
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent-deep">
                        {step.number}
                      </p>
                      <p className="mt-2 font-display text-base font-semibold">{step.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-concrete-dark">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="space-y-4 lg:sticky lg:top-28">
                <div className="border border-ink/12 bg-white p-6">
                  <p className="label-mono text-concrete-dark">At a glance</p>
                  <dl className="mt-5 space-y-4">
                    <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">
                        Service
                      </dt>
                      <dd className="text-right text-sm text-ink">{service.index}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">
                        Sector
                      </dt>
                      <dd className="text-right text-sm text-ink">Multi-sector</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">
                        Service area
                      </dt>
                      <dd className="text-right text-sm text-ink">Saudi Arabia</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">
                        Basis
                      </dt>
                      <dd className="text-right text-sm text-ink">Project specification</dd>
                    </div>
                  </dl>
                  <Button href="/contact#quote" className="mt-7 w-full" size="md">
                    Request a quote
                  </Button>
                  <p className="mt-3 text-center text-[10px] leading-relaxed text-concrete-dark">
                    Contact details are placeholders pending verification.
                  </p>
                </div>

                <div className="bg-ink p-6 text-white">
                  <p className="label-mono text-accent">Talk to a specialist</p>
                  <p className="mt-3 text-sm leading-relaxed text-concrete">
                    Discuss the asset, exposure and programme before the specification is
                    fixed.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm">
                    <li>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-3 text-white transition-colors hover:text-accent"
                      >
                        <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden="true" />
                        <span className="break-all">{siteConfig.contact.email}</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={toTelHref(siteConfig.contact.phone)}
                        className="flex items-center gap-3 text-white transition-colors hover:text-accent"
                      >
                        <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden="true" />
                        {siteConfig.contact.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-28">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Related capabilities"
              title={["CONNECTED", "SYSTEMS."]}
              description="Protection works best when adjacent systems are compatible and the details are coordinated."
              className="max-w-2xl"
            />
            <ArrowLink href="/services" className="shrink-0 md:mb-2">
              All services
            </ArrowLink>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05} className="h-full">
                <ServiceCard service={item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row">
            <ArrowLink href={`/services/${previous.slug}`}>
              Previous: {previous.shortTitle}
            </ArrowLink>
            <ArrowLink href={`/services/${next.slug}`}>
              Next: {next.shortTitle}
            </ArrowLink>
          </div>
        </div>
      </section>

      <ContactCta
        title={["DISCUSS THIS", <>SERVICE <span className="text-accent">SCOPE.</span></>]}
        description="Send the project details and current conditions. We will confirm what information is needed and how the scope should be assessed."
      />
    </>
  );
}
