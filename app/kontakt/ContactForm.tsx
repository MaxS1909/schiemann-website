'use client'
import { useState } from 'react'

type Field = 'name' | 'email' | 'betreff' | 'nachricht'
type State = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<State>('idle')
  const [form, setForm] = useState<Record<Field, string>>({
    name: '',
    email: '',
    betreff: '',
    nachricht: '',
  })

  const set = (field: Field) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    // TODO: replace with real email service (Resend, Nodemailer, etc.)
    await new Promise((r) => setTimeout(r, 900))
    setState('success')
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 gap-5">
        <div className="w-12 h-12 rounded-full bg-blue-500/15 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M4 11l5 5 9-9" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-zinc-50">Nachricht erhalten.</h3>
        <p className="text-zinc-400 max-w-xs leading-relaxed">
          Vielen Dank für Ihre Anfrage. Ich melde mich in der Regel innerhalb
          von 24 Stunden bei Ihnen.
        </p>
        <button
          onClick={() => { setState('idle'); setForm({ name: '', email: '', betreff: '', nachricht: '' }) }}
          className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          Weitere Nachricht senden
        </button>
      </div>
    )
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs text-zinc-500 font-medium tracking-wide">
            Name <span className="text-blue-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Max Mustermann"
            value={form.name}
            onChange={set('name')}
            className={inputBase}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs text-zinc-500 font-medium tracking-wide">
            E-Mail <span className="text-blue-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="max@beispiel.de"
            value={form.email}
            onChange={set('email')}
            className={inputBase}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="betreff" className="text-xs text-zinc-500 font-medium tracking-wide">
          Betreff
        </label>
        <input
          id="betreff"
          type="text"
          placeholder="Neue Website / Webshop / ..."
          value={form.betreff}
          onChange={set('betreff')}
          className={inputBase}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="nachricht" className="text-xs text-zinc-500 font-medium tracking-wide">
          Nachricht <span className="text-blue-500">*</span>
        </label>
        <textarea
          id="nachricht"
          required
          rows={6}
          placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Frage ..."
          value={form.nachricht}
          onChange={set('nachricht')}
          className={`${inputBase} resize-none`}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
        <p className="text-xs text-zinc-600 leading-relaxed max-w-xs">
          Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur
          Bearbeitung Ihrer Anfrage zu.
        </p>

        <button
          type="submit"
          disabled={state === 'submitting'}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed font-medium text-sm transition-colors duration-200 shrink-0"
        >
          {state === 'submitting' ? (
            <>
              <Spinner />
              Wird gesendet …
            </>
          ) : (
            <>
              Nachricht senden
              <ArrowRight />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Spinner() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="animate-spin">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
