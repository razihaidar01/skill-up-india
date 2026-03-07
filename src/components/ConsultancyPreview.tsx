import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, FileCheck, Factory, Landmark, ArrowRight } from "lucide-react";

const certifications = [
  "ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001",
  "ISO 22000", "ISO 13485", "CE", "HACCP",
];

export function ConsultancyPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              SIAT Consultancy Services
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              SIAT <span className="text-primary">Consultancy</span> Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Government Projects, ISO Certifications (IAF & Non-IAF), MSME Registration, and Bihar Student Credit Card Yojana — powered by RH Software.
            </p>
          </motion.div>

          {/* Service cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Landmark, title: "Government Projects", desc: "Complete tender & compliance support" },
              { icon: FileCheck, title: "ISO Certification", desc: "IAF & Non-IAF standards" },
              { icon: Factory, title: "MSME Registration", desc: "Udyam registration & documentation" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ISO badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground/80 shadow-sm"
              >
                <ShieldCheck className="inline h-4 w-4 text-primary mr-1.5 -mt-0.5" />
                {cert}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <Link
              to="/consultancy"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-heading rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
