import Image from "next/image";
import { pressSources, type PressSource } from "@/content/sources";
import type { Block, Lang } from "@/content/types";
import { SectionHead } from "./ui";

function PressCard({
  source,
  lang,
  variant,
}: {
  source: PressSource;
  lang: Lang;
  variant: "grid" | "compact";
}) {
  return (
    <a
      href={source.url}
      className={`press-card press-card--${variant}`}
      data-source={source.id}
    >
      <span className="press-card__media">
        <Image
          src={source.image}
          alt={source.imageAlt[lang]}
          width={1500}
          height={938}
          sizes={
            variant === "compact"
              ? "(max-width: 680px) 120px, 220px"
              : "(max-width: 680px) calc(100vw - 40px), (max-width: 1100px) 42vw, 320px"
          }
        />
        <span className="press-card__credit">{source.imageCredit}</span>
      </span>
      <span className="press-card__body">
        <span className="press-card__topline">
          <Image
            src={source.logo}
            alt={`${source.publisher} logo`}
            width={132}
            height={35}
            className="press-card__logo"
          />
          <span className="press-card__date">
            {source.date} · {lang === "sv" ? "Svenska" : "Swedish"}
          </span>
        </span>
        <span className="press-card__title">{source.title}</span>
        <span className="press-card__summary">{source.summary[lang]}</span>
        <span className="press-card__action">
          {lang === "sv" ? "Läs artikeln" : "Read article"}
        </span>
      </span>
    </a>
  );
}

export default function PressSection({
  block,
  lang,
  variant = "grid",
}: {
  block: Block;
  lang: Lang;
  variant?: "grid" | "compact";
}) {
  return (
    <div className={`press-section press-section--${variant}`}>
      <SectionHead block={block} />
      <div className={variant === "compact" ? "press-list" : "press-grid"}>
        {pressSources.map((source) => (
          <PressCard
            key={source.id}
            source={source}
            lang={lang}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}
