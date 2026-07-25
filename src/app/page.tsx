"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Language gate. A static export cannot redirect at the edge, so this routes
 * on the client from the browser's own language preference — and renders two
 * plain links so the site still works with JavaScript disabled. Given the
 * subject matter, a reader who has turned JavaScript off is exactly the reader
 * we should expect.
 */
export default function LanguageGate() {
  useEffect(() => {
    const prefersSwedish = navigator.languages?.some((l) =>
      l.toLowerCase().startsWith("sv"),
    );
    window.location.replace(prefersSwedish ? "/sv/" : "/en/");
  }, []);

  return (
    <main className="shell" style={{ paddingBlock: "22vh 10vh" }}>
      <h1 className="display" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
        Vem svarar för Acus?
        <br />
        <span style={{ color: "var(--faint)" }}>Who Answers for Acus?</span>
      </h1>
      <p className="hero__actions">
        <Link href="/sv/" className="btn btn--primary" hrefLang="sv">
          Svenska <span aria-hidden="true">→</span>
        </Link>
        <Link href="/en/" className="btn btn--ghost" hrefLang="en">
          English <span aria-hidden="true">→</span>
        </Link>
      </p>
    </main>
  );
}
