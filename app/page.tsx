import type { Metadata } from 'next'
import { HeroF } from './components/HeroF'
import { Reveal } from './components/Reveal'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

export const metadata: Metadata = {
  title: 'Schiemann Funktion – Webdesign & Digitale Lösungen',
  description:
    'Moderne Websites und digitale Lösungen – präzise entwickelt, klar gestaltet und auf Wirkung ausgerichtet.',
}

const services = [
  {
    id: 'webdesign',
    icon: <IconLayout />,
    title: 'Webdesign',
    desc: 'Visuell präzise und nutzerzentriert – Designs, die zur Marke passen und bei Ihrer Zielgruppe ankommen.',
    tag: 'Design',
  },
  {
    id: 'entwicklung',
    icon: <IconCode />,
    title: 'Website-Entwicklung',
    desc: 'Technisch saubere, performante und skalierbare Websites auf modernem Stack.',
    tag: 'Development',
  },
  {
    id: 'digital',
    icon: <IconNodes />,
    title: 'Digitale Lösungen',
    desc: 'Maßgeschneiderte digitale Werkzeuge und Prozesse für Ihren modernen Arbeitsalltag.',
    tag: 'Digital',
  },
  {
    id: 'beratung',
    icon: <IconBulb />,
    title: 'Technische Beratung',
    desc: 'Klare Orientierung in Technologie-Entscheidungen, Systemwahl und digitaler Strategie.',
    tag: 'Beratung',
  },
]

const principles = [
  {
    title: 'Klarheit',
    desc: 'Strukturierte Inhalte und klare Nutzerführung – damit Besucher sofort verstehen, was zählt.',
  },
  {
    title: 'Gestaltung',
    desc: 'Modernes Design, das zur Marke passt, Vertrauen aufbaut und in Erinnerung bleibt.',
  },
  {
    title: 'Technik',
    desc: 'Sauberer Code, schnelle Ladezeiten und solide Infrastruktur als Grundlage jeder Lösung.',
  },
  {
    title: 'Wirkung',
    desc: 'Alles dient einem Ziel: Ihnen die richtige Wirkung bei den richtigen Menschen zu verschaffen.',
  },
]

