export type Brand = {
  name: string;
  category: string;
  style: "wide" | "tight" | "light" | "bold" | "mono" | "serif";
};

/**
 * Approved material system manufacturers and technical partners.
 */
export const brands: Brand[] = [
  { name: "Sika", category: "Concrete Systems & Polyurea", style: "bold" },
  { name: "Fosroc", category: "Structural Repair & Grouts", style: "wide" },
  { name: "Jotun", category: "Protective & Marine Coatings", style: "light" },
  { name: "Dermabit", category: "Bituminous Waterproofing", style: "wide" },
  { name: "BCI", category: "Building Chemical Systems", style: "mono" },
  { name: "Saveto", category: "Technical Mortars & Finishes", style: "bold" },
  { name: "Buildchem", category: "Epoxy Flooring & Sealants", style: "tight" },
  { name: "Al Jazeera", category: "Industrial Protective Paints", style: "light" },
  { name: "Awazil", category: "Thermal & Damp Proofing", style: "bold" },
  { name: "Betomat", category: "Concrete Rehabilitation", style: "tight" },
  { name: "ICC", category: "Waterproofing Membranes", style: "wide" },
  { name: "Sabit", category: "Polystyrene Insulation Systems", style: "mono" },
];

export const brandStyleClasses: Record<Brand["style"], string> = {
  wide: "font-display font-semibold tracking-[0.18em] uppercase",
  tight: "font-display font-extrabold tracking-[-0.045em]",
  light: "font-display font-light tracking-[0.08em] uppercase",
  bold: "font-display font-black tracking-[-0.02em]",
  mono: "font-mono font-semibold tracking-[0.22em] uppercase",
  serif: "font-display font-medium tracking-[-0.01em] italic",
};
