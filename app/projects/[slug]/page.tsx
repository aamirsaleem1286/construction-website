import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Note } from "@/components/ui/Note";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Button } from "@/components/ui/Button";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ContactCta } from "@/components/sections/ContactCta";
import { getProject, projects, projectSlugs } from "@/lib/data/projects";
import { siteConfig } from "@/lib/data/site";
import { toTelHref } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${siteConfig.shortName}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image, width: 1600, height: 1200, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <PageHero
        eyebrow={`Project Study — ${project.category}`}
        title={[project.title]}
        description={project.summary}
        image={project.image}
        imageAlt={project.imageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        meta={[
          project.category,
          "Kingdom of Saudi Arabia",
          `Project ${String(currentIndex + 1).padStart(2, "0")} of ${String(projects.length).padStart(2, "0")}`,
        ]}
      />

      <section className="border-b border-ink/10 bg-white py-4 text-ink shadow-sm">
        <div className="shell flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-concrete-dark">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent-deep">
              Status: Verified Delivery
            </span>
            <span>•</span>
            <span>Standards: SBC &amp; ASTM Compliant</span>
            <span>•</span>
            <span>Region: Kingdom of Saudi Arabia</span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
            Inspection Dossier &amp; Warranty Handover
          </span>
        </div>
      </section>

      <section className="relative bg-bone py-20 text-ink md:py-28">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-deep">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-accent-deep/50" aria-hidden="true" />
                <span className="label-mono text-concrete-dark">Project brief</span>
              </div>

              <h2 className="display-sub mt-6 max-w-2xl">{project.subtitle}</h2>

              {project.description.map((paragraph, index) => (
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
                    Representative scope
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-concrete-dark">
                    Sample
                  </span>
                </div>
                <ol className="mt-2">
                  {project.scope.map((item, index) => (
                    <Reveal key={item} delay={(index % 3) * 0.04} as="li">
                      <div className="grid grid-cols-[auto_1fr] items-start gap-4 border-b border-ink/10 py-4">
                        <span className="font-mono text-[9px] leading-6 tracking-[0.16em] text-accent-deep">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-6 text-ink">{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>

              <div className="mt-14">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  Illustrative imagery
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete-dark">
                  Representative images showing the type of work described. Not photographs of
                  a completed PPI project.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <Reveal
                      key={image.src}
                      delay={index * 0.05}
                      className={index === 0 ? "sm:col-span-2" : undefined}
                    >
                      <ParallaxImage
                        src={image.src}
                        alt={image.alt}
                        parallax={false}
                        className={
                          index === 0 ? "aspect-[16/9] w-full" : "aspect-[4/3] w-full"
                        }
                        sizes={index === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="space-y-4 lg:sticky lg:top-28">
                <div className="border border-ink/12 bg-white p-6">
                  <p className="label-mono text-concrete-dark">Project at a glance</p>
                  <dl className="mt-5 space-y-4">
                    <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">
                        Category
                      </dt>
                      <dd className="text-right text-sm text-ink">{project.category}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">
                        Content
                      </dt>
                      <dd className="text-right text-sm text-ink">Sample brief</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">
                        Location
                      </dt>
                      <dd className="text-right text-sm text-ink">Not published</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-concrete-dark">
                        Status
                      </dt>
                      <dd className="text-right text-sm text-ink">Placeholder</dd>
                    </div>
                  </dl>
                  <Button href="/contact#quote" className="mt-7 w-full" size="md">
                    Discuss a similar scope
                  </Button>
                </div>

                <div className="bg-ink p-6 text-white">
                  <p className="label-mono text-accent">Project enquiries</p>
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
                  <p className="mt-4 text-[10px] leading-relaxed text-white/40">
                    Contact details are placeholders pending verification.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end">
            <div>
              <p className="label-mono text-accent">Next sample brief</p>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {nextProject.title}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-concrete">
                {nextProject.category}
              </p>
            </div>
            <ArrowLink href={`/projects/${nextProject.slug}`}>Open project</ArrowLink>
          </div>
        </div>
      </section>

      <ContactCta
        title={["PLANNING", <>SOMETHING <span className="text-accent">SIMILAR?</span></>]}
        description="Share the asset type and the challenge. We will help define the assessment and the most appropriate protection or repair system."
      />
    </>
  );
}
