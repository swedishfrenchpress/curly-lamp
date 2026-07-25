import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import { Cites, PageHero, Prose, Section, SectionHead } from "@/components/ui";
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
  const { timeline, ui } = getDict(lang);

  return (
    <>
      <PageHero block={timeline.hero} />

      <Section>
        <ol className="timeline" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {timeline.entries.map((entry) => (
            <Reveal
              key={entry.date + entry.title}
              as="li"
              className="tl-entry"
            >
              {/* data-kind drives the one colour shift in the list: the final
                  "where we are" entry. Everything else stays greyscale. */}
              <div className="tl-entry__meta" data-kind={entry.kind}>
                <time className="tl-entry__date" dateTime={entry.date}>
                  {entry.dateLabel}
                </time>
                <span className="tl-entry__kind">{entry.kindLabel}</span>
              </div>
              <div>
                <h2 className="tl-entry__title">{entry.title}</h2>
                <p className="tl-entry__body">{entry.body}</p>
                {entry.aside ? (
                  <p className="tl-entry__aside">{entry.aside}</p>
                ) : null}
                <Cites ids={entry.cite} label={ui.sources} />
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section variant="band" narrow size="tight">
        <Reveal>
          <SectionHead block={timeline.closing} />
          <Prose body={timeline.closing.body} />
        </Reveal>
      </Section>
    </>
  );
}
