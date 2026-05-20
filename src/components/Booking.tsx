import { useState } from 'react'
import type { FormEvent } from 'react'
import { bookingGoals, bookingTimes } from '../data/content'

type FormState = {
  name: string
  email: string
  phone: string
  goal: string
  time: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  goal: bookingGoals[0],
  time: bookingTimes[0],
  message: '',
}

export function Booking() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Please fill in your name, email, and phone.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="booking" className="scroll-mt-24 bg-surface-elevated py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Let&apos;s Go
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
              BOOK YOUR FREE STRATEGY CALL
            </h2>
            <p className="mt-4 text-muted">
              20 minutes. Zero pressure. We&apos;ll map your goals, timeline, and the best
              program fit — whether you train with me or not.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                'Personalized goal breakdown',
                'Training & nutrition quick wins',
                'Clear next steps within 48 hours',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-2xl text-accent">
                  ✓
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-wide">YOU&apos;RE IN!</h3>
                <p className="mt-3 text-muted">
                  Thanks, {form.name.split(' ')[0]}. Check your inbox — we&apos;ll confirm your
                  call within 24 hours.
                </p>
                <button
                  type="button"
                  className="mt-8 text-sm font-semibold text-brand hover:underline"
                  onClick={() => {
                    setSubmitted(false)
                    setForm(initial)
                  }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Full name *
                    </span>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-surface-elevated px-4 py-3 text-sm outline-none transition focus:border-accent"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Phone *
                    </span>
                    <input
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-surface-elevated px-4 py-3 text-sm outline-none transition focus:border-accent"
                      placeholder="(555) 000-0000"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Email *
                  </span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-surface-elevated px-4 py-3 text-sm outline-none transition focus:border-accent"
                    placeholder="you@email.com"
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Primary goal
                    </span>
                    <select
                      value={form.goal}
                      onChange={(e) => update('goal', e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-surface-elevated px-4 py-3 text-sm outline-none transition focus:border-accent"
                    >
                      {bookingGoals.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Preferred time
                    </span>
                    <select
                      value={form.time}
                      onChange={(e) => update('time', e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-surface-elevated px-4 py-3 text-sm outline-none transition focus:border-accent"
                    >
                      {bookingTimes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Anything else? (optional)
                  </span>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="mt-1.5 w-full resize-none rounded-lg border border-white/15 bg-surface-elevated px-4 py-3 text-sm outline-none transition focus:border-accent"
                    placeholder="Injuries, schedule, past training experience..."
                  />
                </label>

                {error && (
                  <p className="text-sm text-brand" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="glow-brand w-full rounded-full bg-brand py-4 font-semibold text-white transition hover:bg-brand-dark"
                >
                  Claim My Free Call
                </button>
                <p className="text-center text-xs text-muted">
                  By submitting, you agree to be contacted about coaching. No spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
