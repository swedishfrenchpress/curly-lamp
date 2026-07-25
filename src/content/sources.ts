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
  /** Press-card media. Only journalism displayed in the press sections uses these. */
  image?: string;
  imageAlt?: Record<"sv" | "en", string>;
  imageCredit?: string;
  logo?: string;
  summary?: Record<"sv" | "en", string>;
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
  },
  "etc-granskning": {
    id: "etc-granskning",
    publisher: "Dagens ETC",
    title: "Granskning: Polisens användning av Palantir",
    url: "https://www.etc.se/story/dagens-etc-avsloejar-polisens-hemliga-samarbete-med-spionbolaget-palantir",
    date: "2025-11-03",
    kind: "reporting",
    lang: "sv",
    image: "/press/palantir-gp.jpg",
    imageAlt: {
      sv: "Palantirs vd Alex Karp under ett offentligt framträdande.",
      en: "Palantir CEO Alex Karp during a public appearance.",
    },
    imageCredit: "Foto: Thibault Camus / AP / TT",
    logo: "/press/logo-etc.svg",
    summary: {
      sv: "Granskningen som först beskrev polisens femåriga användning av Acus och myndighetens vägran att svara.",
      en: "The investigation that first described the police's five-year use of Acus and the authority's refusal to answer.",
    },
  },
  "etc-stroemmer": {
    id: "etc-stroemmer",
    publisher: "Dagens ETC",
    title: "Gunnar Strömmer om Palantir: Inte mitt ansvar — fråga polisen",
    url: "https://www.etc.se/inrikes/gunnar-stroemmer-om-palantir-inte-mitt-ansvar-fraaga-polisen",
    date: "2025-11-19",
    kind: "reporting",
    lang: "sv",
    image: "/press/palantir-realtid.jpg",
    imageAlt: {
      sv: "Ett montage med Palantirs vd Alex Karp och svensk polis.",
      en: "A montage featuring Palantir CEO Alex Karp and Swedish police.",
    },
    imageCredit: "Foto: Francois Mori / Fredrik Sandberg / TT",
    logo: "/press/logo-etc.svg",
    summary: {
      sv: "Justitieministern kommenterar uppgifterna men hänvisar ansvaret för IT-tjänsterna till Polismyndigheten.",
      en: "The Minister for Justice comments on the reports but refers responsibility for IT services to the Police Authority.",
    },
  },
  "etc-ai-realtid": {
    id: "etc-ai-realtid",
    publisher: "Dagens ETC",
    title: "Polisen ska få använda AI-teknik i realtid",
    url: "https://www.etc.se/inrikes/polisen-ska-faa-anvaenda-ai-teknik-i-realtid",
    date: "2026",
    kind: "reporting",
    lang: "sv",
    image: "/press/palantir-gp.jpg",
    imageAlt: {
      sv: "Palantirs vd Alex Karp under ett offentligt framträdande.",
      en: "Palantir CEO Alex Karp during a public appearance.",
    },
    imageCredit: "Foto: Thibault Camus / AP / TT",
    logo: "/press/logo-etc.svg",
    summary: {
      sv: "Dagens ETC rapporterar om den nya lagen för AI-baserad ansiktsigenkänning i realtid.",
      en: "Dagens ETC reports on the new law allowing AI-based facial recognition in real time.",
    },
  },
  realtid: {
    id: "realtid",
    publisher: "Realtid",
    title: "Palantir jobbar från svenska polishuset — i hemlighet",
    url: "https://www.realtid.se/it-tech/palantir-jobbar-fran-svenska-polishuset-i-hemlighet/",
    date: "2025-11-14",
    kind: "reporting",
    lang: "sv",
    image: "/press/palantir-realtid.jpg",
    imageAlt: {
      sv: "Ett montage med Palantirs vd Alex Karp och svensk polis.",
      en: "A montage featuring Palantir CEO Alex Karp and Swedish police.",
    },
    imageCredit: "Foto: Francois Mori / Fredrik Sandberg / TT",
    logo: "/press/logo-realtid.svg",
    summary: {
      sv: "Realtid sammanfattar uppgifterna om Palantir-kodare i polishuset och de tillsynsorgan som inte informerats.",
      en: "Realtid summarises reports of Palantir developers inside police headquarters and oversight bodies left uninformed.",
    },
  },
  gp: {
    id: "gp",
    publisher: "Göteborgs-Posten",
    title: "Uppgifter: Polisen använder kontroversiellt AI-program",
    url: "https://www.gp.se/nyheter/sverige/uppgifter-polisen-anvander-kontroversiellt-ai-program.5147f47f-74fc-5456-98cf-d25f9d9da7ee",
    date: "2025-11-03",
    kind: "reporting",
    lang: "sv",
    image: "/press/palantir-gp.jpg",
    imageAlt: {
      sv: "Palantirs vd Alex Karp under ett offentligt framträdande.",
      en: "Palantir CEO Alex Karp during a public appearance.",
    },
    imageCredit: "Foto: Thibault Camus / AP / TT",
    logo: "/press/logo-gp.svg",
    summary: {
      sv: "Göteborgs-Posten återger TT:s rapportering om Acus och polisens besked att relationen inte kan bekräftas eller förnekas.",
      en: "Göteborgs-Posten carries TT's report on Acus and the police statement that the relationship can neither be confirmed nor denied.",
    },
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

export type PressSource = Source &
  Required<
    Pick<Source, "image" | "imageAlt" | "imageCredit" | "logo" | "summary">
  >;

export const pressSources: PressSource[] = sourceList.filter(
  (source): source is PressSource =>
    source.kind === "reporting" &&
    Boolean(
      source.image &&
        source.imageAlt &&
        source.imageCredit &&
        source.logo &&
        source.summary,
    ),
);
