import type { Metadata } from 'next'
import './globals.css'
import { Inter, Orbitron } from 'next/font/google'

// Load fonts for a futuristic + readable pairing
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'Asher Mining — Crypto Mining & Consulting',
  description:
    'Asher Mining specializes in 24/7 Bitcoin mining operations and consulting: mining education, investment advisory, and partnership consulting.',
  keywords: ['Bitcoin', 'mining', 'crypto', 'consulting', 'blockchain', 'Puerto Rico', 'Minnesota'],
  openGraph: {
    title: 'Asher Mining — Crypto Mining & Consulting',
    description:
      '24/7 Bitcoin mining operations. Consulting services across education, investment advisory, and partnerships.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ashermining.com',
    siteName: 'Asher Mining',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asher Mining — Crypto Mining & Consulting',
    description:
      '24/7 Bitcoin mining operations. Consulting services across education, investment advisory, and partnerships.',
  },
  themeColor: '#0b0f1a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head />
      <body
        className={`${inter.variable} ${orbitron.variable} bg-background text-white antialiased`}
      >
        <div className="min-h-dvh flex flex-col">
          {/* Global Header */}
          <header className="sticky top-0 z-40 backdrop-blur-sm bg-background/60 border-b border-white/5">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-accent-neon/90 to-accent-blue/70 shadow-glow" />
                <span className="font-orbitron text-lg tracking-wider">Asher Mining</span>
              </div>
              <nav className="hidden sm:flex gap-6 text-sm text-white/80">
                <a href="#about" className="hover:text-white transition">About</a>
                <a href="#consulting" className="hover:text-white transition">Consulting</a>
                <a href="#future" className="hover:text-white transition">Future</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
              </nav>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1">{children}</main>

          {/* Global Footer */}
          <footer className="border-t border-white/5 py-10 mt-16 bg-surface/50">
            <div className="max-w-6xl mx-auto px-4 text-sm text-white/60">
              <p>© {new Date().getFullYear()} Asher Mining. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

