import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1713254249770-7e9a688064d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjBjaXR5fGVufDF8fHx8MTc2Mzc5Njg3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Urban Adventure",
    width: 1080,
    height: 720,
  },
  {
    url: "https://images.unsplash.com/photo-1759109648771-8ccdf3354c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNvbW11dGUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzNzk2ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Daily Commute",
    width: 1080,
    height: 720,
  },
  {
    url: "https://images.unsplash.com/photo-1563394444438-354a7244f53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzYzNzk2ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Future Mobility",
    width: 1080,
    height: 720,
  },
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="py-32 bg-white relative overflow-hidden"
      id="gallery"
    >
      <div className="container mx-auto px-6 mb-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-[#10b981]/10 rounded-full mb-6 border border-[#10b981]/20"
          >
            <span className="text-sm text-[#10b981]">Lifestyle</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6">
            Life on a <span className="text-[#10b981]">VoltRide</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of riders transforming their daily commute into an
            experience.
          </p>
        </motion.div>
      </div>

      {/* Full-width scrolling gallery */}
      <div className="relative">
        {/* Main large image */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [100, -100]),
          }}
          className="relative h-[600px] mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-full overflow-hidden"
          >
            <ImageWithFallback
              src={galleryImages[0].url}
              alt={galleryImages[0].caption}
              className="w-full h-full object-cover"
              width={galleryImages[0].width}
              height={galleryImages[0].height}
              loading="lazy"
              title={galleryImages[0].caption}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-12 left-12 text-white"
            >
              <h3 className="text-4xl mb-2">{galleryImages[0].caption}</h3>
              <p className="text-lg text-white/80">
                Experience freedom on every ride
              </p>
            </motion.div>
          </motion.div>

          {/* Motion blur effect overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
          </div>
        </motion.div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto">
          {galleryImages.slice(1).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                y: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [index % 2 === 0 ? 50 : -50, index % 2 === 0 ? -50 : 50]
                ),
              }}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  title={image.caption}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Caption */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="absolute bottom-8 left-8 text-white"
                >
                  <h4 className="text-2xl mb-1">{image.caption}</h4>
                  <motion.div
                    className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-sm text-white/80">View story</span>
                    <span className="text-[#10b981]">→</span>
                  </motion.div>
                </motion.div>

                {/* Green accent line */}
                <motion.div className="absolute top-0 left-0 right-0 h-1 bg-[#10b981] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-20 px-6"
        >
          <div className="bg-gradient-to-br from-gray-900 to-[#111] rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-5xl mb-3 text-[#10b981]"
                >
                  50K+
                </motion.div>
                <div className="text-white/60">Happy Riders</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                  className="text-5xl mb-3 text-[#10b981]"
                >
                  5M+
                </motion.div>
                <div className="text-white/60">Kilometers Traveled</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  className="text-5xl mb-3 text-[#10b981]"
                >
                  98%
                </motion.div>
                <div className="text-white/60">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
