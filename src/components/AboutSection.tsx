import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, HandshakeIcon, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    titleHi: "हमारा मिशन",
    description: "Train → Certify → Place → Support Entrepreneurship",
    descriptionHi: "प्रशिक्षण → प्रमाणपत्र → नौकरी → व्यापार सहायता",
  },
  {
    icon: Lightbulb,
    title: "Practical Learning",
    titleHi: "प्रायोगिक शिक्षा",
    description: "Hands-on training with real devices and equipment",
    descriptionHi: "असली उपकरणों के साथ व्यावहारिक प्रशिक्षण",
  },
  {
    icon: HandshakeIcon,
    title: "Government Linked",
    titleHi: "सरकारी योजनाएं",
    description: "Access to Bihar Government, MSME & India Government schemes",
    descriptionHi: "बिहार सरकार, MSME और भारत सरकार की योजनाएं",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    titleHi: "करियर विकास",
    description: "Complete support from training to job placement",
    descriptionHi: "प्रशिक्षण से नौकरी तक पूर्ण सहायता",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50" ref={ref}>
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
              About Us • हमारे बारे में
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              About <span className="text-primary">SIAT</span>
            </h2>
            <p className="font-hindi text-lg text-muted-foreground max-w-3xl mx-auto">
              SIAT (सहरसा इंस्टीट्यूट ऑफ एडवांस टेक्नोलॉजी) एक कौशल विकास संस्थान है जो व्यावहारिक, 
              नौकरी-उन्मुख तकनीकी शिक्षा पर केंद्रित है।
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
                Building Technical Skills for a Better Future
              </h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                SIAT (Saharsa Institute of Advance Technology) is a skill-development institution 
                focused on practical, job-oriented technical education. We train students in 
                <strong className="text-primary"> hardware repairing and electronics</strong> while 
                also providing access to Government of Bihar, MSME, and Government of India skill schemes.
              </p>
              <p className="font-hindi text-muted-foreground mb-6 leading-relaxed">
                हम छात्रों को हार्डवेयर रिपेयरिंग और इलेक्ट्रॉनिक्स में प्रशिक्षित करते हैं और साथ ही 
                बिहार सरकार, MSME और भारत सरकार की कौशल योजनाओं तक पहुंच प्रदान करते हैं।
              </p>
              
              {/* Mission Statement */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                  Our Mission • हमारा लक्ष्य
                </h4>
                <p className="text-foreground font-medium">
                  Train → Certify → Place → Support Entrepreneurship
                </p>
                <p className="font-hindi text-muted-foreground text-sm mt-1">
                  प्रशिक्षण → प्रमाणपत्र → नौकरी → उद्यमिता सहायता
                </p>
              </div>
            </motion.div>

            {/* Right Content - Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="font-hindi text-xs text-secondary mb-2">{feature.titleHi}</p>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
