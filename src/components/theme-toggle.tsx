"use client";

/**
 * The only thing this site ever writes to a visitor's browser. Stated as such
 * on the About page — a campaign about surveillance that quietly profiled its
 * readers would be worth nothing.
 *
 * Deliberately stateless. The button renders both glyphs and CSS reveals the
 * one matching the active scheme (see `.theme-toggle__*` in globals.css), so
 * there is no React state to hydrate and therefore no window in which the icon
 * can disagree with the page it sits on.
 */
export default function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Private browsing or storage disabled — the choice just won't persist. */
    }
  }

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle__sun" aria-hidden="true">
        ☀
      </span>
      <span className="theme-toggle__moon" aria-hidden="true">
        ☾
      </span>
    </button>
  );
}
