import type { IconName } from "@/lib/types";

export type Equipment = {
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: IconName;
  capability: string;
};

export const equipment: Equipment[] = [
  {
    name: "Polyurea Spray Machine",
    slug: "polyurea-spray-machine",
    description:
      "High-pressure plural-component equipment for precise, consistent polyurea application on horizontal and vertical surfaces — supporting fast cure and uniform film build.",
    image: "/images/industrial-machinery.jpg",
    imageAlt: "High-pressure plural-component spray equipment for polyurea application",
    icon: "cpu",
    capability: "Plural-component high-pressure application",
  },
  {
    name: "Spray Foam Machine",
    slug: "spray-foam-machine",
    description:
      "Proportioning equipment for consistent closed-cell spray foam output across roof, wall and specialist insulation applications.",
    image: "/images/industrial-facility.jpg",
    imageAlt: "Spray foam proportioning equipment in an industrial setting",
    icon: "thermometer",
    capability: "Controlled ratio spray foam output",
  },
  {
    name: "Epoxy Grinding Machine",
    slug: "epoxy-grinding-machine",
    description:
      "Mechanised surface preparation for the profile, flatness and adhesion required by epoxy and protective floor systems.",
    image: "/images/tools.jpg",
    imageAlt: "Mechanised surface preparation equipment for epoxy flooring",
    icon: "grid",
    capability: "Mechanical preparation and profiling",
  },
  {
    name: "Asphalt Equipment & Machinery",
    slug: "asphalt-equipment",
    description:
      "Paving, compaction and support equipment for road, car park and driveway works — matched to the scale and access constraints of each site.",
    image: "/images/excavation.jpg",
    imageAlt: "Excavation and groundworks machinery for asphalt paving",
    icon: "road",
    capability: "Paving, compaction and earthworks support",
  },
  {
    name: "Surface Preparation Equipment",
    slug: "surface-preparation-equipment",
    description:
      "Grinding, blasting and dust-controlled preparation equipment for coatings, linings and repair systems across concrete and steel.",
    image: "/images/concrete-surface.jpg",
    imageAlt: "Surface preparation works on a concrete substrate",
    icon: "sparkles",
    capability: "Dust-controlled mechanical preparation",
  },
];
