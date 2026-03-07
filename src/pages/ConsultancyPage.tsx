import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck, Leaf, HardHat, Lock, Utensils, Heart,
  GraduationCap, Award, CheckCircle2, Cpu, Landmark,
  Factory, FileCheck, ArrowRight, Phone, MapPin, Clock,
  IndianRupee, BookOpen, User, FileText, Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const isoIAF = [
  { name: "ISO 9001", subtitle: "Quality Management System", icon: ShieldCheck },
  { name: "ISO 14001", subtitle: "Environmental Management System", icon: Leaf },
  { name: "ISO 45001", subtitle: "Occupational Health & Safety", icon: HardHat },
  { name: "ISO 27001", subtitle: "Information Security Management", icon: Lock },
  { name: "ISO 22000", subtitle: "Food Safety Management", icon: Utensils },
  { name: "ISO 13485", subtitle: "Medical Devices Quality", icon: Heart },
];

const isoNonIAF = [
  { name: "ISO 29990", subtitle: "Learning Services Management", icon: GraduationCap },
  { name: "ISO 26000", subtitle: "Social Responsibility", icon: Award },
  { name: "SA 8000", subtitle: "Social Accountability", icon: Heart },
  { name: "CE Marking", subtitle: "European Conformity", icon: CheckCircle2 },
  { name: "HACCP", subtitle: "Hazard Analysis Critical Control", icon: Utensils },
  { name: "ROHS", subtitle: "Restriction of Hazardous Substances", icon: Leaf },
  { name: "FCC", subtitle: "Federal Communications Compliance", icon: Cpu },
];

const coreServices = [
  { icon: Landmark, title: "Government Projects", desc: "End-to-end support for government project tenders, documentation, compliance, and execution across Bihar and India." },
  { icon: FileCheck, title: "ISO Certification", desc: "IAF and Non-IAF ISO certification services for quality, food safety, environmental management, and more." },
  { icon: Factory, title: "MSME Registration", desc: "Complete Udyam/MSME registration, documentation, and compliance assistance for small and medium enterprises." },
];

const bsccyBenefits = [
  { text: "₹4,00,000 tak ka education loan", textHi: "₹4,00,000 तक का शिक्षा ऋण", icon: IndianRupee },
  { text: "10th / 12th ke baad higher education", textHi: "10वीं / 12वीं के बाद उच्च शिक्षा", icon: GraduationCap },
  { text: "Sarkari niyam ke anusaar interest rate", textHi: "सरकारी दर पर ब्याज", icon: IndianRupee },
  { text: "Padhai ke baad repayment suvidha", textHi: "पढ़ाई के बाद भुगतान सुविधा", icon: BookOpen },
];

const eligibleCourses = [
  "B.Tech / Polytechnic", "BBA / MBA", "BCA / MCA", "Nursing / Pharmacy",
  "IT & Computer Courses", "Agriculture", "Hotel Management", "Fashion Technology", "Mass Communication",
];

const eligibility = [
  "Student Bihar ka niwasi hona chahiye",
  "10th ya 12th pass hona avashyak",
  "Age limit: 18 se 25 saal (govt norms)",
  "Recognized institute / course mein admission",
];

const documents = [
  "Aadhaar Card", "Residence Certificate (Bihar)", "10th / 12th Marksheet",
  "Income Certificate", "Bank Account Details", "Admission related documents",
];

const govtDetails = ["Tender Documentation", "Project Registration", "Compliance & Audit Support", "Bihar State Government Projects"];
const msmeDetails = ["Udyam Registration", "MSME Certificate", "Documentation Support", "Subsidy & Scheme Guidance"];

export default function ConsultancyPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const isoRef = useRef(null);
  const isoInView = useInView(isoRef, { once: true, margin: "-100px" });
  const bsccyRef = useRef(null);
  const bsccyInView = useInView(bsccyRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section ref={heroRef} className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              SIAT Consultancy Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-foreground mb-4"
            >
              SIAT <span className="text-primary">Consultancy</span> Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground max-w-3xl mx-auto mb-2"
            >
              Government Projects, ISO Certifications (IAF & Non-IAF), MSME Registration, and Bihar Student Credit Card Yojana (BSCCY) guidance — powered by RH Software.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xs text-muted-foreground"
            >
              Reg. No.: SH-6061 &nbsp;|&nbsp; UDYAM: UDYAM-BR-29-0035052 &nbsp;|&nbsp; ISO 9001:2015 Certified
            </motion.p>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              {coreServices.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Govt + MSME detail */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card space-y-4"
              >
                <Landmark className="h-8 w-8 text-primary" />
                <h3 className="font-heading font-semibold text-xl text-foreground">Government Project Consultancy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complete support for government project registration, tender documentation, compliance requirements, and project execution guidance across Bihar and India.
                </p>
                <ul className="space-y-2">
                  {govtDetails.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card space-y-4"
              >
                <Factory className="h-8 w-8 text-primary" />
                <h3 className="font-heading font-semibold text-xl text-foreground">MSME Registration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complete Udyam/MSME registration services including documentation, online application filing, certificate generation, and compliance guidance for businesses in Saharsa and across Bihar.
                </p>
                <ul className="space-y-2">
                  {msmeDetails.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ISO CERTIFICATIONS */}
        <section ref={isoRef} className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isoInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Certification Offered
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
                ISO <span className="text-primary">Certifications</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide both IAF (Internationally Accredited) and Non-IAF ISO certifications across multiple standards.
              </p>
            </motion.div>

            {/* IAF */}
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" /> IAF Accredited Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {isoIAF.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-card-hover transition-all flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cert.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.subtitle}</p>
                  </div>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium whitespace-nowrap">IAF</span>
                </motion.div>
              ))}
            </div>

            {/* Non-IAF */}
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-secondary" /> Non-IAF Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {isoNonIAF.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-card-hover transition-all flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cert.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.subtitle}</p>
                  </div>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium whitespace-nowrap">Non-IAF</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BSCCY SECTION */}
        <section ref={bsccyRef} className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={bsccyInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Bihar Student Credit Card Yojana (BSCCY)
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
                Bihar Sarkar ki <span className="text-primary">Shiksha Loan Yojana</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Bihar Student Credit Card Yojana ke tahat Bihar ke students ko higher education ke liye ₹4 lakh tak ka education loan mil sakta hai.
              </p>
              <p className="font-hindi text-muted-foreground mt-2">
                इस योजना का मुख्य उद्देश्य यह है कि पैसों की वजह से किसी भी छात्र की पढ़ाई न रुके।
              </p>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {bsccyBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
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

            {/* Eligibility + Courses */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
                  <p className="text-xs text-muted-foreground mt-2 font-hindi">(और अन्य professional & technical courses)</p>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Guidance & Support <span className="font-hindi text-sm text-muted-foreground">(मार्गदर्शन)</span>
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {["Application process ki guidance", "Document verification support", "Bank process samajhne mein madad"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-muted/50 rounded-xl p-4 border border-border">
                    <p className="text-xs text-muted-foreground">
                      <strong>Note:</strong> Bihar Student Credit Card Yojana Bihar Government ki yojana hai. Yahan sirf guidance aur support diya jaata hai.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card text-center mb-8"
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                Contact for Guidance • <span className="font-hindi">मार्गदर्शन के लिए संपर्क करें</span>
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Saharsa, Bihar</span>
                <a href="tel:+917004216219" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-accent" /> +91 7004216219
                </a>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-secondary" /> 10 AM – 6 PM</span>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
    </div>
  );
}