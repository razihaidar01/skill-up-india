import { motion } from "framer-motion";
import { RHLayout } from "@/components/rh/RHLayout";
import { Rocket, TrendingUp, Building2, MapPin } from "lucide-react";
import { RHGlassCard } from "@/components/rh/RHGlassCard";

const segments = [
  { icon: <Rocket size={32} />, title: "For Startups", description: "MVP development, rapid prototyping, and scalable architecture that grows with your vision. Ship fast, iterate faster." },
  { icon: <TrendingUp size={32} />, title: "For Growing Businesses", description: "Automation, custom platforms, and intelligent systems that eliminate bottlenecks and accelerate growth." },
  { icon: <Building2 size={32} />, title: "For Enterprises", description: "Enterprise-grade software, legacy modernization, and AI integration that transforms operations at scale." },
  { icon: <MapPin size={32} />, title: "For Local Businesses in Saharsa & Bihar", description: "Digital transformation for regional businesses. Modern systems, local understanding, global standards." },
];

export default function RHBusinessPage() {
  return (
    <RHLayout>
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase mb-4">
            Technology Partnership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            Built For Your Business
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-white/40 max-w-xl mx-auto">
            System-level thinking. Not design services.
          </motion.p>
        </div>
      </section>

      <section className="pb-28 bg-black">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((s, i) => (
            <RHGlassCard key={i} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
      </section>
    </RHLayout>
  );
}
