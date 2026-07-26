"use client";

/**
 * The only thing this site ever writes to a visitor's browser. Stated as such
 * on the About page — a campaign about surveillance that quietly profiled its
 * readers would be worth nothing.
 *
 * Deliberately stateless. The button renders both icons and CSS reveals the
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
      <svg
        className="theme-toggle__sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.75" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.28 5.28l1.42 1.42M17.3 17.3l1.42 1.42M18.72 5.28 17.3 6.7M6.7 17.3l-1.42 1.42" />
      </svg>
      <svg
        className="theme-toggle__moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.2 15.6A8.5 8.5 0 0 1 8.4 3.8a8.5 8.5 0 1 0 11.8 11.8Z" />
      </svg>
    </button>
  );
}
