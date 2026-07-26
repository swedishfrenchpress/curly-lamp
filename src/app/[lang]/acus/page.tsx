import type { Metadata } from "next";
import Image from "next/image";
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
      <PageHero
        block={acus.hero}
        variant="acus"
        media={
          <figure className="campaign-image-slot campaign-image-slot--acus-hero page-hero__art">
            <Image
              src="/campaign/acus-hero.jpg"
              alt={
                lang === "sv"
                  ? "En rastrerad bild av ett ansikte med flera rektangulära telefonramar överlagda, var och en med ett annat inzoomat utsnitt av samma ansikte"
                  : "A halftone image of a face with several rectangular phone-shaped frames overlaid on it, each showing a different zoomed-in crop of the same face"
              }
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 839px) 90vw, 420px"
              priority
            />
          </figure>
        }
      />

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
    </>
  );
}