const steps = [
  {
    id: 'analyse',
    num: '01',
    title: 'Analyse',
    desc: 'Wir verstehen Ihre Ziele, Zielgruppe und den Kontext, in dem Sie sich am Markt bewegen.',
  },
  {
    id: 'konzept',
    num: '02',
    title: 'Konzept',
    desc: 'Daraus entwickeln wir eine klare Strategie, Struktur und ein überzeugendes Designkonzept.',
  },
  {
    id: 'umsetzung',
    num: '03',
    title: 'Umsetzung',
    desc: 'Wir gestalten und entwickeln – iterativ, sorgfältig und mit Fokus auf jedes Detail.',
  },
  {
    id: 'optimierung',
    num: '04',
    title: 'Optimierung',
    desc: 'Nach dem Launch messen, testen und verfeinern wir kontinuierlich.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav />

      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ minHeight: '100svh' }}>
          <div className="absolute inset-0 hero-dots" aria-hidden="true" />
          <div className="absolute inset-0 hero-glow" aria-hidden="true" />
          <HeroF />
          <div
            className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div
            className="relative z-10 mx-auto max-w-5xl px-6 flex flex-col items-center justify-center text-center"
            style={{ minHeight: '100svh', paddingTop: '6rem', paddingBottom: '5rem' }}
          >
            <div className="hero-enter hero-enter-1 inline-flex items-center gap-2.5 mb-10 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/70 text-xs text-zinc-400 tracking-widest uppercase font-medium">
              <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-blue-400" />
              Webdesign &amp; Digitale Lösungen
            </div>

            <h1 className="hero-enter hero-enter-2 text-5xl sm:text-6xl md:text-[5.5rem] font-bold leading-[1.05] tracking-tighter text-zinc-50 mb-7">
              Digitale Auftritte,
              <br />
              <span className="text-blue-400">die überzeugen.</span>
            </h1>

            <p className="hero-enter hero-enter-3 text-base md:text-lg text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed">
              Moderne Websites und digitale Lösungen – präzise entwickelt,
              klar gestaltet und auf Wirkung ausgerichtet.
            </p>

            <div className="hero-enter hero-enter-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 font-medium transition-colors duration-200"
              >
                Projekt anfragen
                <ArrowRight />
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/50 font-medium transition-colors duration-200"
              >
                Leistungen entdecken
              </a>
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section id="leistungen" className="py-28 px-6">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16">
              <p className="font-mono text-blue-400 text-sm mb-4 tracking-wide">— Leistungen</p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-5 tracking-tight">
                Was wir für Sie entwickeln
              </h2>
              <p className="text-zinc-400 max-w-md leading-relaxed">
                Von der ersten Idee bis zur fertigen Lösung – wir begleiten Ihren
                digitalen Auftritt in jeder Phase.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <Reveal key={s.id} delay={i * 80} className="h-full">
                  <a
                    href={`/leistungen#${s.id}`}
                    className="group h-full flex flex-col p-7 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-blue-500/35 hover:bg-zinc-900/60 card-hover"
                  >
                    <div className="mb-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {s.icon}
                    </div>
                    <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full self-start mb-4">
                      {s.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-3">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                    <span className="mt-5 text-xs text-blue-500/60 font-mono group-hover:text-blue-400 transition-colors duration-300">
                      Mehr erfahren →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Philosophy ───────────────────────────────────────── */}
        <section id="ansatz" className="py-28 px-6 border-y border-zinc-800/40 bg-zinc-900/10">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <Reveal>
                <p className="font-mono text-blue-400 text-sm mb-4 tracking-wide">— Unser Ansatz</p>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6 tracking-tight leading-tight">
                  Klar denken.
                  <br />
                  Sauber entwickeln.
                  <br />
                  Wirkungsvoll gestalten.
                </h2>
                <p className="text-zinc-400 leading-relaxed max-w-sm">
                  Gutes Design entsteht nicht durch Zufall. Es folgt einer klaren Haltung:
                  Konsequenz in der Gestaltung, Sorgfalt in der Technik und Fokus auf das,
                  was für den Nutzer wirklich zählt.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {principles.map((p, i) => (
                  <Reveal key={p.title} delay={i * 70} className="h-full">
                    <div className="p-6 rounded-xl border border-zinc-800/70 bg-zinc-900/25 h-full">
                      <h3 className="text-zinc-100 font-semibold mb-2">{p.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────── */}
        <section id="prozess" className="py-28 px-6">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-16">
              <p className="font-mono text-blue-400 text-sm mb-4 tracking-wide">— Prozess</p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-5 tracking-tight">
                Wie wir arbeiten
              </h2>
              <p className="text-zinc-400 max-w-md leading-relaxed">
                Strukturiert, transparent und konsequent auf Ihr Ergebnis ausgerichtet.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <Reveal key={step.id} delay={i * 80} className="h-full">
                  <a
                    href={`/prozess#${step.id}`}
                    className="group h-full flex flex-col p-7 rounded-2xl border border-zinc-800 bg-zinc-950 hover:border-blue-500/35 hover:bg-zinc-900/40 card-hover"
                  >
                    <div className="font-mono text-blue-400 text-xs mb-6 tracking-widest group-hover:text-blue-300 transition-colors duration-300">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-3">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed flex-1">{step.desc}</p>
                    <span className="mt-5 text-xs text-blue-500/60 font-mono group-hover:text-blue-400 transition-colors duration-300">
                      Details →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section id="kontakt" className="py-36 px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-blue-400 text-sm mb-6 tracking-wide">— Kontakt</p>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6 tracking-tight leading-tight">
              Bereit für
              <br />
              Ihr Projekt?
            </h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Teilen Sie uns Ihre Idee mit. Wir melden uns für ein erstes,
              unverbindliches Gespräch.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-500 font-medium text-lg transition-colors duration-200"
            >
              Jetzt anfragen
              <ArrowRight />
            </a>
            <p className="mt-6 text-zinc-600 text-sm">kontakt@schiemann-funktion.de</p>
          </Reveal>
        </section>
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 8h20M7 3v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13h4M7 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconCode() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconNodes() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6v6M12 12L5.4 18M12 12l6.6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconBulb() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2L15 17H9l-.5-1.8A7 7 0 0 1 5 9a7 7 0 0 1 7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
