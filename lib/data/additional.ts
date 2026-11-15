import type { IconName } from "@/lib/types";

export type AdditionalService = {
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: IconName;
};

export const additionalServices: AdditionalService[] = [
  {
    title: "Plaster Work",
    slug: "plaster-work",
    description:
      "Internal and external plastering with careful surface preparation, level control and a finish ready for the specified coating or cladding.",
    image: "/images/concrete-surface.jpg",
    imageAlt: "Surface preparation and plastering on a concrete wall",
    icon: "hammer",
  },
  {
    title: "Paint Work",
    slug: "paint-work",
    description:
      "Surface preparation and decorative or protective painting for interiors, exteriors and architectural features.",
    image: "/images/painting.jpg",
    imageAlt: "Painter applying a finish to a wall",
    icon: "paintbrush",
  },
  {
    title: "Wood Work",
    slug: "wood-work",
    description:
      "Joinery, panelling and timber elements fabricated and installed to suit the design intent and the environment in which they sit.",
    image: "/images/wood-texture.jpg",
    imageAlt: "Textured timber surface for joinery works",
    icon: "ruler",
  },
  {
    title: "Stamp Concrete Work",
    slug: "stamp-concrete-work",
    description:
      "Decorative stamped concrete for driveways, walkways and landscaped areas, combining a natural finish with durable construction.",
    image: "/images/concrete-wall.jpg",
    imageAlt: "Decorative concrete surface finish",
    icon: "grid",
  },
  {
    title: "Interlock Work",
    slug: "interlock-work",
    description:
      "Interlock paving for driveways, yards and pedestrian areas with controlled levels, edge restraints and proper bedding.",
    image: "/images/road-highway.jpg",
    imageAlt: "Paved surface and hard landscaping",
    icon: "panels",
  },
  {
    title: "Block Work",
    slug: "block-work",
    description:
      "Blockwork construction for internal and external walls with attention to setting out, reinforcement, alignment and finishes.",
    image: "/images/blockwork.jpg",
    imageAlt: "Blockwork wall under construction",
    icon: "box",
  },
  {
    title: "Gypsum Board Work",
    slug: "gypsum-board-work",
    description:
      "Gypsum partitions, ceilings and feature details with coordinated services and a finish ready for decoration.",
    image: "/images/interior-gypsum.jpg",
    imageAlt: "Interior with gypsum board ceiling and partitions",
    icon: "panels",
  },
  {
    title: "Electrical Work",
    slug: "electrical-work",
    description:
      "Electrical installation support for construction projects, coordinated with finishing works and executed by suitably qualified personnel.",
    image: "/images/electrical.jpg",
    imageAlt: "Electrical works being carried out on a distribution board",
    icon: "zap",
  },
  {
    title: "CCTV Camera Installation",
    slug: "cctv-camera-installation",
    description:
      "Supply and installation of CCTV systems with considered camera placement, routing and commissioning for buildings and facilities.",
    image: "/images/electrical-2.jpg",
    imageAlt: "Installation and commissioning of building systems",
    icon: "camera",
  },
];
