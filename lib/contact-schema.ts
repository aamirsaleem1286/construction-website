import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Please keep your name under 100 characters."),
  company: z
    .string()
    .trim()
    .max(120, "Please keep the company name under 120 characters.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(160, "Please keep the email address under 160 characters."),
  phone: z
    .string()
    .trim()
    .max(40, "Please keep the phone number under 40 characters.")
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .trim()
    .max(120, "Please select a valid service.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail (at least 10 characters).")
    .max(2000, "Please keep the message under 2000 characters."),
  consent: z
    .boolean()
    .refine((value) => value, "Please confirm you consent to being contacted."),
  website: z.string().max(200).optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const contactServiceOptions = [
  "General enquiry",
  "Waterproofing Systems",
  "Polyurethane Spray Foam Insulation",
  "Polyurea Waterproofing Coatings",
  "Concrete Repair & Rehabilitation",
  "Structural Strengthening",
  "Protective & Decorative Painting",
  "Epoxy & Resin Flooring",
  "Cathodic Protection",
  "GRP Lining & Waterproofing",
  "Damp Proofing & Thermal Insulation",
  "Asphalt Paving & Road Works",
  "Multiple services / not sure",
];
