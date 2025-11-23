import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Performance } from "./components/Performance";
import { Models } from "./components/Models";
import { Gallery } from "./components/Gallery";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md ">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-[#10b981]">⚡</span>
            <span className="text-2xl tracking-tight text-gray-900">
              VoltRide
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#performance"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Performance
            </a>
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#models"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Models
            </a>

            <a
              href="#gallery"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Gallery
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <Performance />
      <Models />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}
