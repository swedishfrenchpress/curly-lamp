import type { Metadata } from "next";
import Image from "next/image";
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
  return pageMetadata(params, "known", "known");
}

export default async function KnownPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { known, ui } = getDict(lang);

  return (
    <>
      <PageHero
        block={known.hero}
        variant="known"
        media={
          <figure className="campaign-image-slot campaign-image-slot--known page-hero__art">
            <Image
              src="/campaign/known-hero.jpg"
              alt={
                lang === "sv"
                  ? "En rastrerad bild av ett ansikte med en hand upplyft mot munnen, i orange, grönt och krämvitt"
                  : "A halftone image of a face with a hand raised near the mouth, in orange, green, and cream tones"
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
        <div className="known-register">
          <Reveal className="known-register__part">
            <div>
              <SectionHead block={known.knownBlock} />
            </div>
            <ClaimList
              items={known.knownItems}
              variant="known"
              sourcesLabel={ui.sources}
            />
          </Reveal>

          <Reveal className="known-register__part known-register__part--unknown">
            <div>
              <SectionHead block={known.unknownBlock} />
            </div>
            <ClaimList
              items={known.unknownItems}
              variant="unknown"
              sourcesLabel={ui.sources}
            />
          </Reveal>
        </div>
      </Section>

      <Section variant="band" size="tight">
        <Reveal className="editorial-grid">
          <div className="editorial-grid__rail">
            <SectionHead block={known.method} />
          </div>
          <div className="editorial-grid__body">
            <Prose body={known.method.body} />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
