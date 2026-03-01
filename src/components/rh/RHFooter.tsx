import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function RHFooter() {
  return (
    <footer className="relative bg-[#030306] border-t border-white/5">
      {/* Massive brand */}
      <div className="py-32 flex items-center justify-center overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[12vw] md:text-[10vw] font-black tracking-tighter text-transparent select-none"
          style={{
            WebkitTextStroke: "1px rgba(34,211,238,0.12)",
          }}
        >
          RH SOFTWARE
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-white/35">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <span className="text-black font-black text-xs">RH</span>
            </div>
            <h4 className="text-white font-semibold tracking-wide">RH SOFTWARE</h4>
          </div>
          <p className="leading-relaxed">
            Engineering intelligent systems that transform businesses through AI and custom software architecture.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide">Navigation</h4>
          <div className="flex flex-col gap-2">
            <Link to="/rhsoftware/services" className="hover:text-white/60 transition-colors">Services</Link>
            <Link to="/rhsoftware/business" className="hover:text-white/60 transition-colors">Business</Link>
            <Link to="/rhsoftware/pricing" className="hover:text-white/60 transition-colors">Pricing</Link>
            <Link to="/rhsoftware/blog" className="hover:text-white/60 transition-colors">Blog</Link>
            <Link to="/rhsoftware/contact" className="hover:text-white/60 transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide">Contact</h4>
          <p>+91 9342470019</p>
          <p>info.razihaidar@gmail.com</p>
          <p className="mt-4 text-white/20">Saharsa, Bihar, India</p>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-white/15">
        © {new Date().getFullYear()} RH Software. All rights reserved.
      </div>
    </footer>
  );
}
