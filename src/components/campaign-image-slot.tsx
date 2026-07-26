import Image from "next/image";
import type { Lang } from "@/content/types";

export type CampaignImageKind =
  | "acus"
  | "acus-hero"
  | "known"
  | "questions"
  | "timeline"
  | "share-landscape"
  | "share-square"
  | "share-story";

const SPECS: Record<
  CampaignImageKind,
  {
    width: number;
    height: number;
    ratio: string;
    label: Record<Lang, string>;
  }
> = {
  acus: {
    width: 1800,
    height: 1200,
    ratio: "3:2",
    label: {
      sv: "Förklarande illustration av Acus",
      en: "Acus explanatory illustration",
    },
  },
  "acus-hero": {
    width: 1600,
    height: 2000,
    ratio: "4:5",
    label: {
      sv: "Kampanjmotiv om Acus",
      en: "Acus campaign poster",
    },
  },
  known: {
    width: 1600,
    height: 2000,
    ratio: "4:5",
    label: {
      sv: "Kampanjmotiv för det vi vet",
      en: "What we know campaign poster",
    },
  },
  questions: {
    width: 1600,
    height: 2000,
    ratio: "4:5",
    label: {
      sv: "Affischmotiv för frågorna",
      en: "Questions campaign poster",
    },
  },
  timeline: {
    width: 1600,
    height: 2000,
    ratio: "4:5",
    label: {
      sv: "Kampanjmotiv för tidslinjen",
      en: "Timeline campaign poster",
    },
  },
  "share-landscape": {
    width: 1200,
    height: 630,
    ratio: "1.91:1",
    label: {
      sv: "Liggande delningsbild",
      en: "Landscape share image",
    },
  },
  "share-square": {
    width: 1080,
    height: 1080,
    ratio: "1:1",
    label: {
      sv: "Kvadratisk delningsbild",
      en: "Square share image",
    },
  },
  "share-story": {
    width: 1080,
    height: 1920,
    ratio: "9:16",
    label: {
      sv: "Story-bild",
      en: "Story image",
    },
  },
};

/**
 * One wrapper for both states of a campaign artwork slot. With `src` it shows
 * the artwork; without it, the labelled frame that reserves the same ratio and
 * export size until the artwork is supplied. Keeping both in one component is
 * what lets a slot be filled by adding a file — every responsive rule targets
 * `.campaign-image-slot--<kind>`, so the story cap and the phone track survive
 * the swap untouched.
 *
 * The figure keeps its accessible name in both states, and the image is
 * `alt=""` so a screen reader announces the slot once rather than twice.
 */
export default function CampaignImageSlot({
  kind,
  lang,
  src,
  className = "",
}: {
  kind: CampaignImageKind;
  lang: Lang;
  src?: string;
  className?: string;
}) {
  const spec = SPECS[kind];

  return (
    <figure
      className={`campaign-image-slot campaign-image-slot--${kind} ${className}`.trim()}
      aria-label={`${spec.label[lang]}, ${spec.width} × ${spec.height} pixels`}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          width={spec.width}
          height={spec.height}
          className="campaign-image-slot__image"
        />
      ) : (
        <figcaption className="campaign-image-slot__label">
          <span>{spec.label[lang]}</span>
          <strong>
            {spec.width} × {spec.height} px
          </strong>
          <small>{spec.ratio}</small>
        </figcaption>
      )}
    </figure>
  );
}
