import './globals.css'

export const metadata = {
  title: 'The Founded | Human Enterprise Theory',
  description: 'The Founded is the platform for Human Enterprise Theory, a governance framework for your life. Structure, agency, and continuity for the AI era. Built by Dr. Stephen Thompson, DC, DACM, FAIHM.',
  keywords: 'Human Enterprise Theory, personal governance, Thompson Coaching Method, Founded App, Dr. Stephen Thompson, survivor scholar clinician',
  openGraph: {
    title: 'The Founded | Human Enterprise Theory',
    description: 'Humanizing the corporation, not corporatizing the human.',
    url: 'https://thefounded.app',
    type: 'website',
  },
}

function Nav() {
  return (
    <nav style={{ backgroundColor: '#0F1B1F' }} className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="text-white font-semibold text-lg tracking-wide">
          <span style={{ color: '#D8AB69' }}>The</span> Founded
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/theory" className="text-gray-300 hover:text-white text-sm transition-colors">The Theory</a>
          <a href="/coaching" className="text-gray-300 hover:text-white text-sm transition-colors">Coaching</a>
          <a href="/community" className="text-gray-300 hover:text-white text-sm transition-colors">Community</a>
          <a href="/contact" style={{ backgroundColor: '#D8AB69', color: '#0F1B1F' }} className="px-4 py-2 text-sm font-semibold rounded hover:opacity-90 transition-opacity">
            Get Started
          </a>
        </div>
        <button className="md:hidden text-white" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F1B1F' }} className="text-gray-400 py-16 px-6 mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="text-white font-semibold text-lg mb-3"><span style={{ color: '#D8AB69' }}>The</span> Founded</div>
            <p className="text-sm leading-relaxed max-w-sm">
              Humanizing the corporation, not corporatizing the human. A governance framework for your life. Built for the world we're in now.
            </p>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#D8AB69' }} className="mt-4" />
          </div>
          <div>
            <div className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Platform</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/theory" className="hover:text-white transition-colors">The Theory</a></li>
              <li><a href="/coaching" className="hover:text-white transition-colors">Coaching</a></li>
              <li><a href="/community" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Get Started</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Ecosystem</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://thefoundedproject.com" className="hover:text-white transition-colors">The Founded Project</a></li>
              <li><a href="https://thefoundedemerging.app" className="hover:text-white transition-colors">Founded Emerging</a></li>
              <li><a href="https://groundedvote.com" className="hover:text-white transition-colors">GroundedVote</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs">© 2026 Dr. Stephen Thompson, DC, DACM, FAIHM · The Founded Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
