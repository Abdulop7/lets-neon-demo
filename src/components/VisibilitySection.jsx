"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    num: "01",
    title: "EXTERIOR DISPLAYS",
    desc: "High-impact displays built to withstand the elements and capture attention from miles away."
  },
  {
    num: "02",
    title: "INTERIOR BRANDING",
    desc: "Sophisticated wayfinding and ambient branding that perfectly defines your physical spaces."
  },
  {
    num: "03",
    title: "MULTI-SITE ROLLOUTS",
    desc: "Seamless, scalable execution across hundreds of locations with absolute precision and consistency."
  }
];

export default function VisibilitySection() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Top Header - Editorial Style */}
        <div className="border-b-2 border-black pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-black uppercase tracking-tighter leading-[0.85]"
          >
            Built For <br />
            <span className="text-[#0EA5E9]">Visibility</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-md text-xl md:text-2xl font-light text-gray-600 leading-relaxed"
          >
            From interior branding to high visibility exterior signage, engineered to perform wherever your brand appears.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Large Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-5 relative h-[500px] md:h-[800px] overflow-hidden group bg-gray-100"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/visibility_signage.png')" }}
            />
            {/* Dark overlay at bottom for subtle contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-8 lg:pt-0">
            
            {/* Features List */}
            <div className="flex flex-col gap-12 mb-16 lg:mb-0">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className="flex gap-6 md:gap-12 group"
                >
                  <div className="text-3xl md:text-5xl font-heading font-black text-gray-200 group-hover:text-[#0EA5E9] transition-colors duration-500">
                    {feature.num}
                  </div>
                  <div className="flex-1 border-t border-gray-200 pt-2 group-hover:border-black transition-colors duration-500">
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-black tracking-wide mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-sans text-lg leading-relaxed max-w-lg">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Image & CTA Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mt-16 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-[250px] md:h-[300px] overflow-hidden bg-gray-100"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-[2s]"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop')" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="bg-black hover:bg-[#0EA5E9] text-white px-8 py-6 text-sm font-bold tracking-widest uppercase transition-all duration-300 w-full flex justify-between items-center group">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
