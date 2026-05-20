import { transformations } from '../data/content'

export function Transformations() {
  return (
    <section id="transformations" className="scroll-mt-24 bg-surface-elevated py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Real Results</p>
          <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
            TRANSFORMATION SHOWCASE
          </h2>
          <p className="mt-4 text-muted">
            Every client starts with a baseline assessment. These are typical outcomes when
            you follow the plan and show up consistently.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {transformations.map((t) => (
            <article
              key={t.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:border-accent/40"
            >
              <div className="relative aspect-[4/5] bg-gradient-to-b from-brand/30 via-surface to-accent/20 p-6">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-white/60">
                    <span>Before</span>
                    <span>After · {t.weeks} wks</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs text-muted">Started</p>
                        <p className="font-display text-2xl">{t.before}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted">Finished</p>
                        <p className="font-display text-2xl text-accent">{t.after}</p>
                      </div>
                    </div>
                    <p className="rounded-lg bg-black/40 px-3 py-2 text-sm font-medium backdrop-blur-sm">
                      {t.highlight}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.program}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Individual results vary. Commitment to training and nutrition drives outcomes.
        </p>
      </div>
    </section>
  )
}
