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
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-white border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Luxury Real Estate, Curated for You
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Elevate Your Living with Bespoke Luxury Properties
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80">
              We specialize in buying and selling premium residences — penthouses, villas, and signature estates in top-tier locations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition">Explore Portfolio</a>
              <a href="#pricing" className="px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20 transition">View Pricing</a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
    </section>
  );
}
