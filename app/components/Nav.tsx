'use client'

import { useState, useEffect } from 'react'

export type ActivePage = 'leistungen' | 'prozess' | 'ueber-mich' | 'kontakt' | 'impressum'

const navLinks: { href: string; label: string; key: ActivePage }[] = [
  { href: '/leistungen', label: 'Leistungen', key: 'leistungen' },
  { href: '/prozess',    label: 'Prozess',    key: 'prozess' },
  { href: '/ueber-mich', label: 'Über mich',  key: 'ueber-mich' },
  { href: '/kontakt',    label: 'Kontakt',    key: 'kontakt' },
]

export function Nav({ active }: { active?: ActivePage }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const close = (e: MediaQueryListEvent) => { if (e.matches) setOpen(false) }
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/50 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 font-medium tracking-tight"
        >
          <span className="font-serif italic text-blue-400 text-xl leading-none">f</span>
          <span className="text-zinc-100 text-sm">Schiemann Funktion</span>
        </a>

        {/* Desktop nav links */}
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

        {/* Desktop CTA */}
        <a
          href="/kontakt"
          className="hidden md:inline-flex text-sm font-medium px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
        >
          Projekt anfragen
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-2 text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-5 mx-auto bg-current rounded-full transition-all duration-300 origin-center ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-0.5 w-5 mx-auto bg-current rounded-full transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-5 mx-auto bg-current rounded-full transition-all duration-300 origin-center ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-md">
          <div className="px-6 pt-4 pb-6 flex flex-col">
            {navLinks.map(({ href, label, key }) => (
              <a
                key={key}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-4 text-base border-b border-zinc-800/50 last:border-0 transition-colors duration-200 ${
                  active === key ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 font-medium text-sm transition-colors duration-200"
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
