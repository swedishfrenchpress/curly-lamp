import type { SourceId } from "./sources";

export const LANGS = ["sv", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "sv";

/**
 * Route slugs are shared across both languages so the language toggle is a
 * single path segment swap and no URL can 404 in one language but not the
 * other. Localised slugs are a later refinement — see CONTENT.md.
 */
export const ROUTES = {
  home: "",
  known: "known",
  timeline: "timeline",
  acus: "acus",
  questions: "questions",
  about: "about",
} as const;

export type RouteKey = keyof typeof ROUTES;

export function path(lang: Lang, route: RouteKey): string {
  const slug = ROUTES[route];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

/** A claim and the sources that carry it. Never one without the other. */
export type Claim = {
  text: string;
  cite?: SourceId[];
};

/** A headline number. `note` must say what the number is NOT as well as what it is. */
export type Stat = {
  value: string;
  label: string;
  note: string;
  cite?: SourceId[];
};

export type AnswerStatus = "unanswered" | "partial" | "answered";

/**
 * One of the questions put to the government. The point of the site is the
 * gap between `asked` and `response`, so both are always shown together.
 */
export type OpenQuestion = {
  id: string;
  question: string;
  /** Why this question matters to someone who is not a privacy specialist. */
  why: string;
  askedLabel: string;
  asked: string;
  responseLabel: string;
  response: string;
  status: AnswerStatus;
  statusLabel: string;
  cite?: SourceId[];
};

export type TimelineKind = "reporting" | "parliament" | "law" | "politics";

export type TimelineEntry = {
  date: string;
  dateLabel: string;
  kind: TimelineKind;
  kindLabel: string;
  title: string;
  body: string;
  cite?: SourceId[];
  /** Gives only genuine turning points more visual weight in the chronology. */
  emphasis?: "turning-point" | "current";
  /** Rendered as an editorial aside beneath the entry. Use sparingly. */
  aside?: string;
};

export type TimelineChapter = {
  title: string;
  lead: string;
  entryDates: string[];
};

export type Block = {
  title: string;
  lead?: string;
  body?: string[];
};

export type ResearchItem = {
  title: string;
  question: string;
  status: "open" | "in-progress" | "answered";
  statusLabel: string;
  detail: string;
};

export type ShareAsset = {
  href: string;
  label: string;
  meta: string;
};

export type ShareBlock = Block & {
  shareLabel: string;
  copyLabel: string;
  copiedLabel: string;
  errorLabel: string;
  downloadLabel: string;
  sourceLabel: string;
  sourceRoute: RouteKey;
  shareText: string;
  assets: ShareAsset[];
};

export type Dict = {
  lang: Lang;
  langName: string;
  otherLangName: string;
  dir: "ltr";

  site: {
    name: string;
    tagline: string;
    description: string;
  };

  nav: {
    label: string;
    items: { route: RouteKey; label: string }[];
    langSwitch: string;
    themeToggle: string;
    skipToContent: string;
    menu: string;
    close: string;
  };

  home: {
    meta: { title: string; description: string };
    hero: {
      title: string;
      lead: string;
      primaryCta: { href: string; label: string };
      secondaryCta: { route: RouteKey; label: string };
    };
    statsBlock: Block;
    stats: Stat[];
    questionsBlock: Block;
    questionsCta: { route: RouteKey; label: string };
    quote: {
      text: string;
      attribution: string;
      context: string;
      cite: SourceId[];
    };
    convergence: Block & {
      steps: { label: string; title: string; body: string; cite?: SourceId[] }[];
      closing: string;
    };
    notWhat: Block;
    pressBlock: Block;
    share: ShareBlock;
  };

  known: {
    meta: { title: string; description: string };
    hero: Block;
    knownBlock: Block;
    knownItems: Claim[];
    unknownBlock: Block;
    unknownItems: Claim[];
    method: Block;
  };

  timeline: {
    meta: { title: string; description: string };
    hero: Block;
    chapters: TimelineChapter[];
    entries: TimelineEntry[];
    closing: Block;
  };

  acus: {
    meta: { title: string; description: string };
    hero: Block;
    sections: Block[];
    dataBlock: Block;
    dataSources: Claim[];
    dataFlow: {
      systemTitle: string;
      systemBody: string;
      useTitle: string;
      useBody: string;
      note: string;
      cite: SourceId[];
    };
    caveat: Block;
  };

  questions: {
    meta: { title: string; description: string };
    hero: Block;
    openQuestions: OpenQuestion[];
    researchBlock: Block;
    research: ResearchItem[];
    foia: Block;
  };

  about: {
    meta: { title: string; description: string };
    hero: Block;
    sections: Block[];
    pressBlock: Block;
    sourcesBlock: Block;
    kindLabels: Record<"primary" | "reporting" | "advocacy", string>;
    kindNotes: Record<"primary" | "reporting" | "advocacy", string>;
  };

  footer: {
    wordmark: string;
    line: string;
    credit: string;
    creditLink: { label: string; href: string };
    columns: { title: string; items: { route: RouteKey; label: string }[] }[];
    legal: string;
    updated: string;
  };

  ui: {
    sources: string;
    source: string;
    readMore: string;
    unanswered: string;
    backHome: string;
    notFoundTitle: string;
    notFoundBody: string;
  };
};
