import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CheckCircle2, 
  HandCoins, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Clock, 
  Users,
  Sparkles 
} from "lucide-react";

const reasons = [
  { icon: HandCoins, title: "Practical Training", titleHi: "व्यावहारिक प्रशिक्षण", desc: "Hands-on learning with real devices" },
  { icon: GraduationCap, title: "Government-Linked", titleHi: "सरकारी मान्यता", desc: "Official government scheme education" },
  { icon: Award, title: "Legal Certificates", titleHi: "कानूनी प्रमाणपत्र", desc: "Recognized & authorized certifications" },
  { icon: Briefcase, title: "Job + Self-Employment", titleHi: "नौकरी + स्व-रोजगार", desc: "Complete career support" },
  { icon: Clock, title: "Loan Assistance", titleHi: "लोन सहायता", desc: "Bank loan help for business" },
  { icon: Sparkles, title: "Affordable Fees", titleHi: "किफायती शुल्क", desc: "Quality education at low cost" },
];

const eligibility = [
  { text: "Students (10th / 12th pass or fail)", textHi: "छात्र (10वीं / 12वीं पास या फेल)" },
  { text: "ITI / Diploma holders", textHi: "ITI / डिप्लोमा धारक" },
  { text: "Job seekers", textHi: "नौकरी चाहने वाले" },
  { text: "Anyone who wants a technical skill", textHi: "जो भी तकनीकी कौशल चाहता है" },
];

export function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Why Choose SIAT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Why SIAT • SIAT क्यों?
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Why Choose <span className="text-primary">SIAT?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                SIAT offers a unique combination of practical training, government certifications, 
                and complete career support that sets us apart.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl border border-border hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <reason.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">
                        {reason.title}
                      </h4>
                      <p className="font-hindi text-xs text-secondary">{reason.titleHi}</p>
                      <p className="text-xs text-muted-foreground mt-1">{reason.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Who Can Join */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Eligibility • पात्रता
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Who Can <span className="text-primary">Join?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                SIAT welcomes everyone who wants to learn technical skills and build a career. 
                No prior experience required!
              </p>

              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    Eligibility Criteria
                  </h3>
                </div>

                <ul className="space-y-4">
                  {eligibility.map((item, index) => (
                    <motion.li
                      key={item.text}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">{item.text}</p>
                        <p className="font-hindi text-sm text-muted-foreground">{item.textHi}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-center text-muted-foreground">
                    <span className="font-medium text-foreground">No experience required!</span>
                    <br />
                    <span className="font-hindi">कोई अनुभव जरूरी नहीं!</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
