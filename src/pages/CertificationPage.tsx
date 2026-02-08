import { Navbar } from "@/components/Navbar";
import { CertificationSection } from "@/components/CertificationSection";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const CertificationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <CertificationSection />
      </main>
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
    </div>
  );
};

export default CertificationPage;
