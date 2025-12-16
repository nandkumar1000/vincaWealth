import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <StepsSection />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
