import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 overflow-hidden relative border-t border-white/10">

      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6 lg:pr-12">
            <span className="text-3xl font-heading font-black tracking-tighter text-white flex items-center gap-4 uppercase">
              <div className="w-8 h-8 border-2 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-[#0EA5E9]" />
              </div>
              Signage.com
            </span>
            <p className="text-white/60 text-lg font-sans font-light leading-relaxed max-w-md">
              Architectural grade signage engineered for high-visibility professional environments. Precision manufactured.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] mb-8 text-white/40 uppercase">Products</h4>
            <ul className="space-y-4">
              {["Outdoor Signs", "Indoor Signs", "Channel Letters", "Lightbox Signs", "Blade Signs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-[#0EA5E9] text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group font-sans font-medium">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] mb-8 text-white/40 uppercase">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Contact", "Design Studio", "Instant Quote", "FAQs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-[#0EA5E9] text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group font-sans font-medium">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] mb-8 text-white/40 uppercase">Newsletter</h4>
            <p className="text-white/60 text-sm mb-8 font-sans font-light leading-relaxed">
              Exclusive insights into architectural signage design and engineering updates.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b-2 border-white/20 py-4 text-white font-mono text-sm tracking-widest uppercase focus:outline-none focus:border-[#0EA5E9] transition-colors placeholder-white/30 pr-12"
              />
              <button className="absolute right-0 top-0 bottom-0 px-2 text-white/50 hover:text-[#0EA5E9] transition-colors flex items-center justify-center">
                <ArrowRight className="w-5 h-5 group-focus-within:text-[#0EA5E9]" />
              </button>
            </form>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs uppercase tracking-widest text-white/40">
          <p>
            © {new Date().getFullYear()} Signage.com. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
