import { Reveal } from "@/components/ui/Reveal";
import { LineReveal } from "@/components/ui/LineReveal";
import { values } from "@/lib/data/company";

export function ValuesSection() {
  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                04
              </span>
              <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
              <span className="label-mono text-concrete">Our values</span>
            </div>
            <LineReveal
              as="h2"
              lines={["STRAIGHT ANSWERS.", "SOLID WORK."]}
              className="display-section mt-7 text-white"
            />
            <p className="mt-7 max-w-md text-sm leading-relaxed text-concrete md:text-base">
              Specialised construction depends on judgement. These are the principles we use
              when the specification is incomplete, the programme is tight or the right answer
              is not the easiest one.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-white/10">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.05} as="li">
                  <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-white/10 py-6 md:gap-8 md:py-7">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                        {value.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-concrete">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
