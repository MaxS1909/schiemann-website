import type { Metadata } from 'next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Reveal } from '../components/Reveal'

export const metadata: Metadata = {
  title: 'Prozess – Schiemann Funktion',
  description:
    'Wie wir arbeiten: Analyse, Konzept, Umsetzung und Optimierung – unser Prozess im Detail.',
}

const steps = [
  {
    id: 'analyse',
    num: '01',
    title: 'Analyse',
    intro:
      'Jedes Projekt beginnt mit Zuhören. Wir stellen die richtigen Fragen, erfassen Ihre Ausgangssituation vollständig und verstehen, was Sie und Ihre Zielgruppe wirklich braucht.',
    detail:
      'Bevor wir eine Zeile Code schreiben oder ein Pixel setzen, wollen wir verstehen. Wer sind Ihre Nutzer? Was sind Ihre Ziele? Welche Probleme soll die Lösung lösen? Erst wenn wir diese Fragen klar beantworten können, beginnen wir.',
    deliverables: [
      'Kick-off-Gespräch & Briefing',
      'Zielgruppenanalyse',
      'Markt- und Wettbewerbsbetrachtung',
      'Technische Bestandsaufnahme',
      'Dokumentierte Anforderungen',
    ],
  },
  {
    id: 'konzept',
    num: '02',
    title: 'Konzept',
    intro:
      'Aus den Ergebnissen der Analyse entsteht ein klares Konzept: Struktur, Strategie und eine erste visuelle Richtung – bevor wir in die Umsetzung gehen.',
    detail:
      'Ein gutes Konzept spart Zeit und vermeidet teure Änderungen später. Wir entwickeln Seitenstrukturen, Wireframes und Designrichtungen gemeinsam mit Ihnen – iterativ und transparent.',
    deliverables: [
      'Seitenstruktur & Sitemap',
      'Wireframes & User Flows',
      'Designrichtung & Moodboard',
      'Technische Architekturentscheidung',
      'Projektplan & Meilensteine',
    ],
  },
  {
    id: 'umsetzung',
    num: '03',
    title: 'Umsetzung',
    intro:
      'Wir entwickeln und gestalten iterativ – mit regelmäßigen Updates und echten Feedback-Runden. Keine Blackbox, sondern ein transparenter Prozess.',
    detail:
      'Design und Entwicklung laufen bei uns Hand in Hand. Wir bauen in Iterationen, zeigen Zwischenergebnisse und passen uns an Ihr Feedback an. Das Ergebnis ist eine Lösung, die wirklich zu Ihnen passt.',
    deliverables: [
      'Design-Iterationen & Reviews',
      'Frontend-Entwicklung',
      'Backend & CMS-Integration',
      'Content-Integration',
      'Browser- & Device-Testing',
    ],
  },
  {
    id: 'optimierung',
    num: '04',
    title: 'Optimierung',
    intro:
      'Launch ist kein Endpunkt. Wir analysieren das Nutzerverhalten, identifizieren Optimierungspotenziale und entwickeln Ihre Lösung kontinuierlich weiter.',
    detail:
      'Nach dem Go-live beginnt die eigentliche Arbeit: messen, lernen, verbessern. Wir begleiten Sie langfristig und sorgen dafür, dass Ihre Lösung mit Ihren Anforderungen wächst.',
    deliverables: [
      'Performance-Analyse & Monitoring',
      'SEO-Auswertung',
      'A/B-Testing',
      'Laufende Weiterentwicklung',
      'Support & Wartung',
    ],
  },
]

export default function Prozess() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav active="prozess" />

      <main className="pt-32 pb-28 px-6">
        <div className="mx-auto max-w-5xl">

          {/* Page header */}
          <Reveal className="mb-24">
            <p className="font-mono text-blue-400 text-sm mb-4 tracking-wide">— Prozess</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tighter text-zinc-50 mb-6">
              Wie wir
              <br />
              <span className="text-blue-400">arbeiten.</span>
            </h1>
            <p className="text-zinc-400 max-w-lg leading-relaxed text-lg">
              Strukturiert, transparent und konsequent auf Ihr Ergebnis ausgerichtet.
              Kein Wasserfallmodell, sondern ein lebendiger Prozess mit echtem Dialog.
            </p>
          </Reveal>

          {/* Timeline steps */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent hidden lg:block"
              aria-hidden="true"
            />

            <div className="space-y-0">
              {steps.map((step, i) => (
                <Reveal key={step.id} delay={i * 60}>
                  <section
                    id={step.id}
                    className={`relative pl-0 lg:pl-16 py-16 ${i < steps.length - 1 ? 'border-b border-zinc-800/40' : ''}`}
                  >
                    {/* Step dot on timeline */}
                    <div
                      className="hidden lg:flex absolute left-0 top-[4.25rem] w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                      {/* Main content */}
                      <div>
                        <div className="flex items-center gap-4 mb-5">
                          <span className="font-mono text-blue-400 text-xs tracking-widest">{step.num}</span>
                          <div className="h-px flex-1 bg-zinc-800/60" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight mb-5">
                          {step.title}
                        </h2>
                        <p className="text-zinc-300 leading-relaxed mb-4 text-base">{step.intro}</p>
                        <p className="text-zinc-500 leading-relaxed text-sm">{step.detail}</p>
                      </div>

                      {/* Deliverables */}
                      <div className="self-start p-6 rounded-xl border border-zinc-800/70 bg-zinc-900/20">
                        <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-4">
                          Ergebnisse
                        </p>
                        <ul className="space-y-2.5">
                          {step.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-3 text-zinc-400 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0 mt-1.5" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Reveal>
            <div className="mt-20 text-center py-16 px-8 rounded-2xl border border-zinc-800 bg-zinc-900/20">
              <h2 className="text-3xl font-bold text-zinc-50 mb-4 tracking-tight">
                Starten wir gemeinsam.
              </h2>
              <p className="text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
                Der erste Schritt ist ein Gespräch. Kostenlos, unverbindlich und
                direkt auf Ihr Projekt zugeschnitten.
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
