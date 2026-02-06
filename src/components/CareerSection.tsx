import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, FileText, Headphones, Store, Banknote, Settings, HeartHandshake } from "lucide-react";

const jobSupport = [
  { icon: Briefcase, title: "Job Assistance", titleHi: "नौकरी सहायता", desc: "Direct placement in service centers & companies" },
  { icon: Users, title: "Industry Connections", titleHi: "उद्योग संपर्क", desc: "Connect with leading repair & tech companies" },
  { icon: FileText, title: "Interview Preparation", titleHi: "साक्षात्कार तैयारी", desc: "Mock interviews & communication skills" },
  { icon: Headphones, title: "Resume Support", titleHi: "रिज्यूमे सहायता", desc: "Professional resume & skill verification" },
];

const businessSupport = [
  { icon: Store, title: "Shop Setup Guidance", titleHi: "दुकान सेटअप", desc: "Complete guidance to open your own repair shop" },
  { icon: Banknote, title: "Bank Loan Assistance", titleHi: "बैंक लोन सहायता", desc: "Help with loan applications & documentation" },
  { icon: Settings, title: "Business Planning", titleHi: "व्यापार योजना", desc: "Costing, pricing & business setup support" },
  { icon: HeartHandshake, title: "Ongoing Support", titleHi: "निरंतर सहायता", desc: "Technical support even after course completion" },
];

export function CareerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className="py-20 md:py-32 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Career Support • करियर सहायता
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Career & <span className="text-primary">Job Support</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              After course completion, SIAT provides complete support for your career journey — 
              whether you want a job or want to start your own business.
            </p>
            <p className="font-hindi text-muted-foreground mt-2">
              कोर्स पूरा होने के बाद, हम आपके करियर में पूर्ण सहायता प्रदान करते हैं
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Job Support */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    Job Placement
                  </h3>
                  <p className="font-hindi text-sm text-muted-foreground">नौकरी प्लेसमेंट</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {jobSupport.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                      <p className="font-hindi text-xs text-secondary">{item.titleHi}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Business Support */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Store className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    Start Your Own Shop
                  </h3>
                  <p className="font-hindi text-sm text-muted-foreground">अपनी दुकान शुरू करें</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {businessSupport.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                      <p className="font-hindi text-xs text-secondary">{item.titleHi}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Entrepreneur Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-gradient-to-r from-secondary/10 via-primary/5 to-accent/10 rounded-2xl p-6 md:p-8 border border-secondary/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-1">
                  Want to become an Entrepreneur? • उद्यमी बनना चाहते हैं?
                </h3>
                <p className="text-muted-foreground">
                  SIAT helps you open your own repair shop with complete business support & bank loan assistance.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                <Banknote className="h-5 w-5 text-secondary" />
                <span className="font-medium text-foreground">Bank Loan Help</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
