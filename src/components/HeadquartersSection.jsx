"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function HeadquartersSection() {
  return (
    <section className="relative py-32 md:py-48 bg-[#0a0a0a] text-white border-t border-white/10 overflow-hidden">
      
      {/* High-end Monochromatic Map Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop)' }}
      />
      
      {/* Gradients to blend the map into the dark theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      <div className="absolute inset-0 bg-[#0a0a0a]/40" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          
          {/* Left: Minimal Location Details */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-heading font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
                GLOBAL <br />
                <span className="text-[#0EA5E9]">HQ</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="border-l-2 border-[#0EA5E9] pl-6"
            >
              <div className="text-xl font-sans font-light tracking-wide mb-2">
                123 Design Avenue, Suite 100
              </div>
              <div className="text-xl font-sans font-light tracking-wide text-white/60 mb-8">
                New York, NY 10001
              </div>
              
              <button className="bg-transparent border border-white/30 hover:bg-white hover:text-black text-white px-8 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-4 group">
                <MapPin className="w-5 h-5 text-[#0EA5E9] group-hover:text-black transition-colors" />
                Get Directions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right: Sharp Minimal Contact Interface */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="border border-white/10 bg-black/60 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0EA5E9]" />
            
            <h3 className="font-heading text-2xl font-bold uppercase mb-10 tracking-widest">Connect</h3>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors" 
                  placeholder="First Name"
                />
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors" 
                  placeholder="Last Name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors" 
                  placeholder="Email Address"
                />
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors" 
                  placeholder="Phone Number"
                />
              </div>

              <textarea 
                rows="3"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors resize-none mt-4" 
                placeholder="Message"
              ></textarea>
              
              <div className="pt-4">
                <button type="button" className="bg-[#0EA5E9] hover:bg-white text-white hover:text-black px-10 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-4 group">
                  Submit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
