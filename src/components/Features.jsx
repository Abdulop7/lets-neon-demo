"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Palette, Truck } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Custom Design Studio",
    description: "Design your perfect sign in minutes using our intuitive 3D builder. Real-time rendering lets you see exactly what you'll get.",
  },
  {
    icon: Zap,
    title: "Best Pricing Guaranteed",
    description: "We cut out the middleman to bring you premium quality signage at unbeatable prices without compromising on materials.",
  },
  {
    icon: Truck,
    title: "Lightning Fast Delivery",
    description: "Our streamlined production process means most signs ship within 3-5 business days. Expedited options available.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description: "Using weather-resistant materials and UL-certified LED components, our signs are designed to withstand the test of time.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px]"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-accent font-medium text-sm mb-6"
          >
            The Signage.com Advantage
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-text mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text/70 text-lg max-w-2xl mx-auto font-sans"
          >
            We've revolutionized the signage industry with our simple, transparent, and high-quality process. Experience the difference.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl border border-brand-secondary/10 hover:border-brand-secondary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-secondary/10 group relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary to-brand-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-secondary transition-all duration-300">
                  <Icon className="w-8 h-8 text-brand-secondary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-4 font-heading">{feature.title}</h3>
                <p className="text-brand-text/70 leading-relaxed text-sm font-sans">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
