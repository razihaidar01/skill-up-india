import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CoursesSection } from "@/components/CoursesSection";
import { GovernmentSchemes } from "@/components/GovernmentSchemes";
import { CertificationSection } from "@/components/CertificationSection";
import { CareerSection } from "@/components/CareerSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
