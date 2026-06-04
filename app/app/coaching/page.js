export const metadata = {
  title: 'Thompson Coaching Method | The Founded',
  description: 'The Thompson Coaching Method — applied Human Enterprise Theory. A structured coaching framework for sustainable agency, governance, and organized flourishing.',
}

export default function Coaching() {
  return (
    <>
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">The Method</p>
          <h1 className="text-white text-5xl font-light leading-tight mb-6">Thompson Coaching Method</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Applied Human Enterprise Theory. A structured coaching framework for individuals ready to move from survival to sustained agency.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#F5F0E8' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#D8AB69' }} className="mb-8" />
            <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed mb-6">
              The Thompson Coaching Method is the applied practice of Human Enterprise Theory. It draws from integrative medicine, traditional Chinese medicine, trauma-informed care, and organizational systems theory.
            </p>
            <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed mb-6">
              Healing creates possibility. But possibility still needs structure. A person can work hard to reclaim themselves and still be pulled back into burnout, bad partnerships, financial instability, or disorganized decision-making.
            </p>
            <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed">
              The Method builds the infrastructure around reclaimed agency — so it holds.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { phase: 'Phase 1', name: 'Assessment & Mapping', desc: 'A full inventory of your six capitals — health, time, relationships, reputation, intellectual property, and finances. Know what you have before you build.' },
              { phase: 'Phase 2', name: 'Governance Architecture', desc: 'Define your mission, values, and decision framework. Build your advisory board. Establish boundaries and long-term strategy.' },
              { phase: 'Phase 3', name: 'Systems & Continuity', desc: 'Data protection, emergency planning, and continuity structures. What happens to what you built if life disrupts your capacity?' },
              { phase: 'Phase 4', name: 'Community Coordination', desc: 'Identify aligned partners, cooperative structures, and mutual support networks. Agency without community is fragile.' },
            ].map((phase) => (
              <div key={phase.phase} className="border-l-4 pl-6" style={{ borderColor: '#D8AB69' }}>
                <p style={{ color: '#D8AB69' }} className="text-xs font-semibold uppercase tracking-widest mb-1">{phase.phase}</p>
                <p style={{ color: '#0F1B1F' }} className="font-semibold mb-2">{phase.name}</p>
                <p style={{ color: '#0F1B1F' }} className="text-sm leading-relaxed opacity-80">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0F1B1F' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-2xl font-light mb-4">Ready to begin?</h2>
          <p className="text-gray-400 text-sm mb-8">Coaching engagements are limited. Reach out to start the conversation.</p>
          <a href="/contact" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F' }} className="inline-block px-8 py-4 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
            Inquire About Coaching
          </a>
        </div>
      </section>
    </>
  )
}
