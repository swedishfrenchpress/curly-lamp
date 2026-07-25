---
name: "Vem svarar för Acus?"
description: "An evidence-led public record of unanswered questions about Palantir and Swedish policing."
colors:
  paper: "#f7fafc"
  card: "#ffffff"
  band: "#edf4f7"
  chalk: "#e3edf2"
  hair: "#c8d8e0"
  ghost: "#8aa4b0"
  faint: "#587482"
  muted: "#4d6877"
  body: "#294857"
  ink: "#0e2d3d"
  panel: "#0d3044"
  panel-fg: "#f5fafc"
  flag: "#126886"
  dark-paper: "#071820"
  dark-card: "#0c222e"
  dark-ink: "#f4f9fb"
  dark-flag: "#67c6e6"
typography:
  display:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.4vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  footer-wordmark:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.6vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  detail:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.3vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  title:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 600
    lineHeight: 1.3
  question:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.25
  stat:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 3.6vw, 3rem)"
    fontWeight: 600
    lineHeight: 1
  pullquote:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 2.375rem)"
    fontWeight: 500
    lineHeight: 1.24
  step-title:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.14em"
  metadata:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
  micro:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  focus: "1px"
  press-card: "4px"
spacing:
  control: "13px 22px"
  shell-x: "clamp(20px, 5vw, 80px)"
  section-tight: "clamp(40px, 5vw, 88px)"
  section-default: "clamp(64px, 8vw, 144px)"
  section-air: "clamp(88px, 11vw, 184px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "{spacing.control}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "{spacing.control}"
  question-flag:
    backgroundColor: "#dceef4"
    textColor: "{colors.flag}"
    padding: "5px 10px"
  press-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.body}"
    rounded: "{rounded.press-card}"
    padding: "16px 18px 18px"
---

# Design System: Vem svarar för Acus?

## Overview

**Creative North Star: "The Public Record"**

This is a calm, evidentiary campaign system: closer to a public hearing wall than a political poster. A recurring 12-column evidence grid, carefully limited type scale, source-level metadata, and structural hairlines make claims easy to locate and check. A North Sea blue palette adds trust and approachability without softening the central questions.

Light and dark schemes are equal reading modes, while the deep-blue panel is an intentional editorial interruption used to bind related evidence into one argument. On mobile, the same system becomes a single readable column; desktop adds structure, never density.

**Key Characteristics:**

- Documentary, sober, and legible rather than party-political or sensational.
- Structural lines and whitespace establish order; cards are rows in a record, not floating containers.
- Asymmetric thesis, evidence-register, and interruption layouts create rhythm without decorative flourishes.
- One clear sky-blue signal marks an unanswered question, a disputed status, or the current political state.
- Source labels and dates use mono as indexing metadata, never as decorative "tech" styling.
- Press coverage uses a static photographic grid with the publisher's SVG mark, complete titles and summaries, and a direct article link.

## Colors

The palette is a restrained family of blue-tinted neutrals. Deep blue establishes authority, mist surfaces add warmth, and a clearer signal blue identifies unresolved states.

### Primary

- **Civic Signal Blue:** Reserved for open questions, direct actions, focus states, and the current political timeline state.

### Neutral

- **Mist Paper:** The lightly blue-tinted default reading surface.
- **Band and Chalk:** Blue-mist alternate section and panel grounds that separate long-form material without card clutter.
- **Harbour Ink and Body:** Deep blue headings and softened blue-gray prose preserve a clear editorial hierarchy.
- **Hairline and Metadata Blues:** Structural rules, underlines, citations, and tertiary metadata.
- **Night Record:** The fixed deep-blue showcase surface is used for contained editorial arguments in both schemes.

**The Calm Signal Rule.** Stronger blue communicates action or unresolved state without performing alarm. It may be used for links and focus, but never as decorative noise.

**The Scheme Parity Rule.** Respect OS preference by default; the explicit theme switch overrides it. Dark mode changes the reading ground and preserves contrast, but it does not introduce a second visual identity.

## Typography

**Display Font:** Geist Sans (with system sans fallbacks)
**Body Font:** Geist Sans (with system sans fallbacks)
**Label/Mono Font:** Geist Mono (with system monospace fallbacks)

