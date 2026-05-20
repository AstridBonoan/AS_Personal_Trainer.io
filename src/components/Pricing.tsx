import { pricingPlans } from '../data/content'

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Invest In You</p>
          <h2 className="mt-2 font-display text-4xl tracking-wide sm:text-5xl">PRICING</h2>
          <p className="mt-4 text-muted">
            No hidden fees. Cancel anytime with 30 days notice. Every plan includes a
            results-focused onboarding week.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${
                'featured' in plan
                  ? 'relative border-brand bg-surface-elevated glow-brand lg:scale-105'
                  : 'border-white/10 bg-surface-elevated'
              }`}
            >
              {'featured' in plan && (
                <span className="mb-4 inline-block w-fit rounded-full bg-brand/20 px-3 py-1 text-xs font-bold text-brand">
                  BEST VALUE
                </span>
              )}
              <h3 className="font-display text-2xl tracking-wide">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <p className="mt-6">
                <span className="font-display text-5xl text-white">${plan.price}</span>
                <span className="text-muted">{plan.period}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm">
                    <span className="text-brand" aria-hidden>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-8 rounded-full py-3.5 text-center text-sm font-semibold transition ${
                  'featured' in plan
                    ? 'bg-brand text-white hover:bg-brand-dark'
                    : 'border border-white/20 hover:border-brand hover:text-brand'
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
