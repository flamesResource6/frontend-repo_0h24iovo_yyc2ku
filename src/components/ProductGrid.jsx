import { useEffect, useState } from "react";

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

  // Placeholder for future backend integration
  useEffect(() => {
    // const base = import.meta.env.VITE_BACKEND_URL
    // fetch(`${base}/api/products`).then(r=>r.json()).then(setProducts)
  }, []);

  return (
    <section id="products" className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Featured textiles</h2>
          <p className="mt-3 text-neutral-600">Soft textures and lasting comfort for every room.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl overflow-hidden bg-white border border-neutral-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-neutral-900 font-medium truncate">{p.name}</h3>
                <p className="text-sm text-neutral-500">{p.color}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-semibold text-neutral-900">€{p.price}</span>
                  <button className="text-sm text-violet-700 hover:text-violet-900 font-medium">View</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