**Character:** Geist Sans keeps the argument direct and contemporary; Geist Mono functions like a filing system for dates, sources, statuses, and compact navigation tools. The pair reads as public documentation, not product marketing.

### Hierarchy

- **Display:** Reserved for page-level questions and major hero statements; balanced wrapping is required.
- **Route Display:** Standard route heroes reuse the core `clamp(2.5rem, 6.4vw, 5rem)` display step; wider shared columns and compact vertical composition prevent isolated-word stacks.
- **Closing Statement:** The footer question deliberately reuses the same display step at full visual authority.
- **Headline:** Used for section arguments; balanced wrapping, with tight but readable tracking.
- **Title:** Used for local claims, questions, timeline entries, and cards at roughly 1–1.375rem; keep it semibold and compact.
- **Body:** Default prose at 1rem/1.6; cap ordinary prose at 68ch and use pretty wrapping.
- **Body Small / Detail / Caption:** The supporting scale runs through 0.9375rem, 0.875rem, and 0.8125rem for claims, notes, and card summaries.
- **Label:** Mono, uppercase, tracked metadata for source labels, statuses, dates, and navigation controls. Never use it as decorative section scaffolding or for paragraphs.

**The Plain Heading Rule.** Page and section headings stand on their own. Do not add eyebrow labels, decorative section numbers, or ornamental arrows.

**The Evidence Hierarchy Rule.** A claim is sans; the evidence that locates it is mono. Do not reverse this relationship.

## Elevation

The system is flat by default. Depth comes from alternating blue-tinted grounds, 1px hairlines, and the fixed deep-blue panel—not drop shadows. The only translucent layer is the sticky header, where a restrained blur preserves reading context while scrolling.

**The Line-Not-Shadow Rule.** Separate information with a hairline or a tonal surface. Do not add shadows to cards, lists, buttons, or notices.

### Corner radius

- **Control — 4px:** Buttons, utility controls, state flags, compact status labels, and photo credits.
- **Frame — 8px:** Bounded multi-part surfaces such as press cards, exchanges, data maps, notices, and the Night Record step group.
- **Artwork — 12px:** Campaign artwork, share-image previews, and the documentary portrait.
- Full-width sections, the header and footer, chronology rows, evidence registers, source lists, and structural hairlines remain square. The radius system softens touchpoints and imagery; it does not turn the site into a card interface.

## Layout

The desktop shell uses a recurring 12-column grid with a fluid 24–40px gutter. It collapses to one reading column below 840px.

### Core compositions

- **Thesis:** A large page title occupies columns 1–7 and its lead occupies columns 9–12 on the same lower baseline. Standard route heroes share this structure; content does not earn a different grid merely by being on a different route.
- **Evidence register:** Section title and context occupy columns 1–4; claims, questions, or prose occupy columns 5–12.
- **Interruption:** A decisive element such as the Strömmer portrait, scope statement, or Night Record panel spans the shell or deliberately breaks the normal alignment.

### Spacing

- Component spacing follows a 4pt scale: 4, 8, 12, 16, 24, 32, 48, 64, and 96px.
- Section padding is fluid but role-based: tight sections use 48–72px, ordinary sections 64–104px, and true chapter changes 80–144px.
- Adjacent modules never both own a complete transition gap. The Home scope statement and press register share one section and one ruled transition.
- Keep related title/lead groups tight; use larger space only between distinct arguments.

**The Shared Axis Rule.** Narrow prose may retain a 68ch measure, but it sits asymmetrically inside the evidence grid. Do not center a narrow column between full-width sections without a visual bridge.

## Components

### Buttons

- **Character:** Direct document actions, never glossy campaign CTAs.
- **Shape:** A restrained 4px radius softens the control without making it pill-shaped.
- **Primary:** Ink ground with on-ink text, 12px 24px padding, and a 44px minimum touch target.
- **Ghost:** Transparent ground with a hairline border; hover adds a subtle neutral wash.
- **Hover / Focus:** Colour and border changes take 140ms. Keyboard focus uses a 2px edge-colour outline with 3px offset.

### Citation Links

- **Style:** Small mono publisher names with a hairline underline, grouped after a source label.
- **State:** Hover strengthens text and underline toward ink; links remain named, never numeric brackets.

### Claim and Question Rows

