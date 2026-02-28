import { motion } from "framer-motion";
import { RHLayout } from "@/components/rh/RHLayout";

const posts = [
  { title: "The Future of AI in Business Automation", excerpt: "How intelligent systems are reshaping operational efficiency across industries.", date: "Feb 2026" },
  { title: "Why Custom Software Beats Off-the-Shelf", excerpt: "Building vs buying: a technical deep-dive into scalable architecture decisions.", date: "Jan 2026" },
  { title: "Engineering Scalable Web Platforms", excerpt: "Architecture patterns for web applications that serve millions of users.", date: "Dec 2025" },
  { title: "AI-Powered Mobile Applications", excerpt: "Integrating machine learning into cross-platform mobile experiences.", date: "Nov 2025" },
  { title: "Digital Transformation for Regional Businesses", excerpt: "How businesses in Bihar and beyond are leveraging modern technology stacks.", date: "Oct 2025" },
];

export default function RHBlogPage() {
  return (
    <RHLayout>
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase mb-4">
            Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            Blog
          </motion.h1>
        </div>
      </section>

      <section className="pb-28 bg-black">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/10 transition-all duration-300 cursor-pointer"
            >
              <p className="text-xs text-cyan-400/60 mb-2 tracking-wide">{post.date}</p>
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">{post.excerpt}</p>
              <p className="text-sm text-cyan-400/60 mt-4 tracking-wide">Read More →</p>
            </motion.article>
          ))}
        </div>
      </section>
    </RHLayout>
  );
}
