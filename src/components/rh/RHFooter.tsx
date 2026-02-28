import { Link } from "react-router-dom";

export function RHFooter() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Massive brand */}
      <div className="py-32 flex items-center justify-center overflow-hidden">
        <h2
          className="text-[12vw] md:text-[10vw] font-black tracking-tighter text-transparent select-none"
          style={{
            WebkitTextStroke: "1px rgba(34,211,238,0.15)",
          }}
        >
          RH SOFTWARE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-white/40">
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide">RH SOFTWARE</h4>
          <p className="leading-relaxed">
            Engineering intelligent systems that transform businesses through AI and custom software architecture.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide">Navigation</h4>
          <div className="flex flex-col gap-2">
            <Link to="/rhsoftware/services" className="hover:text-white/70 transition-colors">Services</Link>
            <Link to="/rhsoftware/business" className="hover:text-white/70 transition-colors">Business</Link>
            <Link to="/rhsoftware/pricing" className="hover:text-white/70 transition-colors">Pricing</Link>
            <Link to="/rhsoftware/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <Link to="/rhsoftware/contact" className="hover:text-white/70 transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide">Contact</h4>
          <p>+91 9342470019</p>
          <p>info.razihaidar@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-white/20">
        © {new Date().getFullYear()} RH Software. All rights reserved.
      </div>
    </footer>
  );
}
