export const metadata = {
  title: 'Human Enterprise Theory | The Founded',
  description: 'Human Enterprise Theory — a human-centered governance framework for agency, protection, and community flourishing in the AI era. By Dr. Stephen Thompson.',
}

export default function Theory() {
  return (
    <>
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">The Theory</p>
          <h1 className="text-white text-5xl font-light leading-tight mb-6">Human Enterprise Theory</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A human-centered governance framework for agency, protection, and community flourishing in the AI era.
          </p>
        </div>
      </section>

      {/* Core Thesis */}
      <section style={{ backgroundColor: '#F5F0E8' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto max-w-3xl">
          <div style={{ width: '60px', height: '2px', backgroundColor: '#D8AB69' }} className="mb-8" />
          <h2 style={{ color: '#0F1B1F' }} className="text-3xl font-light mb-8">The Core Thesis</h2>
          <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed mb-6">
            Modern systems reward people and entities that are structured, protected, connected, strategically advised, legally aware, financially literate, reputationally managed, data-conscious, and able to coordinate resources over time.
          </p>
          <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed mb-6">
            Corporations are built for this world. Wealthy families often train their children for this world. Elite institutions quietly teach this world. Many communities are expected to survive this world without ever being taught how it works.
          </p>
          <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed mb-6">
            Human Enterprise Theory translates the protective intelligence of governance into human-centered life architecture. The purpose is not to make people more corporate. The purpose is to help people remain more fully human inside systems that already use institutional power.
          </p>
          <blockquote style={{ borderLeft: '3px solid #D8AB69', paddingLeft: '1.5rem', color: '#0F1B1F' }} className="text-xl font-light italic my-10">
            &ldquo;Humanizing the corporation, not corporatizing the human.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Two Plasticities */}
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-8">The Central Distinction</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-sm" style={{ backgroundColor: '#1A3A42' }}>
              <h3 style={{ color: '#D8AB69' }} className="text-xl font-semibold mb-4">Privilege Plasticity</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                People born into stable, well-resourced environments often inherit governance structures before they even know those structures have a name.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Mentorship, financial literacy, institutional fluency, legal awareness, educational continuity, emotional safety, professional networks, protected experimentation, and optimized resource allocation — inherited as a birthright.
              </p>
            </div>
            <div className="p-8 rounded-sm" style={{ backgroundColor: '#2A5A66' }}>
              <h3 style={{ color: '#D8AB69' }} className="text-xl font-semibold mb-4">Survival Plasticity</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                People raised inside instability, scarcity, discrimination, chronic stress, or under-resourced environments develop survival plasticity. Their bodies and minds adapt to endure threat and uncertainty.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Those adaptations protect in the short term. Over time, they can deplete health, narrow decision-making, strain relationships, and increase the likelihood of burnout or collapse.
              </p>
            </div>
          </div>
          <div className="mt-8 p-8 rounded-sm" style={{ backgroundColor: '#D8AB69' }}>
            <p style={{ color: '#0F1B1F' }} className="text-lg font-light">
              Human Enterprise Theory is designed to help close that governance gap — not by asking people to perform competence they were denied, but by building systems that distribute what was once inherited.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Life is Organized */}
      <section style={{ backgroundColor: '#F5F0E8' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto max-w-3xl">
          <p style={{ color: '#D8AB69' }} className="text-sm font-semibold uppercase tracking-widest mb-4">A Central Correction</p>
          <h2 style={{ color: '#0F1B1F' }} className="text-3xl font-light mb-8">Modern life is not randomly traumatizing.</h2>
          <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed mb-6">
            Modern life is organized in ways that create predictable patterns of depletion, extraction, advantage, and exclusion. The dominant systems of modern life reward those who already have access to structure.
          </p>
          <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed mb-6">
            They extract labor from people who cannot negotiate. They extract time from people who have no boundaries. They extract creativity from people who have no intellectual property protections. They extract health from people who have no wellness infrastructure.
          </p>
          <p style={{ color: '#0F1B1F' }} className="text-lg leading-relaxed">
            Human Enterprise Theory names this dynamic — and then builds counter-architecture. Not as an act of rage, but as an act of organized, intentional community intelligence.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0F1B1F' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-2xl font-light mb-4">Ready to apply the theory?</h2>
          <p className="text-gray-400 text-sm mb-8">Start with coaching. Or join the waitlist for the app.</p>
          <div className="flex gap-4 justify-center">
            <a href="/coaching" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F' }} className="px-6 py-3 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
              Explore Coaching
            </a>
            <a href="/contact" style={{ border: '1px solid #D8AB69', color: '#D8AB69' }} className="px-6 py-3 text-sm font-semibold rounded hover:bg-white/5 transition-colors">
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
