export default function Portfolio() {
  const items = [
    { title: 'The Majestic — Type A', city: 'Gurgaon', img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop' },
    { title: 'The Majestic — Type B', city: 'Gurgaon', img: 'https://images.unsplash.com/photo-1505692794403-34d4982d0b5e?q=80&w=1200&auto=format&fit=crop' },
    { title: 'The Majestic — Type C', city: 'Gurgaon', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop' },
    { title: 'The Majestic — Club & Amenities', city: 'Gurgaon', img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#0b1512]">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#f5f2ea]">Signature Portfolio</h2>
            <p className="mt-3 text-[#f5f2ea]/70">Current focus: The Majestic by JMS • Low-rise luxury apartments</p>
          </div>
          <a href="#contact" className="hidden md:inline-block px-5 py-3 rounded-xl bg-[#174309] hover:bg-[#1e5a0c] text-[#f5f2ea] font-semibold">Request Brochure</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <h3 className="text-[#f5f2ea] font-semibold">{item.title}</h3>
                <p className="text-[#f5f2ea]/70">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
