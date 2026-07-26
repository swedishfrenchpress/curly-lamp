import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { getDict } from "@/content";
import "./globals.css";

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#f5efe6",
};

export const metadata: Metadata = {
  title: "Sidan finns inte / Page not found",
  robots: { index: false, follow: true },
};

/**
 * The 404 renders its own document because the campaign has one root layout
 * per language and a missing page belongs to neither — it answers in both, so
 * it declares the campaign's primary language and marks the English half.
 *
 * It keeps the publication canvas. Landing on the raw ambient field with no
 * paper under it reads as a different, broken site, and a stale shared link is
 * the most likely way anyone arrives here.
 */
export default function GlobalNotFound() {
  const sv = getDict("sv");
  const en = getDict("en");

  return (
    <html
      lang="sv"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <div className="site-frame">
          <main className="shell" style={{ paddingBlock: "18vh 12vh" }}>
            <h1 className="display">{sv.ui.notFoundTitle}</h1>
            <p className="lead">{sv.ui.notFoundBody}</p>
            <p className="lead" lang="en" style={{ color: "var(--faint)" }}>
              {en.ui.notFoundBody}
            </p>
            <p className="hero__actions">
              <Link href="/sv/" className="btn btn--primary" hrefLang="sv">
                {sv.ui.backHome}
              </Link>
              <Link
                href="/en/"
                className="btn btn--ghost"
                hrefLang="en"
                lang="en"
              >
                {en.ui.backHome}
              </Link>
            </p>
          </main>
        </div>
      </body>
    </html>
  );
}
