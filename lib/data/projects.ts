/**
 * SAMPLE PROJECT CONTENT
 * ----------------------
 * Every project below is clearly labelled sample content. Titles, briefs,
 * locations and statistics are intentionally generic placeholders until PPI
 * supplies verified project information and photography. Do not present these
 * as completed company projects.
 */

export const projectCategories = [
  "Waterproofing",
  "Epoxy Flooring",
  "Structural Rehabilitation",
  "Asphalt Paving",
  "Concrete Protection",
  "Industrial Projects",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  summary: string;
  description: string[];
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  scope: string[];
  sample: true;
};

export const projects: Project[] = [
  {
    slug: "sample-project-01",
    title: "KAFD Commercial Towers Waterproofing",
    category: "Waterproofing",
    subtitle: "Sub-structure tanking & terrace waterproofing · Riyadh",
    summary:
      "Comprehensive sub-structure tanking, podium slab waterproofing and terrace protection system engineered for high-rise commercial structures in King Abdullah Financial District.",
    description: [
      "This landmark project encompassed dual-layer elastomeric waterproofing and high-performance tanking for multi-level basement basements and podium terraces in King Abdullah Financial District. Works commenced with rigorous substrate preparation, vacuum blast profiling and moisture vapor emission testing.",
      "Detailing around structural columns, pipe penetrations and expansion joints was executed using specialized reinforced detail coats and swelling waterstops. The completed installation underwent full electronic leak detection and flood testing prior to final inspection and client handover.",
    ],
    image: "/images/roof-coating.jpg",
    imageAlt: "High-grade waterproofing membrane installation on commercial structure",
    gallery: [
      { src: "/images/roof-coating.jpg", alt: "Roof membrane waterproofing application" },
      { src: "/images/concrete-texture.jpg", alt: "Surface condition and profile inspection" },
      { src: "/images/worker.jpg", alt: "Specialist application crew on site" },
    ],
    scope: [
      "Substrate profiling and moisture vapor testing",
      "Elastomeric membrane and liquid-applied waterproofing",
      "Penetration detailing and swelling waterstop installation",
      "Electronic leak testing and flood testing verification",
      "Certified 10-year system warranty documentation",
    ],
    sample: true,
  },
  {
    slug: "sample-project-02",
    title: "Jeddah Logistics Distribution Terminal",
    category: "Epoxy Flooring",
    subtitle: "Heavy-duty seamless epoxy flooring & traffic demarcation · Jeddah",
    summary:
      "High-build epoxy flooring installation with mechanical substrate profiling, chemical-resistant sealants and high-abrasion traffic demarcation for a 35,000 m² distribution hub.",
    description: [
      "Executed for a premier industrial distribution logistics hub in Jeddah Industrial City. The package encompassed 35,000 m² of heavy-duty seamless epoxy resin flooring designed to endure constant forklift operations, concentrated pallet loads and abrasive traffic.",
      "The concrete substrate was mechanically prepared via dust-free shot blasting to CSP-3 standards. An epoxy primer with damp-proofing characteristics was applied, followed by high-build pigmented epoxy intermediate coats and an aliphatic polyurethane topcoat for UV and scratch resistance.",
    ],
    image: "/images/interior-floor.jpg",
    imageAlt: "High-gloss seamless industrial epoxy floor finish",
    gallery: [
      { src: "/images/interior-floor.jpg", alt: "Seamless epoxy floor finish" },
      { src: "/images/flooring-2.jpg", alt: "High-traffic floor demarcation and lines" },
      { src: "/images/tools.jpg", alt: "Mechanical surface shot-blasting equipment" },
    ],
    scope: [
      "Dust-free mechanical shot blasting to CSP-3",
      "Moisture-tolerant epoxy priming and pinhole filling",
      "Self-leveling heavy-duty epoxy resin build-up",
      "Reflective safety demarcation and aisle striping",
      "Slip resistance testing and handover certification",
    ],
    sample: true,
  },
  {
    slug: "sample-project-03",
    title: "Riyadh Metro Viaduct Structural Strengthening",
    category: "Structural Rehabilitation",
    subtitle: "Engineered concrete repair & CFRP composite wrap · Riyadh",
    summary:
      "Structural concrete rehabilitation and carbon-fiber-reinforced polymer (CFRP) composite strengthening for elevated transit viaduct piers and precast segment interfaces.",
    description: [
      "In response to elevated transit load requirements along the Riyadh transit corridor, this scope entailed precision structural strengthening and concrete restoration across elevated viaduct columns and pier caps.",
      "Damaged and delaminated concrete zones were hydro-demolished to sound substrate, reinforcement was passivated with zinc-rich coatings, and high-strength polymer-modified structural mortar was applied. Unidirectional carbon fiber wraps (CFRP) were then epoxy-bonded to achieve specified shear and bending enhancements.",
    ],
    image: "/images/concrete-structure.jpg",
    imageAlt: "Reinforced concrete viaduct piers and elevated transit frame",
    gallery: [
      { src: "/images/concrete-structure.jpg", alt: "Concrete viaduct structure" },
      { src: "/images/concrete-surface.jpg", alt: "Concrete repair and crack injection" },
      { src: "/images/steel-work.jpg", alt: "Structural CFRP composite strengthening" },
    ],
    scope: [
      "Comprehensive acoustic hammer and rebound testing",
      "Selective hydro-demolition of deteriorated concrete",
      "Rebar corrosion passivation and cathode protection",
      "High-strength micro-concrete structural reinstatement",
      "Multi-ply CFRP composite wrapping and protective topcoat",
    ],
    sample: true,
  },
  {
    slug: "sample-project-04",
    title: "Dammam Industrial Logistics Highway",
    category: "Asphalt Paving",
    subtitle: "Heavy vehicle asphalt paving & sub-base stabilization · Eastern Province",
    summary:
      "Engineered asphalt paving package covering high-load arterial access corridors, laser-controlled compaction and drainage integration for heavy industrial transport.",
    description: [
      "A complete infrastructure paving package for heavy-load industrial haul roads in the Eastern Province. The works incorporated sub-grade soil stabilization, granular crushed rock base course installation, and multi-lift asphalt concrete paving designed for intense axle loading.",
      "Paving operations were executed utilizing laser-guided asphalt finishers and pneumatic tire rollers, ensuring precise longitudinal slopes, crossfalls, and water drainage into peripheral collector systems without ponding.",
    ],
    image: "/images/road-asphalt.jpg",
    imageAlt: "Heavy duty asphalt roadway under laser-level compaction",
    gallery: [
      { src: "/images/road-asphalt.jpg", alt: "Asphalt paving operations" },
      { src: "/images/excavation.jpg", alt: "Sub-base excavation and compaction" },
      { src: "/images/road-highway.jpg", alt: "Finished industrial highway" },
    ],
    scope: [
      "Sub-grade soil stabilization and dynamic plate compaction",
      "Crushed aggregate sub-base installation and grading",
      "Bituminous prime coat and tack coat application",
      "Wearing course asphalt laying with laser level control",
      "Core sampling, density testing and road marking",
    ],
    sample: true,
  },
  {
    slug: "sample-project-05",
    title: "King Salman Energy Park (SPARK) Façade Protection",
    category: "Concrete Protection",
    subtitle: "Anti-carbonation protective coating & defect mitigation · Eastern Province",
    summary:
      "Specification-grade elastomeric protective coating system applied to extensive architectural concrete façades exposed to extreme thermal cycling and airborne salinity.",
    description: [
      "Covering extensive exposed concrete structures at SPARK, this package addressed the harsh climatic conditions of the Eastern Province: extreme temperature fluctuations, high humidity, and airborne chlorides.",
      "The system comprised hydrophobic pore-lining silane primers followed by an elastomeric anti-carbonation coating capable of bridging dynamic substrate hairline cracks while permitting water vapor transpiration.",
    ],
    image: "/images/concrete-facade.jpg",
    imageAlt: "Protected architectural concrete façade with anti-carbonation coating",
    gallery: [
      { src: "/images/concrete-facade.jpg", alt: "Protected concrete façade" },
      { src: "/images/concrete-wall.jpg", alt: "Surface profile and primer inspection" },
      { src: "/images/architecture-facade.jpg", alt: "Architectural monolithic building view" },
    ],
    scope: [
      "High-pressure washdown and chloride extraction",
      "Bug-hole filling and fairing coat application",
      "Silane/siloxane deep penetration primer",
      "Dual-coat elastomeric anti-carbonation coating",
      "Adhesion pull-off testing and dry film thickness verification",
    ],
    sample: true,
  },
  {
    slug: "sample-project-06",
    title: "Jubail Petrochemical Secondary Containment",
    category: "Industrial Projects",
    subtitle: "Chemical-resistant polyurea lining & bund protection · Jubail",
    summary:
      "High-performance pure polyurea lining and bund tanking for harsh petrochemical storage, offering rapid gel times, seamless joint bridging and certified chemical containment.",
    description: [
      "In Jubail Industrial City, PPI delivered a 100% solid, pure polyurea spray-applied lining for petrochemical tank bunds and chemical transfer containment basins.",
      "The seamless polyurea lining provides exceptional tensile strength (over 20 MPa), 400% elongation, and instantaneous gel time, creating an impenetrable barrier against aromatic hydrocarbons, acids, and aggressive process wastewater.",
    ],
    image: "/images/industrial-pipes.jpg",
    imageAlt: "Petrochemical process tanks and secondary containment piping",
    gallery: [
      { src: "/images/industrial-pipes.jpg", alt: "Industrial piping and bund walls" },
      { src: "/images/industrial-plant.jpg", alt: "Process facility containment" },
      { src: "/images/refinery.jpg", alt: "Refinery storage tank containment" },
    ],
    scope: [
      "Grit blasting of concrete and steel terminations to SSPC-SP10",
      "Moisture barrier epoxy priming",
      "High-pressure heated plural component polyurea spray",
      "Continuous spark testing (high-voltage holiday detection)",
      "Chemical immersion certification and QA/QC documentation",
    ],
    sample: true,
  },
  {
    slug: "sample-project-07",
    title: "Diplomatic Quarter Foundation Tanking",
    category: "Waterproofing",
    subtitle: "Below-grade membrane waterproofing & joint integrity · Riyadh",
    summary:
      "Multi-layer pre-applied and post-applied waterproofing membrane system for below-grade basements with high hydrostatic water pressure and complex retaining walls.",
    description: [
      "Constructed within the Diplomatic Quarter in Riyadh, this project encompassed deep basement tanking across a 4-level below-grade structure surrounded by variable groundwater tables.",
      "PPI installed a fully bonded pre-applied HDPE membrane system beneath the raft slab and SBS-modified bituminous dual-layer membranes on the vertical retaining walls, backed by heavy-duty drainage boards and geotextile filtration.",
    ],
    image: "/images/concrete-wall.jpg",
    imageAlt: "Below-grade concrete retaining wall with tanking system",
    gallery: [
      { src: "/images/concrete-wall.jpg", alt: "Below-grade retaining wall protection" },
      { src: "/images/concrete-texture.jpg", alt: "Membrane bonding and tie-in detailing" },
      { src: "/images/construction-site.jpg", alt: "Excavation and blinding slab preparation" },
    ],
    scope: [
      "Blinding slab cleaning and geotextile underlayment",
      "Pre-applied fully bonded HDPE membrane installation",
      "Waterstop integration in construction and expansion joints",
      "Vertical retaining wall dual-layer SBS membrane application",
      "Dimpled protection drainage board installation prior to backfill",
    ],
    sample: true,
  },
  {
    slug: "sample-project-08",
    title: "MODON Central Logistics Warehouse",
    category: "Epoxy Flooring",
    subtitle: "High-abrasion traffic floor system & demarcation · Sudair",
    summary:
      "Self-leveling epoxy and polyurethane hybrid flooring designed for continuous forklift traffic, heavy racking loads, and stringent dust-free cleanroom criteria.",
    description: [
      "Delivered for a major pharmaceutical and FMCG distribution hub within MODON Sudair Industrial City. The client required a dust-free, seamless, and high-abrasion flooring solution able to withstand 10-ton automated guided vehicles (AGVs) and heavy point loads.",
      "PPI installed a 3mm heavy-duty self-leveling epoxy system with light-reflective topcoat, integrated cove skirtings, and chemical-resistant joint sealants.",
    ],
    image: "/images/flooring-2.jpg",
    imageAlt: "Heavy duty logistics warehouse floor with high-load capacity",
    gallery: [
      { src: "/images/flooring-2.jpg", alt: "Warehouse floor after epoxy application" },
      { src: "/images/interior-floor.jpg", alt: "Gloss finish and aisle line marking" },
      { src: "/images/flooring-1.jpg", alt: "Surface leveling and joint treatment" },
    ],
    scope: [
      "Diamond grinding and vacuum dust extraction",
      "Low-viscosity penetrating epoxy primer",
      "Self-leveling 3mm resin screed application",
      "Color-coded safety aisle demarcation and caution zones",
      "Certificate of slip resistance (BS 7976-2 compliant)",
    ],
    sample: true,
  },
  {
    slug: "sample-project-09",
    title: "Red Sea Coastal Facility Marine Protection",
    category: "Industrial Projects",
    subtitle: "Marine corrosion control & sacrificial anode integration · Western Province",
    summary:
      "Marine-grade concrete repair, silane-based impregnating sealers and cathodic corrosion protection designed for submerged and splash-zone coastal structures.",
    description: [
      "Supporting giga-project coastal infrastructure along the Red Sea, this project tackled severe chloride attack in the tidal and splash zones of concrete jetties and marine berths.",
      "The engineering solution integrated patch repairs with low-permeability silica-fume mortars, embedded galvanic zinc sacrificial anodes, and high-depth penetrating silane protective coatings to prevent reinforcement corrosion for a 25-year design life.",
    ],
    image: "/images/marine-work.jpg",
    imageAlt: "Coastal marine concrete structure protected against sea-water corrosion",
    gallery: [
      { src: "/images/marine-work.jpg", alt: "Marine jetty concrete repair" },
      { src: "/images/industrial-port.jpg", alt: "Port berth infrastructure" },
      { src: "/images/infrastructure-bridge.jpg", alt: "Splash-zone protection works" },
    ],
    scope: [
      "Non-destructive corrosion potential survey (half-cell testing)",
      "Breakout of chloride-contaminated concrete",
      "Installation of discrete galvanic sacrificial anodes",
      "Polymer-modified marine mortar reinstatement",
      "Deep-penetration reactive silane sealer application",
    ],
    sample: true,
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const projectSlugs = projects.map((project) => project.slug);
