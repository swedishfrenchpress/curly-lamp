import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CampaignImageSlot from "@/components/campaign-image-slot";
import Reveal from "@/components/reveal";
import DataFlow from "@/components/data-flow";
import {
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
      <PageHero block={acus.hero} variant="acus" />

      <Section>
        <div className="article-register">
          {acus.sections.map((section) => (
            <Reveal key={section.title} className="article-register__row">
              <h2 className="sub-title">
                {section.title}
              </h2>
              <Prose body={section.body} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="band">
        <div className="editorial-grid acus-data__intro">
          <Reveal className="editorial-grid__rail">
            <SectionHead block={acus.dataBlock} />
          </Reveal>
          <Reveal className="editorial-grid__body">
            <CampaignImageSlot kind="acus" lang={lang} />
          </Reveal>
        </div>
        <Reveal className="acus-data__map">
          <DataFlow
            items={acus.dataSources}
            flow={acus.dataFlow}
            sourcesLabel={ui.sources}
          />
        </Reveal>
      </Section>

      {/* Load-bearing disclaimer: the sections above describe the platform in
          general, not the Swedish installation. Burying this would make the
          page do exactly what we accuse the government of. */}
      <Section size="tight">
        <Reveal className="editorial-grid">
          <div className="editorial-grid__rail">
            <SectionHead block={acus.caveat} />
          </div>
          <div className="editorial-grid__body">
            <Prose body={acus.caveat.body} />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
