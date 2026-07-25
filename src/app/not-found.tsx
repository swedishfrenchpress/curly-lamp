import Link from "next/link";
import { getDict } from "@/content";

export default function NotFound() {
  // A 404 has no language segment to read, so it answers in both.
  const sv = getDict("sv");
  const en = getDict("en");

  return (
    <main className="shell" style={{ paddingBlock: "18vh 12vh" }}>
      <h1 className="display">
        {sv.ui.notFoundTitle}
      </h1>
      <p className="lead">{sv.ui.notFoundBody}</p>
      <p className="lead" style={{ color: "var(--faint)" }}>
        {en.ui.notFoundBody}
      </p>
      <p className="hero__actions">
        <Link href="/sv/" className="btn btn--primary">
          {sv.ui.backHome}
        </Link>
        <Link href="/en/" className="btn btn--ghost">
          {en.ui.backHome}
        </Link>
      </p>
    </main>
  );
}
