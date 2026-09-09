# Code Review — Hult Prize GUB Website

Next.js 14 (App Router) + Tailwind CSS, ~1,400 lines across 19 routes.
TypeScript compiles clean, production build succeeds. The issues below are verified
against the code (not speculation). Ordered by severity.

---

## 🔴 Critical — broken behavior

### 1. `app/media/news/[slug]/page.tsx` is a copy-paste of the news *list* page
The dynamic route never reads `params` — it renders the same inline article array as
`app/media/news/page.tsx`. Every URL (`/media/news/whatever`) shows the list, and the
slug in the URL is silently ignored. There is also no `generateStaticParams` and no
per-article `generateMetadata`.

**Fix:** accept `params`, look up the article from a shared `data/news.ts` (the
`NewsArticle` type already exists in `types/index.ts` but is unused), call
`notFound()` on miss, add `generateStaticParams` + `generateMetadata`.

### 2. EventCard date badge renders garbage
`components/events/EventCard.tsx` parses `event.date` expecting `"DD MMM, YYYY"`:

```ts
const dateParts = event.date.split(' ');
const day = dateParts[0] || '01';   // "2026-11-15"
const month = dateParts[1]?.replace(',', '') || 'JAN';
```

…but `data/events.ts` stores ISO dates (`'2026-11-15'`), so the badge renders
**`2026-11-15` over `JAN`** on every card. Also, the time/location line is hardcoded
(`10:00 AM • GUB Campus`) for all events.

**Fix:** parse with `new Date(event.date)` and `Intl.DateTimeFormat('en', { day: '2-digit', month: 'short' })`, and render `event.location` instead of the hardcoded string.

### 3. No `public/` directory — every referenced asset 404s
Code references assets that don't exist anywhere in the repo:
- `/images/branding/hero-bg.jpg` (homepage hero background → hero renders as a flat dark block)
- `/social/default-og.jpg` (default OG/Twitter image in `lib/seo.ts`)
- `/images/events/placeholder.jpg`, `/images/team/placeholder.jpg`, `/images/partners/placeholder.jpg`
- No `favicon.ico` / icons at all.

**Fix:** add a `public/` directory with at least a favicon, an OG image, and the hero background (or remove the reference until real assets exist).

### 4. Broken links on the homepage
In `app/page.tsx`'s "What are you looking for?" widget:
- `href="/register"` → route doesn't exist → 404
- `href="/gallery"` → actual route is `/media/gallery`
- `href="/sponsor#pitch"` → no element with `id="pitch"` on the sponsor page
- All six "Quick access" banner tiles are `href="#"`
- "PACKAGES" button links to the literal placeholder `https://drive.google.com/...`

### 5. Forms are fake — and the contact form is duplicated
- `ContactForm` and `SponsorForm` simulate submission with `setTimeout(…, 1500)` then show "sent successfully" **even though nothing is sent anywhere**. Misleading for real students/sponsors.
- `app/contact/page.tsx` doesn't use `ContactForm` at all — it has its own inline `<form>` whose inputs have **no `name` attributes**; as a server component, submitting triggers a native full-page GET navigation.
- `SponsorForm` inputs also have no `name`, and its `<label>`s have no `htmlFor` — the data is unusable even if a backend existed, and it fails a11y.

**Fix:** pick one submission path (Next.js Server Action, API route, or a service like Formspree/Google Forms), delete the inline duplicate, wire both forms to it, and add `name`/`id`/`htmlFor` everywhere. Until a backend exists, at least don't claim success.

### 6. Navigation disappears entirely between 768–1279 px
`NavbarShell` shows the mobile menu under `xl:hidden`, but `MobileNavbar`'s root
wrapper is `md:hidden`. On tablets (md → xl) the desktop links are hidden **and** the
hamburger is hidden — no way to navigate at all.

**Fix:** make both breakpoints `xl` (change `md:hidden` → `xl:hidden` in `MobileNavbar`).

### 7. Team page mutates imported module data during render
```ts
{teamData.sort((a, b) => a.displayOrder - b.displayOrder).map(…)}
```
`.sort()` mutates the shared array in place on every render — a side effect that can
cause double-sorting bugs and breaks rendering assumptions.

