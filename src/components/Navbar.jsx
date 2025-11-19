import { Menu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [1, 0.85]);
  const blur = useTransform(scrollY, [0, 80], [6, 12]);

  return (
    <motion.header
      style={{ opacity, backdropFilter: blur.to((b) => `blur(${b}px)`) }}
      className="fixed top-0 left-0 right-0 z-50 supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded-full bg-violet-600" />
            <span className="text-xl font-semibold tracking-tight text-neutral-900">Ookinhetpaars</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#products" className="hover:text-neutral-900 transition-colors">Shop</a>
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#values" className="hover:text-neutral-900 transition-colors">Values</a>
            <a href="#newsletter" className="hover:text-neutral-900 transition-colors">Newsletter</a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-300 text-neutral-700">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
