import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getDict, isLang, SITE_URL } from "@/content";
import { LANGS } from "@/content/types";
import "../globals.css";

/**
 * This is the root layout for every campaign route, which is what lets the
 * served document declare its own language. The site is a static export, so a
 * `lang` corrected by client script — as it was — is a `lang` that is simply
 * wrong for crawlers, translation tooling, and any screen reader that parses
 * before scripts run. Both languages get their own `<html>`; the bilingual
 * entry gate and the 404 have their own root in `(gate)`.
 */
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#f5efe6",
};

export const metadata: Metadata = {
  // Single source of truth: the copied share link and the OG card must resolve
  // to the same host, and the domain is still undecided (CONTENT.md §4).
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDict(lang);

  return (
    <html
      lang={lang}
      dir={dict.dir}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {/* Reveal animations start at opacity 0 and are raised by an
            IntersectionObserver. With scripting off there is no observer, so
            without this the whole site renders blank. A page about state
            surveillance will be read by people with JavaScript disabled;
            that reader must get the document, not an empty column. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <div className="site-frame">
          <a href="#main" className="skip-link">
            {dict.nav.skipToContent}
          </a>
          <SiteHeader dict={dict} />
          <main id="main">{children}</main>
          <SiteFooter dict={dict} />
        </div>
      </body>
    </html>
  );
}