**Fix:** `[...teamData].sort(…)` or sort once in `data/team.ts`.

---

## 🟠 High priority

### 8. Dark-mode flash on every load + half the site ignores dark mode
- The `dark` class is applied in `ThemeToggle`'s `useEffect` — after hydration — so dark-mode users get a white flash on every navigation/refresh. Add a tiny blocking inline script in `<head>` (`beforeInteractive`) that reads `localStorage.theme` / `prefers-color-scheme` and sets the class before first paint (`suppressHydrationWarning` on `<html>` is already in place).
- ~12 pages (`about/mission`, `about/advisor`, `events`, `achievements`, `team`, `partners`, `impact`, `contact`, `gallery`, `news`, `privacy`, `terms`, `not-found`) use light-only `text-gray-900` / `bg-gray-*` with **no `dark:` variants** → near-unreadable in dark mode. The site has two design languages (slate+dark-aware on home/nav/footer vs gray light-only elsewhere). Consolidate on one.

### 9. Dynamic routes render on demand though content is static
Build output shows `ƒ /events/[slug]`, `ƒ /achievements/[slug]`, `ƒ /media/news/[slug]`
(server-rendered per request) while all content lives in local `data/` files.

**Fix:** add `generateStaticParams` (and `export const dynamicParams = false` to 404
unknown slugs) + `generateMetadata` for per-page titles/OG. Turns them into `○`
prerendered pages — faster TTFB, CDN-cacheable.

### 10. SEO gaps
- `lib/seo.ts` `constructMetadata()` exists but is used **only** by the root layout — every page hand-rolls a `metadata` object with inconsistent titles. Use it (or `title: { template, default }`) everywhere.
- No `app/sitemap.ts`, no `app/robots.ts`.
- No JSON-LD. For an events-driven site, `Organization` + `Event` structured data is cheap and valuable.
- `NEXT_PUBLIC_SITE_URL` falls back to `http://localhost:3000` — make sure it's set in the deploy environment or OG/canonical URLs will be wrong in prod.

### 11. `DeveloperCredit` hits the GitHub API on every page view, client-side
Unauthenticated GitHub API = 60 requests/hour per visitor IP. When rate-limited (or
offline), the footer credit silently vanishes; it also pops in after hydration causing
layout shift. A name/avatar that changes ~never doesn't need a runtime third-party call.

**Fix (cheapest):** hardcode name/avatar link, or make it a server component with
`fetch('https://api.github.com/users/Abdullah-Galib', { next: { revalidate: 86400 } })`
— fetched once at build/revalidate, zero client JS, no rate-limit flakiness for visitors.
(If moving `new Date().getFullYear()` to a server component, compute it once at module scope.)

