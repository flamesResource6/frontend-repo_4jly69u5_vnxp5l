export default function Portfolio() {
  const items = [
    { title: 'Skyline Penthouse', city: 'New York', img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Cliffside Villa', city: 'Malibu', img: 'https://images.unsplash.com/photo-1505692794403-34d4982d0b5e?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Modern Estate', city: 'Miami', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Lakeview Residence', city: 'Zurich', img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Signature Portfolio</h2>
            <p className="mt-3 text-white/70">A glimpse into our curated listings</p>
          </div>
          <a href="#contact" className="hidden md:inline-block px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold">Request Access</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-white/70">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
