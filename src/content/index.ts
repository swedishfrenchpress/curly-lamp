import sv from "./sv";
import en from "./en";
import { LANGS, type Dict, type Lang } from "./types";

export const DICTS: Record<Lang, Dict> = { sv, en };

export function getDict(lang: Lang): Dict {
  return DICTS[lang];
}

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

export function otherLang(lang: Lang): Lang {
  return lang === "sv" ? "en" : "sv";
}

/** Shown in the footer. Bump when content changes materially. */
export const SITE_UPDATED = "2026-07-25";

export const SITE_URL = "https://vemsvararforacus.se";

export * from "./types";
export * from "./sources";
