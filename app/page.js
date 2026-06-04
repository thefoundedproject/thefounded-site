'use client'

import { useState, useEffect, useRef } from 'react'

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

// ─── Capital Assessment ────────────────────────────────────────────────────────
const CAPITALS = [
  { id: 'health', label: 'Health', icon: '◉', desc: 'Physical energy, sleep, nervous system regulation.' },
  { id: 'time', label: 'Time', icon: '◎', desc: 'Where your hours actually go vs. where they should.' },
  { id: 'relationships', label: 'Relationships', icon: '◈', desc: 'The people who have access to you and what they take or give.' },
  { id: 'reputation', label: 'Reputation', icon: '◆', desc: 'What rooms know your name and what they say about you.' },
  { id: 'ip', label: 'Intellectual Property', icon: '◇', desc: 'Ideas, content, methods, frameworks you have built.' },
  { id: 'finances', label: 'Finances', icon: '◻', desc: 'Cash flow, assets, protection, and long-term architecture.' },
]

const STATUS_COLORS = { full: '#6D8B5F', partial: '#D9A441', depleted: '#B4533C' }
const STATUS_LABELS = { full: 'Healthy', partial: 'Stretched', depleted: 'Depleted' }

function CapitalMap() {
  const [capitals, setCapitals] = useState({})
  const [revealed, setRevealed] = useState(false)

  const allSet = CAPITALS.every(c => capitals[c.id])

  const toggle = (id, status) => setCapitals(prev => ({ ...prev, [id]: status }))

  const depleted = Object.entries(capitals).filter(([, v]) => v === 'depleted').map(([k]) => CAPITALS.find(c => c.id === k)?.label)
  const stretched = Object.entries(capitals).filter(([, v]) => v === 'partial').map(([k]) => CAPITALS.find(c => c.id === k)?.label)

  return (
    <div>
      <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24 }}>Your Six Capitals</p>
      <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: 14, lineHeight: 1.6, marginBottom: 32 }}>
        Tap each capital. Be honest — no one is watching.
      </p>
      <div className="space-y-2 mb-8">
        {CAPITALS.map(cap => (
          <div key={cap.id} style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '16px', border: `1px solid ${capitals[cap.id] ? STATUS_COLORS[capitals[cap.id]] + '60' : 'rgba(216,171,105,0.15)'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: capitals[cap.id] ? 8 : 0 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ color: '#D8AB69', fontSize: 16 }}>{cap.icon}</span>
                <span style={{ color: '#F5F0E8', fontSize: 14, fontWeight: 500 }}>{cap.label}</span>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['full', 'partial', 'depleted'].map(s => (
                  <button
                    key={s}
                    onClick={() => toggle(cap.id, s)}
                    style={{
                      width: 28, height: 28, borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 700,
                      backgroundColor: capitals[cap.id] === s ? STATUS_COLORS[s] : 'rgba(255,255,255,0.08)',
                      color: capitals[cap.id] === s ? 'white' : 'rgba(245,240,232,0.4)',
                    }}
                    title={STATUS_LABELS[s]}
                  >
                    {s === 'full' ? '●' : s === 'partial' ? '◐' : '○'}
                  </button>
                ))}
              </div>
            </div>
            {capitals[cap.id] && (
              <p style={{ color: 'rgba(245,240,232,0.45)', fontSize: 12, marginLeft: 28, lineHeight: 1.5 }}>{cap.desc}</p>
            )}
          </div>
        ))}
      </div>

      {allSet && !revealed && (
        <button onClick={() => setRevealed(true)} style={{ backgroundColor: '#D8AB69', color: '#0F1B1F', padding: '12px 32px', borderRadius: 6, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer', width: '100%' }}>
          See what this tells you →
        </button>
      )}

      {revealed && (
        <div style={{ backgroundColor: 'rgba(216,171,105,0.08)', border: '1px solid rgba(216,171,105,0.25)', borderRadius: 8, padding: 24 }}>
          {depleted.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <p style={{ color: '#B4533C', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Depleted: {depleted.join(', ')}</p>
              <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: 13, lineHeight: 1.6 }}>These need triage before strategy. The framework has specific protocols for this.</p>
            </div>
          )}
          {stretched.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <p style={{ color: '#D9A441', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Stretched: {stretched.join(', ')}</p>
              <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: 13, lineHeight: 1.6 }}>These are active drains. The governance layer is what keeps them from becoming crises.</p>
            </div>
          )}
          <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: 12, lineHeight: 1.6, marginBottom: 20 }}>
            This is your baseline. The Founded App tracks this in real time — and builds the governance around it.
          </p>
          <a href="https://thefounded.app" style={{ color: '#D8AB69', fontSize: 13, fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid rgba(216,171,105,0.4)', paddingBottom: 1 }}>
            Build this into your full governance dashboard →
          </a>
        </div>
      )}
    </div>
  )
}

// ─── Quiz Funnel ────────────────────────────────────────────────────────────
const QUIZ = [
  {
    q: 'Where are you in the governance arc right now?',
    options: [
      { label: 'Still in survival mode — I am enduring, not designing.', value: 'survival' },
      { label: 'Rebuilding — I made it through something and I am trying to find solid ground.', value: 'rebuild' },
      { label: 'Ready to build — I have stability and I need structure for what comes next.', value: 'build' },
      { label: 'Already building — I need to protect and sustain what I created.', value: 'protect' },
    ],
  },
  {
    q: 'Your current advisory board looks like:',
    options: [
      { label: 'Empty — I make decisions alone.', value: 'none' },
      { label: 'A few friends or family members. Supportive, but not always strategic.', value: 'informal' },
      { label: 'Some mentors and advisors. But they do not always give me the truth.', value: 'partial' },
      { label: 'People who challenge and counsel me. Still not formalized.', value: 'emerging' },
    ],
  },
  {
    q: 'What would it mean for your life if you had a clear governance system?',
    options: [
      { label: 'I would finally stop making decisions from panic.', value: 'calm' },
      { label: 'I would know what I am building toward.', value: 'direction' },
      { label: 'I would know my people, my mission, and my protection.', value: 'clarity' },
      { label: 'I would feel like the CEO of my own life.', value: 'agency' },
    ],
  },
]

const PROFILES = {
  survival: { title: 'You are still in survival mode.', description: 'The governance framework was built to meet people here. Survival instincts are real. They kept you alive. The work is not to override them — it is to give them a more spacious operating system.', cta: 'Start with the basics', href: '/theory' },
  rebuild: { title: 'You are in reclamation.', description: 'You survived something. Now you are rebuilding. The framework enters here — not with a five-year plan, but with the first question: what do you need to protect while you are still getting steady?', cta: 'Start with the framework', href: '/theory' },
  build: { title: 'You are ready to build.', description: 'You have the foundation. Now you need the architecture. The Founded App is designed for this exact moment — when you are stable enough to be strategic.', cta: 'Get early access to the app', href: '/contact' },
  protect: { title: 'You are protecting what you built.', description: 'This is the full Human Enterprise layer. Governance, continuity, board structure, data stewardship, and community coordination. You built it. Now protect it.', cta: 'Explore the full framework', href: '/theory' },
}

function QuizFunnel() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState(null)

  const question = QUIZ[step - 1]

  const handleNext = () => {
    if (!selected) return
    const newAnswers = [...answers, { q: question.q, a: question.options.find(o => o.value === selected).label }]
    setAnswers(newAnswers)
    setSelected(null)
    if (step < QUIZ.length) {
      setStep(step + 1)
    } else {
      const firstAnswer = QUIZ[0].options.find(o => o.label === newAnswers[0].a)?.value
      setProfile(PROFILES[firstAnswer] || PROFILES.build)
      setStep(4)
    }
  }

  const handleEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/quiz', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, answers, profile }) })
    } catch {}
    setLoading(false)
    setStep(5)
  }

  if (step === 0) return (
    <div>
      <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Find your level</p>
      <h3 style={{ color: '#0F1B1F', fontSize: 24, fontWeight: 300, lineHeight: 1.3, marginBottom: 12 }}>Where are you in the arc?</h3>
      <p style={{ color: 'rgba(15,27,31,0.6)', fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>Three questions. No right answers. Just a clearer picture of where the framework meets you.</p>
      <button onClick={() => setStep(1)} style={{ backgroundColor: '#0F1B1F', color: '#D8AB69', padding: '14px 36px', borderRadius: 6, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>
        Begin
      </button>
    </div>
  )

  if (step >= 1 && step <= QUIZ.length) return (
    <div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
        {QUIZ.map((_, i) => <div key={i} style={{ flex: 1, height: 2, borderRadius: 2, backgroundColor: i < step ? '#0F1B1F' : 'rgba(15,27,31,0.15)' }} />)}
      </div>
      <p style={{ color: 'rgba(15,27,31,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>{step} of {QUIZ.length}</p>
      <h3 style={{ color: '#0F1B1F', fontSize: 20, fontWeight: 400, lineHeight: 1.4, marginBottom: 24 }}>{question.q}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        {question.options.map(opt => (
          <button key={opt.value} onClick={() => setSelected(opt.value)} style={{ textAlign: 'left', padding: '14px 18px', borderRadius: 8, fontSize: 14, lineHeight: 1.5, cursor: 'pointer', transition: 'all 0.15s', backgroundColor: selected === opt.value ? '#0F1B1F' : 'white', color: selected === opt.value ? '#D8AB69' : 'rgba(15,27,31,0.75)', border: `1.5px solid ${selected === opt.value ? '#0F1B1F' : 'rgba(15,27,31,0.12)'}`, fontWeight: selected === opt.value ? 600 : 400 }}>
            {opt.label}
          </button>
        ))}
      </div>
      <button onClick={handleNext} disabled={!selected} style={{ backgroundColor: '#0F1B1F', color: '#D8AB69', padding: '12px 28px', borderRadius: 6, fontWeight: 700, fontSize: 14, border: 'none', cursor: selected ? 'pointer' : 'default', opacity: selected ? 1 : 0.4 }}>
        {step === QUIZ.length ? 'See my level' : 'Continue'}
      </button>
    </div>
  )

  if (step === 4) return (
    <div>
      <h3 style={{ color: '#0F1B1F', fontSize: 22, fontWeight: 300, marginBottom: 8 }}>One more thing.</h3>
      <p style={{ color: 'rgba(15,27,31,0.6)', fontSize: 14, marginBottom: 24 }}>Where should we send your results and what to do next?</p>
      <form onSubmit={handleEmail} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={{ padding: '14px 16px', border: '1.5px solid rgba(15,27,31,0.15)', borderRadius: 6, fontSize: 14, outline: 'none', color: '#0F1B1F' }} />
        <button type="submit" disabled={loading} style={{ backgroundColor: '#0F1B1F', color: '#D8AB69', padding: '14px', borderRadius: 6, fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer' }}>
          {loading ? 'Sending...' : 'Get my results'}
        </button>
      </form>
    </div>
  )

  if (step === 5 && profile) return (
    <div>
      <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Your Level</p>
      <h3 style={{ color: '#0F1B1F', fontSize: 22, fontWeight: 500, marginBottom: 12 }}>{profile.title}</h3>
      <p style={{ color: 'rgba(15,27,31,0.7)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{profile.description}</p>
      <a href={profile.href} style={{ backgroundColor: '#0F1B1F', color: '#D8AB69', padding: '14px 28px', borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>{profile.cta} →</a>
    </div>
  )
  return null
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 80)
  }, [])

  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: '#0F1B1F', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 60%, rgba(216,171,105,0.06) 0%, transparent 55%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 80, opacity: heroVisible ? 1 : 0, transition: 'opacity 0.8s ease 200ms' }}>
            Human Enterprise Theory
          </p>

          <div style={{ overflow: 'hidden' }}>
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'none' : 'translateY(100%)', transition: 'all 0.9s ease 400ms', fontSize: 'clamp(44px, 8vw, 96px)', fontWeight: 300, color: '#F5F0E8', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              Your life deserves
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'none' : 'translateY(100%)', transition: 'all 0.9s ease 550ms', fontSize: 'clamp(44px, 8vw, 96px)', fontWeight: 300, color: '#D8AB69', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              the same structure
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'none' : 'translateY(100%)', transition: 'all 0.9s ease 700ms', fontSize: 'clamp(44px, 8vw, 96px)', fontWeight: 300, color: '#F5F0E8', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              as a corporation.
            </div>
          </div>

          <div style={{ maxWidth: 480, marginTop: 48, opacity: heroVisible ? 1 : 0, transition: 'opacity 1.2s ease 1100ms' }}>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 17, lineHeight: 1.75, marginBottom: 16 }}>
              Corporations are built to protect capital, continuity, and decision-making across time.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 17, lineHeight: 1.75 }}>
              You deserve the same infrastructure applied to your own life.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', opacity: heroVisible ? 1 : 0, transition: 'opacity 1.5s ease 1.8s' }}>
          <span style={{ color: 'rgba(245,240,232,0.25)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>The Founded · thefounded.app</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/theory" style={{ color: 'rgba(216,171,105,0.7)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid rgba(216,171,105,0.3)', paddingBottom: 2 }}>Learn the theory</a>
            <a href="/contact" style={{ color: '#D8AB69', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>Get started →</a>
          </div>
        </div>
      </section>

      {/* CAPITAL MAP — interactive assessment */}
      <section style={{ backgroundColor: '#0F1B1F', padding: '120px 24px 80px', borderTop: '1px solid rgba(216,171,105,0.1)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start' }}>
            <Reveal>
              <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>The Framework</p>
              <h2 style={{ color: '#F5F0E8', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 20 }}>
                What do you<br />actually own?
              </h2>
              <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
                Before strategy comes inventory. This is the six-capital audit — the first move of the Human Enterprise framework.
              </p>
              <p style={{ color: 'rgba(245,240,232,0.35)', fontSize: 14, lineHeight: 1.7 }}>
                You have more than you know. And some of it is bleeding. This tool shows you both.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(216,171,105,0.15)', borderRadius: 12, padding: 32 }}>
                <CapitalMap />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE SIX PILLARS */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>The Six Pillars</p>
            <h2 style={{ color: '#0F1B1F', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 8 }}>Infrastructure.</h2>
            <h2 style={{ color: '#0F1B1F', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 60 }}>Every domain. Protected.</h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, backgroundColor: 'rgba(15,27,31,0.08)' }}>
            {[
              { num: '01', name: 'Mission & Values', desc: 'Name what you are building and why. Mission gives your decisions weight. Values tell you where to hold the line.' },
              { num: '02', name: 'Personal Capital', desc: 'You have more than you know. Health, time, relationships, reputation, intellectual property, finances. Map what you own.' },
              { num: '03', name: 'Advisory Support', desc: 'Supporters keep you warm. Counsel keeps you accurate. Build a board for your life. People who tell you the truth.' },
              { num: '04', name: 'Data Stewardship', desc: 'Your digital identity is already being built. This pillar asks: by whom, and under what terms.' },
              { num: '05', name: 'Community Coordination', desc: 'You were not built to do this alone. This pillar builds the structures that make cooperation real and sustainable.' },
              { num: '06', name: 'Continuity Planning', desc: 'Consider what happens to what you built if life disrupts your capacity. Plan beyond the next season.' },
            ].map((pillar, i) => (
              <Reveal key={pillar.num} delay={i * 60}>
                <div style={{ backgroundColor: '#F5F0E8', padding: '36px 28px', minHeight: 200 }}>
                  <p style={{ color: 'rgba(15,27,31,0.25)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 12 }}>{pillar.num}</p>
                  <p style={{ color: '#0F1B1F', fontSize: 16, fontWeight: 600, marginBottom: 12 }}>{pillar.name}</p>
                  <p style={{ color: 'rgba(15,27,31,0.6)', fontSize: 13, lineHeight: 1.65 }}>{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div style={{ marginTop: 48 }}>
              <a href="/theory" style={{ color: '#0F1B1F', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #D8AB69', paddingBottom: 2 }}>Read the full theory →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUIZ FUNNEL */}
      <section style={{ padding: '120px 24px', background: 'linear-gradient(135deg, #1A3A42 0%, #0F1B1F 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start' }}>
          <Reveal>
            <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>Governance Readiness</p>
            <h2 style={{ color: '#F5F0E8', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 24 }}>
              Where does the framework meet you?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
              The Human Enterprise framework is not one-size. It enters where you are — survival, reclamation, building, or protection.
            </p>
            <p style={{ color: 'rgba(245,240,232,0.35)', fontSize: 13, lineHeight: 1.6 }}>
              Three questions to find your level. Your results are emailed to you with a specific next step.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ backgroundColor: '#F5F0E8', borderRadius: 12, padding: 36 }}>
              <QuizFunnel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU BUILD — concrete outcomes */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'start' }}>
            <Reveal>
              <p style={{ color: '#D8AB69', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>In Your First 30 Days</p>
              <h2 style={{ color: '#0F1B1F', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 20 }}>
                You won't just feel better organized.<br />You'll be organized.
              </h2>
              <p style={{ color: 'rgba(15,27,31,0.6)', fontSize: 16, lineHeight: 1.75 }}>
                The framework produces real artifacts. Things you can point to, return to, and build on. Here's what's in your hands after the first month.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { num: '01', item: 'A written mission statement', note: 'Yours. Not anyone else\'s version of you.' },
                  { num: '02', item: 'Your six capitals mapped', note: 'What\'s healthy. What\'s depleted. What needs protecting.' },
                  { num: '03', item: 'A board of advisors started', note: 'Real people with real counsel. Not just supporters.' },
                  { num: '04', item: 'Your first decision logged', note: 'With board input. With your final call recorded.' },
                  { num: '05', item: 'A morning ritual that works', note: 'Breathwork, journal, mission check, department scan.' },
                  { num: '06', item: 'A governance system that\'s yours', note: 'Built around your life. Not a template.' },
                ].map((row, i) => (
                  <div key={row.num} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: '20px 0', borderBottom: '1px solid rgba(15,27,31,0.08)' }}>
                    <span style={{ color: '#D8AB69', fontSize: 11, fontWeight: 700, minWidth: 28, paddingTop: 3 }}>{row.num}</span>
                    <div>
                      <p style={{ color: '#0F1B1F', fontSize: 15, fontWeight: 600, marginBottom: 3 }}>{row.item}</p>
                      <p style={{ color: 'rgba(15,27,31,0.5)', fontSize: 13, lineHeight: 1.5 }}>{row.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOPE MARKER */}
      <section style={{ backgroundColor: '#0F1B1F', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ color: 'rgba(216,171,105,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24 }}>The promise</p>
            <p style={{ color: '#F5F0E8', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 300, lineHeight: 1.4, letterSpacing: '-0.015em' }}>
              You already have what it takes. This gives you the structure to protect it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA — APP DOWNLOAD */}
      <section style={{ backgroundColor: '#D8AB69', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ color: 'rgba(15,27,31,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>The App</p>
            <h2 style={{ color: '#0F1B1F', fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 24 }}>
              The governance system.<br />In your pocket.
            </h2>
            <p style={{ color: 'rgba(15,27,31,0.65)', fontSize: 17, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 40px' }}>
              Human Enterprise Theory as a daily operating system. Mission, board, capitals, decisions, ritual, and protection — all in one place.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ backgroundColor: '#0F1B1F', color: '#D8AB69', padding: '16px 40px', borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                Join the waitlist
              </a>
              <a href="/theory" style={{ backgroundColor: 'transparent', color: '#0F1B1F', padding: '16px 40px', borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: 'none', border: '2px solid rgba(15,27,31,0.25)' }}>
                Read the theory first
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
// appended — see actual page.js for full content
