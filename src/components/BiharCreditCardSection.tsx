import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, IndianRupee, CheckCircle2, BookOpen, Phone, MapPin, Clock, FileText, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const keyBenefits = [
  { text: "₹4,00,000 tak ka education loan", textHi: "₹4,00,000 तक का शिक्षा ऋण", icon: IndianRupee },
  { text: "10th / 12th ke baad higher education", textHi: "10वीं / 12वीं के बाद उच्च शिक्षा", icon: GraduationCap },
  { text: "Sarkari niyam ke anusaar interest rate", textHi: "सरकारी दर पर ब्याज", icon: IndianRupee },
  { text: "Padhai ke baad repayment suvidha", textHi: "पढ़ाई के बाद भुगतान सुविधा", icon: BookOpen },
];

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

const eligibility = [
  "Student Bihar ka niwasi hona chahiye",
  "10th ya 12th pass hona avashyak",
  "Age limit: 18 se 25 saal (govt norms)",
  "Recognized institute / course mein admission",
];

const documents = [
  "Aadhaar Card",
  "Residence Certificate (Bihar)",
  "10th / 12th Marksheet",
  "Income Certificate",
  "Bank Account Details",
  "Admission related documents",
];

const guidanceSupport = [
  "Application process ki guidance",
  "Document verification support",
  "Bank process samajhne mein madad",
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
              Bihar Student Credit Card Yojana (BSCCY) • बिहार स्टूडेंट क्रेडिट कार्ड योजना
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Bihar Sarkar ki <span className="text-primary">Shiksha Loan Yojana</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Bihar Student Credit Card Yojana (BSCCY) Bihar Government ki ek important scheme hai jiske tahat Bihar ke students ko higher education ke liye ₹4 lakh tak ka education loan mil sakta hai.
            </p>
            <p className="font-hindi text-muted-foreground mt-2 text-lg">
              इस योजना का मुख्य उद्देश्य यह है कि पैसों की वजह से किसी भी छात्र की पढ़ाई न रुके।
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

          {/* Eligibility + Documents */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Yogyata <span className="font-hindi text-sm text-muted-foreground">(पात्रता)</span>
              </h3>
              <ul className="space-y-3 mb-6">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2 mt-6">
                <FileText className="h-5 w-5 text-primary" />
                Zaroori Documents <span className="font-hindi text-sm text-muted-foreground">(जरूरी कागजात)</span>
              </h3>
              <ul className="space-y-2">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Eligible Courses */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Eligible Courses <span className="font-hindi text-sm text-muted-foreground">(पात्र कोर्स)</span>
              </h3>
              <div className="grid grid-cols-1 gap-2 mb-6">
                {eligibleCourses.map((course) => (
                  <div key={course} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-foreground">{course}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-2 font-hindi">
                  (और अन्य professional & technical courses)
                </p>
              </div>

              {/* Guidance & Support */}
              <div className="border-t border-border pt-6">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Guidance & Support <span className="font-hindi text-sm text-muted-foreground">(मार्गदर्शन)</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Students aur parents ko BSCCY ke liye:
                </p>
                <ul className="space-y-2 mb-4">
                  {guidanceSupport.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-muted/50 rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground">
                    <strong>Note:</strong> Bihar Student Credit Card Yojana Bihar Government ki yojana hai. 
                    Yahan sirf guidance aur support diya jaata hai.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact for Guidance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card text-center mb-8"
          >
            <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
              Contact for Guidance • <span className="font-hindi">मार्गदर्शन के लिए संपर्क करें</span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Saharsa, Bihar
              </span>
              <a href="tel:+917004216219" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-accent" /> +91 7004216219
              </a>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" /> 10 AM – 6 PM
              </span>
            </div>
            <p className="font-hindi text-muted-foreground mt-3 text-sm">
              आज ही जानकारी लें और अपनी पढ़ाई का सपना पूरा करें
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
                Call / WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
