import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const models = [
  {
    name: "Model Lite",
    tagline: "Urban Commuter",
    price: "$799",
    specs: {
      range: "30km",
      speed: "25km/h",
      weight: "12kg",
      battery: "36V 8Ah",
    },
    features: [
      "Lightweight aluminum frame",
      "LED display",
      "Dual braking system",
      "Foldable design",
    ],
    color: "from-gray-600 to-gray-800",
    highlight: false,
  },
  {
    name: "Model S",
    tagline: "The Standard",
    price: "$1,299",
    specs: {
      range: "50km",
      speed: "45km/h",
      weight: "16kg",
      battery: "48V 12Ah",
    },
    features: [
      "Premium suspension",
      "Smart dashboard",
      "Dual disc brakes",
      "Water resistant",
      "Mobile app integration",
    ],
    color: "from-[#10b981] to-[#059669]",
    highlight: true,
  },
  {
    name: "Model X",
    tagline: "Performance Elite",
    price: "$1,899",
    specs: {
      range: "70km",
      speed: "55km/h",
      weight: "18kg",
      battery: "52V 18Ah",
    },
    features: [
      "Dual 1000W motors",
      "Advanced suspension",
      "Hydraulic brakes",
      "GPS tracking",
      "Premium leather grips",
    ],
    color: "from-gray-900 to-[#111]",
    highlight: false,
  },
];

export function Models() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden" id="models">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10b981]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-900/5 rounded-full blur-3xl" />

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
            <span className="text-sm text-[#10b981]">Our Lineup</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6">
            Choose Your <span className="text-[#10b981]">VoltRide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three models. One mission. Find the perfect ride for your lifestyle.
          </p>
        </motion.div>

        {/* Models grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Popular badge */}
              {model.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="bg-[#10b981] text-white px-4 py-1 rounded-full text-sm shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-xl ${
                  model.highlight
                    ? "border-2 border-[#10b981] shadow-[#10b981]/20"
                    : "border border-gray-200 shadow-gray-200/50"
                } hover:shadow-2xl transition-all duration-500 h-full flex flex-col`}
              >
                {/* Color accent bar */}
                <div className={`h-2 bg-gradient-to-r ${model.color}`} />

                <div className="p-8 flex flex-col flex-grow">
                  {/* Model info */}
                  <div className="text-center mb-8">
                    <div className="text-sm text-gray-500 mb-2">
                      {model.tagline}
                    </div>
                    <h3 className="text-3xl text-gray-900 mb-4">
                      {model.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl text-gray-900">
                        {model.price}
                      </span>
                    </div>
                  </div>

                  {/* Scooter visualization */}
                  <div className="relative h-48 mb-8 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      {/* Simplified scooter icon */}
                      <svg
                        viewBox="0 0 200 120"
                        className="w-full max-w-[200px] h-auto"
                      >
                        {/* Deck */}
                        <rect
                          x="50"
                          y="70"
                          width="100"
                          height="8"
                          rx="4"
                          fill={model.highlight ? "#10b981" : "#333"}
                        />

                        {/* Stem */}
                        <rect
                          x="52"
                          y="30"
                          width="6"
                          height="45"
                          rx="3"
                          fill={model.highlight ? "#10b981" : "#333"}
                        />

                        {/* Handlebar */}
                        <rect
                          x="35"
                          y="27"
                          width="40"
                          height="5"
                          rx="2.5"
                          fill={model.highlight ? "#10b981" : "#333"}
                        />

                        {/* Front wheel */}
                        <circle cx="140" cy="85" r="18" fill="#333" />
                        <circle
                          cx="140"
                          cy="85"
                          r="12"
                          fill={model.highlight ? "#10b981" : "#555"}
                          opacity="0.5"
                        />

                        {/* Rear wheel */}
                        <circle cx="60" cy="85" r="18" fill="#333" />
                        <circle
                          cx="60"
                          cy="85"
                          r="12"
                          fill={model.highlight ? "#10b981" : "#555"}
                          opacity="0.5"
                        />

                        {/* Battery indicator */}
                        <rect
                          x="65"
                          y="62"
                          width="30"
                          height="10"
                          rx="2"
                          fill={model.highlight ? "#10b981" : "#555"}
                          opacity="0.7"
                        />
                      </svg>

                      {/* Glow effect on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${model.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />
                    </motion.div>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl text-gray-900">
                        {model.specs.range}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-gray-900">
                        {model.specs.speed}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Top Speed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-gray-900">
                        {model.specs.weight}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Weight</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-gray-900">
                        {model.specs.battery}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Battery</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {model.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${model.color} flex items-center justify-center`}
                        >
                          <Check
                            className="h-3 w-3 text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      model.highlight
                        ? "bg-[#10b981] hover:bg-[#0d9668] text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    } rounded-full py-6 shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                  >
                    Configure {model.name}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500">
            All models include a 2-year warranty and free shipping.{" "}
            <span className="text-[#10b981] cursor-pointer hover:underline">
              Compare specifications →
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
