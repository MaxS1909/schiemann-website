import type { Metadata } from 'next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Reveal } from '../components/Reveal'

export const metadata: Metadata = {
  title: 'Über mich – Schiemann Funktion',
  description:
    'Max Schiemann – Bachelor Wirtschaftsinformatik, SAP-Expertise und Web-Design. Der Kopf hinter Schiemann Funktion.',
}

const skills = [
  {
    title: 'SAP',
    desc: 'Erfahrung in SAP-Systemen und -Prozessen – von der Analyse bestehender Systemlandschaften bis zur Begleitung von Implementierungsprojekten.',
    tag: 'ERP',
  },
  {
    title: 'Wirtschaftsinformatik',
    desc: 'Bachelor-Abschluss mit Fokus auf die Schnittstelle von Betriebswirtschaft und IT – die ideale Grundlage für ganzheitliche digitale Beratung.',
    tag: 'Studium',
  },
  {
    title: 'Web-Design',
    desc: 'Von der Konzeption bis zur Umsetzung: moderne, zielgerichtete Web-Auftritte, die Unternehmen professionell repräsentieren.',
    tag: 'Digital',
  },
]

export default function UeberMich() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav active="ueber-mich" />

      <main className="pt-32 pb-28 px-6">
        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <Reveal className="mb-20">
            <p className="font-mono text-blue-400 text-sm mb-4 tracking-wide">— Über mich</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tighter text-zinc-50">
              Der Mensch hinter
              <br />
              <span className="text-blue-400">der Arbeit.</span>
            </h1>
          </Reveal>

          {/* Portrait + Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start mb-24">
            <Reveal>
              <div className="flex flex-col items-center gap-4">
                <div className="w-full aspect-[3/4] max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center gap-4 text-zinc-700">
                  <IconCamera />
                  <span className="text-xs font-mono">portrait.jpg</span>
                </div>
                <p className="text-xs text-zinc-700 font-mono">— Platzhalter für Portrait</p>
              </div>
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-7 pt-2">
              <div>
                <h2 className="text-3xl font-bold text-zinc-50 mb-1">Max Schiemann</h2>
                <p className="text-blue-400 font-mono text-sm">Webdesigner · Entwickler · Berater</p>
              </div>

              <p className="text-zinc-400 leading-relaxed">
                Mit 23 Jahren bringe ich eine seltene Kombination aus akademischem Fundament
                und handfester Praxiserfahrung mit. Mein Studium der Wirtschaftsinformatik
                hat mir beigebracht, Unternehmensstrukturen und technologische Systeme
                zusammenzudenken – nicht getrennt.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                Schiemann Funktion ist der konsequente nächste Schritt: digitale Lösungen
                und Webauftritte, die nicht nur gut aussehen, sondern wirklich funktionieren.
                Analytisch gedacht, sauber umgesetzt.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {['23 Jahre', 'B.Sc. Wirtschaftsinformatik', 'SAP-Erfahrung', 'Web-Design'].map((fact) => (
                  <span
                    key={fact}
                    className="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-mono"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Skills */}
          <div className="border-t border-zinc-800/60 pt-20 mb-20">
            <Reveal className="mb-14">
              <p className="font-mono text-blue-400 text-sm mb-4 tracking-wide">— Kompetenzen</p>
              <h2 className="text-4xl font-bold text-zinc-50 tracking-tight">Was ich mitbringe</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((s, i) => (
                <Reveal key={s.title} delay={i * 80} className="h-full">
                  <div className="h-full flex flex-col p-7 rounded-2xl border border-zinc-800 bg-zinc-900/30 card-hover hover:border-blue-500/30 hover:bg-zinc-900/55">
                    <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full self-start mb-5">
                      {s.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-3">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed flex-1">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Reveal>
            <div className="text-center py-16 px-8 rounded-2xl border border-zinc-800 bg-zinc-900/20">
              <h2 className="text-3xl font-bold text-zinc-50 mb-4 tracking-tight">
                Kommen wir ins Gespräch.
              </h2>
              <p className="text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
                Sie wissen jetzt, wer hinter Schiemann Funktion steckt. Lassen Sie uns
                gemeinsam herausfinden, was ich für Ihr Projekt tun kann.
              </p>
              <a
                href="mailto:kontakt@schiemann-funktion.de"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 font-medium transition-colors duration-200"
              >
                Kontakt aufnehmen
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

function IconCamera() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="3" y="10" width="30" height="21" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="20.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 10l2.3-3.8h5.4L23 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="28" cy="15" r="1.5" fill="currentColor" />
    </svg>
  )
}
