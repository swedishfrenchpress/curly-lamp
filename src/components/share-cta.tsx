import Link from "next/link";
import ShareActions from "@/components/share-actions";
import { canonicalShareUrl } from "@/lib/share";
import { path, type Lang, type ShareSection } from "@/content/types";

/**
 * The compact terminal block used on the sub-pages and mid-way down the home
 * page. Server component: it renders the client island as a child, never the
 * other way round, so the asset kit stays off every route that only needs the
 * three buttons.
 *
 * `onHome` keeps the anchor a same-page jump on the home page and a full path
 * everywhere else — the share panel lives on the home page only.
 */
export default function ShareCta({
  block,
  lang,
  onHome = false,
}: {
  block: ShareSection;
  lang: Lang;
  onHome?: boolean;
}) {
  const kitHref = onHome ? "#share" : `${path(lang, "home")}#share`;

  return (
    <div className="share-cta">
      <h2 className="share-cta__title">{block.cta.title}</h2>
      <p className="share-cta__lead">{block.cta.lead}</p>

      <ShareActions block={block} url={canonicalShareUrl(lang, "home")} />

      <p className="share-cta__more">
        <Link href={kitHref} className="text-link">
          {block.cta.assetsLabel}
        </Link>
      </p>
    </div>
  );
}
