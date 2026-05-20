import { stats } from '../data/content'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          Now accepting new clients
        </div>

        <h1 className="mt-6 font-display text-[clamp(3.5rem,12vw,7rem)] leading-[0.95] tracking-wide">
          <span className="block text-gradient">TRANSFORM</span>
          <span className="block">YOUR LIMITS</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
          Elite 1:1 coaching built for busy professionals who want real results — not
          guesswork. Science-backed training, nutrition, and accountability that delivers.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#booking"
            className="glow-brand inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-center font-semibold text-white transition hover:bg-brand-dark"
          >
            Book Your Free Call
          </a>
          <a
            href="#transformations"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-center font-semibold transition hover:border-accent hover:text-accent"
          >
            See Transformations
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-10 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl text-accent sm:text-4xl">{stat.value}</dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-4 sm:mt-16 sm:px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated sm:aspect-[21/9]">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand/40 via-surface-elevated to-accent/20"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <p className="font-display text-4xl tracking-wide text-white/90 sm:text-6xl">
              TRAIN WITH PURPOSE
            </p>
            <p className="max-w-md text-sm text-white/70 sm:text-base">
              In-person & online · Custom programming · Weekly accountability
            </p>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 sm:bottom-6 sm:left-6">
            {['Strength', 'Fat Loss', 'Performance', 'Mindset'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
