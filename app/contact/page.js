export const metadata = {
  title: 'Get Started | The Founded',
  description: 'Join the Founded waitlist, inquire about coaching, or connect with the team.',
}

export default function Contact() {
  return (
    <>
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Get Started</p>
          <h1 className="text-white text-5xl font-light leading-tight mb-6">Begin Here</h1>
          <p className="text-gray-300 text-lg max-w-xl">Whether you are ready for coaching, want early app access, or just want to connect — this is the right place.</p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#D8AB69' }} className="mb-8" />
            <div className="space-y-8">
              {[
                { label: 'App Waitlist', desc: 'The Founded App is in development. Join the waitlist and be among the first to access the full platform.' },
                { label: 'Coaching Inquiry', desc: 'Thompson Coaching Method engagements are limited and selective. Reach out to begin the conversation.' },
                { label: 'Partnerships', desc: 'Organizations, institutions, and aligned communities interested in collaboration are welcome.' },
              ].map((item) => (
                <div key={item.label} className="border-l-2 pl-6" style={{ borderColor: '#D8AB69' }}>
                  <p style={{ color: '#0F1B1F' }} className="font-semibold mb-2">{item.label}</p>
                  <p style={{ color: '#0F1B1F' }} className="text-sm leading-relaxed opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="space-y-4">
            {[
              { label: 'Name', type: 'text', placeholder: 'Your name' },
              { label: 'Email', type: 'email', placeholder: 'your@email.com' },
            ].map((field) => (
              <div key={field.label}>
                <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">{field.label} *</label>
                <input
                  type={field.type}
                  style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }}
                  className="w-full px-4 py-3 text-sm rounded outline-none"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">I am interested in</label>
              <select style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }} className="w-full px-4 py-3 text-sm rounded outline-none">
                <option>App Waitlist</option>
                <option>Coaching Inquiry</option>
                <option>Partnership / Collaboration</option>
                <option>General</option>
              </select>
            </div>
            <div>
              <label style={{ color: '#0F1B1F' }} className="text-xs font-semibold uppercase tracking-wider block mb-1">Message</label>
              <textarea
                rows={4}
                style={{ backgroundColor: 'white', border: '1px solid #D8AB69', color: '#0F1B1F' }}
                className="w-full px-4 py-3 text-sm rounded outline-none resize-none"
                placeholder="Tell us where you are and where you are trying to go."
              />
            </div>
            <button type="submit" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69' }} className="w-full py-4 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
