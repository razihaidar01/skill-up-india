import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RHLayout } from "@/components/rh/RHLayout";
import { RHGlassCard } from "@/components/rh/RHGlassCard";
import {
  Landmark, FileCheck, Factory, ShieldCheck, Leaf, HardHat,
  Lock, Utensils, GraduationCap, Heart, Award, Cpu, Zap, CheckCircle2, ArrowRight
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const isoIAF = [
  { name: "ISO 9001", subtitle: "Quality Management System", icon: <ShieldCheck size={24} /> },
  { name: "ISO 14001", subtitle: "Environmental Management System", icon: <Leaf size={24} /> },
  { name: "ISO 45001", subtitle: "Occupational Health & Safety", icon: <HardHat size={24} /> },
  { name: "ISO 27001", subtitle: "Information Security Management", icon: <Lock size={24} /> },
  { name: "ISO 22000", subtitle: "Food Safety Management", icon: <Utensils size={24} /> },
  { name: "ISO 13485", subtitle: "Medical Devices Quality", icon: <Heart size={24} /> },
];

const isoNonIAF = [
  { name: "ISO 29990", subtitle: "Learning Services Management", icon: <GraduationCap size={24} /> },
  { name: "ISO 26000", subtitle: "Social Responsibility", icon: <Award size={24} /> },
  { name: "SA 8000", subtitle: "Social Accountability", icon: <Heart size={24} /> },
  { name: "CE Marking", subtitle: "European Conformity", icon: <CheckCircle2 size={24} /> },
  { name: "HACCP", subtitle: "Hazard Analysis Critical Control", icon: <Utensils size={24} /> },
  { name: "ROHS", subtitle: "Restriction of Hazardous Substances", icon: <Leaf size={24} /> },
  { name: "FCC", subtitle: "Federal Communications Compliance", icon: <Cpu size={24} /> },
];

export default function RHConsultancyPage() {
  return (
    <RHLayout>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-[#050508]">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/[0.02] via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.3em] text-cyan-400/60 uppercase mb-4">
            RH Software Consultancy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            Consultancy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-white/35 max-w-2xl mx-auto"
          >
            Government Projects, ISO Certification, and MSME Registration — we handle the paperwork so you can focus on building.
          </motion.p>
        </div>
      </section>

      {/* CORE CONSULTANCY SERVICES */}
      <section className="py-24 bg-[#050508]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <RHGlassCard
              icon={<Landmark size={28} />}
              title="Government Projects"
              description="End-to-end support for government project tenders, documentation, compliance, and execution across Bihar and India."
              index={0}
            />
            <RHGlassCard
              icon={<FileCheck size={28} />}
              title="ISO Certification"
              description="We provide IAF and Non-IAF ISO certification services for quality management, food safety, environmental, and more."
              index={1}
            />
            <RHGlassCard
              icon={<Factory size={28} />}
              title="MSME Registration"
              description="Complete MSME/Udyam registration, documentation, and compliance assistance for small and medium enterprises."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* IAF CERTIFICATIONS */}
      <section className="py-24 bg-[#030306] border-t border-white/[0.03]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.3em] text-cyan-400/50 uppercase mb-3">
              Accredited Standards
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-black text-white tracking-tight">
              IAF Certifications
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-3 text-white/30 max-w-xl mx-auto text-sm">
              Internationally Accredited Forum recognized certifications for global credibility.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {isoIAF.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-cyan-400/15 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{cert.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                    <p className="text-xs text-white/30">{cert.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 font-medium">
                    IAF Accredited
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NON-IAF CERTIFICATIONS */}
      <section className="py-24 bg-[#050508]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.3em] text-cyan-400/50 uppercase mb-3">
              Additional Standards
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Non-IAF Certifications
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-3 text-white/30 max-w-xl mx-auto text-sm">
              Industry-specific compliance and standards certifications.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {isoNonIAF.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-indigo-400/15 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors">{cert.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                    <p className="text-xs text-white/30">{cert.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-400/10 text-indigo-400 border border-indigo-400/20 font-medium">
                    Non-IAF
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MSME & GOVERNMENT DETAIL */}
      <section className="py-24 bg-[#030306] border-t border-white/[0.03]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-cyan-400"><Landmark size={32} /></div>
              <h3 className="text-2xl md:text-3xl font-black text-white">Government Project Consultancy</h3>
              <p className="text-white/35 leading-relaxed text-sm">
                We provide complete support for government project registration, tender documentation, compliance requirements,
                and project execution guidance. From state-level Bihar projects to central government schemes, our team ensures
                smooth processing and timely delivery.
              </p>
              <ul className="space-y-2 text-sm text-white/40">
                {["Tender Documentation", "Project Registration", "Compliance & Audit Support", "Bihar State Government Projects"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-cyan-400"><Factory size={32} /></div>
              <h3 className="text-2xl md:text-3xl font-black text-white">MSME Registration</h3>
              <p className="text-white/35 leading-relaxed text-sm">
                Complete Udyam/MSME registration services including documentation, online application filing, certificate generation,
                and compliance guidance. We help businesses in Saharsa and across Bihar obtain their MSME credentials efficiently.
              </p>
              <ul className="space-y-2 text-sm text-white/40">
                {["Udyam Registration", "MSME Certificate", "Documentation Support", "Subsidy & Scheme Guidance"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050508]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 md:p-16 rounded-3xl border border-white/[0.04] bg-gradient-to-br from-white/[0.02] to-cyan-400/[0.01]"
          >
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4">
              Need Certification or Registration?
            </h2>
            <p className="text-white/30 mb-8 text-sm">Get in touch and we'll guide you through the entire process.</p>
            <Link
              to="/rhsoftware/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </RHLayout>
  );
}
