"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Cuboid, Expand, MousePointer2, ArrowRight } from "lucide-react";

export default function CreateYoursSection() {
  const features = [
    {
      icon: MonitorSmartphone,
      title: "INSTANT LIVE PREVIEW",
      desc: "See your signage design come to life in real time as you customize fonts, colors, and materials."
    },
    {
      icon: Cuboid,
      title: "REALISTIC 3D MOCKUPS",
      desc: "Visualize your signage with depth, shadows, and lighting effects for a true-to-life view."
    },
    {
      icon: Expand,
      title: "EASY SIZE ADJUSTMENTS",
      desc: "Instantly resize your design and check proportions before ordering."
    },
    {
      icon: MousePointer2,
      title: "ONE-CLICK ORDER & TRACKING",
      desc: "Approve your final design and place your order directly — with free worldwide shipping and updates."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content & Features Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-black uppercase tracking-tighter leading-[0.85] mb-4">
                Now, Create <br />
                <span className="text-[#0EA5E9]">Yours.</span>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-gray-600 font-sans text-xl md:text-2xl font-light mb-12 max-w-lg leading-relaxed"
            >
              <strong>Design Studio</strong><br />
              Experience the power of our Design Studio — a smart tool built to help you create professional, ready-to-produce signage designs.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-10">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                    className="space-y-4 group"
                  >
                    <Icon className="w-8 h-8 text-black group-hover:text-[#0EA5E9] transition-colors duration-300" strokeWidth={1.5} />
                    <h3 className="font-heading font-bold text-black text-lg tracking-widest">{item.title}</h3>
                    <p className="text-gray-600 font-sans leading-relaxed">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16"
            >
              <button className="bg-black hover:bg-[#0EA5E9] text-white px-8 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-4 group">
                Enter Studio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right: Sharp Tutorial / Guide Animation Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            <div className="w-full aspect-square md:aspect-[4/3] bg-gray-50 border-2 border-black relative overflow-hidden group shadow-[16px_16px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[24px_24px_0px_0px_rgba(14,165,233,0.2)] transition-shadow duration-500">
              
              {/* Studio Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Top UI Bar */}
              <div className="absolute top-0 left-0 w-full h-12 border-b-2 border-black bg-white flex items-center justify-between px-6 z-20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-black" />
                  <div className="w-3 h-3 bg-gray-300" />
                  <div className="w-3 h-3 bg-gray-300" />
                </div>
                <div className="font-mono text-xs font-bold tracking-widest uppercase">Tutorial: Scale & Measure</div>
              </div>

              {/* Animated Canvas */}
              <div className="absolute inset-12 flex items-center justify-center z-10">
                
                {/* The Sign Outline being drawn */}
                <motion.div 
                  className="w-64 h-24 border-2 border-black relative flex items-center justify-center"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 256, opacity: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2, ease: "easeInOut" }}
                >
                  <motion.span 
                    className="font-heading font-black text-4xl tracking-[0.2em] text-black uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                  >
                    LOGO
                  </motion.span>

                  {/* Measuring lines */}
                  <motion.div 
                    className="absolute -top-6 left-0 right-0 border-t border-black flex justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                  >
                    <div className="absolute -top-3 bg-gray-50 px-2 font-mono text-xs font-bold">120.0"</div>
                    <div className="absolute left-0 -top-1 w-px h-2 bg-black" />
                    <div className="absolute right-0 -top-1 w-px h-2 bg-black" />
                  </motion.div>

                  <motion.div 
                    className="absolute top-0 bottom-0 -right-6 border-r border-black flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                  >
                    <div className="absolute -right-10 bg-gray-50 px-2 font-mono text-xs font-bold rotate-90">36.0"</div>
                    <div className="absolute -left-1 top-0 w-2 h-px bg-black" />
                    <div className="absolute -left-1 bottom-0 w-2 h-px bg-black" />
                  </motion.div>

                </motion.div>

                {/* Animated Mouse Cursor guiding the user */}
                <motion.div 
                  className="absolute z-30"
                  initial={{ x: -100, y: 100 }}
                  animate={{ 
                    x: [ -100, -128, 128, 100, -100 ], 
                    y: [ 100, -12, -12, 100, 100 ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <MousePointer2 className="w-6 h-6 text-[#0EA5E9] drop-shadow-md" fill="#0EA5E9" />
                  <motion.div 
                    className="absolute top-6 left-4 bg-black text-white text-[10px] font-mono px-2 py-1 uppercase whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Drag to resize
                  </motion.div>
                </motion.div>

              </div>
              
              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 w-full h-12 border-t-2 border-black bg-[#0EA5E9] flex items-center px-6 z-20 overflow-hidden">
                <motion.div 
                  className="text-white font-mono text-xs font-bold tracking-widest uppercase whitespace-nowrap"
                  animate={{ x: [300, -300] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  INTERACTIVE DESIGN GUIDE RUNNING • PRECISION DRAFTING ENABLED • INTERACTIVE DESIGN GUIDE RUNNING
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
