export default function Features() {
  const items = [
    {
      title: "Handmade quality",
      desc: "Carefully crafted pieces with lasting comfort.",
    },
    {
      title: "Natural materials",
      desc: "Wool, cotton, and other honest fibers.",
    },
    {
      title: "Timeless design",
      desc: "Warm, cozy, and easy to style.",
    },
    {
      title: "Sustainable mindset",
      desc: "Slow living, ethically made, built to last.",
    },
  ];

  return (
    <section id="values" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Why choose us</h2>
          <p className="mt-3 text-neutral-600">A curated selection with character and authenticity.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-medium text-neutral-900">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
