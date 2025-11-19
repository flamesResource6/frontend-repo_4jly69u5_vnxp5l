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
    <section id="contact" className="py-20 bg-[#0b1512]">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f5f2ea]">Contact Gurgaon Landbase</h2>
          <p className="mt-3 text-[#f5f2ea]/70">We specialise in Gurgaon and the wider NCR. Share your brief and we’ll get back within hours.</p>
          <ul className="mt-6 space-y-2 text-[#f5f2ea]/80">
            <li>Email: concierge@gurgaonlandbase.com</li>
            <li>Phone: +91 98XX-XXX-XXX</li>
            <li>Location: Gurgaon • NCR</li>
          </ul>
        </div>
        <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="px-4 py-3 rounded-xl bg-white/10 text-[#f5f2ea] border border-white/10" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/10 text-[#f5f2ea] border border-white/10" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input placeholder="Phone" className="px-4 py-3 rounded-xl bg-white/10 text-[#f5f2ea] border border-white/10" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <input type="datetime-local" placeholder="Preferred date & time" className="px-4 py-3 rounded-xl bg-white/10 text-[#f5f2ea] border border-white/10" value={form.preferred_datetime} onChange={e=>setForm({...form, preferred_datetime:e.target.value})} />
            <textarea placeholder="Message" rows="4" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 text-[#f5f2ea] border border-white/10" value={form.message} onChange={e=>setForm({...form, message:e.target.value})}></textarea>
          </div>
          <button type="submit" className="mt-6 w-full px-6 py-3 rounded-xl bg-[#174309] hover:bg-[#1e5a0c] text-[#f5f2ea] font-semibold">
            {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
          </button>
          {status === 'sent' && <p className="mt-3 text-[#7bd23b]">Thank you. We will be in touch shortly.</p>}
          {status === 'error' && <p className="mt-3 text-rose-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
