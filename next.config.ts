import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route is static — the site is a document, not an application.
  // No database, no analytics, no third-party scripts: visitors reading about
  // surveillance should not be surveilled for reading it. See ABOUT / method.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
