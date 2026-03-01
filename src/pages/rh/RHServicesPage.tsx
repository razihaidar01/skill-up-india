import { motion } from "framer-motion";
import { RHLayout } from "@/components/rh/RHLayout";
import { RHGlassCard } from "@/components/rh/RHGlassCard";
import { Brain, Globe, Smartphone, Cog, Workflow, Palette } from "lucide-react";

const services = [
  { icon: <Brain size={32} />, title: "AI Development", description: "Custom AI systems, machine learning models, automation pipelines, and predictive logic engines. We build intelligence that scales with your business." },
  { icon: <Globe size={32} />, title: "Website & Web Application Engineering", description: "High-performance, scalable web platforms engineered for speed, security, and seamless user experience. From SaaS to enterprise portals." },
  { icon: <Palette size={32} />, title: "Website Design & Development", description: "Beautiful, responsive websites designed with modern aesthetics and crafted with clean code. From landing pages to full corporate web presences." },
  { icon: <Smartphone size={32} />, title: "Mobile App Engineering", description: "Android & cross-platform mobile applications built with precision architecture. Native performance, cross-platform efficiency." },
  { icon: <Cog size={32} />, title: "Enterprise Software Development", description: "Business systems, internal tools, and enterprise-grade platforms designed for complex operational needs and large-scale deployment." },
  { icon: <Workflow size={32} />, title: "Business Automation", description: "Workflow automation, CRM systems, process optimization, and intelligent automation that eliminates manual overhead and scales operations." },
];

export default function RHServicesPage() {
  return (
    <RHLayout>
      <section className="pt-32 pb-20 bg-[#050508]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.3em] text-cyan-400/50 uppercase mb-4">
            What We Build
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            Engineering Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-white/35 max-w-xl mx-auto"
          >
            Precision-engineered solutions for every layer of your technology stack.
          </motion.p>
        </div>
      </section>

      <section className="pb-28 bg-[#050508]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-8">
          {services.map((s, i) => (
            <RHGlassCard key={i} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
      </section>
    </RHLayout>
  );
}
