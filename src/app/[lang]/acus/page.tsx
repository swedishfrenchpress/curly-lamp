import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import {
  ClaimList,
  PageHero,
  Prose,
  Section,
  SectionHead,
} from "@/components/ui";
import { getDict, isLang } from "@/content";
import { langStaticParams, pageMetadata } from "@/lib/page";

export const generateStaticParams = langStaticParams;

export function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return pageMetadata(params, "acus", "acus");
}

export default async function AcusPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { acus, ui } = getDict(lang);

  return (
    <>
      <PageHero block={acus.hero} />

      {/* Narrow measure — this is the one page people will actually read
          straight through, and 68ch beats a two-column grid for that. */}
      <Section narrow>
        {acus.sections.map((section, i) => (
          <Reveal key={section.title}>
            <div style={{ marginTop: i === 0 ? 0 : "clamp(48px, 6vw, 80px)" }}>
              <h2 className="sub-title" style={{ marginBottom: 18 }}>
                {section.title}
              </h2>
              <Prose body={section.body} />
            </div>
          </Reveal>
        ))}
      </Section>

      <Section variant="band">
        <Reveal>
          <SectionHead block={acus.dataBlock} />
        </Reveal>
        <Reveal>
          <ClaimList
            items={acus.dataSources}
            variant="known"
            sourcesLabel={ui.sources}
          />
        </Reveal>
      </Section>

      {/* Load-bearing disclaimer: the sections above describe the platform in
          general, not the Swedish installation. Burying this would make the
          page do exactly what we accuse the government of. */}
      <Section narrow size="tight">
        <Reveal>
          <SectionHead block={acus.caveat} />
          <Prose body={acus.caveat.body} />
        </Reveal>
      </Section>
    </>
  );
}
