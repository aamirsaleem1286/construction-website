import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerCompanyLinks, footerServiceLinks } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/data/site";
import { toTelHref, toWhatsAppHref } from "@/lib/utils";

const socialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.45-2.2 2.97V21h-4V9Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M17.68 3h3.24l-7.08 8.09L22.2 21h-6.52l-5.1-6.67L4.74 21H1.5l7.57-8.65L1.5 3h6.68l4.61 6.09L17.68 3Zm-1.14 16.09h1.8L7.25 4.8H5.32l11.22 14.29Z" />
    </svg>
  ),
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { key: "linkedin" as const, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { key: "instagram" as const, href: siteConfig.social.instagram, label: "Instagram" },
    { key: "x" as const, href: siteConfig.social.x, label: "X" },
  ].filter((item) => item.href);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-deep">
      <div className="shell relative pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="onDark" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-concrete">
              Advanced waterproofing, insulation, concrete protection, structural
              rehabilitation and infrastructure solutions across the Kingdom of Saudi Arabia.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">
              <MapPin className="h-3 w-3 text-accent" strokeWidth={1.5} aria-hidden="true" />
              {siteConfig.region}
            </p>
            {socials.length ? (
              <div className="mt-6 flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center border border-white/15 text-concrete transition-colors hover:border-accent hover:text-accent"
                  >
                    {socialIcons[social.key]}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-2">
            <h2 className="label-mono text-white/45">Company</h2>
            <ul className="mt-5 space-y-3">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-concrete transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="label-mono text-white/45">Services</h2>
            <ul className="mt-5 space-y-3">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-concrete transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent transition-colors hover:text-white"
                >
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="label-mono text-white/45">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-concrete">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={toTelHref(siteConfig.contact.phone)}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={toWhatsAppHref(siteConfig.contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-accent">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3 0-.5l-.8-1.8c-.2-.5-.5-.4-.7-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.8 2.2.8 2.6.7 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3Z" />
                    </svg>
                  </span>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-white/35">
              Contact details are placeholders pending verification.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>Kingdom of Saudi Arabia</span>
            <Link href="/contact" className="transition-colors hover:text-accent">
              Request a consultation
            </Link>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-accent"
            >
              Back to top
              <ArrowUp
                className="h-3 w-3 transition-transform group-hover:-translate-y-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <div className="shell">
          <p className="text-outline -mb-[0.18em] whitespace-nowrap font-display text-[12.5vw] font-extrabold uppercase leading-none tracking-[-0.03em] opacity-[0.12]">
            Prime Projects
          </p>
        </div>
      </div>
    </footer>
  );
}
