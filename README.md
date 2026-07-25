# Vem svarar för Acus? / Who Answers for Acus?

Campaign site on the Swedish Police Authority's undisclosed use of Palantir
Technologies' analysis platform, known in Sweden as **Acus**.

Standalone campaign — **not** NOTA-branded. NOTA Sverige is credited in the
footer only.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind 4 · TypeScript · static export.

No database, no analytics, no cookies, no third-party scripts. The only thing
written to a visitor's browser is their light/dark preference. This is stated
publicly on the About page and should stay true — see `src/app/[lang]/about/page.tsx`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

`out/` is a plain directory of HTML — deploy it anywhere (Vercel, Netlify,
Cloudflare Pages, a static bucket).

## Structure

```
src/
  content/
    types.ts      Dict shape, route slugs, path() helper
    sources.ts    every citable source, with kind: primary | reporting | advocacy
    sv.ts         Swedish copy — the primary version
    en.ts         English copy — a translation of sv.ts, not a second argument
    index.ts      dictionary lookup, SITE_UPDATED
  components/
    site-header.tsx   nav + language toggle + theme toggle
    site-footer.tsx
    ui.tsx            Cites, SectionHead, ClaimList, Section, PageHero
    reveal.tsx        one-shot fade-in on first scroll into view
    theme-toggle.tsx
  lib/page.ts     shared generateStaticParams + metadata
  app/
    page.tsx              language gate at /  (client redirect + no-JS links)
    [lang]/page.tsx       landing
    [lang]/known/         what we know / what we don't
    [lang]/timeline/
    [lang]/acus/          plain-language explainer
    [lang]/questions/     the five unanswered questions + open research + FOIA
    [lang]/tips/          source guidance (channels not yet live)
    [lang]/about/         method, corrections, full source list
```

## Editing copy

All prose lives in `src/content/sv.ts` and `src/content/en.ts`. Both are typed
against the same `Dict`, so **adding a field to one and not the other fails the
build**. That is deliberate: the two languages cannot silently drift.

To add a source, add it to `SOURCES` in `src/content/sources.ts`, then reference
its key in any `cite: [...]` array. Citations render as the publisher's name so
a reader can tell a riksdag document from a newspaper at a glance.

## Design

Greyscale plus exactly one accent (`--flag`), which marks **only** an
unanswered question. If it ever appears on anything else the signal is spent.
Structure comes from hairlines and spacing, not boxes and colour. Full notes at
the top of `src/app/globals.css`.

Layout and tonal-ramp approach are adapted from
[cashu.space-website](https://github.com/swedishfrenchpress/cashu.space-website).
Typeface is Geist (the reference site's GT Standard is a licensed trial font).

## Before launch

See **[CONTENT.md](CONTENT.md)** — facts to verify, decisions still open, and
what needs to happen before the tipline goes live.
