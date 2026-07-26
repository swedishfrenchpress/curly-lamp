import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#f5efe6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vemsvararforacus.se"),
  title: "Vem svarar för Acus? / Who Answers for Acus?",
  description:
    "Svensk polis har enligt uppgift använt Palantirs analysplattform i minst fem år. Ingen ansvarig vill förklara hur den fungerar.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="sv"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      data-scroll-behavior="smooth"
      style={
        {
          "--font-geist-sans": "var(--font-geist-sans)",
          "--font-geist-mono": "var(--font-geist-mono)",
        } as React.CSSProperties
      }
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
        {children}
      </body>
    </html>
  );
}
