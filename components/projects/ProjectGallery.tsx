"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projectCategories, projects, type ProjectCategory } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...projectCategories];

export function ProjectGallery() {
  const [active, setActive] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();

  const counts = useMemo(() => {
    const map = new Map<Filter, number>();
    map.set("All", projects.length);
    for (const category of projectCategories) {
      map.set(category, projects.filter((project) => project.category === category).length);
    }
    return map;
  }, []);

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter sample projects by category"
          className="flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={cn(
                  "group inline-flex items-center gap-2 border px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors duration-300",
                  isActive
                    ? "border-accent bg-accent text-ink"
                    : "border-white/15 text-concrete hover:border-white/35 hover:text-white"
                )}
              >
                {filter}
                <span
                  className={cn(
                    "text-[8px]",
                    isActive ? "text-ink/60" : "text-white/35 group-hover:text-white/60"
                  )}
                >
                  {String(counts.get(filter) ?? 0).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
          Showing {String(visible.length).padStart(2, "0")} of{" "}
          {String(projects.length).padStart(2, "0")} sample briefs
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard
                project={project}
                className="h-full"
                aspectClassName="aspect-[4/3]"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
