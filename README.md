# Northbound — Marketing Agency Website

A complete, production-ready marketing site for **Northbound**, an original
performance marketing agency brand built for this project. Built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

> **Note on verification:** this project was hand-built file by file in a
> sandboxed environment with no network access, so `npm install` and
> `next build` could not be run live during development. Every file was
> manually syntax-checked and cross-referenced (imports, props, color
> tokens, regex logic). Run `npm run build` yourself as the first step —
> see Troubleshooting below if anything surfaces.

---

## 1. Requirements

- **Node.js 18.17 or later** (Node 20 LTS recommended)
- **npm** 9+ (comes with Node)

Check your versions:

```bash
node -v
npm -v
```

---

## 2. Install

From the project root (the folder containing `package.json`):

```bash
npm install
```

This installs Next.js, React, Tailwind CSS, Framer Motion, lucide-react,
and the small clsx/tailwind-merge utility pair — nothing else.

---

## 3. Run in development

```bash
npm run dev
```

Open **http://localhost:3000**. The dev server supports hot reload — edit
any file under `app/`, `components/`, or `lib/` and the browser updates
automatically.

---

## 4. Build for production

```bash
npm run build
```

This type-checks the project, lints it, and produces an optimized
production build in `.next/`. If you see TypeScript errors here, they're
real — fix them before deploying (see Troubleshooting).

To run the production build locally:

```bash
npm run start
```

Opens on **http://localhost:3000** using the optimized build.

---

## 5. Project structure

```
northbound/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx             # Assembles all sections in order
│   ├── globals.css          # Design tokens, base styles, utility classes
│   ├── loading.tsx          # Route-level loading state
│   ├── error.tsx            # Global error boundary (App Router convention)
│   ├── not-found.tsx        # Custom 404 page
│   ├── favicon.svg          # Brand mark favicon
│   ├── robots.ts            # Generated robots.txt
│   └── sitemap.ts           # Generated sitemap.xml
│
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx
│   │   ├── Header.tsx        # Sticky nav, mobile menu
│   │   └── Footer.tsx
│   ├── sections/             # One file per homepage section
│   │   ├── Hero.tsx
│   │   ├── TrustedBy.tsx
│   │   ├── PerformanceMetrics.tsx
│   │   ├── Services.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── LeadCapture.tsx   # Form + client-side handling
│   │   └── FinalCTA.tsx
│   └── ui/                   # Reusable primitives
│       ├── Button.tsx
│       ├── Logo.tsx
│       ├── BearingLine.tsx   # Signature animated motif
│       ├── CountUp.tsx       # Animated number counters
│       ├── ScrollReveal.tsx  # Scroll-triggered animation wrappers
│       ├── SectionHeading.tsx
│       └── SectionErrorBoundary.tsx
│
├── lib/
│   ├── content.ts             # ALL site copy lives here — edit text here
│   ├── actions.ts              # Server action: form validation + handling
│   └── utils.ts                 # cn() className helper
│
├── package.json
├── tsconfig.json
├── tailwind.config.js          # Full design system: colors, type, motion
├── next.config.js
├── postcss.config.js
└── .eslintrc.json
```

**To edit copy:** almost everything you'd want to change — headlines,
testimonials, pricing, FAQ answers — lives in `lib/content.ts`. You
generally don't need to touch component files to update text.

**To edit colors:** the brand palette lives in `tailwind.config.js` under
`theme.extend.colors`. The four core tokens (`ink`, `sky`, `paper`,
`brass`) are expanded into full 50–950 scales for flexibility, but the
base hex values match exactly what was specified for this build.

---

## 6. Connecting the lead form to a real backend

`lib/actions.ts` currently validates and sanitizes submissions, then logs
them to the server console — it does not call any external service, since
this environment has no network access. To make it functional:

1. Pick a destination: a database (Postgres, etc.), a CRM (HubSpot,
   Attio), or a transactional email service (Resend, Postmark).
2. In `submitLeadForm`, after the validation block and before the final
   `return`, add your API call or database write.
3. Store secrets (API keys) in a `.env.local` file (already gitignored)
   and read them via `process.env.YOUR_KEY`.

Example shape:

```ts
// inside submitLeadForm, after validation passes
await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ /* ... */ }),
});
```

The honeypot field (`name="website"`) and input sanitization stay as-is —
keep them regardless of which backend you wire up.

---

## 7. Deployment

### Vercel (recommended — built by the makers of Next.js)

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Add any environment variables (e.g. `RESEND_API_KEY`) under
   **Project Settings → Environment Variables**.

### Netlify

1. Push to a git repo and import it in Netlify.
2. Build command: `npm run build`. Publish directory: `.next`.
3. Add the official `@netlify/plugin-nextjs` plugin (Netlify prompts for
   this automatically when it detects Next.js).

### Self-hosted / Docker / any Node server

```bash
npm run build
npm run start
```

Serves on port 3000 by default. Put it behind a reverse proxy (nginx,
Caddy) for TLS and a custom domain in a traditional VPS setup.

---

## 8. Troubleshooting a fresh `npm install` / `npm run build`

Since this project couldn't be live-built in the authoring environment,
here's what to check first if something doesn't compile:

- **Type errors on `lucide-react` icons** — make sure `npm install`
  finished completely without errors; a partial install is the most
  common cause of "module has no exported member" errors.
- **Tailwind classes not applying** — confirm `app/globals.css` is
  imported in `app/layout.tsx` (it is, by default) and that
  `tailwind.config.js`'s `content` array matches your folder names if you
  rename `app/` or `components/`.
- **Font loading errors** — `next/font/google` fetches fonts (Inter,
  Instrument Serif, JetBrains Mono) at build time and needs network
  access during `npm run build`. If you're building somewhere fully
  offline, swap these for local font files via `next/font/local`.
- **"use server" errors** — if you add new exports to `lib/actions.ts`,
  every exported function in that file must be `async`. Non-async helper
  functions must stay un-exported (as `sanitize` and `isValidEmail`
  already are).

---

## 9. Performance & accessibility notes

- All animations respect `prefers-reduced-motion` (see `globals.css`).
- Keyboard focus is visible on every interactive element by default.
- Images aren't used in this build (the hero uses a CSS/SVG dashboard
  mockup, not a screenshot) — if you add real photography or screenshots,
  use `next/image` for automatic lazy-loading and responsive sizing.
- Fonts use `display: swap` to avoid blocking first paint.
- The lead form includes a honeypot field and server-side validation in
  addition to native HTML5 `required`/`type` validation.
