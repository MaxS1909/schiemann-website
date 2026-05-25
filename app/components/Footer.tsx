export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-zinc-800/60">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <span className="flex items-center gap-2">
          <span className="font-serif italic text-blue-400/60 text-base leading-none">f</span>
          <span>Schiemann Funktion</span>
        </span>
        <span>© {new Date().getFullYear()} Schiemann Funktion. Alle Rechte vorbehalten.</span>
        <div className="flex gap-6">
          <a href="/impressum" className="hover:text-zinc-300 transition-colors duration-200">
            Impressum
          </a>
          <a href="#" className="hover:text-zinc-300 transition-colors duration-200">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  )
}
