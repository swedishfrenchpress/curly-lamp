import CampaignImageSlot, {
  type CampaignImageKind,
} from "@/components/campaign-image-slot";
import type { Lang, ShareAssetKind, ShareBlock } from "@/content/types";

/**
 * Keyed by asset kind rather than array position. The previous index-based
 * lookup would have rendered a 1:1 frame over the 9:16 story file the moment a
 * third asset was added, and done so silently.
 */
const SLOT_KIND: Record<ShareAssetKind, CampaignImageKind> = {
  landscape: "share-landscape",
  square: "share-square",
  story: "share-story",
};

/** Server component — no interactivity, so no JavaScript ships for it. */
export default function ShareAssets({
  block,
  lang,
  titleId,
}: {
  block: ShareBlock;
  lang: Lang;
  titleId?: string;
}) {
  return (
    <div className="share-assets">
      <p className="share-assets__title" id={titleId}>
        {block.downloadLabel}
      </p>
      <ul className="share-assets__list">
        {block.assets.map((asset) => (
          <li key={asset.href} className="share-assets__item">
            {/* The export the reader is about to post, at its true ratio. The
                download row below already names it and states the format, so
                the frame does not repeat either. */}
            <CampaignImageSlot
              kind={SLOT_KIND[asset.kind]}
              lang={lang}
              src={asset.href}
              className="share-assets__preview"
            />
            <a href={asset.href} download className="share-assets__link">
              <span>{asset.label}</span>
              <span>{asset.meta}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
