export default function Schedule() {
  const bookingUrl = 'https://cal.com/flames-demo/consultation?embed=true'
  return (
    <section id="schedule" className="py-20 bg-[#0b1512]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block rounded-full border border-[#9be15e]/30 text-[#9be15e]/90 px-4 py-1 text-sm">Private Tours & Consultations</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Schedule with Gurgaon Landbase</h2>
          <p className="mt-3 text-white/70">Pick a time that works for you. We serve Gurgaon and the wider NCR. In-person and virtual appointments available.</p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            src={bookingUrl}
            className="w-full h-[720px] bg-slate-900"
            title="Schedule a meeting"
            frameBorder="0"
            allow="camera; microphone; autoplay; clipboard-read; clipboard-write;"
          />
        </div>
        <div className="text-center mt-4">
          <a href={bookingUrl.replace('?embed=true','')} target="_blank" rel="noreferrer" className="text-[#9be15e] hover:text-white underline">Open booking in a new tab</a>
        </div>
      </div>
    </section>
  )
}
