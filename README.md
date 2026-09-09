# Hult Prize at GUB — Official Website

Official website for the Hult Prize at Green University of Bangladesh.
Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev        # start dev server on http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint (next/core-web-vitals)
```

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | in production | Canonical site origin, e.g. `https://hultprizegub.org`. Used for metadata, OG URLs, sitemap, and robots. Falls back to `http://localhost:3000` in dev. |

## Where things live

| Path | Purpose |
| --- | --- |
| `app/` | Routes (App Router). Pages are server components by default. |
| `components/` | UI components. Only interactive leaves are `'use client'`. |
| `config/site.ts` | Single source of truth for name, links, socials, developer credit. |
| `data/` | Typed content arrays (events, team, partners, news, …). |
| `lib/seo.ts` | `constructMetadata()` used by every page for titles/OG. |
| `lib/forms.ts` | Shared server-side validation for the public forms. |
| `types/index.ts` | Shared TypeScript types. |
| `public/` | Static assets (hero, OG image, placeholders, icon). |

## Before you launch — TODO

- [ ] **Wire the forms to a real delivery channel.** `app/api/contact/route.ts`
      and `app/api/sponsor/route.ts` currently validate and log only. Connect
      them to Resend/SMTP/Formspree/Google Sheets, and add rate limiting or a
      captcha before exposing them publicly.
- [ ] Set `NEXT_PUBLIC_SITE_URL` in your hosting dashboard.
- [ ] Replace placeholder content: team names/photos (`data/team.ts`), partner
      logos (`data/partners.ts`), event covers (`data/events.ts`), news articles
      (`data/news.ts`), advisor message, privacy policy and terms text.
- [ ] Replace the pitch deck embed URL and Drive folder link in `app/sponsor/page.tsx`.
- [ ] Update the social URLs in `config/site.ts` if they change.
