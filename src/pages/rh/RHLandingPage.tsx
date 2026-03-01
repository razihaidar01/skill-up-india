import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RHLayout } from "@/components/rh/RHLayout";
import { RHLoadingScreen } from "@/components/rh/RHLoadingScreen";
import { RHHeroBackground } from "@/components/rh/RHHeroBackground";
import { RHCounter } from "@/components/rh/RHCounter";
import { RHGlassCard } from "@/components/rh/RHGlassCard";
import { Brain, Globe, Smartphone, Cog, Workflow, ArrowRight, Zap, Shield, Cpu, Users, Palette } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function RHLandingPage() {
  return (
    <RHLoadingScreen>
      <RHLayout>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <RHHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/40 via-transparent to-[#050508] z-[1]" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
              className="text-xs tracking-[0.3em] text-cyan-400/60 uppercase mb-6"
            >
              Next-Generation AI Engineering
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white"
            >
              Engineering the Future
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
                with AI & Digital Innovation
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.9 }}
              className="mt-6 text-base md:text-lg text-white/35 max-w-2xl mx-auto leading-relaxed"
            >
              RH Software builds intelligent solutions that transform businesses through AI, web, mobile, and software technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/rhsoftware/contact"
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Your Project
              </Link>
              <Link
                to="/rhsoftware/services"
                className="px-8 py-3.5 rounded-lg border border-white/10 text-white/70 font-medium text-sm tracking-wide hover:border-cyan-400/20 hover:bg-cyan-400/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SCROLL MARQUEE */}
        <section className="py-12 border-y border-white/[0.03] overflow-hidden bg-[#030306]">
          <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-5xl md:text-7xl font-black text-white/[0.03] tracking-tight mx-8 select-none">
                YOUR IDEAS. OUR INTELLIGENCE. &nbsp; AI. APPS. SYSTEMS. &nbsp; BUILT FOR THE FUTURE. &nbsp;
              </span>
            ))}
          </div>
        </section>

        {/* COUNTERS */}
        <section className="py-28 bg-[#050508]">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            <RHCounter end={150} suffix="+" label="Projects Engineered" />
            <RHCounter end={98} suffix="%" label="Client Satisfaction" />
            <RHCounter end={50} suffix="+" label="AI Systems Deployed" />
            <RHCounter end={24} suffix="/7" label="Automation Solutions" />
          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="py-28 bg-[#050508] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.01] to-transparent" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.3em] text-cyan-400/50 uppercase mb-3">
                What We Engineer
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Engineering Services
              </motion.h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <RHGlassCard icon={<Brain size={28} />} title="AI Development" description="Custom AI systems, automation, and predictive logic for intelligent operations." href="/rhsoftware/services" index={0} />
              <RHGlassCard icon={<Globe size={28} />} title="Web Application Engineering" description="High-performance, scalable web platforms built for growth." href="/rhsoftware/services" index={1} />
              <RHGlassCard icon={<Palette size={28} />} title="Website Design & Development" description="Beautiful, responsive websites crafted with modern design principles." href="/rhsoftware/services" index={2} />
              <RHGlassCard icon={<Smartphone size={28} />} title="App Development" description="Android & cross-platform mobile applications with precision." href="/rhsoftware/services" index={3} />
              <RHGlassCard icon={<Cog size={28} />} title="Custom Software Engineering" description="Enterprise-grade business systems and internal tools." href="/rhsoftware/services" index={4} />
              <RHGlassCard icon={<Workflow size={28} />} title="Business Automation" description="Workflow automation, CRM systems, and intelligent process optimization." href="/rhsoftware/services" index={5} />
            </div>
          </div>
        </section>

        {/* BUILT FOR MAKERS */}
        <section className="py-28 bg-[#030306] border-t border-white/[0.03]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight mb-12"
            >
              BUILT FOR MAKERS
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Founders", "Startups", "Developers", "Enterprises"].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="px-8 py-4 rounded-full border border-white/[0.06] text-white/50 text-sm tracking-wide bg-gradient-to-br from-white/[0.03] to-transparent hover:border-cyan-400/15 hover:text-cyan-400/70 transition-all duration-500 cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* WHY RH SOFTWARE */}
        <section className="py-28 bg-[#050508]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white tracking-tight text-center mb-16"
            >
              Why RH Software
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <RHGlassCard icon={<Zap size={28} />} title="Innovation-Driven Engineering" description="We don't follow trends. We architect the future with precision engineering." index={0} />
              <RHGlassCard icon={<Shield size={28} />} title="Scalable Architecture" description="Systems built to grow with your business, from launch to millions of users." index={1} />
              <RHGlassCard icon={<Cpu size={28} />} title="Future-Ready AI Systems" description="Intelligent automation that adapts, learns, and evolves with your needs." index={2} />
              <RHGlassCard icon={<Users size={28} />} title="Human-Centered Design" description="Technology that serves people, not the other way around." index={3} />
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="py-28 bg-[#030306]">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-12 md:p-16 rounded-3xl border border-white/[0.04] bg-gradient-to-br from-white/[0.02] to-cyan-400/[0.01] backdrop-blur-sm"
            >
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4">
                Start Building Intelligent Systems Today.
              </h2>
              <p className="text-white/30 mb-8">Let's engineer something extraordinary together.</p>
              <Link
                to="/rhsoftware/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-300"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </RHLayout>
    </RHLoadingScreen>
  );
}