- **Style:** Border-delimited record rows, not rounded cards. Known claims use a muted em dash; unknown claims use the signal-blue question marker.
- **Question detail:** Question rows can contain an exchange grid of paper cells divided by 1px hairlines.
- **Status:** The compact flag badge uses the signal blue only for a factual state and must retain that semantic meaning.

### Four Numbers

- **Structure:** Treat the figures as four horizontal evidence records, not a 2×2 metric dashboard. The introduction occupies columns 1–3; records occupy columns 4–12.
- **Record axis:** Within each record, the value occupies its first three columns and the label, qualification, and citations occupy the remaining six.
- **Rhythm:** Every record owns one 32px vertical interval and one bottom hairline. Do not use vertical dividers or flush text against a column boundary.

### Pull Quote

- **Layout:** Pair the minister's quotation with the corresponding documentary portrait in two columns from 820px; stack them into one readable column below that.
- **Image:** Show the supplied photograph at its natural 3:2 ratio without cropping, inside the 12px artwork radius. A hairline is enough—do not turn it into a floating card.
- **Hierarchy:** The quotation remains the dominant element, with attribution, source context, and citation kept together.

### Navigation

- **Style:** A 68px sticky, translucent header with a hairline bottom border. The brand mark is a 7px signal-blue square, used once at the site level.
- **Responsive behavior:** Desktop links appear from 940px; below that, the menu expands through a grid-row transition. The language and theme controls remain compact mono icon buttons.
- **State and ergonomics:** Every utility control is at least 44px square. The current desktop route gets a signal-blue underline; the mobile route gets a colour and weight change.

### Route Heroes

- **Standard:** Timeline, Acus, Known, and About share one compact hero grid with no forced minimum height. Use role-based top and bottom padding instead.
- **Type:** Route display copy uses the established display step in a wider seven-column field so ordinary phrases form two or three deliberate lines instead of stacks of isolated words.
- **Exception:** Questions may reserve columns 8–12 for its poster artwork; the exception is earned by real media, not by arbitrary title alignment.

### Press Cards

- **Shape:** Auto-height records with restrained 8px frame corners; never force text into a square.
- **Media:** The article photograph uses a consistent 16:9 crop; apply only a faint blue wash so it remains recognisable, and retain its visible photo credit.
- **Publisher:** Use the approved SVG wordmark above the article title and date.
- **Home:** Render every journalism source in a compact static register after the campaign argument. Thumbnails support scanning without turning press coverage into the first act.
- **About:** Render the complete photographic archive as an art-directed 7/5 lead row followed by three equal records, with title, description, publication language, date, SVG publisher mark, and photo credit.
- **Copy:** Titles and summaries remain complete at every viewport; the whole card links out, with a plain underlined article label and no arrow.

### Share Panel

- **Action:** The primary action invokes the platform share sheet when available and falls back to copying the canonical campaign link.
- **Assets:** Preview the two future campaign exports as labeled gray frames: 1200 × 630 and 1080 × 1080. Preserve those dimensions when the final PNGs and source SVGs replace them.
- **Privacy:** Sharing is entirely local to the browser. Do not add a petition, form, analytics event, or contact route.

### Campaign Artwork Slots

- **Home key artwork:** Portrait 4:5 at 1600 × 2000px. It occupies columns 8–12 beside the campaign question and stacks after the introduction on mobile.
- **Acus explainer:** Landscape 3:2 at 1800 × 1200px. It sits in the eight-column evidence field above the reported data map.
- **Questions poster:** Portrait 4:5 at 1600 × 2000px. It occupies columns 8–12 beside the page argument and stacks below the lead on mobile.
- **Placeholder treatment:** Use a neutral gray surface, one hairline, the 12px artwork radius, and a centered localized label with export dimensions. No icon, dashed border, decorative cross, or uppercase tracked placeholder copy.
- **Restraint:** Do not add campaign placeholders to Known, Timeline, or About. Their registers, chronology, and real press photography already provide the visual structure.

### Evidence Registers

