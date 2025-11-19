import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductGrid from './components/ProductGrid'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Features />
        <Newsletter />
      </main>
      <footer className="border-t border-neutral-200 py-10 text-center text-sm text-neutral-600">
        <div className="max-w-7xl mx-auto px-4">© {new Date().getFullYear()} Ookinhetpaars — Handmade home textiles for warm, timeless interiors.</div>
      </footer>
    </div>
  )
}

export default App
