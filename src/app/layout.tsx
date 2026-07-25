import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export const metadata: Metadata = {
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
      style={
        {
          "--font-geist-sans": "var(--font-geist-sans)",
          "--font-geist-mono": "var(--font-geist-mono)",
        } as React.CSSProperties
      }
      /* The theme boot script stamps data-theme before hydration; the
         server/client mismatch on <html> is intentional. */
      suppressHydrationWarning
    >
      <body>
        {/* Applies a saved theme before first paint so an explicit choice can't
            flash the OS scheme. Parser-blocking on purpose. No saved choice
            means no attribute, and the CSS follows prefers-color-scheme. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}',
          }}
        />
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
