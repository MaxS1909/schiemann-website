import type { Metadata } from 'next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Reveal } from '../components/Reveal'

export const metadata: Metadata = {
  title: 'Leistungen – Schiemann Funktion',
  description:
    'Webdesign, Website-Entwicklung, digitale Lösungen und technische Beratung – alle Leistungen im Überblick.',
}

const services = [
  {
    id: 'webdesign',
    num: '01',
    title: 'Webdesign',
    tag: 'Design',
    icon: <IconLayout />,
    intro:
      'Ein guter erster Eindruck entsteht nicht zufällig. Wir gestalten Websites, die visuell präzise sind, die Marke authentisch repräsentieren und Nutzer intuitiv durch die Inhalte führen.',
    detail:
      'Jedes Design beginnt mit einem tiefen Verständnis Ihrer Marke, Ihrer Zielgruppe und Ihrer Ziele. Daraus entsteht eine visuelle Sprache, die nicht nur schön ist – sondern wirkt.',
    features: [
      'UX/UI Design & Prototyping',
      'Responsive Design (Mobile First)',
      'Visuelle Markenidentität',
      'Interaktionsdesign & Animationen',
    ],
  },
  {
    id: 'entwicklung',
    num: '02',
    title: 'Website-Entwicklung',
    tag: 'Development',
    icon: <IconCode />,
    intro:
      'Design allein reicht nicht. Unsere Websites sind technisch sauber, schnell und skalierbar – entwickelt auf modernem Stack und mit Fokus auf Performance.',
    detail:
      'Wir entwickeln mit React und Next.js, setzen auf statische Generierung wo möglich und sorgen für kurze Ladezeiten, saubere Codestruktur und einfache Wartbarkeit.',
    features: [
      'React / Next.js Entwicklung',
      'Performance & Core Web Vitals',
      'SEO-technische Grundlagen',
      'CMS-Integration (Headless)',
    ],
  },
  {
    id: 'digital',
    num: '03',
    title: 'Digitale Lösungen',
    tag: 'Digital',
    icon: <IconNodes />,
    intro:
      'Manchmal braucht ein Unternehmen mehr als eine Website. Wir entwickeln maßgeschneiderte digitale Werkzeuge, die Prozesse automatisieren und Ihren Arbeitsalltag vereinfachen.',
    detail:
      'Von kleinen Automatisierungen bis hin zu komplexeren Web-Applikationen – wir identifizieren, wo Technologie echten Mehrwert schafft, und setzen es sauber um.',
    features: [
      'Individuelle Web-Applikationen',
      'Prozessautomatisierung',
      'API-Schnittstellen & Integrationen',
      'Interne digitale Tools & Dashboards',
    ],
  },
  {
    id: 'beratung',
    num: '04',
    title: 'Technische Beratung',
    tag: 'Beratung',
    icon: <IconBulb />,
    intro:
      'Nicht jedes Problem braucht sofort eine Lösung. Manchmal braucht es zuerst Klarheit. Wir helfen Ihnen, die richtigen Fragen zu stellen und die richtigen technischen Entscheidungen zu treffen.',
    detail:
      'Mit Erfahrung in SAP-Systemen, Wirtschaftsinformatik und modernen Web-Technologien bringen wir eine seltene Kombination aus strategischem Denken und technischem Verständnis mit.',
    features: [
      'Technologie-Stack-Entscheidungen',
      'Systemintegration & Architektur',
      'Digitale Strategie & Roadmap',
      'Code-Review & Qualitätssicherung',
    ],
  },
]

export default function Leistungen() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav active="leistungen" />

      <main className="pt-32 pb-28 px-6">
        <div className="mx-auto max-w-6xl">

          {/* Page header */}
          <Reveal className="mb-24">
            <p className="font-mono text-blue-400 text-sm mb-4 tracking-wide">— Leistungen</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tighter text-zinc-50 mb-6">
              Was wir für Sie
              <br />
              <span className="text-blue-400">entwickeln.</span>
            </h1>
            <p className="text-zinc-400 max-w-lg leading-relaxed text-lg">
              Von der Konzeption bis zum Live-Gang – jede Leistung mit dem Ziel,
              Ihren digitalen Auftritt wirkungsvoll zu machen.
            </p>
          </Reveal>

          {/* Service sections */}
          <div className="space-y-0">
            {services.map((s, i) => (
              <Reveal key={s.id}>
                <section
                  id={s.id}
                  className={`py-20 ${i < services.length - 1 ? 'border-b border-zinc-800/50' : ''}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    {/* Left: info */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-blue-400 text-xs tracking-widest">{s.num}</span>
                        <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-full">
                          {s.tag}
                        </span>
                      </div>

                      <div className="flex items-start gap-5 mb-6">
                        <div className="text-blue-400 mt-1 shrink-0">{s.icon}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight leading-tight">
                          {s.title}
                        </h2>
                      </div>

                      <p className="text-zinc-300 leading-relaxed mb-5 text-lg">{s.intro}</p>
                      <p className="text-zinc-500 leading-relaxed text-sm">{s.detail}</p>
                    </div>

                    {/* Right: features */}
                    <div className="lg:pt-12">
                      <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-5">
                        Was dazugehört
                      </p>
                      <ul className="space-y-3">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-center gap-3 text-zinc-300 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal>
            <div className="mt-20 text-center py-16 px-8 rounded-2xl border border-zinc-800 bg-zinc-900/20">
              <h2 className="text-3xl font-bold text-zinc-50 mb-4 tracking-tight">
                Welche Leistung passt zu Ihnen?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
                Lassen Sie uns gemeinsam herausfinden, was Ihr Projekt braucht.
                Ein erstes Gespräch ist kostenlos und unverbindlich.
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 font-medium transition-colors duration-200"
              >
                Projekt anfragen
                <ArrowRight />
              </a>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconLayout() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 8h20M7 3v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13h4M7 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconCode() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconNodes() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6v6M12 12L5.4 18M12 12l6.6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconBulb() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2L15 17H9l-.5-1.8A7 7 0 0 1 5 9a7 7 0 0 1 7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
