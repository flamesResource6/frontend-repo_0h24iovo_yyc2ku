import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="newsletter" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Stay in the cozy loop</h2>
        <p className="mt-3 text-neutral-600">Get updates on new textiles, colors, and seasonal drops.</p>
        <form onSubmit={onSubmit} className="mt-8 flex gap-3 max-w-xl mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-violet-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-violet-700 transition-colors"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Subscribe"}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-3 text-sm text-green-700">Thanks for subscribing!</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-700">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
