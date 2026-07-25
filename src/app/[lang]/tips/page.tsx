import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import { PageHero, Section, SectionHead } from "@/components/ui";
import { getDict, isLang } from "@/content";
import { langStaticParams, pageMetadata } from "@/lib/page";

export const generateStaticParams = langStaticParams;

export function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return pageMetadata(params, "tips", "tips");
}

export default async function TipsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { tips } = getDict(lang);

  return (
    <>
      <PageHero block={tips.hero} />

      {/* Risk guidance comes before the channels, and the channels do not
          exist yet. Ordering is a safety decision: nobody should be able to
          reach a contact route without passing the warnings first. */}
      <Section narrow>
        <Reveal>
          <SectionHead block={tips.riskBlock} />
          <ol className="rule-list">
            {tips.riskItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section variant="band" narrow size="tight">
        <Reveal>
          <SectionHead block={tips.channelsBlock} />
          <div className="notice">
            <p>{tips.channelsPending}</p>
          </div>
        </Reveal>
      </Section>

      <Section narrow size="tight">
        <Reveal>
          <SectionHead block={tips.cannotBlock} />
          <ol className="rule-list">
            {tips.cannotItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </Reveal>
      </Section>
    </>
  );
}
