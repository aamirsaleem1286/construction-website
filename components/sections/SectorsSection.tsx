import { Reveal3D } from "@/components/ui/Reveal3D";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectors } from "@/lib/data/company";

export function SectorsSection() {
  return (
    <section className="relative bg-bone py-24 text-ink md:py-32">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow="Where we work"
            index="05"
            title={["BUILT FOR", "DEMANDING ASSETS."]}
            description="The same protection principles apply across sectors, but the exposure, access and operational constraints are never the same."
            theme="light"
            className="lg:col-span-8"
          />
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-concrete-dark lg:col-span-4 lg:text-right">
            Six sector environments
          </p>
        </div>

        <div className="mt-14 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, index) => (
            <Reveal3D key={sector.title} delay={(index % 3) * 0.05} rotate={9} className="h-full">
              <div className="group flex h-full min-h-[210px] flex-col justify-between bg-bone p-7 transition-colors duration-500 hover:bg-white">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-accent-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="mt-1 h-1.5 w-1.5 rounded-full bg-ink/15 transition-colors group-hover:bg-accent-deep"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-concrete-dark">
                    {sector.description}
                  </p>
                </div>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
