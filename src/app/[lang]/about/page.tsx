import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PressSection from "@/components/press-section";
import Reveal from "@/components/reveal";
import { PageHero, Prose, Section } from "@/components/ui";
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

const KIND_ORDER: SourceKind[] = ["primary", "advocacy"];

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
      <PageHero block={about.hero} variant="about" />

      <Section>
        <div className="about-register">
          {about.sections.map((section) => (
            <Reveal key={section.title} className="about-register__row">
              <h2 className="sub-title">{section.title}</h2>
              <Prose body={section.body} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Sources are grouped by kind rather than listed flat, so the reader can
          see at a glance how much of the case rests on the public record and
          how much on journalism we have not independently verified. */}
      <Section variant="band">
        <Reveal>
          <PressSection block={about.pressBlock} lang={lang} />
        </Reveal>

        <hr className="rule sources-rule" />

        <Reveal className="source-directory__intro editorial-grid">
          <div className="editorial-grid__rail">
            <h2 className="section-title">{about.sourcesBlock.title}</h2>
          </div>
          <div className="editorial-grid__body">
            {about.sourcesBlock.lead ? (
              <p className="lead">{about.sourcesBlock.lead}</p>
            ) : null}
          </div>
        </Reveal>

        {KIND_ORDER.map((kind) => {
          const group = sourcesOfKind(kind);
          if (!group.length) return null;
          return (
            <Reveal key={kind} className="src-group">
              <div className="src-group__head">
                <h3 className="src-group__title">{about.kindLabels[kind]}</h3>
                <p className="src-group__note">{about.kindNotes[kind]}</p>
              </div>
              <div className="src-group__items">
                {group.map((source, index) => (
                  <a
                    key={source.id}
                    href={source.url}
                    className={`src ${index === 0 ? "src--lead" : ""}`.trim()}
                  >
                    <span className="src__pub">{source.publisher}</span>
                    <span className="src__title">{source.title}</span>
                    <span className="src__meta">{source.date}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          );
        })}
      </Section>
    </>
  );
}
