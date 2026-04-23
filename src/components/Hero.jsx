"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2000&auto=format&fit=crop",
    title: "TRANSFORM",
    highlight: "OFFICE",
    desc: "Architectural signage engineered for maximum impact and minimal compromise."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    title: "ELEVATE",
    highlight: "BRAND",
    desc: "Precision-crafted displays that define physical spaces."
  },
  {
    id: 3,
    image: "/images/hero_signage.png",
    title: "DOMINATE",
    highlight: "MARKET",
    desc: "High-visibility outdoor systems built for scale and endurance."
  }
];

// Sharp, rigid text animation
const AnimatedText = ({ text }) => {
  const letters = text.split("");
  return (
    <span className="inline-block overflow-hidden">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, delay: index * 0.05, ease: [0.76, 0, 0.24, 1] }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* Sharp Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] z-10 mix-blend-overlay"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Layout */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end pb-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          {/* Left: Titles */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} className="flex flex-col">
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-black text-white leading-[0.85] tracking-tighter uppercase">
                  <AnimatedText text={slides[currentSlide].title} />
                  <br />
                  <motion.span
                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                    animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    className="relative inline-block text-[#0EA5E9]"
                  >
                    {slides[currentSlide].highlight}
                  </motion.span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Description & CTA */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <p className="text-xl md:text-2xl text-white/80 font-sans font-light mb-8 max-w-md">
                  {slides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-4 group">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Minimal Progress Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 z-30 flex items-center gap-6">
        <div className="flex gap-4">
          {slides.map((_, index) => (
            <div key={index} className="w-16 h-[2px] bg-white/20 relative overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: currentSlide === index ? "100%" : "0%" }}
                transition={{ duration: currentSlide === index ? 6 : 0.3, ease: "linear" }}
                className="absolute left-0 top-0 h-full bg-white"
              />
            </div>
          ))}
        </div>
        <div className="text-white/50 text-sm font-mono tracking-widest">
          0{currentSlide + 1} / 0{slides.length}
        </div>
      </div>
    </section>
  );
}
