import { useState } from "react";
import { motion } from "framer-motion";
import { RHLayout } from "@/components/rh/RHLayout";
import { Send, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function RHContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: "Message sent", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", details: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <RHLayout>
      <section className="pt-32 pb-28 bg-black min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase mb-4">
              Let's Connect
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight"
            >
              Contact Us
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm flex flex-col gap-5"
            >
              {[
                { label: "Name", key: "name", type: "text" },
                { label: "Email", key: "email", type: "email" },
                { label: "Phone", key: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-xs text-white/40 tracking-wide uppercase mb-1.5 block">{field.label}</label>
                  <input
                    type={field.type}
                    required={field.key !== "phone"}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs text-white/40 tracking-wide uppercase mb-1.5 block">Project Details</label>
                <textarea
                  rows={4}
                  required
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-400/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-cyan-400 text-black font-semibold text-sm tracking-wide hover:bg-cyan-300 transition-all duration-300 disabled:opacity-50"
              >
                <Send size={16} /> {sending ? "Sending..." : "Send Message"}
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-8 justify-center"
            >
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-cyan-400 mt-1" />
                <div>
                  <p className="text-xs text-white/40 tracking-wide uppercase mb-1">Phone</p>
                  <p className="text-white font-medium">+91 9342470019</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-cyan-400 mt-1" />
                <div>
                  <p className="text-xs text-white/40 tracking-wide uppercase mb-1">Email</p>
                  <p className="text-white font-medium">info.razihaidar@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </RHLayout>
  );
}
