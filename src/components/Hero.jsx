import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pb-24 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-100/60 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
              Warmth, Crafted by Hand
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-neutral-700 leading-relaxed max-w-xl">
              Discover knitted blankets, wool throws, and cushions made from natural materials—curated for cozy, timeless interiors.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-violet-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-violet-700 transition-colors">
                Shop the collection
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-neutral-300 text-neutral-800 px-5 py-3 text-sm font-medium hover:bg-neutral-50">
                Learn more
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-6 text-sm text-neutral-500">
              Sustainable materials • Small-batch makers • Timeless design
            </motion.div>
          </motion.div>
          <div className="relative">
            <div className="absolute -inset-6 bg-violet-200/50 blur-2xl rounded-3xl" aria-hidden />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop"
                alt="Cozy knitted blankets on a sofa"
                className="w-full h-[360px] sm:h-[460px] object-cover"
                loading="eager"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
