"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingBag, Utensils, Scissors, Stethoscope, Home, ArrowRight } from "lucide-react";

const categories = [
  { name: "Corporate", icon: Building2 },
  { name: "Retail", icon: ShoppingBag },
  { name: "Restaurants", icon: Utensils },
  { name: "Beauty", icon: Scissors },
  { name: "Medical", icon: Stethoscope },
  { name: "Real Estate", icon: Home },
];

export default function Categories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 bg-brand-primary relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-text mb-4">
              Signs by Industry
            </h2>
            <p className="text-lg text-brand-text/70">
              Tailored solutions for every sector. Explore the signs we've created for leading businesses.
            </p>
          </div>
          <button className="text-brand-secondary font-medium hover:text-brand-accent transition-colors flex items-center gap-2 group w-fit">
            See All Industries
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group cursor-pointer flex flex-col items-center p-8 rounded-3xl border border-brand-accent/5 bg-white shadow-sm hover:shadow-xl hover:shadow-brand-secondary/10 hover:border-brand-secondary/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/0 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-secondary/10">
                  <Icon className="w-8 h-8 text-brand-secondary group-hover:text-brand-accent" />
                </div>
                <h3 className="text-base font-semibold text-brand-text group-hover:text-brand-accent transition-colors relative z-10">
                  {category.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
