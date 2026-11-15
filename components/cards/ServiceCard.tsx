"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { Icon } from "@/components/ui/Icon";
import { getBlurDataURL } from "@/lib/image-blur";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const blur = getBlurDataURL(service.image);

  return (
    <TiltCard className={cn("h-full", className)} maxTilt={3}>
      <Link
        href={`/services/${service.slug}`}
        data-cursor="View service"
        className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.015] transition-[color,border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_36px_70px_-38px_rgba(0,0,0,0.95)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            quality={78}
            placeholder={blur ? "blur" : "empty"}
            blurDataURL={blur}
            className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
          <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.2em] text-white/70">
            {service.index}
          </span>
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/20 bg-ink/40 text-accent backdrop-blur-sm transition-colors duration-500 group-hover:border-accent/60">
            <Icon name={service.icon} className="h-4 w-4" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-white md:text-[1.35rem]">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-concrete">{service.excerpt}</p>
          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 [margin-top:1.5rem]">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 transition-colors group-hover:text-accent">
              Explore service
            </span>
            <ArrowUpRight
              className="h-4 w-4 text-white/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
