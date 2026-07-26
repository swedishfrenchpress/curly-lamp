import ShareActions from "@/components/share-actions";
import ShareAssets from "@/components/share-assets";
import { canonicalShareUrl } from "@/lib/share";
import type { Lang, ShareSection } from "@/content/types";

/**
 * The full kit at the foot of the home page. A server component that composes
 * the client island with the (static) asset list — deliberately not marked
 * "use client", or the whole asset list would re-enter the browser bundle with
 * no error and no visible symptom.
 */
export default function SharePanel({
  block,
  lang,
}: {
  block: ShareSection;
  lang: Lang;
}) {
  return (
    <div className="share-panel">
      <ShareActions block={block} url={canonicalShareUrl(lang, "home")} />
      <ShareAssets block={block} lang={lang} />
    </div>
  );
}
