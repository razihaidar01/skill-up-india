import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import CertificationPage from "./pages/CertificationPage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";
import VerifyPage from "./pages/VerifyPage";
import RHLandingPage from "./pages/rh/RHLandingPage";
import RHServicesPage from "./pages/rh/RHServicesPage";
import RHBusinessPage from "./pages/rh/RHBusinessPage";
import RHPricingPage from "./pages/rh/RHPricingPage";
import RHBlogPage from "./pages/rh/RHBlogPage";
import RHContactPage from "./pages/rh/RHContactPage";
import RHLoginPage from "./pages/rh/RHLoginPage";
import RHConsultancyPage from "./pages/rh/RHConsultancyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/rhsoftware" element={<RHLandingPage />} />
          <Route path="/rhsoftware/services" element={<RHServicesPage />} />
          <Route path="/rhsoftware/business" element={<RHBusinessPage />} />
          <Route path="/rhsoftware/pricing" element={<RHPricingPage />} />
          <Route path="/rhsoftware/blog" element={<RHBlogPage />} />
          <Route path="/rhsoftware/contact" element={<RHContactPage />} />
          <Route path="/rhsoftware/login" element={<RHLoginPage />} />
          <Route path="/rhsoftware/consultancy" element={<RHConsultancyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
