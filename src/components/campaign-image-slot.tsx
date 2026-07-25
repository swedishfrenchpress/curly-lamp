import type { Lang } from "@/content/types";

export type CampaignImageKind =
  | "home"
  | "acus"
  | "questions"
  | "share-landscape"
  | "share-square";

const SPECS: Record<
  CampaignImageKind,
  {
    width: number;
    height: number;
    ratio: string;
    label: Record<Lang, string>;
  }
> = {
  home: {
    width: 1800,
    height: 1000,
    ratio: "9:5",
    label: {
      sv: "Huvudmotiv för kampanjen",
      en: "Primary campaign artwork",
    },
  },
  acus: {
    width: 1800,
    height: 1200,
    ratio: "3:2",
    label: {
      sv: "Förklarande illustration av Acus",
      en: "Acus explanatory illustration",
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
};

export default function CampaignImageSlot({
  kind,
  lang,
  className = "",
}: {
  kind: CampaignImageKind;
  lang: Lang;
  className?: string;
}) {
  const spec = SPECS[kind];

  return (
    <figure
      className={`campaign-image-slot campaign-image-slot--${kind} ${className}`.trim()}
      aria-label={`${spec.label[lang]}, ${spec.width} × ${spec.height} pixels`}
    >
      <figcaption className="campaign-image-slot__label">
        <span>{spec.label[lang]}</span>
        <strong>
          {spec.width} × {spec.height} px
        </strong>
        <small>{spec.ratio}</small>
      </figcaption>
    </figure>
  );
}
