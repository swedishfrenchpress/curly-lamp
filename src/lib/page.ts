import type { Metadata } from "next";
import { getDict, isLang } from "@/content";
import { LANGS, ROUTES, type Dict, type RouteKey } from "@/content/types";

/** Every page is generated for every language. There are two; this is cheap. */
export function langStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

type MetaKey = Extract<
  keyof Dict,
  "home" | "known" | "timeline" | "acus" | "questions"
>;

/**
 * Titles are templated per page rather than per language string so a new page
 * cannot ship with the site name missing in one language and present in the
 * other. `alternates.languages` is what tells a crawler the two versions are
 * the same document — the whole reason both languages share route slugs.
 */
export async function pageMetadata(
  params: Promise<{ lang: string }>,
  key: MetaKey,
  route: RouteKey,
): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const dict = getDict(lang);
  const meta = dict[key].meta;
  const slug = ROUTES[route];
  const suffix = slug ? `/${slug}/` : "/";
  const socialImage =
    lang === "sv"
      ? "/share/vem-svarar-acus-landscape-sv.png"
      : "/share/who-answers-acus-landscape-en.png";

  return {
    title: `${meta.title} — ${dict.site.name}`,
    description: meta.description,
    alternates: {
      languages: {
        sv: `/sv${suffix}`,
        en: `/en${suffix}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: dict.site.name,
      locale: lang === "sv" ? "sv_SE" : "en_GB",
      type: "article",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: dict.site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [socialImage],
    },
  };
}
