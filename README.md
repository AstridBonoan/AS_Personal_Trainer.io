# AS Personal Trainer

Elite personal trainer marketing site — mobile-first React + Tailwind, built for conversion.

**Live site:** [https://astridbonoan.github.io/AS_Personal_Trainer.io/](https://astridbonoan.github.io/AS_Personal_Trainer.io/)

## Features

- High-impact hero, transformation showcase, programs, testimonials, pricing, and booking
- Mobile-first responsive layout
- GitHub Actions deploys the production build to the **`gh-pages` branch**
- GitHub Pages **Deploy from a branch** (`gh-pages` → `/`)

## GitHub Pages setup (required once)

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. **Branch:** `gh-pages` · **Folder:** `/ (root)`
4. Save and wait ~1 minute for the site to update.

> Do **not** use `main` or `/docs` — that serves the dev `index.html` and causes a blank page / `main.tsx` 404.

## Local development

```bash
npm install
npm run dev
```

## Build & manual deploy

```bash
npm run build          # output in dist/
npm run deploy         # build + push dist/ to gh-pages branch
```

## Tech stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [gh-pages](https://www.npmjs.com/package/gh-pages) + GitHub Actions
