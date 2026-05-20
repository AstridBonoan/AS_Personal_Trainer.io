import { programs } from '../data/content'

export function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Training Systems
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
              PROGRAMS THAT FIT YOUR GOAL
            </h2>
          </div>
          <a
            href="#booking"
            className="text-sm font-semibold text-brand hover:underline"
          >
            Not sure? Book a free fit call →
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.id}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                'featured' in program
                  ? 'border-accent bg-surface-elevated glow-accent lg:-translate-y-2'
                  : 'border-white/10 bg-surface-elevated'
              }`}
            >
              {'featured' in program && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-surface">
                  MOST POPULAR
                </span>
              )}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-2xl tracking-wide">{program.title}</h3>
                <span className="shrink-0 rounded-full border border-white/15 px-2 py-0.5 text-xs text-muted">
                  {program.intensity}
                </span>
              </div>
              <p className="mt-2 text-muted">{program.tagline}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand">
                {program.duration}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {program.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm">
                    <span className="text-accent" aria-hidden>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  'featured' in program
                    ? 'bg-accent text-surface hover:opacity-90'
                    : 'border border-white/20 hover:border-accent hover:text-accent'
                }`}
              >
                Apply for {program.title}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
