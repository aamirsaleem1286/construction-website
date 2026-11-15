import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LineReveal } from "@/components/ui/LineReveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Note } from "@/components/ui/Note";
import { siteConfig, contactNote } from "@/lib/data/site";
import { toTelHref, toWhatsAppHref } from "@/lib/utils";

type ContactCtaProps = {
  title?: React.ReactNode[];
  description?: string;
  showNote?: boolean;
};

export function ContactCta({
  title = ["LET'S BUILD SOMETHING", <>THAT <span className="text-accent">LASTS.</span></>],
  description = "Tell us about the asset, the requirement and the programme. We will respond with a considered technical approach and a clear next step.",
  showNote = true,
}: ContactCtaProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <ParallaxImage
        src="/images/construction-site.jpg"
        alt="Construction site at dusk"
        className="absolute inset-0 h-full w-full opacity-25"
        sizes="100vw"
        intensity={5}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/70"
        aria-hidden="true"
      />
      <div className="bg-grid absolute inset-0 opacity-25" aria-hidden="true" />

      <div className="shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="label-mono text-accent">Start a conversation</span>
            </div>
            <LineReveal
              as="h2"
              lines={title}
              className="display-section mt-6 text-white"
            />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-concrete">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact#quote" size="lg" variant="primary">
                Request a Quote
              </Button>
              <Button
                href={toWhatsAppHref(siteConfig.contact.whatsapp)}
                variant="outline"
                size="lg"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <div className="border border-white/12 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8">
              <p className="label-mono text-white/40">Direct contact</p>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-accent transition-colors group-hover:border-accent/50">
                      <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                        Email
                      </span>
                      <span className="mt-1 block break-all text-sm text-white transition-colors group-hover:text-accent">
                        {siteConfig.contact.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={toTelHref(siteConfig.contact.phone)}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-accent transition-colors group-hover:border-accent/50">
                      <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                        Telephone
                      </span>
                      <span className="mt-1 block text-sm text-white transition-colors group-hover:text-accent">
                        {siteConfig.contact.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={toWhatsAppHref(siteConfig.contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-accent transition-colors group-hover:border-accent/50">
                      <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                        WhatsApp
                      </span>
                      <span className="mt-1 block text-sm text-white transition-colors group-hover:text-accent">
                        Message the team
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="mt-7 border-t border-white/10 pt-5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white/30">
                {siteConfig.contact.hours}
                <br />
                {siteConfig.contact.serviceArea}
              </p>
            </div>
          </div>
        </div>

        {showNote ? (
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border border-white/15 bg-white/[0.02] p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-accent/50 text-accent font-mono text-xs">
                ✓
              </span>
              <p className="text-xs leading-relaxed text-concrete">
                {contactNote}
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
              Authorized Contractor · Kingdom-Wide Deployment
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
