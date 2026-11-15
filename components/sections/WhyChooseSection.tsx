import { Icon } from "@/components/ui/Icon";
import { Reveal3D } from "@/components/ui/Reveal3D";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChoose } from "@/lib/data/company";

export function WhyChooseSection() {
  return (
    <section className="relative bg-bone py-24 text-ink md:py-32">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow="Why Prime Projects"
            index="09"
            title={["THE DIFFERENCE", "IS DISCIPLINE."]}
            description="A specialist contractor is only as good as the preparation behind the work. These are the standards we hold ourselves to."
            theme="light"
            className="lg:col-span-8"
          />
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-concrete-dark lg:col-span-4 lg:text-right">
            Six commitments
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, index) => (
            <Reveal3D key={item.title} delay={(index % 3) * 0.05} rotate={8} y={30}>
              <div className="group border-t border-ink/12 py-7 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-ink/12 text-accent-deep transition-colors group-hover:border-accent-deep/50">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.18em] text-ink/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-concrete-dark">
                  {item.description}
                </p>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