### 12. Accessibility
- Desktop "Partners" dropdown is hover-only (`group-hover:`) — unreachable by keyboard; add `focus-within:` styles at minimum, ideally `aria-expanded` state.
- Mobile menu button lacks `aria-expanded` / `aria-controls`; menu doesn't close on Escape or outside click.
- Hero search input has no label, the search button has no accessible name, and the search does nothing (it's not even inside a `<form>`).
- Homepage heading order jumps `h2 → h1`.
- Emoji icons (`📝 🏢 📸 …`) should be `aria-hidden` (text labels already exist).

---

## 🟡 Optimization & maintainability

### 13. Dead code — delete it
- `components/ui/GlobalNavbar.tsx` — never imported (superseded by `NavbarShell`)
- `components/home/Hero.tsx` — never imported (home page inlines its own hero)
- `components/forms/ContactForm.tsx` — never imported (after fixing #5, keep one form component)
- `data/testimonials.ts` + `Testimonial` type — unused
- `NewsArticle` type — unused
- `config/brand.ts` — unused (see #14 — either delete or make it the source of truth)
- `types/declarations.d.ts` — unnecessary; Next handles CSS imports
- Unused import: `Link` in `components/events/EventCard.tsx`

### 14. Design tokens defined but ignored — hex codes hardcoded ~60×
Tailwind config defines `brand.pink/yellow/orange/magenta`, yet the codebase hardcodes
`text-[#E6007F]`, `bg-[#E6007F]`, `hover:bg-[#A30A7B]`, `text-[#FFDA00]`… everywhere.
Use `text-brand-pink`, `bg-brand-pink`, `hover:bg-brand-magenta` → one-line rebrand,
and consistent colors guaranteed.

### 15. Extract repeated UI primitives
The pink pill button (`bg-[#E6007F] text-white rounded-full font-bold hover:bg-[#A30A7B] …`)
is copy-pasted ~8×; card containers, section headings, and form input styles are
repeated too. Add a `<Button variant>` component (or `@apply`-based `.btn-primary`
in `globals.css`) and shared input/card classes.

### 16. `NavbarShell` doesn't need `'use client'`
The desktop dropdown is pure CSS (`group-hover:`), and the two interactive pieces
(`ThemeToggle`, `MobileNavbar`) are already isolated client leaf components. Removing
the directive makes the whole header server-rendered → less JS shipped to every visitor.

### 17. Images & performance
- The hero background is a CSS `bg-[url('/images/…')]` — no preload, no responsive srcset, no AVIF/WebP, and it's likely the LCP element. Prefer `next/image` with `priority`, or `<link rel="preload" as="image">`.
- Poppins loads **5 weights** (300–700). Drop to 4 (400/500/600/700) — you save a font file and the 300 weight is barely used. Consider `next/font/local` (also fixes builds in offline/air-gapped CI — `next/font/google` needs network at build time; it's why the build fails in this sandbox).
- `next.config.mjs`: add `images.formats: ['image/avif', 'image/webp']`, `poweredByHeader: false`, and basic security headers.
- `transition-colors duration-500` on `<body>` animates every color change site-wide; scope it to theme toggling only if you want the smooth dark-mode transition.

### 18. Tooling gaps
- `npm run lint` can't run — `eslint` / `eslint-config-next` aren't installed (so `next build` skips linting silently). Add them plus Prettier.
- No `error.tsx` / `loading.tsx` boundaries.
- `globals.css` has leftover create-next-app CSS vars that are overridden by the body utilities in `layout.tsx` — delete to avoid confusion.

### 19. `prose` classes are inert
`prose prose-lg` is used on event/achievement detail pages and legal pages, but
`@tailwindcss/typography` is **not installed** (`plugins: []`) — the class does
nothing. Either install the plugin or drop the class.

### 20. Content/config hygiene
- Move the inline news articles (duplicated in two files) to `data/news.ts`.
- Collect placeholder URLs (`YOUR_PACKAGE_FOLDER_ID`, Canva embed, Drive links, social URLs, email) into `config/site.ts` so placeholders are obvious and swappable in one place.
- `data/events.ts` `status` renders as raw `past` on `/events` but "Archive" on cards — unify labels.
- `about/mission` and `about/advisor` duplicate mission/vision copy from `/about` and are orphaned (nothing links to them) — consolidate or link them.

---

## Suggested order of attack

| # | Item | Effort | Impact |
|---|------|--------|--------|
| 1 | Fix mobile nav breakpoint mismatch (#6) | 1 line | Tablet users can navigate again |
| 2 | Fix EventCard date parsing (#2) | ~10 lines | Obvious visual bug |
| 3 | Add `public/` assets or remove refs (#3) | small | Hero/OG/favicon stop 404ing |
| 4 | Fix homepage dead links (#4) | small | No more 404s |
| 5 | `generateStaticParams` + `generateMetadata` on `[slug]` routes (#9) | small | Faster, correct titles |
| 6 | Real form handling (#5) | medium | Actually receive messages |
| 7 | Theme flash script + dark variants audit (#8) | medium | Polished dark mode |
| 8 | Tokens/components cleanup (#13–16) | medium | Maintainability |
| 9 | sitemap/robots/JSON-LD (#10) | small | Discoverability |
| 10 | DeveloperCredit server-side (#11) | small | Reliability |
