import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services", href: "/rhsoftware/services" },
  { label: "Consultancy", href: "/rhsoftware/consultancy" },
  { label: "Business", href: "/rhsoftware/business" },
  { label: "Pricing", href: "/rhsoftware/pricing" },
  { label: "Blog", href: "/rhsoftware/blog" },
  { label: "Contact", href: "/rhsoftware/contact" },
];

export function RHNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/rhsoftware" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <span className="text-black font-black text-lg">RH</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            SOFTWARE
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                location.pathname === l.href
                  ? "text-cyan-400"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/rhsoftware/login"
            className="text-sm px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
          >
            Log In
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/rhsoftware/login"
                onClick={() => setOpen(false)}
                className="text-sm text-cyan-400"
              >
                Log In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
