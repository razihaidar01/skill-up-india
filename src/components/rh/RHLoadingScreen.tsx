import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function RHLoadingScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-black tracking-tight"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-white">RH</span>
                  <span className="text-cyan-400"> SOFTWARE</span>
                </motion.h1>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
                className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-6 mx-auto max-w-[200px]"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.6 }}
                className="text-xs text-white/40 tracking-[0.3em] uppercase mt-4"
              >
                Engineering Intelligence
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
