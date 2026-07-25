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
      <PageHero block={known.hero} />

      {/* Two columns that must never blur into one another. The left is
          sourced; the right is absence. Presenting them in a single list
          would let a reader carry the authority of the first into the second. */}
      <Section>
        <div className="split">
          <Reveal>
            <SectionHead block={known.knownBlock} />
            <ClaimList
              items={known.knownItems}
              variant="known"
              sourcesLabel={ui.sources}
            />
          </Reveal>

          <Reveal delay={80}>
            <SectionHead block={known.unknownBlock} />
            <ClaimList
              items={known.unknownItems}
              variant="unknown"
              sourcesLabel={ui.sources}
            />
          </Reveal>
        </div>
      </Section>

      <Section variant="band" narrow size="tight">
        <Reveal>
          <SectionHead block={known.method} />
          <Prose body={known.method.body} />
        </Reveal>
      </Section>
    </>
  );
}
