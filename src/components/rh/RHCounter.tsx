import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface RHCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export function RHCounter({ end, suffix = "", label }: RHCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="text-5xl md:text-6xl font-black tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {count}{suffix}
        </span>
      </motion.p>
      <p className="text-sm text-white/30 mt-2 tracking-wide uppercase">{label}</p>
    </div>
  );
}