- **Known and unknown:** Present supported claims first and unanswered questions second, as two stacked registers. Never align them in parallel rows that imply one-to-one correspondence.
- **Narrative registers:** Acus, About, methodology, and closing sections reuse the four-column title rail and eight-column reading field rather than centered narrow stacks.
- **Acus data map:** Show reported data sources, the reported analysis layer, and the investigator-facing result as one bordered 3/4/5-stage record. Every stage retains 32px inset padding; markers never touch the frame. The caption has its own tonal shelf and states explicitly that this is not a technical diagram of the Swedish installation.
- **About:** Use a title/body register on wide screens so method and corrections use the available width without becoming a card grid.
- **Source directory:** Present source groups as a bibliography: group context in columns 1–3, then publisher in columns 4–5, title in columns 6–10, and date in columns 11–12. Keep complete titles and flat hairline rows; never revert to cards or a single undifferentiated list.

### Timeline Docket

- **Chapters:** Group events by real changes in the public record: disclosure, parliamentary exchange, legislation, and the unresolved present. Chapter titles are explanatory headings, never numbered or eyebrow labels.
- **Shared axis:** On wide screens, chapter context occupies columns 1–4 and event records occupy columns 5–12. Each event then uses an eight-column date/body grid so dates stay aligned without a fixed-width rail.
- **Rhythm:** Ordinary events use compact record spacing. Only genuine turning points receive a larger title and more breathing room.
- **Conclusion:** The current state and “Put it together” argument share one signal-blue plane. The timeline culminates once instead of ending and restarting in a separate generic band.
- **Responsive behavior:** Below 840px, chapter context stacks above its events; the date remains a compact line above the event copy. Do not add dots, arrows, alternating sides, or a decorative vertical track.

### Panels and Notices

- **Panel:** Deep blue, bordered sections collect related evidence. Internal steps are divided by panel hairlines rather than raised cards.
- **Notice:** Use a full hairline border and a signal-blue wash; coloured side stripes are prohibited.

### Footer

- **Closing statement:** The campaign question is the dominant final element at up to 5rem, set on the Night Record surface. It is a statement, not a small corporate wordmark.
- **Navigation:** Supporting navigation occupies a compact right rail with plain sans group labels—no tracked uppercase eyebrow treatment.
- **Provenance:** Campaign credit sits beneath the question. Legal methodology and update date share one ruled bottom shelf.
- **Responsive behavior:** Stack the large question, two-column navigation, and provenance shelf below 860px while preserving the hierarchy.

## Do's and Don'ts

### Do:

- **Do** use hairlines, measured whitespace, and a maximum content width of 1180px to make long material easy to verify.
- **Do** use the stronger blue consistently for actions, focus, unanswered questions, and the current political state.
- **Do** use mono for factual indexing—dates, publishers, source labels, status, and short controls.
- **Do** keep prose within 68ch (and leads within 60–62ch) with readable 1.55–1.62 line heights.
- **Do** honour reduced motion: reveal content must be visible without animation and instantly readable for reduced-motion users.
- **Do** show every press article as a photograph, approved SVG publisher mark, short description, and direct external link.
- **Do** let headlines and summaries wrap to their full length rather than clipping or truncating them.
- **Do** let external evidence links navigate in the current tab so link behavior is predictable.
- **Do** keep interactive controls at least 44px in their compact dimension.
- **Do** align route heroes, section rails, evidence rows, and press introductions to the shared 12-column grid.
- **Do** preserve complete press summaries on mobile; reduce thumbnail dominance instead of hiding copy.
- **Do** preserve each campaign artwork wrapper and aspect ratio when replacing a placeholder with final artwork.

### Don't:

- **Don't** make it look like party-political propaganda; the system invites scrutiny and lets evidence carry the claim.
- **Don't** add social-justice-warrior signalling, moralising iconography, or outrage-first visual treatment.
- **Don't** use sensational tabloid styling: no explosive headlines, alarm colours, alarm graphics, or attention-grabbing metrics.
- **Don't** use the visual language of a SaaS technology company: no dashboard cards, floating shadows, gradient text, glassmorphism panels, or decorative monospace.
- **Don't** invite whistleblowing, leaked information, source submissions, or private contact anywhere on the site.
- **Don't** turn press coverage into a carousel or moving rail; all coverage must remain visible and browsable at once.
- **Don't** use eyebrow labels, decorative 01/02/03 numbering, or arrows as default interface decoration.
- **Don't** stack two full section paddings between adjacent modules or use empty space as a substitute for composition.
- **Don't** default unrelated content to equal-width compartments.
- **Don't** add image placeholders to every page or interrupt evidence registers with decorative artwork.
