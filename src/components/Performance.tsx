import { motion } from "motion/react";
import { Cpu, Zap, Fan } from "lucide-react";

export function Performance() {
  return (
    <section
      className="pt-16 pb-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      id="features"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: 3D Exploded View */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center min-h-[600px]">
              {/* Exploded battery and motor visualization */}

              {/* Top Component - Battery Management System */}
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                whileInView={{ y: -100, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute top-20 left-1/2 -translate-x-1/2"
              >
                <div className="relative">
                  <div className="w-48 h-32 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Cpu className="h-6 w-6 text-[#10b981]" />
                      <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-1 bg-[#10b981]/30 rounded-full w-full" />
                      <div className="h-1 bg-[#10b981]/30 rounded-full w-3/4" />
                      <div className="h-1 bg-[#10b981]/30 rounded-full w-1/2" />
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-[#10b981]/20 rounded-2xl blur-xl"
                  />
                </div>
              </motion.div>

              {/* Middle Component - Battery Pack */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="w-64 h-40 bg-gradient-to-br from-[#111] via-gray-900 to-[#111] rounded-3xl shadow-2xl border border-gray-800 overflow-hidden">
                    {/* Battery cells */}
                    <div className="flex items-center justify-center h-full gap-2 p-6">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="w-8 h-full bg-gradient-to-t from-[#10b981] to-[#10b981]/50 rounded-lg"
                        />
                      ))}
                    </div>

                    {/* Energy indicator */}
                    <div className="absolute top-4 right-4">
                      <Zap className="h-6 w-6 text-[#10b981]" />
                    </div>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-[#10b981]/30 rounded-3xl blur-2xl"
                  />
                </div>
              </motion.div>

              {/* Bottom Component - Motor */}
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                whileInView={{ y: 120, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
              >
                <div className="relative">
                  <div className="w-56 h-56 bg-gradient-to-br from-gray-900 via-[#111] to-gray-900 rounded-full shadow-2xl border-4 border-gray-800 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="relative"
                    >
                      <Fan className="h-20 w-20 text-[#10b981]" />

                      {/* Rotor blades */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-10 bg-gradient-to-t from-[#10b981] to-transparent origin-bottom -translate-x-1/2 absolute top-1/2 left-1/2"
                            style={{
                              transform: `translateX(-50%) rotate(${
                                i * 45
                              }deg)`,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Motor glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-[#10b981]/30 rounded-full blur-2xl"
                  />
                </div>
              </motion.div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full -z-10">
                <motion.line
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  x1="50%"
                  y1="30%"
                  x2="50%"
                  y2="45%"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <motion.line
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  x1="50%"
                  y1="55%"
                  x2="50%"
                  y2="70%"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="mt-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-[#10b981]/10 rounded-full mb-6 border border-[#10b981]/20"
              >
                <span className="text-sm text-[#10b981]">
                  Power & Efficiency
                </span>
              </motion.div>

              <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6">
                Engineered to <span className="text-[#10b981]">Perfection</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Our advanced powertrain combines a high-capacity lithium battery
                with a brushless DC motor, delivering exceptional performance
                and efficiency.
              </p>
            </div>

            {/* Specs */}
            <div className="space-y-6 pt-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg shadow-[#10b981]/30 group-hover:shadow-xl group-hover:shadow-[#10b981]/40 transition-all duration-300">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">1200W Motor</h3>
                  <p className="text-gray-600">
                    Peak power output for exceptional acceleration and hill
                    climbing capability.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg shadow-[#10b981]/30 group-hover:shadow-xl group-hover:shadow-[#10b981]/40 transition-all duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">
                    48V Li-ion Battery
                  </h3>
                  <p className="text-gray-600">
                    High-density cells engineered for longevity and consistent
                    power delivery.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg shadow-[#10b981]/30 group-hover:shadow-xl group-hover:shadow-[#10b981]/40 transition-all duration-300">
                  <Fan className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Smart Cooling</h3>
                  <p className="text-gray-600">
                    Advanced thermal management keeps components at optimal
                    temperature.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Performance metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-4xl text-gray-900 mb-2">95%</div>
                <div className="text-sm text-gray-600">Energy Efficiency</div>
              </div>
              <div>
                <div className="text-4xl text-gray-900 mb-2">3sec</div>
                <div className="text-sm text-gray-600">0-25 km/h</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
