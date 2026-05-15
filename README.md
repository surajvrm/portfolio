# Suraj Verma — Shopify Developer Portfolio

A modern, responsive portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Dark / light mode toggle (persisted in localStorage)
- Scroll-triggered fade-in animations via Framer Motion
- Fully responsive — mobile, tablet, desktop
- Static export ready for GitHub Pages or Vercel

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying

### Option A — Vercel (recommended, easiest)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your repo
4. Vercel auto-detects Next.js — just click **Deploy**
5. Done. You get a `*.vercel.app` URL instantly.

> **Custom domain**: In Vercel project settings → Domains → add your domain.

---

### Option B — GitHub Pages

1. Push this repo to GitHub (repo name e.g. `portfolio`)
2. Go to repo **Settings → Pages**
3. Set source to **GitHub Actions**
4. The included `.github/workflows/deploy.yml` will auto-build and deploy on every push to `main`
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

> **Note for GitHub Pages**: If deploying to a sub-path (not a custom domain), update `next.config.js` to add `basePath`:
> ```js
> const nextConfig = {
>   output: 'export',
>   basePath: '/your-repo-name',  // add this
>   assetPrefix: '/your-repo-name',  // add this
> }
> ```

---

## Customising Content

All portfolio content lives in **`lib/data.ts`** — edit projects, services, contact info, etc. in one place without touching any component files.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework + static export |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll animations |
| Lucide React | Icons |
| Fontshare | Cabinet Grotesk + Satoshi fonts |
