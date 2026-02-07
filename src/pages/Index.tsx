import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CoursesSection } from "@/components/CoursesSection";
import { GovernmentSchemes } from "@/components/GovernmentSchemes";
import { CertificationSection } from "@/components/CertificationSection";
import { CareerSection } from "@/components/CareerSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <GovernmentSchemes />
        <CertificationSection />
        <CareerSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default Index;
