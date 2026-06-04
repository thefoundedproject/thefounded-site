export default function Home() {
  const pillars = [
    { name: 'Mission & Values', desc: 'Clarify what you are actually building — not just what you do, but why it matters and where it is going.' },
    { name: 'Personal Capital', desc: 'Health, time, relationships, reputation, intellectual property, and finances. Map what you have. Protect what you build.' },
    { name: 'Advisory Support', desc: 'Who is in your corner? Build a board of advisors for your life — people with counsel, not just opinions.' },
    { name: 'Data Stewardship', desc: 'Your identity, your digital presence, your information. Own it before someone else monetizes it.' },
    { name: 'Community Coordination', desc: 'Organized human interdependence. Partnership, cooperative structures, and mutual support over isolation.' },
    { name: 'Continuity Planning', desc: 'What happens to what you built if something disrupts your capacity? Plan for the long arc, not just the next season.' },
  ]

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0F1B1F', minHeight: '90vh' }} className="flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-6">Human Enterprise Theory</p>
            <h1 className="text-white text-5xl md:text-6xl font-light leading-tight mb-8">
              Your life deserves<br />
              the same structure<br />
              <span style={{ color: '#D8AB69' }}>as a corporation.</span>
            </h1>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#D8AB69' }} className="mb-8" />
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-4">
              Corporations are built to protect capital, continuity, and decision-making across time. You deserve the same architecture.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-12">
              The Founded translates the protective intelligence of governance into a framework any human being can use — not to become more corporate, but to remain more fully human inside systems that already use institutional power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/theory" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F' }} className="inline-block px-8 py-4 font-semibold text-sm rounded hover:opacity-90 transition-opacity">
                Learn the Theory
              </a>
              <a href="/contact" style={{ border: '1px solid #D8AB69', color: '#D8AB69' }} className="inline-block px-8 py-4 font-semibold text-sm rounded hover:bg-white/5 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The core insight */}
      <section style={{ backgroundColor: '#D8AB69' }} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <blockquote style={{ color: '#0F1B1F' }} className="text-2xl md:text-3xl font-light leading-relaxed max-w-3xl">
            &ldquo;People born into stable, well-resourced environments often inherit governance structures before they even know those structures have a name. The Founded is built to close that gap.&rdquo;
          </blockquote>
          <p style={{ color: '#0F1B1F' }} className="text-sm font-semibold mt-6 opacity-70">— Dr. Stephen Thompson, DC, DACM, FAIHM · Human Enterprise Theory</p>
        </div>
      </section>

      {/* Six Pillars */}
      <section style={{ backgroundColor: '#F5F0E8' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">The Framework</p>
          <h2 style={{ color: '#0F1B1F' }} className="text-3xl font-light mb-4">Six pillars of personal governance.</h2>
          <p style={{ color: '#0F1B1F' }} className="text-lg mb-12 opacity-70 max-w-2xl">
            This is not self-help. This is infrastructure. Each pillar represents a domain of life that institutions protect and that most people have never been taught to protect for themselves.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={pillar.name} className="border-t-2 pt-6" style={{ borderColor: '#D8AB69' }}>
                <p style={{ color: '#D8AB69' }} className="text-xs font-semibold uppercase tracking-widest mb-2">0{i + 1}</p>
                <h3 style={{ color: '#0F1B1F' }} className="text-lg font-semibold mb-3">{pillar.name}</h3>
                <p style={{ color: '#0F1B1F' }} className="text-sm leading-relaxed opacity-80">{pillar.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="/theory" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69' }} className="inline-block px-8 py-4 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
              Read the Full Theory
            </a>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">Who This Is For</p>
          <h2 className="text-white text-3xl font-light mb-12">Built for people who are already doing the work.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { audience: 'Entrepreneurs & Founders', desc: 'You are building something real. The Founded gives you the governance infrastructure to protect it, sustain it, and hand it forward.' },
              { audience: 'Emerging Adults', desc: 'You are deciding who you are and what you stand for. The Founded gives you a framework to make those decisions with structure, not just instinct.' },
              { audience: 'Black Men & Communities', desc: 'The work of building inside systems that were not built for you is real. The Founded was designed to name that reality and give it a counter-architecture.' },
              { audience: 'Clinicians & Healers', desc: 'You give so much. The Founded helps you map your own capitals, protect your practice, and build sustainability into the work — not just the people you serve.' },
            ].map((item) => (
              <div key={item.audience} className="p-8 rounded-sm" style={{ backgroundColor: '#1A3A42' }}>
                <p style={{ color: '#D8AB69' }} className="text-sm font-semibold mb-3">{item.audience}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thompson Coaching Method */}
      <section style={{ backgroundColor: '#F5F0E8' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">The Method</p>
            <h2 style={{ color: '#0F1B1F' }} className="text-3xl font-light mb-6">Thompson Coaching Method</h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#D8AB69' }} className="mb-8" />
            <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed mb-6">
              The Thompson Coaching Method is the applied practice of Human Enterprise Theory. It is a structured coaching framework that helps individuals and organizations build sustainable agency through governance, clarity, and coordinated action.
            </p>
            <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed mb-8">
              The method draws from integrative medicine, traditional Chinese medicine, trauma-informed care, and organizational systems theory. It treats the person as the enterprise — with the same seriousness and structure.
            </p>
            <a href="/coaching" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69' }} className="inline-block px-8 py-4 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
              Explore the Method
            </a>
          </div>
          <div style={{ backgroundColor: '#0F1B1F' }} className="p-10 rounded-sm">
            <p style={{ color: '#D8AB69' }} className="text-xs font-semibold uppercase tracking-widest mb-6">The Arc</p>
            <div className="space-y-6">
              {[
                { label: 'Journey from the Edge', desc: 'Name the survival architecture. Understand what your body and mind learned to do to keep you alive.' },
                { label: 'Rooted Reclaimers', desc: 'Rebuild agency. Reconnect with body, values, community, and the capacity to imagine beyond survival.' },
                { label: 'The Human Enterprise', desc: 'Protect what you built. Governance, structure, counsel, and continuity for the long arc.' },
              ].map((step, i) => (
                <div key={step.label} className="flex gap-4">
                  <div style={{ color: '#D8AB69', minWidth: '24px' }} className="text-sm font-semibold">{i + 1}.</div>
                  <div>
                    <p style={{ color: '#D8AB69' }} className="text-sm font-semibold mb-1">{step.label}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section style={{ backgroundColor: '#D8AB69' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 style={{ color: '#0F1B1F' }} className="text-3xl font-light mb-4">Ready to build your enterprise?</h2>
          <p style={{ color: '#0F1B1F' }} className="text-lg mb-8 opacity-80">The app is coming. Join the waitlist and be first in.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69' }} className="inline-block px-8 py-4 font-semibold text-sm rounded hover:opacity-90 transition-opacity">
              Join the Waitlist
            </a>
            <a href="https://thefoundedproject.com" style={{ border: '2px solid #0F1B1F', color: '#0F1B1F' }} className="inline-block px-8 py-4 font-semibold text-sm rounded hover:bg-black/5 transition-colors">
              Learn More at The Founded Project
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
