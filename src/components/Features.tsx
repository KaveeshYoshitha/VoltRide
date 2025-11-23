import { motion } from "motion/react";
import { Zap, Gauge, Battery, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Extended Range",
    description: "Up to 50km on a single charge. Go further, worry less.",
    gradient: "from-[#10b981] to-[#059669]",
  },
  {
    icon: Gauge,
    title: "Peak Speed",
    description: "Reach speeds up to 45km/h with our powerful motor.",
    gradient: "from-[#10b981] to-[#10b981]",
  },
  {
    icon: Battery,
    title: "Fast Charging",
    description: "Fully charged in 3 hours. Quick power-ups anytime.",
    gradient: "from-[#059669] to-[#047857]",
  },
  {
    icon: Smartphone,
    title: "Smart Dashboard",
    description: "Real-time stats, GPS tracking, and ride analytics.",
    gradient: "from-[#10b981] to-[#0d9668]",
  },
];

export function Features() {
  return (
    <section
      className="py-32 bg-white relative overflow-hidden"
      id="performance"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#10b981]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-[#10b981]/10 rounded-full mb-6 border border-[#10b981]/20"
          >
            <span className="text-sm text-[#10b981]">
              Engineering Excellence
            </span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6">
            Designed for <span className="text-[#10b981]">Performance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every component engineered to perfection. Experience the future of
            urban mobility.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#10b981]/20 transition-all duration-500 border border-gray-100 h-full">
                  {/* Gradient glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  />

                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-[#10b981]/30`}
                    >
                      <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Floating accent */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-6 flex items-center text-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-sm">Learn more</span>
                    <motion.span className="ml-2">→</motion.span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
              <span className="text-sm text-gray-500">Zero Emissions</span>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
              <span className="text-sm text-gray-500">Smart Technology</span>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
              <span className="text-sm text-gray-500">Premium Build</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
