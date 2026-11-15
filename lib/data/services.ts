import type { IconName } from "@/lib/types";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  index: string;
  icon: IconName;
  excerpt: string;
  intro: string;
  description: string[];
  image: string;
  imageAlt: string;
  highlights: string[];
  applications: string[];
};

export const services: Service[] = [
  {
    slug: "waterproofing-systems",
    title: "Waterproofing Systems",
    shortTitle: "Waterproofing",
    index: "01",
    icon: "droplets",
    excerpt:
      "Engineered waterproofing for roofs, basements, tanks and critical structures — detailed to perform in the Kingdom's demanding climate.",
    intro:
      "Protecting structures from water intrusion with systems selected for the asset, the exposure and the detailing.",
    description: [
      "Water intrusion is one of the most persistent threats to a structure's service life. PPI designs and installs layered waterproofing systems that respond to the specific movement, exposure and detailing requirements of each asset — from podium decks and roof slabs to below-grade walls, water tanks and wet areas.",
      "Every application begins with an assessment of the substrate and existing conditions. Surface preparation, primer selection, reinforcement at details and termination points are treated as part of the system, not as an afterthought. The result is a continuous barrier that is easier to inspect, maintain and trust.",
    ],
    image: "/images/concrete-facade.jpg",
    imageAlt: "Modern concrete façade treated with a protective waterproofing system",
    highlights: [
      "Roof, podium and terrace membranes",
      "Below-grade and foundation protection",
      "Water tank and wet-area lining",
      "Expansion joint and detail termination",
      "Surface preparation and moisture testing",
    ],
    applications: [
      "Commercial and residential buildings",
      "Industrial facilities",
      "Water-retaining structures",
      "Infrastructure and utilities",
    ],
  },
  {
    slug: "polyurethane-spray-foam-insulation",
    title: "Polyurethane Spray Foam Insulation",
    shortTitle: "Spray Foam Insulation",
    index: "02",
    icon: "thermometer",
    excerpt:
      "Seamless closed-cell insulation that controls heat, air and moisture in a single applied system.",
    intro:
      "Superior thermal performance, air sealing and moisture resistance for residential, commercial and industrial buildings.",
    description: [
      "Polyurethane spray foam insulation provides superior thermal insulation, air sealing and moisture resistance for residential, commercial and industrial buildings. Applied as a seamless layer, it conforms to irregular geometry and closes gaps that rigid insulation and sealants can leave behind.",
      "In the Saudi climate, reducing heat gain is not only a comfort issue — it directly affects energy demand and the long-term performance of building services. PPI specifies and applies closed-cell systems for roofs, walls, soffits and specialist applications such as cold stores, with protective finishes where exposure demands it.",
    ],
    image: "/images/industrial-facility.jpg",
    imageAlt: "Industrial facility receiving a spray-applied insulation system",
    highlights: [
      "Closed-cell spray foam for roofs, walls and soffits",
      "Air sealing and vapour control",
      "Cold store and industrial applications",
      "Seamless monolithic coverage",
      "Protective coating and UV finish options",
    ],
    applications: [
      "Warehouses and industrial buildings",
      "Commercial and residential roofs",
      "Cold storage and process areas",
      "Retrofit and new-build envelopes",
    ],
  },
  {
    slug: "polyurea-waterproofing-coatings",
    title: "Polyurea Waterproofing & Protective Coatings",
    shortTitle: "Polyurea Coatings",
    index: "03",
    icon: "shield",
    excerpt:
      "Fast-curing, seamless protective coatings for concrete, steel and demanding industrial surfaces.",
    intro:
      "A highly durable, seamless and fast-curing protective barrier engineered for aggressive service conditions.",
    description: [
      "Polyurea protective coating systems provide a highly durable, seamless and fast-curing barrier for concrete, steel and other structural surfaces. Because the coating cures rapidly, it can be returned to service quickly and is well suited to projects with compressed programmes.",
      "PPI applies polyurea where chemical exposure, abrasion, corrosion or water ingress would shorten the life of a conventional coating. Typical environments include water tanks, secondary containment, traffic decks, industrial floors and marine structures. Surface preparation and primer compatibility are specified per substrate.",
    ],
    image: "/images/roof-coating.jpg",
    imageAlt: "Protective coating being spray-applied to a flat roof surface",
    highlights: [
      "Chemical resistance",
      "Abrasion resistance",
      "Corrosion protection",
      "Water resistance",
      "Rapid cure and fast return to service",
    ],
    applications: [
      "Water tanks and containment areas",
      "Traffic decks and podium surfaces",
      "Industrial floors and bunds",
      "Marine and coastal structures",
    ],
  },
  {
    slug: "concrete-repair-rehabilitation",
    title: "Concrete Repair & Rehabilitation",
    shortTitle: "Concrete Repair",
    index: "04",
    icon: "wrench",
    excerpt:
      "Diagnosis-led repair of deteriorated concrete — restoring integrity, appearance and protection.",
    intro:
      "Restoring damaged and aging concrete with repair systems matched to the cause of deterioration.",
    description: [
      "Concrete deterioration is rarely only a surface problem. Spalling, cracking and corrosion are symptoms of underlying mechanisms that must be understood before repair. PPI approaches rehabilitation with a clear assessment of condition, exposure and structural significance.",
      "Repair works may include removal of unsound concrete, treatment of reinforcement, crack injection, reinstatement mortars and protective coatings. Where required, repairs are coordinated with structural strengthening so that the restored element performs as intended, not only looks complete.",
    ],
    image: "/images/concrete-structure.jpg",
    imageAlt: "Concrete structural elements prepared for repair and rehabilitation",
    highlights: [
      "Concrete repair and reinstatement",
      "Crack injection",
      "Corrosion treatment",
      "Structural rehabilitation",
      "Carbon fibre reinforcement",
      "Protective coating systems",
    ],
    applications: [
      "Building frames and façades",
      "Marine and coastal structures",
      "Industrial and process facilities",
      "Infrastructure assets",
    ],
  },
  {
    slug: "structural-strengthening",
    title: "Structural Strengthening",
    shortTitle: "Structural Strengthening",
    index: "05",
    icon: "layers",
    excerpt:
      "Engineered strengthening systems that restore or increase capacity in existing structures.",
    intro:
      "Restoring, protecting and enhancing the integrity of damaged, aging or re-purposed structures.",
    description: [
      "Prime Projects International provides specialised structural repair and strengthening solutions to restore, protect and enhance the integrity of damaged or aging structures. Strengthening is planned around the structural requirement — not around a single preferred product.",
      "PPI executes carbon fibre reinforcement, steel plate bonding, jacketing and supplemental structural systems in coordination with project-specific structural design. Temporary works, access, surface preparation and quality records are planned before work begins on site.",
    ],
    image: "/images/steel-infrastructure.jpg",
    imageAlt: "Steel and concrete infrastructure requiring structural strengthening",
    highlights: [
      "Carbon fibre reinforced polymer (CFRP) systems",
      "Steel plate bonding",
      "Section enlargement and jacketing",
      "Shear and flexural strengthening",
      "Load-capacity upgrades",
      "Design coordination and method statements",
    ],
    applications: [
      "Change-of-use and increased loads",
      "Aging building structures",
      "Industrial and infrastructure assets",
      "Structures affected by deterioration",
    ],
  },
  {
    slug: "industrial-painting",
    title: "Industrial Painting",
    shortTitle: "Industrial Painting",
    index: "06",
    icon: "paintbrush",
    excerpt:
      "Surface preparation and protective coating systems for steel, concrete and industrial assets.",
    intro:
      "Corrosion protection and finish systems applied with disciplined surface preparation.",
    description: [
      "The performance of an industrial coating depends as much on preparation as on the product. PPI plans surface preparation, environmental conditions and coating intervals as part of a controlled system for steel and concrete substrates.",
      "Systems can be selected for atmospheric exposure, chemical environments, immersion or abrasion. Colour coding, identification bands and finish requirements are incorporated where the asset owner requires them, with inspection at each stage of application.",
    ],
    image: "/images/painting.jpg",
    imageAlt: "Protective paint being applied to an industrial surface",
    highlights: [
      "Surface preparation and profile control",
      "Protective coating systems",
      "Steel corrosion protection",
      "Concrete protective finishes",
      "Colour coding and identification",
      "Application inspection and records",
    ],
    applications: [
      "Industrial plants and equipment",
      "Steel structures and pipework",
      "Concrete walls and barriers",
      "Commercial and infrastructure assets",
    ],
  },
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring",
    shortTitle: "Epoxy Flooring",
    index: "07",
    icon: "grid",
    excerpt:
      "Seamless, durable floor systems for industrial, commercial and technical environments.",
    intro:
      "Floor systems that combine a clean finish with resistance to traffic, impact and chemical exposure.",
    description: [
      "Epoxy flooring gives a seamless, cleanable surface with the mechanical and chemical performance required by industrial and commercial operations. PPI selects the build-up — primer, body coat, broadcast and seal — according to substrate condition, loading and exposure.",
      "Moisture in the slab, surface profile and flatness are assessed before application. Options include self-levelling and trowel-applied systems, decorative finishes, slip-resistant surfaces and demarcation. Adjoining details are terminated cleanly for a durable, professional result.",
    ],
    image: "/images/interior-floor.jpg",
    imageAlt: "Seamless epoxy floor finish in a modern commercial interior",
    highlights: [
      "Self-levelling and trowel-applied systems",
      "Heavy-duty and chemical-resistant finishes",
      "Decorative flake and metallic options",
      "Slip-resistant surface profiles",
      "Line marking and demarcation",
      "Moisture testing and substrate preparation",
    ],
    applications: [
      "Warehouses and logistics spaces",
      "Factories and workshops",
      "Showrooms and commercial interiors",
      "Service and plant rooms",
    ],
  },
  {
    slug: "cathodic-protection-marine-works",
    title: "Cathodic Protection & Marine Works",
    shortTitle: "Cathodic Protection",
    index: "08",
    icon: "anchor",
    excerpt:
      "Corrosion control and protective works for reinforced concrete, steel and marine assets.",
    intro:
      "Managing corrosion in the environments where conventional protection is not enough.",
    description: [
      "Marine and buried structures face continuous electrochemical attack. PPI provides cathodic protection and related protective works to control corrosion in reinforced concrete and steel assets, supporting longer service life and more predictable maintenance.",
      "Depending on the asset, systems may use impressed current or sacrificial anodes, supported by monitoring and inspection points. Marine works are planned around access, tidal constraints and the protection of adjacent operations, with safety and environmental controls integrated into the method.",
    ],
    image: "/images/industrial-port.jpg",
    imageAlt: "Marine port infrastructure requiring corrosion protection",
    highlights: [
      "Impressed current cathodic protection",
      "Sacrificial anode systems",
      "Corrosion monitoring and testing",
      "Marine concrete protection",
      "Coastal and buried asset works",
      "Access and environmental planning",
    ],
    applications: [
      "Jetties, quays and marine structures",
      "Reinforced concrete foundations",
      "Buried pipelines and steelwork",
      "Coastal industrial facilities",
    ],
  },
  {
    slug: "grp-lining",
    title: "GRP Lining",
    shortTitle: "GRP Lining",
    index: "09",
    icon: "cylinder",
    excerpt:
      "Glass-reinforced plastic lining for chemical-resistant protection of tanks, vessels and structures.",
    intro:
      "A seamless, corrosion-resistant barrier for aggressive chemical and process environments.",
    description: [
      "GRP lining provides a continuous, chemically resistant surface for concrete and steel assets exposed to aggressive media. It is commonly applied to tanks, vessels, channels and process areas where coatings alone may not offer sufficient durability.",
      "PPI prepares and primes the substrate, builds up the laminate to the specified system and inspects the finished lining for continuity and adhesion. Details at nozzles, corners and terminations receive particular attention, since these are where linings most often fail.",
    ],
    image: "/images/industrial-pipes.jpg",
    imageAlt: "Industrial pipework and tanks suited to GRP lining protection",
    highlights: [
      "Chemical-resistant lining systems",
      "Tank, vessel and channel lining",
      "Wastewater and process environments",
      "Steel and concrete substrates",
      "Seamless, continuous finish",
      "Detail treatment and inspection",
    ],
    applications: [
      "Storage tanks and vessels",
      "Wastewater and process facilities",
      "Chemical containment areas",
      "Industrial channels and sumps",
    ],
  },
  {
    slug: "damp-proofing-thermal-insulation",
    title: "Damp Proofing & Thermal Insulation",
    shortTitle: "Damp Proofing",
    index: "10",
    icon: "home",
    excerpt:
      "Keeping structures dry, comfortable and energy-efficient with targeted damp and thermal solutions.",
    intro:
      "Practical solutions for rising damp, moisture ingress and heat transfer through the building envelope.",
    description: [
      "Damp and heat both find the weakest point in a building envelope. PPI investigates the source before recommending a system, whether the issue is rising damp, penetrating moisture, condensation or an under-performing roof or wall assembly.",
      "Solutions include damp-proof course injection, waterproof renders and coatings, roof and wall insulation, and thermal boards or membranes. Work is sequenced to protect the completed layers and to leave the building weather-tight at the end of each day.",
    ],
    image: "/images/architecture-dusk.jpg",
    imageAlt: "Building envelope at dusk requiring damp proofing and thermal insulation",
    highlights: [
      "Rising damp and DPC injection",
      "Waterproof renders and coatings",
      "Roof and wall thermal insulation",
      "Thermal boards and membranes",
      "Condensation and ventilation measures",
      "Envelope assessment and detailing",
    ],
    applications: [
      "Residential and commercial buildings",
      "Roofs, walls and podiums",
      "Basements and ground floors",
      "Retrofit and energy upgrades",
    ],
  },
  {
    slug: "asphalt-paving-road-construction",
    title: "Asphalt Paving & Road Construction",
    shortTitle: "Asphalt Paving",
    index: "11",
    icon: "road",
    excerpt:
      "Durable, high-quality paving for roads, car parks, driveways and infrastructure.",
    intro:
      "Delivering durable, high-quality paving solutions for commercial, industrial, residential and infrastructure projects.",
    description: [
      "Asphalt surfaces carry daily traffic, weather and loading. PPI delivers new road construction, asphalt paving, parking areas and rehabilitation works with attention to the layers that are hidden after the surface is compacted — sub-base preparation, levels, drainage and compaction.",
      "Works range from new construction to resurfacing, patch repair and maintenance. Traffic management, access and programme are planned with the client so that operations continue safely while the works proceed.",
    ],
    image: "/images/road-asphalt.jpg",
    imageAlt: "Newly laid asphalt road surface",
    highlights: [
      "New road construction",
      "Asphalt paving",
      "Parking lots and driveways",
      "Road rehabilitation",
      "Resurfacing",
      "Patch repairs and maintenance",
    ],
    applications: [
      "Commercial and industrial access roads",
      "Residential developments",
      "Parking and hardstanding areas",
      "Infrastructure and utility reinstatement",
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

export const serviceSlugs = services.map((service) => service.slug);

export type FeaturedService = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export const featuredServices: FeaturedService[] = [
  {
    id: "structural-repair-strengthening",
    number: "01",
    eyebrow: "Structural Systems",
    title: "Structural Repair & Strengthening",
    description:
      "Prime Projects International provides specialised structural repair and strengthening solutions to restore, protect and enhance the integrity of damaged or aging structures.",
    bullets: [
      "Concrete repair and reinstatement",
      "Crack injection and corrosion treatment",
      "Structural rehabilitation",
      "Carbon fibre reinforcement",
      "Engineered strengthening systems",
    ],
    image: "/images/concrete-surface.jpg",
    imageAlt: "Close view of concrete surface prepared for structural repair",
    href: "/services/structural-strengthening",
    secondaryHref: "/services/concrete-repair-rehabilitation",
    secondaryLabel: "Concrete repair",
  },
  {
    id: "waterproofing",
    number: "02",
    eyebrow: "Waterproofing",
    title: "Waterproofing Solutions",
    description:
      "Protecting structures with reliable and long-lasting waterproofing systems — specified for roofs, basements, foundations, tanks and critical structural elements.",
    bullets: [
      "Roof waterproofing",
      "Basement and foundation waterproofing",
      "Water tank waterproofing",
      "Critical structural protection",
      "Detail termination and testing",
    ],
    image: "/images/water-droplets.jpg",
    imageAlt: "Water droplets beading on a protected textured surface",
    href: "/services/waterproofing-systems",
  },
  {
    id: "polyurea",
    number: "03",
    eyebrow: "Protective Coatings",
    title: "Polyurea Protective Coating",
    description:
      "A highly durable, seamless and fast-curing protective barrier for concrete, steel and other structural surfaces — engineered for demanding service conditions.",
    bullets: [
      "Chemical resistance",
      "Abrasion resistance",
      "Corrosion protection",
      "Water resistance",
      "Rapid cure for compressed programmes",
    ],
    image: "/images/roof-coating.jpg",
    imageAlt: "Spray-applied protective coating on a roof surface",
    href: "/services/polyurea-waterproofing-coatings",
  },
  {
    id: "spray-foam",
    number: "04",
    eyebrow: "Thermal Performance",
    title: "Polyurethane Spray Foam Insulation",
    description:
      "Superior thermal insulation, air sealing and moisture resistance for residential, commercial and industrial buildings — applied as a seamless, monolithic layer.",
    bullets: [
      "Energy efficiency",
      "Moisture resistance",
      "Durability and air sealing",
      "Complete coverage of complex geometry",
      "Protective finish options",
    ],
    image: "/images/industrial-machinery.jpg",
    imageAlt: "Industrial spray equipment used for polyurethane foam application",
    href: "/services/polyurethane-spray-foam-insulation",
  },
  {
    id: "asphalt",
    number: "05",
    eyebrow: "Infrastructure",
    title: "Asphalt Paving & Road Construction",
    description:
      "Delivering durable, high-quality paving solutions for commercial, industrial, residential and infrastructure projects across the Kingdom.",
    bullets: [
      "New road construction",
      "Asphalt paving",
      "Parking lots and driveways",
      "Road rehabilitation and resurfacing",
      "Patch repairs and maintenance",
    ],
    image: "/images/road-highway.jpg",
    imageAlt: "Highway infrastructure with asphalt paving",
    href: "/services/asphalt-paving-road-construction",
  },
];
