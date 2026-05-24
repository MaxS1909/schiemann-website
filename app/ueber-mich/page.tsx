import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich – Schiemann Funktion",
  description:
    "Max Schiemann – Bachelor Wirtschaftsinformatik, SAP-Expertise und Web-Design. Der Kopf hinter Schiemann Funktion.",
};

export default function UeberMich() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-1 font-mono text-sm font-semibold tracking-tight">
            <span className="text-indigo-400 text-base">f</span>
            <span className="text-zinc-500">(x)</span>
            <span className="ml-2 text-zinc-100">Schiemann Funktion</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="/#leistungen" className="hover:text-zinc-100 transition-colors">Leistungen</a>
            <a href="/#prozess" className="hover:text-zinc-100 transition-colors">Prozess</a>
            <a href="/ueber-mich" className="text-zinc-100">Über mich</a>
            <a href="/#kontakt" className="hover:text-zinc-100 transition-colors">Kontakt</a>
          </div>
          <a
            href="/#kontakt"
            className="text-sm font-medium px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            Gespräch buchen
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-28 px-6">
        <div className="mx-auto max-w-5xl">

          {/* Label */}
          <p className="font-mono text-indigo-400 text-sm mb-4">— Über mich</p>

          {/* Intro heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tighter text-zinc-50 mb-16">
            Der Mensch hinter<br />
            <span className="text-indigo-400">der Funktion.</span>
          </h1>

          {/* Two-column: portrait + bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">

            {/* Portrait placeholder */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-full aspect-[3/4] max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/60 flex flex-col items-center justify-center gap-4 text-zinc-600">
                <IconCamera />
                <span className="text-sm font-mono">portrait.jpg</span>
              </div>
              <p className="text-xs text-zinc-600 font-mono">— Platzhalter für Portrait</p>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-8 pt-2">
              <div>
                <h2 className="text-3xl font-bold text-zinc-50 mb-1">Max Schiemann</h2>
                <p className="text-indigo-400 font-mono text-sm">Unternehmensberater · Gründer</p>
              </div>

              <p className="text-zinc-400 leading-relaxed">
                Mit 23 Jahren bringe ich eine seltene Kombination aus akademischem Fundament
                und handfester Praxiserfahrung mit. Mein Studium der Wirtschaftsinformatik hat
                mir beigebracht, Unternehmensstrukturen und technologische Systeme zusammen zu
                denken – nicht getrennt.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                Schiemann Funktion ist der logische nächste Schritt: ein Beratungsangebot,
                das analytische Präzision mit konkreter Umsetzungskraft verbindet. Ich glaube
                daran, dass jedes Unternehmen eine Funktion ist – und dass jede Funktion
                optimiert werden kann.
              </p>

              {/* Fact chips */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "23 Jahre",
                  "B.Sc. Wirtschaftsinformatik",
                  "SAP-Erfahrung",
                  "Web-Design",
                ].map((fact) => (
                  <span
                    key={fact}
                    className="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-sm font-mono"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skill blocks */}
          <div className="border-t border-zinc-800/60 pt-20 mb-20">
            <p className="font-mono text-indigo-400 text-sm mb-4">— Kompetenzen</p>
            <h2 className="text-3xl font-bold text-zinc-50 mb-12">
              Was ich mitbringe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: "SAP",
                  desc: "Erfahrung in SAP-Systemen und -Prozessen – von der Analyse bestehender Systemlandschaften bis zur Begleitung von Einführungsprojekten.",
                  tag: "ERP",
                },
                {
                  title: "Wirtschaftsinformatik",
                  desc: "Bachelor-Abschluss mit Fokus auf die Schnittstelle von Betriebswirtschaft und IT – die ideale Grundlage für ganzheitliche Unternehmensberatung.",
                  tag: "Studium",
                },
                {
                  title: "Web-Design",
                  desc: "Von der Konzeption bis zur Umsetzung: ich entwickle moderne, zielgerichtete Web-Auftritte, die Unternehmen professionell repräsentieren.",
                  tag: "Digital",
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="flex flex-col p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-indigo-500/30 hover:bg-zinc-900/70 transition-all duration-300"
                >
                  <div className="mb-3">
                    <span className="text-xs font-mono text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                      {skill.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mt-3 mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-16 px-8 rounded-2xl border border-zinc-800 bg-zinc-900/30">
            <div className="inline-block mb-8 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-950 font-mono text-sm text-zinc-500">
              <span className="text-indigo-400">f</span>
              <span>(</span>
              <span className="text-zinc-300">Sie</span>
              <span>)</span>
              <span className="mx-2">=</span>
              <span className="text-zinc-400">?</span>
            </div>
            <h2 className="text-3xl font-bold text-zinc-50 mb-4">
              Kommen wir ins Gespräch.
            </h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed">
              Sie wissen jetzt, wer hinter Schiemann Funktion steckt.
              Lassen Sie uns gemeinsam herausfinden, was ich für Ihr Unternehmen tun kann.
            </p>
            <a
              href="mailto:info@schiemann-funktion.de"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 font-medium transition-colors"
            >
              Kontakt aufnehmen
              <ArrowRight />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-zinc-800/60">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span className="font-mono">
            <span className="text-indigo-400">f</span>
            <span className="text-zinc-700">(x)</span>
            <span className="ml-2">Schiemann Funktion</span>
          </span>
          <span>
            © {new Date().getFullYear()} Schiemann Funktion. Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCamera() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="12" width="32" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="23" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 12l2.5-4h7L26 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="31" cy="17" r="1.5" fill="currentColor" />
    </svg>
  );
}
