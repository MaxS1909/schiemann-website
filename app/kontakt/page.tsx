import type { Metadata } from 'next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Reveal } from '../components/Reveal'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt – Schiemann Funktion',
  description:
    'Nehmen Sie Kontakt auf – wir besprechen Ihr Projekt in einem ersten, unverbindlichen Gespräch.',
}

const contactDetails = [
  {
    label: 'Adresse',
    value: '[Straße Hausnummer, PLZ Ort]',
    icon: <IconPin />,
  },
  {
    label: 'E-Mail',
    value: 'kontakt@schiemann-funktion.de',
    href: 'mailto:kontakt@schiemann-funktion.de',
    icon: <IconMail />,
  },
  {
    label: 'Telefon',
    value: '[+49 XXX XXXXXXX]',
    icon: <IconPhone />,
  },
  {
    label: 'Antwortzeit',
    value: 'In der Regel innerhalb von 24 Stunden',
    icon: <IconClock />,
  },
]

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav active="kontakt" />

      <main className="pt-32 pb-28 px-6">
        <div className="mx-auto max-w-6xl">

          {/* Page header */}
          <Reveal className="mb-20">
            <p className="font-mono text-blue-400 text-sm mb-4 tracking-wide">— Kontakt</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tighter text-zinc-50 mb-6">
              Starten wir Ihr
              <br />
              <span className="text-blue-400">Projekt.</span>
            </h1>
            <p className="text-zinc-400 max-w-lg leading-relaxed text-lg">
              Erzählen Sie uns von Ihrer Idee. Das erste Gespräch ist
              kostenlos, unverbindlich und vollständig auf Ihr Projekt ausgerichtet.
            </p>
          </Reveal>

          {/* Two-column: info + form */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16 items-start">

            {/* Left: contact info */}
            <Reveal className="space-y-8">
              <div className="space-y-5">
                {contactDetails.map(({ label, value, href, icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="mt-0.5 text-blue-400 shrink-0">{icon}</div>
                    <div>
                      <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-zinc-300 text-sm hover:text-blue-400 transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-zinc-400 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-800/60 pt-8">
                <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-3">
                  Lieber direkt?
                </p>
                <a
                  href="mailto:kontakt@schiemann-funktion.de"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                >
                  kontakt@schiemann-funktion.de
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    <path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={100}>
              <div className="p-8 md:p-10 rounded-2xl border border-zinc-800 bg-zinc-900/20">
                <h2 className="text-xl font-semibold text-zinc-100 mb-2">
                  Projektanfrage
                </h2>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                  Füllen Sie das Formular aus – wir melden uns für ein erstes Gespräch.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
