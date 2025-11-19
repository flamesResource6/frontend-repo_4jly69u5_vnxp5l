export default function Pricing() {
  const tiers = [
    {
      name: 'Advisory',
      price: 'Complimentary',
      desc: 'Initial consultation, market insights, and tailored property shortlist for Gurgaon & NCR.'
    },
    {
      name: 'Acquisition Concierge',
      price: '₹3.5L + 1.5%',
      desc: 'End‑to‑end buy‑side support: tours, negotiations, due diligence, and closing.'
    },
    {
      name: 'Seller Signature',
      price: '1.75% – 2.25%',
      desc: 'White‑glove listing, staging, cinematic media, and global marketing reach.'
    }
  ];

  return (
    <section id="pricing" className="relative py-20 bg-[#0b0f14]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f5f2ea]">Transparent, Premium Services</h2>
          <p className="mt-3 text-[#f5f2ea]/70">Choose the experience that matches your goals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold text-[#f5f2ea]">{t.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-[#d4af37]">{t.price}</p>
              <p className="mt-3 text-[#f5f2ea]/70">{t.desc}</p>
              <a href="#contact" className="mt-6 inline-block px-5 py-3 rounded-xl bg-[#d4af37] text-[#0b0f14] font-semibold shadow">Enquire</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
