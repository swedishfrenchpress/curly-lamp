import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CampaignImageSlot from "@/components/campaign-image-slot";
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
  return pageMetadata(params, "questions", "questions");
}

export default async function QuestionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { questions, ui } = getDict(lang);

  return (
    <>
      <PageHero
        block={questions.hero}
        variant="questions"
        media={
          <CampaignImageSlot
            kind="questions"
            lang={lang}
            className="page-hero__art"
          />
        }
      />

      {/* Asked and answered sit side by side in one bordered pair. The layout
          is the argument: put them in sequence and the reader has to hold the
          question in memory while reading the reply. */}
      <Section>
        <ol className="q-list">
          {questions.openQuestions.map((q) => (
            <Reveal key={q.id} as="li" className="q q--detailed">
              <div className="q__body">
                <div className="q__summary">
                  <h2 className="q__question">{q.question}</h2>
                  <p className="q__why">{q.why}</p>
                  <span className="flag">{q.statusLabel}</span>
                  <Cites ids={q.cite} label={ui.sources} />
                </div>

                <div className="q__exchange">
                  <div className="q__cell">
                    <span className="q__cell-label">{q.askedLabel}</span>
                    <p>{q.asked}</p>
                  </div>
                  <div className="q__cell">
                    <span className="q__cell-label">{q.responseLabel}</span>
                    <p>{q.response}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section variant="band">
        <div className="editorial-grid">
          <Reveal className="editorial-grid__rail">
            <SectionHead block={questions.researchBlock} />
          </Reveal>
          <div className="card-list editorial-grid__body">
            {questions.research.map((item) => (
              <Reveal key={item.title} className="rcard">
                <div>
                  <h3 className="rcard__title">{item.title}</h3>
                  <span className="rcard__status">{item.statusLabel}</span>
                </div>
                <div>
                  <p className="rcard__question">{item.question}</p>
                  <p className="rcard__detail">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section size="tight">
        <Reveal className="editorial-grid">
          <div className="editorial-grid__rail">
            <SectionHead block={questions.foia} />
          </div>
          <div className="editorial-grid__body">
            <Prose body={questions.foia.body} />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
