export type ActivePage = 'leistungen' | 'prozess' | 'ueber-mich' | 'kontakt' | 'impressum'

export function Nav({ active }: { active?: ActivePage }) {
  const navLinks: { href: string; label: string; key: ActivePage }[] = [
    { href: '/leistungen', label: 'Leistungen', key: 'leistungen' },
    { href: '/prozess',    label: 'Prozess',    key: 'prozess' },
    { href: '/ueber-mich', label: 'Über mich',  key: 'ueber-mich' },
    { href: '/kontakt',    label: 'Kontakt',    key: 'kontakt' },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/50 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2.5 font-medium tracking-tight">
          <span className="font-serif italic text-blue-400 text-xl leading-none">f</span>
          <span className="text-zinc-100 text-sm">Schiemann Funktion</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label, key }) =>
            active === key ? (
              <a key={key} href={href} className="text-zinc-100 text-sm">
                {label}
              </a>
            ) : (
              <a
                key={key}
                href={href}
                className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors duration-200"
              >
                {label}
              </a>
            )
          )}
        </div>

        <a
          href="/kontakt"
          className="text-sm font-medium px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
        >
          Projekt anfragen
        </a>
      </div>
    </nav>
  )
}
