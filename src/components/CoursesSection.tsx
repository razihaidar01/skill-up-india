import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Smartphone, 
  Laptop, 
  Monitor, 
  Cpu, 
  Zap, 
  Wrench, 
  Shield, 
  BookOpen,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    category: "Hardware & Repairing",
    categoryHi: "हार्डवेयर और रिपेयरिंग",
    color: "accent",
    items: [
      { icon: Smartphone, name: "Mobile Repairing", nameHi: "मोबाइल रिपेयरिंग", level: "Basic to Advanced" },
      { icon: Laptop, name: "Laptop Repairing", nameHi: "लैपटॉप रिपेयरिंग", level: "Professional" },
      { icon: Monitor, name: "Computer Hardware & Networking", nameHi: "कंप्यूटर हार्डवेयर", level: "Complete Course" },
      { icon: Cpu, name: "Electronics Items Repairing", nameHi: "इलेक्ट्रॉनिक्स रिपेयरिंग", level: "Hands-on Training" },
    ],
  },
  {
    category: "Technical Skills",
    categoryHi: "तकनीकी कौशल",
    color: "primary",
    items: [
      { icon: Zap, name: "Basic Electrical & Electronics", nameHi: "बेसिक इलेक्ट्रिकल", level: "Foundation" },
      { icon: Wrench, name: "Troubleshooting & Maintenance", nameHi: "ट्रबलशूटिंग", level: "Advanced" },
      { icon: Shield, name: "Safety & Industry Practices", nameHi: "सुरक्षा प्रक्रियाएं", level: "Essential" },
      { icon: BookOpen, name: "Tools & Equipment Training", nameHi: "उपकरण प्रशिक्षण", level: "Practical" },
    ],
  },
];

export function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-20 md:py-32" ref={ref}>
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
              Courses • कोर्स
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Courses We <span className="text-primary">Offer</span>
            </h2>
            <p className="font-hindi text-lg text-muted-foreground max-w-2xl mx-auto">
              हमारे पास विभिन्न प्रकार के कोर्स हैं जो आपको तकनीकी कौशल और करियर में मदद करेंगे
            </p>
          </motion.div>

          {/* Course Categories */}
          <div className="space-y-12">
            {courses.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-1 w-12 rounded-full ${catIndex === 0 ? 'bg-accent' : 'bg-primary'}`} />
                  <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                    {category.category}
                  </h3>
                  <span className="font-hindi text-muted-foreground">({category.categoryHi})</span>
                </div>

                {/* Course Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((course, index) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-2 cursor-pointer"
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                        catIndex === 0 
                          ? 'bg-accent/10 group-hover:bg-accent/20' 
                          : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}>
                        <course.icon className={`h-7 w-7 ${catIndex === 0 ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {course.name}
                      </h4>
                      <p className="font-hindi text-sm text-secondary mb-2">{course.nameHi}</p>
                      <span className={`inline-block text-xs px-2.5 py-1 rounded-full ${
                        catIndex === 0 
                          ? 'bg-accent/10 text-accent' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {course.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading rounded-full px-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <Link to="/contact">
                Enroll Now - अभी दाखिला लें
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
