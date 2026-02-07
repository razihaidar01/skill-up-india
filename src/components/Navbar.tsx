import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import siatLogo from "@/assets/siat-logo.jpeg";

const navLinks = [
  { name: "Home", nameHi: "होम", href: "#home" },
  { name: "About", nameHi: "हमारे बारे में", href: "#about" },
  { name: "Courses", nameHi: "कोर्स", href: "#courses" },
  { name: "Certification", nameHi: "प्रमाणपत्र", href: "#certification" },
  { name: "Career", nameHi: "करियर", href: "#career" },
  { name: "Contact", nameHi: "संपर्क", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={siatLogo}
              alt="SIAT Logo"
              className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover shadow-md"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-primary text-sm md:text-base leading-tight">
                SIAT
              </h1>
              <p className="text-[10px] md:text-xs text-muted-foreground font-hindi">
                सहरसा इंस्टीट्यूट ऑफ एडवांस टेक्नोलॉजी
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-muted"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+917004216219" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-hindi">कॉल करें</span>
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              <a href="#contact">Apply Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  >
                    <span className="font-medium">{link.name}</span>
                    <span className="text-sm text-muted-foreground ml-2 font-hindi">
                      {link.nameHi}
                    </span>
                  </a>
                ))}
                <Button asChild className="mt-4 bg-primary text-primary-foreground font-heading rounded-full">
                  <a href="#contact">Apply Now - अभी अप्लाई करें</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
