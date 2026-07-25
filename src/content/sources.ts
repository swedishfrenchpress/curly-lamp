/**
 * Every factual claim on this site points at one of these.
 *
 * The rule (stated publicly on /about): we do not assert anything as
 * independently verified that we have not independently verified. Reporting is
 * attributed to the outlet that did it. Parliamentary documents are primary and
 * are linked directly, because the minister's non-answers are stronger read in
 * his own words than in ours.
 *
 * `kind` drives how a citation is presented:
 *   primary   Official record — riksdagen, regeringen, a party's own site.
 *   reporting Journalism. Claims sourced here are always attributed in copy.
 *   advocacy  Written from a position. Listed for completeness, never load-bearing.
 */
export type SourceKind = "primary" | "reporting" | "advocacy";

export type Source = {
  id: string;
  publisher: string;
  title: string;
  url: string;
  /** ISO date, or a year when we have not yet pinned the exact day. */
  date: string;
  kind: SourceKind;
  lang: "sv" | "en";
  /** True when we still need to confirm the date or the exact wording. */
  unverified?: boolean;
};

export const SOURCES = {
  "fraga-167": {
    id: "fraga-167",
    publisher: "Sveriges riksdag",
    title:
      "Skriftlig fråga 2025/26:167 — Polisens användning av analys- och underrättelseverktyg",
    url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/skriftlig-fraga/polisens-anvandning-av-analys-och_hd11167/",
    date: "2025-11-06",
    kind: "primary",
    lang: "sv",
  },
  "ip-301": {
    id: "ip-301",
    publisher: "Sveriges riksdag",
    title: "Interpellation 2025/26:301 — Användningen av analysplattformen Palantir",
    url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/interpellation/anvandningen-av-analysplattformen-palantir_hd10301/",
    date: "2026-01-23",
    kind: "primary",
    lang: "sv",
  },
  "ip-debatt": {
    id: "ip-debatt",
    publisher: "Sveriges riksdag",
    title: "Interpellationsdebatt — Användningen av analysplattformen Palantir",
    url: "https://www.riksdagen.se/sv/webb-tv/video/interpellationsdebatt/anvandningen-av-analysplattformen-palantir_hd10301/",
    date: "2026-02-16",
    kind: "primary",
    lang: "sv",
  },
  "prop-150": {
    id: "prop-150",
    publisher: "Regeringen",
    title:
      "Proposition 2025/26:150 — Polisens användning av AI för ansiktsigenkänning i realtid",
    url: "https://www.regeringen.se/rattsliga-dokument/proposition/2026/03/prop.-202526150",
    date: "2026-03",
    kind: "primary",
    lang: "sv",
  },
  juu28: {
    id: "juu28",
    publisher: "Sveriges riksdag",
    title:
      "Betänkande 2025/26:JuU28 — Polisens användning av AI för ansiktsigenkänning i realtid",
    url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/betankande/polisens-anvandning-av-ai-for-ansiktsigenkanning-i_hd01juu28/",
    date: "2026-05-21",
    kind: "primary",
    lang: "sv",
  },
  beslut: {
    id: "beslut",
    publisher: "Sveriges riksdag",
    title: "Beslut — Polisens användning av AI för ansiktsigenkänning i realtid",
    url: "https://www.riksdagen.se/sv/webb-tv/video/beslut/beslut-polisens-anvandning-av-ai-for_hdc320260526juu28/",
    date: "2026-05-26",
    kind: "primary",
    lang: "sv",
  },
  "m-kameror": {
    id: "m-kameror",
    publisher: "Moderaterna",
    title: "Vallöfte: Ett fördubblat kameramål — 10 000 poliskameror till 2029",
    url: "https://moderaterna.se/nyhet/vallofte-ett-fordubblat-kameramal-10-000-poliskameror-till-2029/",
    date: "2026",
    kind: "primary",
    lang: "sv",
    unverified: true,
  },
  "etc-granskning": {
    id: "etc-granskning",
    publisher: "Dagens ETC",
    title: "Granskning: Polisens användning av Palantir",
    url: "https://www.etc.se/inrikes/efter-dagens-etc-s-palantir-granskning-stroemmer-kraevs-paa-svar",
    date: "2025",
    kind: "reporting",
    lang: "sv",
    unverified: true,
  },
  "etc-stroemmer": {
    id: "etc-stroemmer",
    publisher: "Dagens ETC",
    title: "Gunnar Strömmer om Palantir: Inte mitt ansvar — fråga polisen",
    url: "https://www.etc.se/inrikes/gunnar-stroemmer-om-palantir-inte-mitt-ansvar-fraaga-polisen",
    date: "2025",
    kind: "reporting",
    lang: "sv",
    unverified: true,
  },
  "etc-ai-realtid": {
    id: "etc-ai-realtid",
    publisher: "Dagens ETC",
    title: "Polisen ska få använda AI-teknik i realtid",
    url: "https://www.etc.se/inrikes/polisen-ska-faa-anvaenda-ai-teknik-i-realtid",
    date: "2026",
    kind: "reporting",
    lang: "sv",
    unverified: true,
  },
  realtid: {
    id: "realtid",
    publisher: "Realtid",
    title: "Palantir jobbar från svenska polishuset — i hemlighet",
    url: "https://www.realtid.se/it-tech/palantir-jobbar-fran-svenska-polishuset-i-hemlighet/",
    date: "2025",
    kind: "reporting",
    lang: "sv",
    unverified: true,
  },
  gp: {
    id: "gp",
    publisher: "Göteborgs-Posten",
    title: "Uppgifter: Polisen använder kontroversiellt AI-program",
    url: "https://www.gp.se/nyheter/sverige/uppgifter-polisen-anvander-kontroversiellt-ai-program.5147f47f-74fc-5456-98cf-d25f9d9da7ee",
    date: "2025",
    kind: "reporting",
    lang: "sv",
    unverified: true,
  },
  femtejuli: {
    id: "femtejuli",
    publisher: "Femte Juli-stiftelsen",
    title: "Nu klubbar riksdagen AI-stödd Face Control",
    url: "https://femtejuli.se/2026/04/28/nu-klubbar-riksdagen-ai-stodd-face-control/",
    date: "2026-04-28",
    kind: "advocacy",
    lang: "sv",
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;

export const sourceList: Source[] = Object.values(SOURCES);

export function sourcesOfKind(kind: SourceKind): Source[] {
  return sourceList.filter((s) => s.kind === kind);
}
