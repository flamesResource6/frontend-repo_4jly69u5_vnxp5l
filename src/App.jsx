import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-white font-semibold text-lg">Luxe Estates</a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Enquire</a>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Portfolio />
        <Pricing />
        <Chatbot />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 bg-slate-950">
        <div className="container mx-auto px-6 text-white/60 text-sm flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Luxe Estates. All rights reserved.</p>
          <p>Luxury real estate buying & selling specialists.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
