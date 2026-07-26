import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route is static — the site is a document, not an application.
  // No database, no analytics, no third-party scripts: visitors reading about
  // surveillance should not be surveilled for reading it. See ABOUT / method.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // The campaign has two root layouts — one per language, so the served
    // document can declare its own `lang` — and a plain `not-found` cannot
    // reach either of them. `global-not-found.tsx` renders the whole document
    // itself, which is what puts the campaign's own 404 into `out/404.html`
    // instead of Next's default black-and-white page.
    globalNotFound: true,
  },
};

export default nextConfig;
