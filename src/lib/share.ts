import { SITE_URL } from "@/content";
import { path, type Lang, type RouteKey } from "@/content/types";

/**
 * Always built from SITE_URL, never from window.location.origin. Two reasons:
 * LinkedIn's crawler fetches this URL server-side to build the card, so only
 * the real domain serves the OG image; and under `output: "export"` the same
 * HTML is served from preview deploys, LAN IPs and file://, any of which would
 * leak into a shared link.
 */
export function canonicalShareUrl(lang: Lang, route: RouteKey = "home"): string {
  return new URL(path(lang, route), SITE_URL).toString();
}
