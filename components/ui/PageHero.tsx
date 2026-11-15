import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { LineReveal } from "@/components/ui/LineReveal";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode[];
  description?: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: Crumb[];
  meta?: string[];
  children?: React.ReactNode;
  className?: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
  meta,
  children,
  className,
  priority = true,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[70svh] items-end overflow-hidden bg-ink pb-14 pt-36 md:min-h-[74svh] md:pb-20 md:pt-44",
        className
      )}
    >
      <ParallaxImage
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full"
        sizes="100vw"
        priority={priority}
        quality={84}
        intensity={5}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/50" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_30%,rgba(10,18,29,0.55)_100%)]" aria-hidden="true" />
      <div className="floor-grid absolute inset-x-0 bottom-0 h-[38%] opacity-40" aria-hidden="true" />
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="noise absolute inset-0" aria-hidden="true" />

      <div className="shell relative z-10 w-full">
        {breadcrumbs ? (
          <Breadcrumbs items={breadcrumbs} className="mb-10" />
        ) : null}

        <div className="flex items-center gap-4">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span className="label-mono text-accent">{eyebrow}</span>
        </div>

        <LineReveal
          as="h1"
          lines={title}
          triggerOnMount
          delay={0.1}
          className="display-section mt-6 max-w-5xl text-white"
        />

        {description ? (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-concrete md:text-lg">
            {description}
          </p>
        ) : null}

        {meta?.length ? (
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {meta.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 border-l border-accent/40 pl-3 font-mono text-[10px] uppercase tracking-[0.18em] text-concrete"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {children ? <div className="mt-10">{children}</div> : null}
      </div>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/30">
          Prime Projects International
        </span>
      </div>
    </section>
  );
}
