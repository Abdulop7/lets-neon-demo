"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Design Studio", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <>
      {/* Header: Logo and CTA (Absolute on desktop, fixed on mobile when scrolled) */}
      <header className={`w-full z-40 flex justify-between items-center pointer-events-none transition-all duration-300 ${isScrolled
        ? "fixed top-0 left-0 py-4 px-6 bg-black/90 backdrop-blur-md border-white/10 lg:absolute lg:py-8 lg:bg-transparent lg:border-transparent lg:px-12"
        : "absolute top-0 left-0 py-8 px-6 lg:px-12"
        }`}>
        {/* Logo */}
        <Link href="/" className="pointer-events-auto">
          <span className="text-2xl lg:text-3xl font-heading font-extrabold tracking-tight text-white flex items-center">
            SIGNAGE<span className="text-[#0EA5E9]">.</span>
          </span>
        </Link>

        {/* CTA Button */}
        <div className="hidden lg:flex pointer-events-auto">
          <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-none text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button (Visible only on mobile) */}
        <div className="lg:hidden pointer-events-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Sticky Capsule Navigation (Stays fixed) */}
      <div className="hidden lg:flex fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`flex items-center space-x-1 px-2 py-2 rounded-full transition-all duration-300 ${isScrolled
            ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-white/10 backdrop-blur-md border border-white/20"
            }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white/80 hover:text-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 lg:hidden bg-black flex flex-col pt-24 px-8 space-y-6"
          >
            {/* Close button inside mobile menu */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 text-white p-2 focus:outline-none"
            >
              <X className="w-8 h-8" />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-heading font-bold text-white hover:text-[#0EA5E9] transition-colors uppercase tracking-tight"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-12 mt-4 border-t border-white/20">
              <button className="w-full bg-[#0EA5E9] text-white px-6 py-5 font-bold uppercase tracking-widest flex justify-between items-center">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
