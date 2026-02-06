import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, FileCheck, BadgeCheck, Stamp } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "SIAT Course Certificate",
    titleHi: "SIAT कोर्स प्रमाणपत्र",
    description: "Legal & Authorized certificate recognized by industry",
    tag: "Industry Recognized",
  },
  {
    icon: FileCheck,
    title: "Government Scheme Certificates",
    titleHi: "सरकारी योजना प्रमाणपत्र",
    description: "Official certificates from Bihar, MSME & GOI programs",
    tag: "Government Approved",
  },
  {
    icon: BadgeCheck,
    title: "Job Ready Verification",
    titleHi: "नौकरी के लिए सत्यापन",
    description: "Certificates accepted for jobs & service centers",
    tag: "Employment Ready",
  },
  {
    icon: Stamp,
    title: "Business Registration Support",
    titleHi: "व्यापार पंजीकरण सहायता",
    description: "Certificates valid for shop registration & bank loans",
    tag: "Entrepreneur Ready",
  },
];

export function CertificationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certification" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Certification • प्रमाणपत्र
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Certification & <span className="text-primary">Authorization</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get recognized, legal, and authorized certificates that open doors to jobs, 
              business registration, and bank loans.
            </p>
            <p className="font-hindi text-muted-foreground mt-2">
              मान्य और अधिकृत प्रमाणपत्र प्राप्त करें जो नौकरी और व्यापार के द्वार खोलते हैं
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-2 group overflow-hidden"
              >
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                    {cert.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 pr-16">
                  {cert.title}
                </h3>
                <p className="font-hindi text-sm text-secondary mb-3">{cert.titleHi}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/5 to-transparent rounded-tl-full" />
              </motion.div>
            ))}
          </div>

          {/* Trust Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-primary via-primary to-accent rounded-2xl p-8 text-center text-primary-foreground overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">
                100% Legal & Authorized Certificates
              </h3>
              <p className="font-hindi text-lg opacity-90">
                हमारे सभी प्रमाणपत्र कानूनी और अधिकृत हैं
              </p>
              <p className="mt-4 text-sm opacity-80">
                Accepted for: Jobs • Shop Registration • Bank Loans • Government Schemes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
