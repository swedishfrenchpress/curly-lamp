# Vem svarar för Acus? / Who Answers for Acus?

Campaign site on the Swedish Police Authority's undisclosed use of Palantir
Technologies' analysis platform, known in Sweden as **Acus**.

Standalone campaign — **not** NOTA-branded. NOTA Sverige is credited in the
footer only.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind 4 · TypeScript · static export.

No database, no analytics, no cookies, no third-party scripts, and nothing is
written to a visitor's browser.

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
    site-header.tsx   nav + language toggle
    site-footer.tsx
    press-section.tsx photographic press grid (Home)
    share-panel.tsx   full kit (server): actions + asset downloads
    share-actions.tsx the only client island — LinkedIn, copy, native share
    share-assets.tsx  download list (server)
    share-cta.tsx     compact terminal CTA reused across routes
    data-flow.tsx     reported Acus data relationship
    ui.tsx            Cites, SectionHead, ClaimList, Section, PageHero
    reveal.tsx        one-shot fade-in on first scroll into view
  lib/page.ts     shared generateStaticParams + metadata
  app/
    page.tsx              language gate at /  (client redirect + no-JS links)
    [lang]/page.tsx       landing
    [lang]/known/         what we know / what we don't
    [lang]/timeline/
    [lang]/acus/          plain-language explainer
    [lang]/questions/     the five unanswered questions + open research + FOIA
```

Downloadable social images and their editable SVG sources live in
`public/share/`: 1200 × 630, 1080 × 1080 and 1080 × 1920 (Instagram/TikTok
story) in each language. OpenGraph and Twitter metadata use the 1200 × 630 PNGs
only — a 9:16 image in `openGraph.images` gets picked as the card by some
platforms and renders as a tall sliver.

The SVGs are the source of truth; the PNGs are committed build artifacts.
Re-render them with `npm run assets` (needs `rsvg-convert`, e.g.
`brew install librsvg`). It is deliberately **not** part of `npm run build`, so
CI never depends on a Homebrew formula. The domain is isolated in a single
`<text id="domain">` node per file — it is still undecided (CONTENT.md §4), so
a change is one line per file plus a re-render.

## Editing copy

All prose lives in `src/content/sv.ts` and `src/content/en.ts`. Both are typed
against the same `Dict`, so **adding a field to one and not the other fails the
build**. That is deliberate: the two languages cannot silently drift.

To add a source, add it to `SOURCES` in `src/content/sources.ts`, then reference
its key in any `cite: [...]` array. Citations render as the publisher's name so
a reader can tell a riksdag document from a newspaper at a glance.

## Design

A restrained deep-blue palette makes the campaign feel credible and calm.
The stronger blue (`--flag`) marks unanswered questions and unresolved states;
tinted surfaces and hairlines carry the rest of the hierarchy. A shared
12-column evidence grid creates the recurring title rail, reading field, and
asymmetric hero compositions. Full notes live in `DESIGN.md` and at the top of
`src/app/globals.css`.

Layout and tonal-ramp approach are adapted from
[cashu.space-website](https://github.com/swedishfrenchpress/cashu.space-website).
Typeface is Geist (the reference site's GT Standard is a licensed trial font).

## Before launch

See **[CONTENT.md](CONTENT.md)** — facts to verify and decisions still open.
