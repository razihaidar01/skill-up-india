import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import siatLogo from "@/assets/siat-logo.jpeg";

const quickLinks = [
  { name: "Home", nameHi: "होम", href: "#home" },
  { name: "About", nameHi: "हमारे बारे में", href: "#about" },
  { name: "Courses", nameHi: "कोर्स", href: "#courses" },
  { name: "Certification", nameHi: "प्रमाणपत्र", href: "#certification" },
  { name: "Career", nameHi: "करियर", href: "#career" },
  { name: "Contact", nameHi: "संपर्क", href: "#contact" },
];

const courses = [
  { name: "Mobile Repairing", nameHi: "मोबाइल रिपेयरिंग" },
  { name: "Laptop Repairing", nameHi: "लैपटॉप रिपेयरिंग" },
  { name: "Computer Hardware", nameHi: "कंप्यूटर हार्डवेयर" },
  { name: "Electronics Repairing", nameHi: "इलेक्ट्रॉनिक्स रिपेयरिंग" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={siatLogo}
                  alt="SIAT Logo"
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-foreground/20"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg">SIAT</h3>
                  <p className="text-xs opacity-80">Saharsa Institute of Advance Technology</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Skill Today. Earn Tomorrow. Government-linked technical education.
              </p>
              <p className="font-hindi text-sm opacity-80">
                आज सीखो। कल कमाओ। सरकारी योजनाओं से जुड़ी तकनीकी शिक्षा।
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">
                Quick Links • लिंक्स
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity"
                    >
                      {link.name} <span className="font-hindi text-xs">({link.nameHi})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="font-heading font-semibold mb-4">
                Courses • कोर्स
              </h4>
              <ul className="space-y-2">
                {courses.map((course) => (
                  <li key={course.name}>
                    <a
                      href="#courses"
                      className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity"
                    >
                      {course.name}
                      <br />
                      <span className="font-hindi text-xs">{course.nameHi}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold mb-4">
                Contact • संपर्क
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm opacity-80">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Saharsa, Bihar (सहरसा, बिहार)</span>
                </li>
                <li className="flex items-center gap-2 text-sm opacity-80">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:+917004216219" className="hover:underline">+91 7004216219</a>
                    <a href="tel:+919942115058" className="hover:underline">+91 9942115058</a>
                  </div>
                </li>
                <li className="flex items-center gap-2 text-sm opacity-80">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@siat.edu.in</span>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} SIAT – Saharsa Institute of Advance Technology. All rights reserved.
            </p>
            <p className="font-hindi text-xs opacity-60 mt-1">
              © {new Date().getFullYear()} SIAT – सहरसा इंस्टीट्यूट ऑफ एडवांस टेक्नोलॉजी। सर्वाधिकार सुरक्षित।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
