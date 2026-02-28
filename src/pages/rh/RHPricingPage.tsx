import { motion } from "framer-motion";
import { RHLayout } from "@/components/rh/RHLayout";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Foundation",
    price: "Custom",
    description: "For startups and small projects",
    features: ["Single web or mobile app", "Basic AI integration", "3 months support", "Source code delivery", "Responsive design"],
  },
  {
    name: "Growth",
    price: "Custom",
    description: "For scaling businesses",
    features: ["Multi-platform development", "Advanced AI systems", "6 months support", "Priority communication", "Performance optimization", "Analytics integration"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: ["Full-stack engineering", "Custom AI pipelines", "12 months support", "Dedicated team", "SLA guarantees", "Security auditing", "Ongoing maintenance"],
  },
];

export default function RHPricingPage() {
  return (
    <RHLayout>
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase mb-4">
            Investment
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            Pricing Plans
          </motion.h1>
        </div>
      </section>

      <section className="pb-28 bg-black">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm flex flex-col ${
                plan.highlight
                  ? "border-cyan-400/20 bg-cyan-400/[0.03]"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-black text-xs font-semibold tracking-wide">
                  Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
              <p className="text-white/40 text-sm mt-1 mb-6">{plan.description}</p>
              <p className="text-3xl font-black text-white mb-8">{plan.price}</p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/50">
                    <Check size={14} className="text-cyan-400 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/rhsoftware/contact"
                className={`w-full text-center py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                    : "border border-white/10 text-white/70 hover:bg-white/5"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </RHLayout>
  );
}
