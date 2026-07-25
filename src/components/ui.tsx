import type { ReactNode } from "react";
import { SOURCES, type SourceId } from "@/content/sources";
import type { Block, Claim } from "@/content/types";

/**
 * Citations render as the publisher's name, not a bracketed number. A reader
 * skimming should be able to tell at a glance whether a claim rests on a
 * riksdag document or on a newspaper — that distinction is the site's whole
 * method, and hiding it behind "[3]" would defeat it.
 */
export function Cites({ ids, label }: { ids?: SourceId[]; label: string }) {
  if (!ids?.length) return null;
  return (
    <p className="cites">
      <span className="cites__label">{label}</span>
      {ids.map((id) => {
        const source = SOURCES[id];
        return (
          <a
            key={id}
            href={source.url}
            className="cite"
            title={source.title}
          >
            {source.publisher}
          </a>
        );
      })}
    </p>
  );
}

export function SectionHead({
  block,
  className = "",
}: {
  block: Block;
  className?: string;
}) {
  return (
    <div className={`block-head ${className}`.trim()}>
      <h2 className="section-title">{block.title}</h2>
      {block.lead ? <p className="lead">{block.lead}</p> : null}
    </div>
  );
}

export function Prose({ body }: { body?: string[] }) {
  if (!body?.length) return null;
  return (
    <div className="prose">
      {body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
}

export function ClaimList({
  items,
  variant = "known",
  sourcesLabel,
}: {
  items: Claim[];
  variant?: "known" | "unknown";
  sourcesLabel: string;
}) {
  return (
    <ul className="claim-list">
      {items.map((item, i) => (
        <li key={i} className={`claim claim--${variant}`}>
          <span className="claim__marker" aria-hidden="true">
            {variant === "known" ? "—" : "?"}
          </span>
          <div>
            <p className="claim__text">{item.text}</p>
            <Cites ids={item.cite} label={sourcesLabel} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Section({
  children,
  variant,
  size = "default",
  id,
  narrow = false,
}: {
  children: ReactNode;
  variant?: "band" | "panel";
  size?: "default" | "tight" | "air";
  id?: string;
  narrow?: boolean;
}) {
  const classes = [
    "section",
    size !== "default" ? `section--${size}` : "",
    variant ? `section--${variant}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} id={id}>
      <div className={narrow ? "shell-narrow" : "shell"}>{children}</div>
    </section>
  );
}

export function PageHero({
  block,
  variant = "default",
  media,
}: {
  block: Block;
  variant?: "default" | "known" | "timeline" | "acus" | "questions" | "about";
  media?: ReactNode;
}) {
  return (
    <div className={`hero hero--page hero--${variant}`}>
      <div className="shell">
        <div className="page-hero__grid">
          <h1 className="display">{block.title}</h1>
          {block.lead ? <p className="hero__lead">{block.lead}</p> : null}
          {media}
        </div>
      </div>
    </div>
  );
}
