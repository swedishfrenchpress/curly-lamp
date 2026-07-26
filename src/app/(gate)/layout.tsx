import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SITE_URL } from "@/content";
import "../globals.css";

/**
 * The root layout for the two routes that belong to no single language: the
 * entry gate at `/` and the 404. Both answer in Swedish and English, so the
 * document declares the campaign's primary language and each English passage
 * marks itself with its own `lang`. Campaign routes have their own root in
 * `[lang]`, where the language is known.
 */
export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#f5efe6",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vem svarar för Acus? / Who Answers for Acus?",
  description:
    "Svensk polis har enligt uppgift använt Palantirs analysplattform i minst fem år. Ingen ansvarig vill förklara hur den fungerar.",
  robots: { index: true, follow: true },
};

export default function GateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sv"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
