import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    name: "Rahul Kumar",
    nameHi: "राहुल कुमार",
    course: "Mobile Repairing",
    courseHi: "मोबाइल रिपेयरिंग",
    image: testimonial1,
    rating: 5,
    text: "SIAT changed my life. After completing mobile repairing course, I opened my own shop in Saharsa. Now I earn ₹30,000+ monthly!",
    textHi: "SIAT ने मेरी ज़िंदगी बदल दी। मोबाइल रिपेयरिंग कोर्स पूरा करने के बाद, मैंने सहरसा में अपनी दुकान खोली।",
  },
  {
    name: "Priya Kumari",
    nameHi: "प्रिया कुमारी",
    course: "Computer Hardware",
    courseHi: "कंप्यूटर हार्डवेयर",
    image: testimonial2,
    rating: 5,
    text: "As a woman, I was hesitant at first. But SIAT's supportive environment helped me become a confident computer technician. Government certificate was a bonus!",
    textHi: "SIAT के सहयोगी माहौल ने मुझे एक आत्मविश्वासी कंप्यूटर तकनीशियन बनने में मदद की।",
  },
  {
    name: "Amit Verma",
    nameHi: "अमित वर्मा",
    course: "Laptop Repairing",
    courseHi: "लैपटॉप रिपेयरिंग",
    image: testimonial3,
    rating: 5,
    text: "I got placed at a service center within 2 weeks of completing my course. The practical training at SIAT is unmatched. Highly recommend!",
    textHi: "कोर्स पूरा करने के 2 हफ्ते के भीतर मुझे सर्विस सेंटर में नौकरी मिल गई।",
  },
  {
    name: "Sanjay Yadav",
    nameHi: "संजय यादव",
    course: "Electronics Repairing",
    courseHi: "इलेक्ट्रॉनिक्स रिपेयरिंग",
    image: testimonial4,
    rating: 5,
    text: "SIAT helped me get a bank loan to start my electronics repair shop. Their support goes beyond just teaching — they truly care about your success.",
    textHi: "SIAT ने मुझे इलेक्ट्रॉनिक्स रिपेयर शॉप खोलने के लिए बैंक लोन दिलाने में मदद की।",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-20 md:py-32 section-bg-warm" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Success Stories • सफलता की कहानियाँ
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Our Students, <span className="text-primary">Our Pride</span>
            </h2>
            <p className="font-hindi text-lg text-muted-foreground max-w-2xl mx-auto">
              हमारे छात्र, हमारा गर्व — देखिए हमारे छात्रों ने SIAT से ट्रेनिंग लेकर कैसे अपना करियर बनाया
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-card-hover transition-all group"
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-secondary/30 mb-4" />

                {/* Review Text */}
                <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-2">
                  "{t.text}"
                </p>
                <p className="font-hindi text-sm text-muted-foreground mb-6">
                  "{t.textHi}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm">
                      {t.name}{" "}
                      <span className="font-hindi text-muted-foreground font-normal">
                        ({t.nameHi})
                      </span>
                    </h4>
                    <p className="text-xs text-accent">
                      {t.course}{" "}
                      <span className="font-hindi text-muted-foreground">
                        • {t.courseHi}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
