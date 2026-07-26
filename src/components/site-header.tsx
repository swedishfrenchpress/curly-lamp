"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { otherLang } from "@/content";
import { path, type Dict, type Lang } from "@/content/types";

/**
 * The language toggle swaps the first path segment and keeps everything else,
 * so a reader deep in the timeline lands on the same entry in the other
 * language rather than being bounced to the front page. That only holds
 * because both languages share route slugs (see ROUTES in content/types.ts).
 */
function swapLang(pathname: string, next: Lang): string {
  const rest = pathname.replace(/^\/(sv|en)(?=\/|$)/, "");
  return `/${next}${rest || "/"}`;
}

export default function SiteHeader({ dict }: { dict: Dict }) {
  const pathname = usePathname() ?? `/${dict.lang}/`;
  const next = otherLang(dict.lang);

  /**
   * The panel stores the route it was opened on rather than a boolean, so
   * navigating away closes it as a consequence of the route changing — no
   * reset-on-change effect, and no frame in which the old panel hangs over the
   * new page.
   */
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;
  const close = () => setOpenedAt(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedAt(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href;

  return (
    <header className="site-header">
      <div className="shell">
        <nav className="site-nav" aria-label={dict.nav.label}>
          <Link href={path(dict.lang, "home")} className="site-nav__brand">
            <span>{dict.site.name}</span>
          </Link>

          <ul className="site-nav__links">
            {dict.nav.items.map((item) => {
              const href = path(dict.lang, item.route);
              return (
                <li key={item.route}>
                  <Link
                    href={href}
                    className="site-nav__link"
                    aria-current={isCurrent(href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="site-nav__tools">
            <Link
              href={swapLang(pathname, next)}
              className="icon-btn lang-switch"
              hrefLang={next}
              lang={next}
              aria-label={dict.nav.langSwitch}
              title={dict.nav.langSwitch}
            >
              <span className="lang-switch__flag" aria-hidden="true">
                {next === "en" ? "🇺🇸" : "🇸🇪"}
              </span>
              <span>{next === "en" ? "EN" : "SV"}</span>
            </Link>
            <ThemeToggle label={dict.nav.themeToggle} />
            <button
              type="button"
              className="icon-btn nav-toggle"
              onClick={() => (open ? close() : setOpenedAt(pathname))}
              aria-expanded={open}
              aria-controls="nav-panel"
            >
              {open ? dict.nav.close : dict.nav.menu}
            </button>
          </div>
        </nav>

        <div className="site-nav__panel" id="nav-panel" data-open={open}>
          <div className="site-nav__panel-inner">
            <ul>
              {dict.nav.items.map((item) => {
                const href = path(dict.lang, item.route);
                return (
                  <li key={item.route}>
                    <Link
                      href={href}
                      aria-current={isCurrent(href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
