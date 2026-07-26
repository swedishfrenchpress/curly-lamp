import Image from "next/image";
import { pressSources, type PressSource } from "@/content/sources";
import type { Block, Lang } from "@/content/types";
import { SectionHead } from "./ui";

function PressCard({
  source,
  lang,
  position,
}: {
  source: PressSource;
  lang: Lang;
  position: number;
}) {
  const imageSizes =
    position === 0
      ? "(max-width: 620px) calc(100vw - 40px), (max-width: 1023px) 90vw, (max-width: 1100px) 58vw, 660px"
      : position === 1
        ? "(max-width: 620px) calc(100vw - 40px), (max-width: 1023px) 44vw, (max-width: 1100px) 42vw, 470px"
        : "(max-width: 620px) calc(100vw - 40px), (max-width: 1023px) 44vw, (max-width: 1100px) 32vw, 380px";

  return (
    <a
      href={source.url}
      className="press-card"
      data-source={source.id}
    >
      <span className="press-card__media">
        <Image
          src={source.image}
          alt={source.imageAlt[lang]}
          width={1500}
          height={938}
          sizes={imageSizes}
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
}: {
  block: Block;
  lang: Lang;
}) {
  return (
    <div className="press-section">
      <SectionHead block={block} />
      <div className="press-grid">
        {pressSources.map((source, index) => (
          <PressCard
            key={source.id}
            source={source}
            lang={lang}
            position={index}
          />
        ))}
      </div>
    </div>
  );
}
