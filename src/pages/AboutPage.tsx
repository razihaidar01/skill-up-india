import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { GovernmentSchemes } from "@/components/GovernmentSchemes";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <AboutSection />
        <GovernmentSchemes />
      </main>
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
