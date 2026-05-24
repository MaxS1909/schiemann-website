export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-1 font-mono text-sm font-semibold tracking-tight">
            <span className="text-indigo-400 text-base">f</span>
            <span className="text-zinc-500">(x)</span>
            <span className="ml-2 text-zinc-100">Schiemann Funktion</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#leistungen" className="hover:text-zinc-100 transition-colors">Leistungen</a>
            <a href="#prozess" className="hover:text-zinc-100 transition-colors">Prozess</a>
            <a href="#kontakt" className="hover:text-zinc-100 transition-colors">Kontakt</a>
          </div>
          <a
            href="#kontakt"
            className="text-sm font-medium px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            Gespräch buchen
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-40 pb-28 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 font-mono text-sm">
              <span className="text-indigo-400">f</span>
              <span className="text-zinc-500">(</span>
              <span className="text-zinc-300">Ihr Unternehmen</span>
              <span className="text-zinc-500">)</span>
              <span className="text-zinc-600 mx-1">=</span>
              <span className="text-zinc-100">besserer Unternehmenszustand</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.08] tracking-tighter text-zinc-50 mb-7">
              Transformation
              <br />
              <span className="text-indigo-400">mit System.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Wir analysieren, optimieren und entwickeln Ihr Unternehmen –
              messbar, nachhaltig und präzise auf Ihre Ziele ausgerichtet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 font-medium transition-colors"
              >
                Kostenloses Erstgespräch
                <ArrowRight />
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 font-medium transition-colors"
              >
                Leistungen entdecken
              </a>
            </div>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="py-14 px-6 border-y border-zinc-800/60 bg-zinc-900/20">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-zinc-800">
            {[
              { value: "40+", label: "abgeschlossene Projekte" },
              { value: "Ø 32 %", label: "Effizienzsteigerung" },
              { value: "12 Wo.", label: "bis zu ersten Ergebnissen" },
            ].map((metric) => (
              <div key={metric.label} className="text-center px-8">
                <div className="text-4xl font-bold text-indigo-400 mb-2 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-zinc-500 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="leistungen" className="py-28 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <p className="font-mono text-indigo-400 text-sm mb-4">— Leistungen</p>
              <h2 className="text-4xl font-bold text-zinc-50 mb-4">
                Was wir für Sie berechnen
              </h2>
              <p className="text-zinc-400 max-w-lg leading-relaxed">
                Jede Funktion braucht die richtigen Parameter. Gemeinsam
                definieren wir, was Ihr Unternehmen wirklich bewegt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: <IconProcess />,
                  title: "Prozessoptimierung",
                  desc: "Wir analysieren Ihre Abläufe präzise und eliminieren Ineffizienzen – systematisch, datenbasiert und nachhaltig wirksam.",
                  tag: "Effizienz",
                },
                {
                  icon: <IconOrg />,
                  title: "Organisationsentwicklung",
                  desc: "Strukturen, Teams und Führungsmodelle entwickeln wir so weiter, dass Wachstum stabil und skalierbar verankert wird.",
                  tag: "Skalierung",
                },
                {
                  icon: <IconStrategy />,
                  title: "Strategische Beratung",
                  desc: "Von der Marktanalyse bis zur konkreten Roadmap: Wir schaffen Klarheit über Ihren Weg – und gehen ihn mit Ihnen.",
                  tag: "Wachstum",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-indigo-500/30 hover:bg-zinc-900/70 transition-all duration-300"
                >
                  <div className="mb-6 text-indigo-400">{service.icon}</div>
                  <div className="mb-2">
                    <span className="text-xs font-mono text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mt-3 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="prozess" className="py-28 px-6 bg-zinc-900/20 border-y border-zinc-800/40">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <p className="font-mono text-indigo-400 text-sm mb-4">— Unser Prozess</p>
              <h2 className="text-4xl font-bold text-zinc-50 mb-4">
                So lösen wir die Gleichung
              </h2>
              <p className="text-zinc-400 max-w-lg leading-relaxed">
                Unser Vorgehen ist strukturiert, transparent und konsequent auf
                messbare Ergebnisse ausgerichtet.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  num: "01",
                  title: "Analyse",
                  desc: "Wir erfassen Ihren Ist-Zustand vollständig und ohne Vorannahmen – präzise und faktenbasiert.",
                },
                {
                  num: "02",
                  title: "Konzeption",
                  desc: "Gemeinsam entwickeln wir die optimale Strategie und definieren klare, erreichbare Zielzustände.",
                },
                {
                  num: "03",
                  title: "Umsetzung",
                  desc: "Wir implementieren die Lösung mit Ihrem Team – pragmatisch, agil und mit echtem Wirkungsfokus.",
                },
                {
                  num: "04",
                  title: "Messung",
                  desc: "Wir belegen Fortschritt und Ergebnisse anhand klar definierter KPIs – transparent und nachvollziehbar.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="p-6 rounded-xl border border-zinc-800 bg-zinc-950"
                >
                  <div className="font-mono text-indigo-400 text-xs mb-5 tracking-widest">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="kontakt" className="py-36 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-10 px-6 py-3 rounded-2xl border border-zinc-800 bg-zinc-900 font-mono text-sm text-zinc-400">
              <span className="text-indigo-400">f</span>
              <span className="text-zinc-600">(</span>
              <span className="text-zinc-100">Ihr Unternehmen</span>
              <span className="text-zinc-600">)</span>
              <span className="text-zinc-600 mx-2">=</span>
              <span className="text-zinc-500 italic">noch unbekannt</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-6 leading-tight">
              Finden Sie heraus,
              <br />
              <span className="text-indigo-400">was möglich ist.</span>
            </h2>

            <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              In einem unverbindlichen Erstgespräch analysieren wir Ihr Potenzial
              und zeigen, wie wir Sie auf den nächsten Level bringen.
            </p>

            <a
              href="mailto:info@schiemann-funktion.de"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-indigo-600 hover:bg-indigo-500 font-medium text-lg transition-colors"
            >
              Gespräch vereinbaren
              <ArrowRight />
            </a>

            <p className="mt-6 text-zinc-600 text-sm">
              Kostenlos · Unverbindlich · 30 Minuten
            </p>
          </div>
        </section>
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

function IconProcess() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M4 10h6M4 18h6M18 10h6M18 18h6M10 10h8v8h-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconOrg() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 8.5v5M14 13.5l-5.5 5M14 13.5l5.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconStrategy() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}
