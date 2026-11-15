import type { Metadata } from "next";
import { Clock, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Note } from "@/components/ui/Note";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig, contactNote } from "@/lib/data/site";
import { toTelHref, toWhatsAppHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Prime Projects International to discuss waterproofing, insulation, protective coatings, concrete repair, flooring or infrastructure works in Saudi Arabia.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Prime Projects International",
    description:
      "Start a conversation about your asset, the requirement and the programme.",
    url: "/contact",
  },
};

const faqs = [
  {
    question: "What information should I include with an enquiry?",
    answer:
      "Asset type and location, the current condition or failure, approximate area, required programme and any available drawings or photographs. If you are unsure, describe the problem in plain terms and we will advise what further information is needed.",
  },
  {
    question: "Can you assess an existing waterproofing or repair failure?",
    answer:
      "Yes. Assessment starts with understanding the substrate, the water path or the deterioration mechanism. Depending on the issue, this may involve a site inspection, moisture testing or a review of previous works before a repair strategy is proposed.",
  },
  {
    question: "Do you work outside Riyadh?",
    answer:
      "We are based in Riyadh and serve projects across the Kingdom of Saudi Arabia. Location, access and logistics are reviewed as part of the initial enquiry so that the proposed approach is practical.",
  },
  {
    question: "How are materials and systems selected?",
    answer:
      "Selection considers the substrate, exposure, movement, required service life and maintenance regime. Systems are specified as compatible build-ups, and the final materials are confirmed in the project specification and method statement.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const include = [
  "Asset type and location",
  "Current condition or failure",
  "Approximate area or scale",
  "Required programme",
  "Drawings or photographs, if available",
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Contact"
        title={["LET'S BUILD", "SOMETHING", <>THAT <span className="text-accent">LASTS.</span></>]}
        description="Tell us about the asset, the requirement and the programme. A clear technical conversation is the first step to a system that performs."
        image="/images/construction-site.jpg"
        imageAlt="Construction site prepared for specialist works"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        meta={["Project enquiries", "Tender & prequalification", "Technical discussion"]}
      />

      <section id="quote" className="relative scroll-mt-24 bg-bone py-24 text-ink md:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Start here"
                index="01"
                title={["PROJECT", "ENQUIRY."]}
                description="Use the form to outline the scope. If you prefer, contact the team directly using the details alongside."
                theme="light"
              />
              <Reveal className="mt-9">
                <ContactForm />
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <div className="space-y-4">
                <div className="bg-ink p-6 text-white md:p-7">
                  <p className="label-mono text-accent">Direct contact</p>
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
                </div>

                <div className="border border-ink/12 bg-white p-6 md:p-7">
                  <p className="label-mono text-concrete-dark">Company details</p>
                  <ul className="mt-5 space-y-4 text-sm text-ink">
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={1.5} aria-hidden="true" />
                      <span className="leading-relaxed">{siteConfig.contact.address}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={1.5} aria-hidden="true" />
                      <span className="leading-relaxed">{siteConfig.contact.hours}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={1.5} aria-hidden="true" />
                      <span className="leading-relaxed">{siteConfig.contact.serviceArea}</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-ink/12 bg-white p-6 md:p-7">
                  <p className="label-mono text-concrete-dark">Helpful to include</p>
                  <ul className="mt-4 space-y-2.5">
                    {include.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-concrete-dark">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-deep"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-emerald-500/20 bg-emerald-50/60 p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-800">
                    Official Licensing &amp; Compliance
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-emerald-950">
                    {contactNote}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative bg-charcoal py-24 md:py-32">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Before you ask"
                index="02"
                title={["COMMON", "QUESTIONS."]}
                description="Straight answers to the questions that usually come first."
              />
              <p className="mt-7 max-w-sm text-sm leading-relaxed text-concrete">
                If your question is not covered here, include it in the enquiry form or contact
                the team directly.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/10">
                {faqs.map((faq, index) => (
                  <details key={faq.question} className="group border-b border-white/10">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-6 [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start gap-5">
                        <span className="mt-0.5 font-mono text-[9px] tracking-[0.18em] text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg font-semibold leading-snug tracking-tight text-white">
                          {faq.question}
                        </span>
                      </span>
                      <span
                        className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-white/15 text-accent transition-transform duration-300 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <div className="pb-6 pl-10 pr-10">
                      <p className="text-sm leading-relaxed text-concrete">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
