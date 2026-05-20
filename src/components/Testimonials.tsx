import { testimonials } from '../data/content'

function Stars({ count }: { count: number }) {
  return (
    <span className="text-accent" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </span>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-surface-elevated py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">Social Proof</p>
        <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">
          CLIENTS WHO SHOWED UP
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6"
            >
              <Stars count={t.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <cite className="not-italic font-semibold">{t.name}</cite>
                <p className="text-sm text-muted">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
