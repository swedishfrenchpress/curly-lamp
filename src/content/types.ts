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

/**
 * The preview frame is chosen by `kind`, never by array position. An asset list
 * that grows a third format must not silently render a 1:1 frame over a 9:16
 * file, which is what an index-based lookup would do.
 */
export type ShareAssetKind = "landscape" | "square" | "story";

export type ShareAsset = {
  kind: ShareAssetKind;
  href: string;
  label: string;
  meta: string;
};

/**
 * One action: copy `shareText` and the canonical link together, then confirm in
 * a toast. Per-network buttons were removed deliberately — LinkedIn ignores
 * every prefill parameter, so a network button can only ever hand over an empty
 * composer, and a clipboard the visitor pastes anywhere beats four choices.
 */
export type ShareBlock = Block & {
  shareLabel: string;
  copiedLabel: string;
  errorLabel: string;
  downloadLabel: string;
  /** The short message copied above the link. */
  shareText: string;
  assets: ShareAsset[];
};

/** The full kit plus the compact terminal CTA reused across routes. */
export type ShareSection = ShareBlock & {
  cta: {
    title: string;
    lead: string;
    assetsLabel: string;
  };
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
    skipToContent: string;
    menu: string;
    close: string;
    /**
     * Not a `RouteKey` — the share panel is an anchor on the home page, not a
     * route. Kept separate so `items` stays a clean list of real destinations.
     */
    shareLink: { label: string; hash: string };
  };

  home: {
    meta: { title: string; description: string };
    hero: {
      title: string;
      lead: string;
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
  };

  /**
   * Top level, not under `home`: the compact CTA appears on every route, so
   * filing this copy under the home page would misdescribe where it is used.
   */
  share: ShareSection;

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
  };

  questions: {
    meta: { title: string; description: string };
    hero: Block;
    openQuestions: OpenQuestion[];
    researchBlock: Block;
    research: ResearchItem[];
    foia: Block;
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
