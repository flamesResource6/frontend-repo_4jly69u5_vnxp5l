import { useEffect, useRef, useState } from 'react'

const SUGGESTIONS = [
  'Book a private tour',
  'I want to sell my property',
  'DLF, Golf Course Road',
  '3BHK in Gurgaon',
  'Arrange a call'
]

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to Gurgaon Landbase. How can I assist you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [meetingRequested, setMeetingRequested] = useState(false)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const addLead = async (payload) => {
    try {
      await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, source: 'chatbot' })
      })
    } catch (e) { /* ignore */ }
  }

  const handleSend = async (text) => {
    const content = text ?? input.trim()
    if (!content) return
    setMessages(m => [...m, { role: 'user', content }])
    setInput('')

    // Very simple intent detection for demo
    setLoading(true)
    setTimeout(async () => {
      let reply = 'Got it. I can shortlist properties that match your preferences in Gurgaon & NCR. Would you like me to arrange a private viewing or a call?'

      // detect meeting intent
      if (/book|tour|view|meeting|call|appointment/i.test(content)) {
        setMeetingRequested(true)
        reply = 'Absolutely. Please share your name, email, and preferred date/time, and I will secure a slot with our specialist.'
      }

      // detect sell intent
      if (/sell|list|listing|seller/i.test(content)) {
        reply = 'We offer a signature seller service with concierge staging and global marketing. Would you like a valuation call?'
      }

      setMessages(m => [...m, { role: 'assistant', content: reply }])
      setLoading(false)
    }, 600)
  }

  const handleQuickLead = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    await addLead({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: `Chatbot meeting request` ,
      preferred_datetime: data.datetime || null
    })
    setMessages(m => [...m, { role: 'assistant', content: 'Thank you. Your meeting request has been sent. Our concierge will confirm shortly.' }])
    setMeetingRequested(false)
  }

  const bookingUrl = 'https://cal.com/flames-demo/consultation'

  return (
    <section className="py-20 bg-[#0b1512]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 h-[520px] overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`my-2 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] px-4 py-3 rounded-2xl ${m.role === 'user' ? 'bg-[#f5f2ea] text-[#0b1512]' : 'bg-white/10 text-[#f5f2ea] border border-white/10'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-[#f5f2ea]/70 text-sm">Assistant is typing…</div>}
            <div ref={endRef} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <div className="flex gap-2 mb-3 overflow-x-auto">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => handleSend(s)} className="px-3 py-2 rounded-full bg-white/10 text-[#f5f2ea] border border-white/10 text-sm whitespace-nowrap">{s}</button>
              ))}
            </div>
            <form onSubmit={(e)=>{e.preventDefault();handleSend()}} className="flex gap-2">
              <input className="flex-1 px-4 py-3 rounded-xl bg-[#f5f2ea] text-[#0b1512]" placeholder="Ask about properties, pricing, tours…" value={input} onChange={e=>setInput(e.target.value)} />
              <button className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0b1512] font-semibold">Send</button>
            </form>

            {meetingRequested && (
              <form onSubmit={handleQuickLead} className="mt-4 space-y-2">
                <p className="text-[#f5f2ea]/80">Share details to fix a meeting:</p>
                <input name="name" required placeholder="Your name" className="w-full px-3 py-2 rounded-lg bg-white/10 text-[#f5f2ea] border border-white/10" />
                <input name="email" required type="email" placeholder="Email" className="w-full px-3 py-2 rounded-lg bg-white/10 text-[#f5f2ea] border border-white/10" />
                <input name="phone" placeholder="Phone" className="w-full px-3 py-2 rounded-lg bg-white/10 text-[#f5f2ea] border border-white/10" />
                <input name="datetime" type="datetime-local" className="w-full px-3 py-2 rounded-lg bg-white/10 text-[#f5f2ea] border border-white/10" />
                <button className="w-full px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#0b1512] font-semibold">Request Meeting</button>
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="block text-center text-emerald-300 underline mt-2">Or pick a slot via our booking page</a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
