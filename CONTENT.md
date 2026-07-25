# Content status, verification queue, open decisions

Everything on the site is either sourced to a public document, attributed to a
newsroom, or explicitly marked unknown. This file tracks what still needs
checking and what is still undecided.

---

## 1. Must verify before launch

These are marked `unverified: true` in `src/content/sources.ts`, which renders a
red note on the About page. Clear the flag as each is confirmed.

| # | Item | Why it matters | Where |
|---|---|---|---|
| 1 | **Exact publication date and URL of the original Dagens ETC investigation.** I only have the follow-up articles; the primary piece is cited generically. | It is the load-bearing source for the whole site. | `SOURCES["etc-granskning"]` |
| 2 | **The Strömmer quote, verbatim in Swedish.** Currently `"Polismyndigheten avgör själv vilka IT-tjänster som myndigheten upphandlar."` | It is the hero pull quote. A misquoted minister hands the government a free rebuttal. Read [written question 2025/26:167](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/skriftlig-fraga/polisens-anvandning-av-analys-och_hd11167/) and copy the exact sentence. | `sv.home.quote.text`, `en.home.quote.text` |
| 3 | **The "8 months" figure.** Reported as how long police declined to confirm or deny to ETC. | It is one of four headline numbers. | `sv.home.stats[1]` |
| 4 | **The "at least five years" phrasing** and whether ETC pinned a start year. | The timeline's first entry is labelled "Cirka 2020" and says openly that the year is inferred, not confirmed. If ETC gave a year, use it and drop the caveat. | `sv.timeline.entries[0]` |
| 5 | **Moderaterna's camera pledge date.** I have the pledge (5,000 by 2027 → 10,000 by 2029) but not the announcement date. | Cited on the landing page and the timeline. | `SOURCES["m-kameror"]` |
| 6 | **Whether all three oversight bodies were uninformed**, and as of when. | Named specifically: insynsrådet, IMY, SIN. A specific claim about named public bodies needs a solid citation. | `sv.known.knownItems[4]` |

## 2. Read the interpellation debate

The 16 February 2026 floor debate ([riksdagen web TV](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/interpellation/anvandningen-av-analysplattformen-palantir_hd10301/))
has not been gone through line by line. This is the highest-value remaining
research task on the site:

- It is the only place the minister had to respond in real time, under
  follow-up, rather than in writing.
- Any concrete concession or refusal there is stronger material than the written
  answer currently quoted.
- The timeline entry for that date says openly that we haven't read the
  transcript yet. Remove that caveat once you have.

## 3. Corrections to the original campaign notes

Two things in the working notes were out of date. Both are fixed in the copy,
but they change the strategy:

**The "his question wasn't answered — that's the opening" framing is now
stronger than the notes assumed.** Löberg did not stop at the written question.
He filed interpellation 2025/26:301 on 23 January 2026 and forced a floor debate
on 16 February 2026. The opening is no longer "he asked and was ignored" — it is
"he asked twice, once in the chamber, and still got nothing." Also worth
foregrounding: Löberg sits on the Police Authority's own supervisory board. An
insider not being told is a sharper fact than an opposition MP not being told.

**The facial recognition law is not upcoming — it is in force.** Passed 26 May
2026, in force 1 July 2026. All copy is past tense. The timeline is no longer
"what's coming" but "what was finished while the question went unanswered,"
which is a better story.

## 4. Open decisions

**Tipline channels** — `sv.tips.channelsPending` currently says, honestly, that
no channels exist yet. Before publishing any:

- Decide Signal vs. Proton+PGP vs. both.
- Note that the risk page already tells sources that Dagens ETC has
  constitutional source protection that this campaign does not, and that a
  newsroom may be the better recipient. Keep that. It costs tips and buys
  credibility, and it is true.
- Nothing on the site should invite contact until the routes and the handling
  practice behind them both work.

**Domain** — copy assumes the campaign name, not a domain. `SITE_URL` in
`src/content/index.ts` is a placeholder (`vemsvararforacus.se`). Candidates:
`vemsvararforacus.se`, `acus.se`, `vadaracus.se`.

**Localised route slugs** — both languages currently share English-ish slugs
(`/sv/known/`, `/en/known/`) so the language toggle is a one-segment swap. Real
Swedish slugs (`/sv/vad-vi-vet/`) would read better and help Swedish search, but
need a slug map plus per-language `generateStaticParams`. Worth doing before
any significant promotion.

**OG images** — none yet. `src/lib/page.ts` sets OpenGraph title/description but
no image. The quote card idea from the notes (the minister's own words, no
editorialising) would work as the default share image.

**Native Swedish review** — the Swedish copy is the primary version and should
get a native pass before launch, particularly the legal phrasing on the tips
page (meddelarfrihet / anskaffarfrihet) and on the FOIA section.

## 5. Where Amel's research lands

Scaffolded and openly marked unfinished rather than omitted:

- `sv.questions.research` — five research items with `open` / `in-progress`
  status, rendered on `/questions`. Palantir's product portfolio, data
  harmonisation, the procurement, Swedish/European alternatives, and cost.
- `sv.acus.caveat` — states plainly that the explainer describes Palantir's
  platform in general and may not describe the Swedish installation, and that a
  deeper review is under way.

When the research lands, promote it out of the scaffold into real sections with
citations, and flip the status labels.

## 6. Editorial rules, so the site stays defensible

1. Reporting is attributed. "Enligt Dagens ETC:s granskning", never "det är
   bekräftat". We have not independently verified the journalism.
2. Parliamentary documents are primary and are linked directly. The minister's
   non-answers are stronger in the original than in our summary.
3. Where we don't know, we say we don't know. The landing page says outright
   that this is **not** an allegation that the police broke the law. Keep that
   section. It is both honest and the best protection the site has.
4. No new claim ships without a `cite` array, or an explicit statement that it
   is unknown.
