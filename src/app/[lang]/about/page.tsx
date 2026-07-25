import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import { PageHero, Prose, Section, SectionHead } from "@/components/ui";
import { getDict, isLang } from "@/content";
import { sourcesOfKind, type SourceKind } from "@/content/sources";
import { langStaticParams, pageMetadata } from "@/lib/page";

export const generateStaticParams = langStaticParams;

export function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return pageMetadata(params, "about", "about");
}

const KIND_ORDER: SourceKind[] = ["primary", "reporting", "advocacy"];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { about } = getDict(lang);

  return (
    <>
      <PageHero block={about.hero} />

      <Section narrow>
        {about.sections.map((section, i) => (
          <Reveal key={section.title}>
            <div style={{ marginTop: i === 0 ? 0 : "clamp(44px, 5.5vw, 72px)" }}>
              <h2 className="sub-title" style={{ marginBottom: 16 }}>
                {section.title}
              </h2>
              <Prose body={section.body} />
            </div>
          </Reveal>
        ))}
      </Section>

      {/* Sources are grouped by kind rather than listed flat, so the reader can
          see at a glance how much of the case rests on the public record and
          how much on journalism we have not independently verified. */}
      <Section variant="band">
        <Reveal>
          <SectionHead block={about.sourcesBlock} />
        </Reveal>

        {KIND_ORDER.map((kind) => {
          const group = sourcesOfKind(kind);
          if (!group.length) return null;
          return (
            <Reveal key={kind} className="src-group">
              <div className="src-group__head">
                <span className="src-group__title">{about.kindLabels[kind]}</span>
                <span className="src-group__note">{about.kindNotes[kind]}</span>
              </div>
              {group.map((source) => (
                <a
                  key={source.id}
                  href={source.url}
                  className="src"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="src__pub">{source.publisher}</span>
                  <br />
                  <span className="src__title">{source.title}</span>
                  <span className="src__meta" style={{ display: "block" }}>
                    {source.date}
                    {source.unverified ? (
                      <>
                        {" · "}
                        <span className="src__unverified">
                          {about.unverifiedLabel}
                        </span>
                      </>
                    ) : null}
                  </span>
                </a>
              ))}
            </Reveal>
          );
        })}
      </Section>
    </>
  );
}
