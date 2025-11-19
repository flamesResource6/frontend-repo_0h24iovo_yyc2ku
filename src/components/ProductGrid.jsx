import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const demoProducts = [
  {
    id: 1,
    name: "Knitted Merino Blanket",
    price: 149,
    color: "Rosewood",
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Woolen Throw",
    price: 99,
    color: "Moss",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Lambswool Cushion",
    price: 59,
    color: "Oat",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Chunky Knit Throw",
    price: 179,
    color: "Ivory",
    image:
      "https://images.unsplash.com/photo-1523419409543-41f5a3a39b2b?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  const [products, setProducts] = useState(demoProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || "";
        const res = await fetch(`${base}/api/products`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : demoProducts);
      } catch (e) {
        setError("Couldn\"t load products. Showing demo items.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="products" className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Featured textiles</h2>
          <p className="mt-3 text-neutral-600">Soft textures and lasting comfort for every room.</p>
        </div>

        {loading && (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl overflow-hidden bg-white border border-neutral-200">
                <div className="aspect-[4/3] bg-neutral-200/60" />
                <div className="p-4 space-y-3">
                  <div className="h-4 w-3/4 bg-neutral-200 rounded" />
                  <div className="h-3 w-1/2 bg-neutral-200 rounded" />
                  <div className="h-4 w-1/4 bg-neutral-200 rounded ml-auto" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((p) => (
              <motion.article key={p.id || p._id} variants={card} className="group rounded-2xl overflow-hidden bg-white border border-neutral-200">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <h3 className="text-neutral-900 font-medium truncate">{p.name}</h3>
                  <p className="text-sm text-neutral-500">{p.color || "—"}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-neutral-900">€{p.price}</span>
                    <button className="text-sm text-violet-700 hover:text-violet-900 font-medium">View</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {error && (
          <p className="mt-6 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 inline-block">{error}</p>
        )}
      </div>
    </section>
  );
}
