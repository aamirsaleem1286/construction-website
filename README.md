# Prime Projects International (PPI)

Corporate website for Prime Projects International — waterproofing, thermal
insulation, concrete protection, structural rehabilitation and infrastructure
solutions in the Kingdom of Saudi Arabia.

Built with Next.js App Router, React, TypeScript, Tailwind CSS v4, Three.js and
GSAP. The site is fully static except for the contact form API route.

## Requirements

- Node.js 20.9 or later
- npm

## Getting started

```bash
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command             | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Development server with Turbopack            |
| `npm run build`     | Production build and static generation       |
| `npm run start`     | Serve the production build                   |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript) |
| `npm run typecheck` | TypeScript without emitting files            |

## Environment variables

All variables are optional at build time; defaults keep the site functional but
use placeholder contact details. See `.env.example` for the full list.

| Variable                      | Purpose                                                        |
| ----------------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Canonical URL for metadata, sitemap and JSON-LD                |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | Public email address                                           |
| `NEXT_PUBLIC_CONTACT_PHONE`   | Public phone number                                            |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number, digits only with country code                 |
| `NEXT_PUBLIC_OFFICE_ADDRESS`  | Office address shown on the contact page                       |
| `NEXT_PUBLIC_LINKEDIN_URL`    | LinkedIn profile; blank hides the link                         |
| `NEXT_PUBLIC_INSTAGRAM_URL`   | Instagram profile; blank hides the link                        |
| `NEXT_PUBLIC_X_URL`           | X profile; blank hides the link                                |
| `RESEND_API_KEY`              | Resend API key for contact form email delivery                 |
| `CONTACT_TO_EMAIL`            | Enquiry recipient(s), comma separated                          |
| `CONTACT_FROM_EMAIL`          | Verified Resend sender, e.g. `PPI <enquiries@domain.com>`      |

`NEXT_PUBLIC_*` values are inlined at build time. Rebuild after changing them.

## Contact form

`POST /api/contact` accepts JSON and validates with Zod:

- `415` for non-JSON requests
- `400` for invalid payloads
- `429` after 5 submissions per IP in 10 minutes
- Honeypot submissions receive a silent `200`
- `200` when validation passes, whether or not email delivery is configured
- `502` if Resend rejects the message, `500` on unexpected errors

Without `RESEND_API_KEY` and `CONTACT_TO_EMAIL`, enquiries are validated and
logged to the server console only. Configure both to deliver email through
[Resend](https://resend.com). The rate limiter is in-memory and per server
instance; use a shared store (Redis, Upstash, etc.) for multi-instance
deployments.

## Routes

- `/` — home
- `/about`
- `/services` and `/services/[slug]` (11 services, statically generated)
- `/projects` and `/projects/[slug]` (9 sample projects, statically generated)
- `/materials`
- `/hse-quality`
- `/contact`
- `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/manifest.webmanifest`

## Project structure

```
app/                 Routes, metadata, API, SEO files
components/
  layout/            Header, Footer
  sections/          Page sections and home assembly
  ui/                Buttons, reveals, marquee, cursor, headings
  three/             Hero scene and canvas wrapper
  projects/          Filterable project gallery
  contact/           Enquiry form
lib/
  data/              Site, services, projects, company, brands, equipment
  contact-schema.ts  Shared Zod schema and service options
  image-blur.ts      Blur placeholders for local images
  gsap.ts            GSAP registration and helpers
public/images/       Optimised local imagery
scripts/             Image optimisation and placeholder generation
```

Content is centralised in `lib/data/`. Service and project detail routes are
generated from those files via `generateStaticParams`.

## Content and media notes

- **Contact details are placeholders.** Every phone, email, address and social
  URL must be replaced with verified company information before launch. The
  site displays placeholder notes where appropriate.
- **Projects are samples.** All project entries are marked `sample: true` and
  labelled "Sample" in the UI. Replace them with real, approved references.
- **Certifications and policies are unpublished.** The HSE page states that
  certificates and policy documents will be published once verified; do not
  add certification claims without evidence.
- **Brand names are informational.** Brands are shown as text only, with no
  third-party logos, and no partnership or accreditation is implied.
- **Photography is placeholder imagery.** Replace with owned project photography
  and update `lib/image-blur.ts` if filenames change.
- **No fabricated metrics or testimonials.** Avoid adding statistics, client
  names or quotes that cannot be substantiated.

## Deployment

The site can be deployed to any Node.js host or Vercel.

```bash
npm ci
npm run build
npm run start
```

Set the environment variables in the hosting platform before building. The
contact route uses the Node.js runtime and outbound access to
`api.resend.com` when email delivery is enabled.

## Accessibility and motion

- Semantic landmarks, skip link, visible focus styles and labelled controls.
- Motion respects `prefers-reduced-motion`; the 3D hero renders a static frame
  for reduced-motion users and has a CSS fallback if WebGL is unavailable.
- The custom cursor only activates on fine-pointer, hover-capable devices.
