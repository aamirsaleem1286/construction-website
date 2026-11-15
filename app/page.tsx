import { Hero } from "@/components/sections/Hero";
import { IntroStatement } from "@/components/sections/IntroStatement";
import { Marquee } from "@/components/ui/Marquee";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedCapability } from "@/components/sections/FeaturedCapability";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { EquipmentShowcase } from "@/components/sections/EquipmentShowcase";
import { AdditionalServicesShowcase } from "@/components/sections/AdditionalServicesShowcase";
import { HseSection } from "@/components/sections/HseSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ContactCta } from "@/components/sections/ContactCta";
import { capabilityWords } from "@/lib/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <Marquee items={capabilityWords} variant="gold" duration={52} />
      <ServicesPreview />
      <FeaturedCapability />
      <ProjectsPreview />
      <BrandsSection />
      <EquipmentShowcase />
      <AdditionalServicesShowcase />
      <HseSection />
      <WhyChooseSection />
      <ContactCta />
    </>
  );
}
