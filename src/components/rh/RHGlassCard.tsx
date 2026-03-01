import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface RHGlassCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export function RHGlassCard({ icon, title, description, href, index = 0 }: RHGlassCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 0 50px rgba(34,211,238,0.06), 0 0 80px rgba(99,102,241,0.04)" }}
      className="group relative p-8 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm transition-all duration-500 h-full overflow-hidden"
    >
      {/* Gradient glow edge */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-500/10" />
      </div>
      <div className="relative z-10">
        <div className="text-cyan-400 mb-5 group-hover:text-cyan-300 transition-colors duration-300">{icon}</div>
        <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-sm text-white/35 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );

  if (href) {
    return <Link to={href} className="block h-full">{content}</Link>;
  }
  return content;
}
