import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getBlurDataURL } from "@/lib/image-blur";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

type ProjectCardProps = {
  project: Project;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
  sizes?: string;
  showCategory?: boolean;
};

export function ProjectCard({
  project,
  className,
  aspectClassName = "aspect-[4/3]",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  showCategory = true,
}: ProjectCardProps) {
  const blur = getBlurDataURL(project.image);

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="View project"
      className={cn(
        "group relative block overflow-hidden bg-charcoal outline outline-1 -outline-offset-1 outline-white/10 transition-[outline-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:outline-accent/40 hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,1)]",
        aspectClassName,
        className
      )}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={sizes}
        priority={priority}
        quality={80}
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur}
        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/30 via-transparent to-transparent" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 md:p-6">
        {showCategory ? (
          <span className="border border-white/20 bg-ink/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
            {project.category}
          </span>
        ) : (
          <span />
        )}
        <span className="border border-emerald-400/40 bg-emerald-950/40 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-md">
          Delivered · KSA
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
            {project.subtitle}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
            {project.title}
          </h3>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
