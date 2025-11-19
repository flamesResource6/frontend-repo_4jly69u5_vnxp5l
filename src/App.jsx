import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'
import Schedule from './components/Schedule'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1512]">
      <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-[#0b1512]/80 to-transparent backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-[#f5f2ea] font-semibold text-lg tracking-wide">Gurgaon Landbase</a>
          <nav className="hidden md:flex items-center gap-6 text-[#f5f2ea]/80">
            <a href="#portfolio" className="hover:text-[#f5f2ea]">Portfolio</a>
            <a href="#pricing" className="hover:text-[#f5f2ea]">Pricing</a>
            <a href="#schedule" className="hover:text-[#f5f2ea]">Schedule</a>
            <a href="#contact" className="hover:text-[#f5f2ea]">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0b1512] font-semibold shadow-md">Enquire</a>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Portfolio />
        <Pricing />
        <Schedule />
        <Chatbot />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 bg-[#0b1512]">
        <div className="container mx-auto px-6 text-[#f5f2ea]/70 text-sm flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Gurgaon Landbase. All rights reserved.</p>
          <p>Serving Gurgaon & NCR • Luxury real estate advisory</p>
        </div>
      </footer>
    </div>
  )
}

export default App
