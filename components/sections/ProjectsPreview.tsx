import { ShieldCheck } from "lucide-react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal3D } from "@/components/ui/Reveal3D";
import { projects } from "@/lib/data/projects";

export function ProjectsPreview() {
  const [featured, second, third] = projects;

  return (
    <section className="relative bg-ink-deep py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            index="04"
            title={["OUR PROJECTS.", "OUR COMMITMENT."]}
            description="A structured approach to every scope: assess the asset, define the system, control the execution and verify the result across Saudi Arabia's major infrastructure."
            className="max-w-3xl"
          />
          <ArrowLink href="/projects" className="shrink-0 md:mb-2">
            Project portfolio
          </ArrowLink>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-white/[0.02] p-4 text-xs text-concrete backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
            <span>
              All scopes engineered to <strong className="text-white">Saudi Building Code (SBC)</strong> and ASTM international testing standards.
            </span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
            ISO 9001 · 14001 · 45001 Standards
          </span>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <Reveal3D rotate={10} className="lg:col-span-7">
            <ProjectCard
              project={featured}
              aspectClassName="aspect-[4/3] lg:aspect-[16/12]"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-full"
            />
          </Reveal3D>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Reveal3D rotate={10} delay={0.08}>
              <ProjectCard
                project={second}
                aspectClassName="aspect-[4/3] lg:aspect-[16/9]"
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
              />
            </Reveal3D>
            <Reveal3D rotate={10} delay={0.16}>
              <ProjectCard
                project={third}
                aspectClassName="aspect-[4/3] lg:aspect-[16/9]"
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
              />
            </Reveal3D>
          </div>
        </div>
      </div>
    </section>
  );
}
