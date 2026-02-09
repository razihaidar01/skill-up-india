import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight, Download, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import siatLogo from "@/assets/siat-logo.jpeg";

const EMAILJS_SERVICE_ID = "service_w6ezbl6";
const EMAILJS_TEMPLATE_ID = "template_4ue7zfg";
const EMAILJS_PUBLIC_KEY = "bp7IsGDquJOuw1BUW";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          message: formData.message,
          to_email: "siat.sws@gmail.com",
          reply_to: formData.email || "siat.sws@gmail.com",
          email: "siat.sws@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Enquiry Submitted! • पूछताछ भेज दी गई!",
        description: "We will contact you soon. हम जल्द ही आपसे संपर्क करेंगे।",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or call us directly. कृपया पुनः प्रयास करें।",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 section-bg-navy" ref={ref}>
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
              Contact Us • संपर्क करें
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Enroll Today & Build a <span className="text-primary">Secure Career</span>
            </h2>
            <p className="font-hindi text-lg text-muted-foreground">
              आज ही दाखिला लें और एक सुरक्षित तकनीकी करियर बनाएं
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card"
            >
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                Apply Now • अभी अप्लाई करें
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill the form below and we'll contact you with course details.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Name • नाम <span className="text-destructive">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Phone • फोन <span className="text-destructive">*</span>
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Email • ईमेल
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Message • संदेश
                  </label>
                  <Textarea
                    placeholder="Which course are you interested in?"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading rounded-full shadow-lg hover:shadow-xl transition-all group"
                >
                  {isSubmitting ? "Sending... भेज रहे हैं..." : "Submit Application"}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Logo Card */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card flex items-center gap-4">
                <img
                  src={siatLogo}
                  alt="SIAT Logo"
                  className="w-20 h-20 rounded-full object-cover shadow-md"
                />
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary">SIAT</h3>
                  <p className="text-sm text-muted-foreground">
                    Saharsa Institute of Advance Technology
                  </p>
                  <p className="font-hindi text-sm text-muted-foreground">
                    सहरसा इंस्टीट्यूट ऑफ एडवांस टेक्नोलॉजी
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-card rounded-2xl p-6 border border-border shadow-card space-y-4">
                <h4 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Contact Details • संपर्क विवरण
                </h4>

                <a
                  href="#"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Saharsa, Bihar
                    </p>
                    <p className="font-hindi text-sm text-muted-foreground">सहरसा, बिहार</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+917004216219"
                      className="block font-medium text-foreground hover:text-accent transition-colors"
                    >
                      +91 7004216219
                    </a>
                    <a
                      href="tel:+919942115058"
                      className="block font-medium text-foreground hover:text-accent transition-colors"
                    >
                      +91 9942115058
                    </a>
                    <p className="font-hindi text-sm text-muted-foreground">कॉल करें</p>
                  </div>
                </div>

                <a
                  href="mailto:siat.sws@gmail.com"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-secondary transition-colors">
                      siat.sws@gmail.com
                    </p>
                    <p className="font-hindi text-sm text-muted-foreground">ईमेल करें</p>
                  </div>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading rounded-full"
                >
                  <a href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-heading rounded-full"
                >
                  <a href="#">
                    <Building className="mr-2 h-4 w-4" />
                    Visit Campus
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
