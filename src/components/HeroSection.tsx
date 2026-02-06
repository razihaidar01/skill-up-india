import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import siatLogo from "@/assets/siat-logo.jpeg";

const stats = [
  { icon: Users, value: "5000+", label: "Students Trained", labelHi: "प्रशिक्षित छात्र" },
  { icon: Award, value: "100%", label: "Job Assistance", labelHi: "नौकरी सहायता" },
  { icon: Briefcase, value: "500+", label: "Placements", labelHi: "प्लेसमेंट" },
  { icon: GraduationCap, value: "15+", label: "Courses", labelHi: "कोर्स" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Bihar's Trusted Technical Training Institute
            </span>
          </motion.div>

          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <img
              src={siatLogo}
              alt="SIAT Logo"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-lg shadow-primary/20 animate-float"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight"
          >
            <span className="text-gradient">SIAT</span> – Saharsa Institute of
            <br />
            <span className="text-primary">Advance Technology</span>
          </motion.h1>

          {/* Hindi Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-hindi text-lg md:text-xl text-muted-foreground mb-6"
          >
            आज सीखो। कल कमाओ। सरकारी योजनाओं से जुड़ी तकनीकी शिक्षा।
          </motion.p>

          {/* English Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10"
          >
            Skill Today. Earn Tomorrow. Government-linked technical education, 
            industry-ready training, and real career support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all group"
            >
              <a href="#contact">
                Apply Now - अभी अप्लाई करें
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading rounded-full px-8 py-6 text-lg transition-all"
            >
              <a href="#courses">
                Explore Courses - कोर्स देखें
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="font-heading font-bold text-2xl md:text-3xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground font-hindi">{stat.labelHi}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
