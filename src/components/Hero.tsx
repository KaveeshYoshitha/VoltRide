import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { ScooterModel } from "./ScooterModel";
import { Environment, OrbitControls } from "@react-three/drei";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          {/* Title Section - Full width at top */}
          <div className="text-center space-y-3 w-full -mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981]/10 rounded-full border border-[#10b981]/20"
            >
              <span className="text-[#10b981]">⚡</span>
              <span className="text-sm text-gray-600">Next-Gen Mobility</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl lg:text-8xl tracking-tight text-gray-900 mb-6 "
            >
              Ride the{" "}
              <span className="bg-gradient-to-r from-gray-900 via-[#10b981] to-gray-900 bg-clip-text text-transparent">
                Future.
              </span>
            </motion.h1>
          </div>

          {/* 3D Scooter - Below title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative flex items-center justify-center w-full h-[400px] max-w-4xl"
          >
            {/* Glowing orb background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[32rem] h-[32rem] bg-[#10b981]/20 rounded-full blur-3xl"
              />
            </div>

            {/* 3D Canvas */}
            <Canvas
              camera={{ position: [5, 2, 5], fov: 50 }}
              className="relative z-10"
              shadows
            >
              <ambientLight intensity={0.5} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                castShadow
              />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />

              {/* 3D Model */}
              <ScooterModel scale={2.6} position={[0, -1, 0]} />

              {/* Environment and Controls */}
              <Environment preset="city" />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
                autoRotate
                autoRotateSpeed={2}
              />
            </Canvas>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 right-20 w-3 h-3 bg-[#10b981] rounded-full blur-sm"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-32 left-10 w-2 h-2 bg-[#10b981] rounded-full blur-sm"
            />
          </motion.div>

          {/* Description + Buttons + Stats - Centered below scooter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 w-full max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600"
            >
              Experience unparalleled performance and eco-friendly mobility.
              Engineered for the modern rider who demands excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-[#10b981] hover:bg-[#0d9668] text-white px-8 py-6 rounded-full shadow-lg shadow-[#10b981]/30 hover:shadow-xl hover:shadow-[#10b981]/40 transition-all duration-300"
              >
                Buy Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 rounded-full transition-all duration-300"
              >
                Explore Models
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 mb-4"
            >
              <div className="text-center">
                <div className="text-3xl text-gray-900">50km</div>
                <div className="text-sm text-gray-500">Max Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-gray-900">45km/h</div>
                <div className="text-sm text-gray-500">Top Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-gray-900">3hrs</div>
                <div className="text-sm text-gray-500">Fast Charge</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
