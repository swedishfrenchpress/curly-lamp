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
      <h1 className="display">
        Vem svarar för Acus?
        <br />
        <span style={{ color: "var(--faint)" }}>Who Answers for Acus?</span>
      </h1>
      <p className="hero__actions">
        <Link href="/sv/" className="btn btn--primary" hrefLang="sv">
          Svenska
        </Link>
        <Link href="/en/" className="btn btn--ghost" hrefLang="en">
          English
        </Link>
      </p>
    </main>
  );
}
