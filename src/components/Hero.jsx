import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-[#f5f2ea] border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#7bd23b] animate-pulse" />
              Gurgaon Landbase • Luxury Real Estate in NCR
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold text-[#f5f2ea] tracking-tight">
              The Majestic by JMS • Low-rise Luxury Residences
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#f5f2ea]/80">
              Bespoke advisory for premium buyers & sellers across Gurgaon and the NCR.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="px-6 py-3 rounded-xl bg-[#174309] hover:bg-[#1e5a0c] text-[#f5f2ea] font-semibold shadow-lg hover:shadow-xl transition">Explore The Majestic</a>
              <a href="#schedule" className="px-6 py-3 rounded-xl bg-white/10 text-[#f5f2ea] border border-white/20 backdrop-blur hover:bg-white/20 transition">Schedule a Private Tour</a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1512] via-[#0b1512]/40 to-transparent pointer-events-none" />
    </section>
  );
}
