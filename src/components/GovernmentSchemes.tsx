import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Factory, Landmark, CheckCircle2 } from "lucide-react";

const schemes = [
  {
    icon: Building2,
    title: "Bihar Government Skill Programs",
    titleHi: "बिहार सरकार कौशल कार्यक्रम",
    description: "State-approved skill development programs with official certification",
    benefits: ["State Recognition", "Free Training Options", "Local Job Support"],
    benefitsHi: ["राज्य मान्यता", "मुफ्त प्रशिक्षण विकल्प", "स्थानीय नौकरी सहायता"],
  },
  {
    icon: Factory,
    title: "MSME Skill Development",
    titleHi: "MSME कौशल विकास",
    description: "Ministry-backed programs for micro, small & medium enterprise support",
    benefits: ["Business Loans", "Enterprise Training", "Market Access"],
    benefitsHi: ["व्यापार ऋण", "उद्यम प्रशिक्षण", "बाजार पहुंच"],
  },
  {
    icon: Landmark,
    title: "Government of India Skill Initiatives",
    titleHi: "भारत सरकार कौशल पहल",
    description: "National skill programs with pan-India recognition and certification",
    benefits: ["National Certification", "All India Jobs", "Industry Connect"],
    benefitsHi: ["राष्ट्रीय प्रमाणपत्र", "पूरे भारत में नौकरी", "उद्योग संपर्क"],
  },
];

export function GovernmentSchemes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 section-bg-warm" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4 border border-secondary/30">
              Government Programs • सरकारी योजनाएं
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Government <span className="text-primary">Skill Programs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SIAT provides education under recognized government schemes with official certificates 
              that help in employment and self-employment.
            </p>
            <p className="font-hindi text-muted-foreground mt-2">
              ये कार्यक्रम आधिकारिक सरकारी प्रमाणपत्रों के साथ आते हैं
            </p>
          </motion.div>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {schemes.map((scheme, index) => (
              <motion.div
                key={scheme.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <scheme.icon className="h-8 w-8 text-secondary" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {scheme.title}
                </h3>
                <p className="font-hindi text-sm text-secondary mb-4">{scheme.titleHi}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">{scheme.description}</p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {scheme.benefits.map((benefit, i) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                      <span className="font-hindi text-muted-foreground text-xs">
                        ({scheme.benefitsHi[i]})
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certificate Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-6 md:p-8 border border-border text-center"
          >
            <p className="text-lg font-medium text-foreground mb-2">
              These programs come with <span className="text-primary">official government certificates</span> that help in employment and self-employment.
            </p>
            <p className="font-hindi text-muted-foreground">
              इन कार्यक्रमों से आधिकारिक सरकारी प्रमाणपत्र मिलता है जो नौकरी और स्व-रोजगार में मदद करता है।
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
