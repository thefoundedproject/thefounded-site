'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' })
  const [status, setStatus] = useState('idle')

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Get Started</p>
          <h1 className="text-white text-5xl font-light leading-tight mb-6">Begin Here</h1>
          <p className="text-gray-300 text-lg max-w-xl">App waitlist, coaching inquiry, or partnership. This is the right place.</p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#D8AB69' }} className="mb-8" />
            <div className="space-y-8">
              {[
                { label: 'App Waitlist', desc: 'The Founded App is in development. Join the list and be among the first in.' },
                { label: 'Coaching Inquiry', desc: 'Thompson Coaching Method engagements are limited. Reach out to begin the conversation.' },
                { label: 'Partnerships', desc: 'Organizations, institutions, and aligned communities interested in collaboration.' },
              ].map((item) => (
                <div key={item.label} className="border-l-2 pl-6" style={{ borderColor: '#D8AB69' }}>
                  <p style={{ color: '#0F1B1F' }} className="font-semibold mb-2">{item.label}</p>
                  <p style={{ color: '#0F1B1F' }} className="text-sm leading-relaxed opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div style={{ backgroundColor: '#0F1B1F', borderRadius: '12px' }} className="p-10 text-center">
                <p style={{ color: '#D8AB69' }} className="text-4xl mb-4">✦</p>
                <p className="text-white text-xl font-semibold mb-3">You're on the list.</p>
                <p className="text-gray-300 text-sm leading-relaxed">We'll be in touch when the app opens and for next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Name *</label>
                  <input required value={form.name} onChange={set('name')} type="text" style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Email *</label>
                  <input required value={form.email} onChange={set('email')} type="email" style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">I am interested in</label>
                  <select value={form.interest} onChange={set('interest')} style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none">
                    <option value="">Select...</option>
                    <option>App Waitlist</option>
                    <option>Coaching Inquiry</option>
                    <option>Partnership / Collaboration</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Message</label>
                  <textarea value={form.message} onChange={set('message')} rows={4} style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none resize-none" placeholder="Tell us where you are and where you are trying to go." />
                </div>
                {status === 'error' && <p style={{ color: '#B4533C' }} className="text-sm">Something went wrong. Please try again.</p>}
                <button type="submit" disabled={status === 'sending'} style={{ backgroundColor: '#0F1B1F', color: '#D8AB69', opacity: status === 'sending' ? 0.7 : 1 }} className="w-full py-4 text-sm font-semibold rounded transition-opacity">
                  {status === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
