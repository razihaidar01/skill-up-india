import { useState } from "react";
import { motion } from "framer-motion";
import { RHLayout } from "@/components/rh/RHLayout";
import { useToast } from "@/hooks/use-toast";

export default function RHLoginPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Login", description: "Authentication system coming soon." });
  };

  return (
    <RHLayout>
      <section className="pt-32 pb-28 bg-[#050508] min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mx-6 p-10 rounded-2xl border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-black text-lg">RH</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mb-2">Welcome Back</h1>
            <p className="text-sm text-white/35">Sign in to your RH Software account</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-xs text-white/35 tracking-wide uppercase mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400/25 focus:shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all duration-300"
              />
            </div>
            <div>
              <label className="text-xs text-white/35 tracking-wide uppercase mb-1.5 block">Password</label>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400/25 focus:shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300"
            >
              Sign In
            </button>
          </form>
        </motion.div>
      </section>
    </RHLayout>
  );
}
