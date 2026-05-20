import { navLinks } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-2xl tracking-wide">AS PERSONAL TRAINER</p>
          <p className="mt-2 text-sm text-muted">Elite coaching. Real transformations.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-center text-xs text-muted sm:px-6 sm:text-left">
        © {year} AS Personal Trainer. All rights reserved.
      </p>
    </footer>
  )
}
