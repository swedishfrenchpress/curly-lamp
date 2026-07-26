import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import ShareCta from "@/components/share-cta";
import { Cites, PageHero, Prose, Section } from "@/components/ui";
import { getDict, isLang } from "@/content";
import { langStaticParams, pageMetadata } from "@/lib/page";

export const generateStaticParams = langStaticParams;

export function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return pageMetadata(params, "timeline", "timeline");
}

export default async function TimelinePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { timeline, share, ui } = getDict(lang);
  const entriesByDate = new Map(
    timeline.entries.map((entry) => [entry.date, entry]),
  );

  return (
    <>
      <PageHero
        block={timeline.hero}
        variant="timeline"
        media={
          <figure className="campaign-image-slot campaign-image-slot--timeline page-hero__art">
            <Image
              src="/campaign/timeline-hero.jpg"
              alt={
                lang === "sv"
                  ? "En rastrerad kalendersida med ett datum inringat för hand"
                  : "A halftone-textured calendar page with one date circled by hand"
              }
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 839px) 90vw, 420px"
              priority
            />
          </figure>
        }
      />

      <Section size="tight">
        <ol className="timeline">
          {timeline.chapters.map((chapter, chapterIndex) => (
            <Reveal
              key={chapter.title}
              as="li"
              className={`timeline-chapter ${
                chapterIndex === timeline.chapters.length - 1
                  ? "timeline-chapter--current"
                  : ""
              }`.trim()}
            >
              <header className="timeline-chapter__intro">
                <h2 className="timeline-chapter__title">{chapter.title}</h2>
                <p className="timeline-chapter__lead">{chapter.lead}</p>
              </header>

              <ol className="timeline-chapter__entries">
                {chapter.entryDates.map((date) => {
                  const entry = entriesByDate.get(date);
                  if (!entry) return null;

                  return (
                    <li
                      key={entry.date + entry.title}
                      className={`tl-entry ${
                        entry.emphasis
                          ? `tl-entry--${entry.emphasis}`
                          : ""
                      }`.trim()}
                      id={`event-${entry.date}`}
                    >
                      <div className="tl-entry__meta">
                        <time className="tl-entry__date" dateTime={entry.date}>
                          {entry.dateLabel}
                        </time>
                      </div>
                      <div className="tl-entry__content">
                        <h3 className="tl-entry__title">
                          <a href={`#event-${entry.date}`}>{entry.title}</a>
                        </h3>
                        <p className="tl-entry__body">{entry.body}</p>
                        {entry.aside ? (
                          <p className="tl-entry__aside">{entry.aside}</p>
                        ) : null}
                        <Cites ids={entry.cite} label={ui.sources} />
                      </div>
                    </li>
                  );
                })}
              </ol>

              {chapterIndex === timeline.chapters.length - 1 ? (
                <div className="timeline-conclusion">
                  <h2 className="timeline-conclusion__title">
                    {timeline.closing.title}
                  </h2>
                  <Prose body={timeline.closing.body} />
                </div>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section variant="band" size="tight" className="route-share">
        <Reveal>
          <ShareCta block={share} lang={lang} />
        </Reveal>
      </Section>
    </>
  );
}
