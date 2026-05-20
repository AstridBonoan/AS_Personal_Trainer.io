# AS Personal Trainer

Elite personal trainer marketing site — mobile-first React + Tailwind, built for conversion.

**Live site:** [https://astridbonoan.github.io/AS_Personal_Trainer.io/](https://astridbonoan.github.io/AS_Personal_Trainer.io/)

## Features

- High-impact hero, transformation showcase, programs, testimonials, pricing, and booking
- Mobile-first responsive layout
- GitHub Actions CI build on every push to `main`
- GitHub Pages **Deploy from a branch** (`main` → `/docs`)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `docs/` for GitHub Pages.

## GitHub Pages setup (required once)

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select **Branch:** `main`, **Folder:** `/docs`.
4. Save.

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which rebuilds and updates the `docs/` folder automatically.

## Tech stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- GitHub Actions + GitHub Pages
