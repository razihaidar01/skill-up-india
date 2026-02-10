import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "SIAT में कौन-कौन से कोर्स उपलब्ध हैं?",
    questionEn: "What courses are available at SIAT?",
    answer:
      "SIAT में Mobile Repairing, Laptop Repairing, LED/LCD TV Repairing, Micro Soldering, Chip Level Repair, CCTV Installation, और Computer Hardware & Networking जैसे कई professional courses उपलब्ध हैं।",
  },
  {
    question: "कोर्स की अवधि कितनी है?",
    questionEn: "What is the course duration?",
    answer:
      "कोर्स की अवधि 3 महीने से 1 साल तक होती है, यह आपके चुने हुए कोर्स पर निर्भर करता है। Short-term और long-term दोनों तरह के programs उपलब्ध हैं।",
  },
  {
    question: "क्या SIAT का सर्टिफिकेट मान्य है?",
    questionEn: "Is SIAT's certificate recognized?",
    answer:
      "हाँ, SIAT MSME (Ministry of Micro, Small & Medium Enterprises) और Government of India से affiliated है। हमारा सर्टिफिकेट पूरे भारत में मान्य है।",
  },
  {
    question: "कोर्स की फीस कितनी है?",
    questionEn: "What are the course fees?",
    answer:
      "फीस कोर्स के अनुसार अलग-अलग होती है। किफायती फीस के साथ EMI की सुविधा भी उपलब्ध है। अधिक जानकारी के लिए हमसे संपर्क करें या कैंपस विजिट करें।",
  },
  {
    question: "क्या प्लेसमेंट सपोर्ट मिलता है?",
    questionEn: "Is placement support provided?",
    answer:
      "हाँ, SIAT 100% placement assistance प्रदान करता है। हम students को job placement और खुद का business शुरू करने दोनों में मदद करते हैं।",
  },
  {
    question: "Bihar Student Credit Card Yojana से एडमिशन हो सकता है?",
    questionEn: "Can I use Bihar Student Credit Card for admission?",
    answer:
      "हाँ, SIAT Bihar Student Credit Card Yojana (BSCCY) के तहत admission guidance और loan documentation में पूरी मदद करता है। इस योजना से ₹4 लाख तक का education loan मिल सकता है।",
  },
  {
    question: "10th/12th के बाद एडमिशन ले सकते हैं?",
    questionEn: "Can I take admission after 10th/12th?",
    answer:
      "हाँ, 10th और 12th दोनों के बाद एडमिशन लिया जा सकता है। कुछ basic courses के लिए 8th pass भी eligible हैं।",
  },
  {
    question: "Practical training कैसी होती है?",
    questionEn: "How is the practical training?",
    answer:
      "SIAT में 80% practical और 20% theory-based training दी जाती है। Students को real devices पर hands-on practice करने का मौका मिलता है, जिससे वे job-ready बनते हैं।",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              FAQ • अक्सर पूछे जाने वाले सवाल
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="font-hindi text-lg text-muted-foreground">
              आपके सभी सवालों के जवाब यहाँ हैं
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm md:text-base">
                        {faq.questionEn}
                      </p>
                      <p className="font-hindi text-muted-foreground text-xs md:text-sm">
                        {faq.question}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-hindi text-muted-foreground text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
