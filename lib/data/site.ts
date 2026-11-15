/**
 * Company + contact configuration.
 *
 * IMPORTANT: Phone, WhatsApp, email, office address and social profile URLs are
 * placeholders by default. Supply real values through the environment variables
 * documented in `.env.example` before launch. Nothing here should be treated as
 * a verified company credential, certification or client reference.
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ppi.example.com";

export const siteConfig = {
  name: "Prime Projects International",
  shortName: "PPI",
  legalName: "Prime Projects International Contracting Co.",
  tagline: "Engineering Protection. Building the Future.",
  description:
    "Prime Projects International (PPI) delivers advanced waterproofing, thermal insulation, concrete protection, structural rehabilitation and infrastructure solutions across the Kingdom of Saudi Arabia.",
  url: rawUrl.replace(/\/$/, ""),
  locale: "en_SA",
  region: "Kingdom of Saudi Arabia",
  city: "Riyadh",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@primeprojects-sa.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+966 11 465 8920",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "966554658920",
    address:
      process.env.NEXT_PUBLIC_OFFICE_ADDRESS ??
      "King Fahd Road, Al Olaya District, P.O. Box 7824, Riyadh 12214, Kingdom of Saudi Arabia",
    hours: "Sunday – Thursday · 08:00 – 18:00 AST",
    serviceArea: "Kingdom-Wide Operations · Riyadh, Jeddah, Eastern Province & Giga-Projects",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com",
    x: process.env.NEXT_PUBLIC_X_URL ?? "",
  },
  keywords: [
    "waterproofing Saudi Arabia",
    "polyurea coating KSA",
    "spray foam insulation Riyadh",
    "concrete repair Saudi Arabia",
    "structural strengthening",
    "epoxy flooring",
    "cathodic protection",
    "asphalt paving",
    "construction company Saudi Arabia",
    "Prime Projects International",
  ],
} as const;

export const contactNote =
  "Prime Projects International is a licensed specialized contractor operating in full alignment with the Saudi Building Code (SBC) and ASTM international engineering standards across the Kingdom.";

export const capabilityWords = [
  "Waterproofing",
  "Thermal Insulation",
  "Polyurea Coatings",
  "Concrete Repair",
  "Structural Strengthening",
  "Epoxy Flooring",
  "Cathodic Protection",
  "GRP Lining",
  "Asphalt Paving",
];
