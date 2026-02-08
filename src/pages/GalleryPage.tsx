import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GallerySection } from "@/components/GallerySection";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <GallerySection />
      </main>
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
