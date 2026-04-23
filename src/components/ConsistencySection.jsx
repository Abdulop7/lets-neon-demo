"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ConsistencySection() {
  const images = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", // Main store
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop", // Logo flat
    "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop", // Neon sign
    "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=800&auto=format&fit=crop", // Close up 1
    "/images/consistency_close_up.png", // Close up 2
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800&auto=format&fit=crop"  // Store interior
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header Split */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-[0.85]">
              UNIFIED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-white/50">
                EXPERIENCE
              </span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:text-right"
          >
            <p className="text-gray-400 font-sans text-xl md:text-2xl font-light max-w-lg leading-relaxed mb-6">
              Custom signage engineered to maintain absolute brand consistency across multiple <span className="text-white font-bold tracking-widest">CORPORATE</span> locations.
            </p>
            <button className="bg-transparent border border-white/30 hover:bg-white hover:text-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-4 group">
              View Case Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Architectural Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-white/10 relative">
          
          {/* Main feature image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="md:col-span-8 h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-white/10 relative group overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]"
              style={{ backgroundImage: `url(${images[0]})` }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur px-4 py-2 text-xs font-mono tracking-widest text-white/70 uppercase">
              Flagship Storefront
            </div>
          </motion.div>

          {/* Right column stacked */}
          <div className="md:col-span-4 flex flex-col h-[400px] md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-1/2 border-b border-white/10 relative group overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]"
                style={{ backgroundImage: `url(${images[2]})` }}
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 text-xs font-mono tracking-widest text-white/70 uppercase">
                Neon Fabrication
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="h-1/2 relative group overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]"
                style={{ backgroundImage: `url(${images[1]})` }}
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 text-xs font-mono tracking-widest text-white/70 uppercase">
                Laser Cut Logo
              </div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-4 h-[300px] border-t border-b md:border-b-0 md:border-r border-white/10 relative group overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]"
              style={{ backgroundImage: `url(${images[3]})` }}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="md:col-span-4 h-[300px] border-t border-b md:border-b-0 md:border-r border-white/10 relative group overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]"
              style={{ backgroundImage: `url(${images[4]})` }}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="md:col-span-4 h-[300px] border-t relative group overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]"
              style={{ backgroundImage: `url(${images[5]})` }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
