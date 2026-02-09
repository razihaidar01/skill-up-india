import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, IndianRupee, CheckCircle2, BookOpen, Phone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const eligibleCourses = [
  "B.Tech / Polytechnic",
  "BBA / MBA",
  "BCA / MCA",
  "Nursing / Pharmacy",
  "IT & Computer Courses",
  "Agriculture",
  "Hotel Management",
  "Fashion Technology",
  "Mass Communication",
];

const keyBenefits = [
  { text: "₹4 lakh tak ka education loan", textHi: "₹4 लाख तक का शिक्षा ऋण", icon: IndianRupee },
  { text: "10th aur 12th ke baad higher education", textHi: "10वीं और 12वीं के बाद उच्च शिक्षा", icon: GraduationCap },
  { text: "Kam interest rate (govt norms)", textHi: "कम ब्याज दर (सरकारी दर)", icon: IndianRupee },
  { text: "Padhai ke baad repayment suvidha", textHi: "पढ़ाई के बाद भुगतान सुविधा", icon: BookOpen },
];

const siatSupport = [
  "Course selection guidance",
  "Admission process support",
  "Loan documentation mein madad",
  "Bank coordination guidance",
];

export function BiharCreditCardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 section-bg-warm" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Bihar Student Credit Card Yojana • बिहार स्टूडेंट क्रेडिट कार्ड योजना
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Sarkari Education Loan – <span className="text-primary">Aapke Bhavishya ke Liye</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              SIAT students ko Bihar Student Credit Card Yojana ke tahat admission guidance aur loan support provide karta hai.
              Is yojana ka uddeshya Bihar ke students ko higher education ke liye financial support dena hai.
            </p>
            <p className="font-hindi text-muted-foreground mt-2">
              ताकि पैसों की वजह से पढ़ाई न रुके
            </p>
          </motion.div>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-card text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-foreground text-sm">{benefit.text}</p>
                <p className="font-hindi text-xs text-muted-foreground mt-1">{benefit.textHi}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Eligible Courses */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                Eligible Courses <span className="font-hindi text-sm text-muted-foreground">(पात्र कोर्स)</span>
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {eligibleCourses.map((course) => (
                  <div key={course} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-foreground">{course}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-2 font-hindi">
                  (और अन्य professional courses)
                </p>
              </div>
            </motion.div>

            {/* SIAT Support */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                SIAT Ka Role <span className="font-hindi text-sm text-muted-foreground">(हमारी मदद)</span>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                SIAT students ko yeh support deta hai:
              </p>
              <ul className="space-y-3 mb-6">
                {siatSupport.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted/50 rounded-xl p-4 border border-border">
                <p className="text-xs text-muted-foreground">
                  <strong>Note:</strong> Bihar Student Credit Card Yojana Bihar Government ki yojana hai. 
                  SIAT sirf guidance aur support provide karta hai.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading rounded-full px-8">
              <Link to="/contact">
                <GraduationCap className="mr-2 h-5 w-5" />
                Apply for Guidance
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-heading rounded-full px-8">
              <a href="tel:+917004216219">
                <Phone className="mr-2 h-5 w-5" />
                Visit Campus
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
