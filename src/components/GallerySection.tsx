import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

import gallery1 from "@/assets/gallery/gallery-1.jpeg";
import gallery2 from "@/assets/gallery/gallery-2.jpeg";
import gallery3 from "@/assets/gallery/gallery-3.jpeg";
import gallery4 from "@/assets/gallery/gallery-4.jpeg";
import gallery5 from "@/assets/gallery/gallery-5.jpeg";
import gallery6 from "@/assets/gallery/gallery-6.jpeg";
import gallery7 from "@/assets/gallery/gallery-7.jpeg";
import gallery8 from "@/assets/gallery/gallery-8.jpeg";

const galleryImages = [
  { src: gallery1, title: "MSME Skill Training Session", titleHi: "MSME कौशल प्रशिक्षण सत्र", category: "Training" },
  { src: gallery2, title: "Students Learning Together", titleHi: "छात्र एक साथ सीख रहे हैं", category: "Classroom" },
  { src: gallery3, title: "Advanced Micro-Soldering Lab", titleHi: "माइक्रो-सोल्डरिंग लैब", category: "Lab" },
  { src: gallery4, title: "MSME Program Inauguration", titleHi: "MSME कार्यक्रम उद्घाटन", category: "Events" },
  { src: gallery5, title: "Hands-On Board Repair Training", titleHi: "बोर्ड रिपेयर प्रशिक्षण", category: "Training" },
  { src: gallery6, title: "Certificate Distribution Ceremony", titleHi: "प्रमाणपत्र वितरण समारोह", category: "Events" },
  { src: gallery7, title: "Entrepreneurship Skill Program", titleHi: "उद्यमिता कौशल कार्यक्रम", category: "Events" },
  { src: gallery8, title: "Students & Faculty Gathering", titleHi: "छात्र और शिक्षक मिलन", category: "Campus" },
];

const categories = ["All", "Training", "Classroom", "Lab", "Events", "Campus"];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Gallery • गैलरी
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Our <span className="text-primary">Campus & Activities</span>
            </h2>
            <p className="font-hindi text-lg text-muted-foreground max-w-2xl mx-auto">
              हमारे कैंपस, ट्रेनिंग सेशन, और कार्यक्रमों की झलकियां
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-border shadow-card hover:shadow-card-hover transition-all"
                onClick={() => setSelectedImage(galleryImages.indexOf(image))}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <ZoomIn className="absolute top-4 right-4 h-6 w-6 text-primary-foreground/80" />
                  <h3 className="text-primary-foreground font-heading font-semibold text-sm">
                    {image.title}
                  </h3>
                  <p className="font-hindi text-primary-foreground/80 text-xs">
                    {image.titleHi}
                  </p>
                  <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-accent/80 text-accent-foreground rounded-full w-fit">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-card/20 backdrop-blur-md rounded-full flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="max-w-4xl max-h-[85vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="text-center mt-4">
                  <h3 className="text-primary-foreground font-heading font-semibold text-lg">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="font-hindi text-primary-foreground/70">
                    {galleryImages[selectedImage].titleHi}
                  </p>
                </div>
              </motion.div>

              {/* Navigation arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev !== null ? (prev > 0 ? prev - 1 : galleryImages.length - 1) : null
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-md rounded-full flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors text-xl"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev !== null ? (prev < galleryImages.length - 1 ? prev + 1 : 0) : null
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 backdrop-blur-md rounded-full flex items-center justify-center text-primary-foreground hover:bg-card/40 transition-colors text-xl"
              >
                ›
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
