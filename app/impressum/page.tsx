import type { Metadata } from 'next'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: 'Impressum – Schiemann Funktion',
  description: 'Impressum und rechtliche Angaben gemäß § 5 TMG.',
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav active="impressum" />

      <main className="pt-32 pb-28 px-6">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-blue-400 text-sm mb-4 tracking-wide">— Rechtliches</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-16 tracking-tight">
            Impressum
          </h1>

          <div className="space-y-12 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-zinc-200 font-semibold text-lg mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-1 text-sm">
                <p className="text-zinc-500">[Vorname Nachname / Firmenname]</p>
                <p className="text-zinc-500">[Straße und Hausnummer]</p>
                <p className="text-zinc-500">[PLZ Ort]</p>
              </div>
            </section>

            <div className="border-t border-zinc-800/60" />

            <section>
              <h2 className="text-zinc-200 font-semibold text-lg mb-4">Kontakt</h2>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="text-zinc-600 mr-3">Telefon</span>
                  <span className="text-zinc-500">[+49 XXX XXXXXXX]</span>
                </p>
                <p>
                  <span className="text-zinc-600 mr-3">E-Mail</span>
                  <span className="text-zinc-500">[kontakt@schiemann-funktion.de]</span>
                </p>
              </div>
            </section>

            <div className="border-t border-zinc-800/60" />

            <section>
              <h2 className="text-zinc-200 font-semibold text-lg mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="space-y-1 text-sm">
                <p className="text-zinc-500">[Vorname Nachname]</p>
                <p className="text-zinc-500">[Anschrift wie oben]</p>
              </div>
            </section>

            <div className="border-t border-zinc-800/60" />

            <section>
              <h2 className="text-zinc-200 font-semibold text-lg mb-4">Haftungsausschluss</h2>
              <div className="space-y-4 text-sm text-zinc-500">
                <p>
                  <span className="text-zinc-400 font-medium block mb-1">Haftung für Inhalte</span>
                  Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                  keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
                  für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>
                <p>
                  <span className="text-zinc-400 font-medium block mb-1">Haftung für Links</span>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
                  wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
                  der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </section>

            <div className="border-t border-zinc-800/60" />

            <section>
              <h2 className="text-zinc-200 font-semibold text-lg mb-4">Urheberrecht</h2>
              <p className="text-sm text-zinc-500">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
