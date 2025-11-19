import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', message: '', preferred_datetime: ''
  })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          preferred_datetime: form.preferred_datetime ? new Date(form.preferred_datetime).toISOString() : null,
          source: 'website-form'
        })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '', preferred_datetime: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Start a Private Conversation</h2>
          <p className="mt-3 text-white/70">Tell us your brief. Our concierge will respond within hours.</p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>Email: concierge@luxfirm.com</li>
            <li>Phone: +1 (212) 555‑0199</li>
            <li>Offices: New York • Miami • Los Angeles</li>
          </ul>
        </div>
        <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input placeholder="Phone" className="px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <input type="datetime-local" placeholder="Preferred date & time" className="px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10" value={form.preferred_datetime} onChange={e=>setForm({...form, preferred_datetime:e.target.value})} />
            <textarea placeholder="Message" rows="4" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10" value={form.message} onChange={e=>setForm({...form, message:e.target.value})}></textarea>
          </div>
          <button type="submit" className="mt-6 w-full px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold">
            {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
          </button>
          {status === 'sent' && <p className="mt-3 text-emerald-400">Thank you. We will be in touch shortly.</p>}
          {status === 'error' && <p className="mt-3 text-rose-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
