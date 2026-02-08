import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
