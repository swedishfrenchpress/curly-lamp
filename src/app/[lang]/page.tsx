import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import { Arrow, Cites, Prose, Section, SectionHead } from "@/components/ui";
import { getDict, isLang } from "@/content";
import { LANGS, path } from "@/content/types";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const dict = getDict(lang);
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    alternates: {
      languages: { sv: "/sv/", en: "/en/" },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDict(lang);
  const { home, ui } = dict;

  return (
    <>
      {/* Hero. The lead paragraph is deliberately long: it is the entire story,
          and a reader who goes no further should still leave knowing it. */}
      <div className="hero">
        <div className="shell">
          <Reveal immediate>
            <span className="eyebrow">{home.hero.eyebrow}</span>
            <h1 className="display">{home.hero.title}</h1>
            <p className="hero__lead">{home.hero.lead}</p>
            <div className="hero__actions">
              <Link
                href={path(lang, home.hero.primaryCta.route)}
                className="btn btn--primary"
              >
                {home.hero.primaryCta.label} <Arrow />
              </Link>
              <Link
                href={path(lang, home.hero.secondaryCta.route)}
                className="btn btn--ghost"
              >
                {home.hero.secondaryCta.label} <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <Section variant="band">
        <Reveal>
          <SectionHead block={home.statsBlock} />
        </Reveal>
        <div className="stat-grid">
          {home.stats.map((stat, i) => (
            <Reveal key={stat.value} className="stat" delay={i * 60}>
              <p className="stat__value">{stat.value}</p>
              <p className="stat__label">{stat.label}</p>
              <p className="stat__note">{stat.note}</p>
              <Cites ids={stat.cite} label={ui.sources} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The minister's own words, unedited. No commentary around them —
          the gap between the question and the answer is self-evident. */}
      <Section size="air">
        <Reveal className="pullquote">
          <blockquote className="pullquote__text">
            “{home.quote.text}”
          </blockquote>
          <p className="pullquote__attr">{home.quote.attribution}</p>
          <p className="pullquote__context">{home.quote.context}</p>
          <Cites ids={home.quote.cite} label={ui.sources} />
          {home.quote.unverifiedNote ? (
            <p className="pullquote__note">{home.quote.unverifiedNote}</p>
          ) : null}
        </Reveal>
      </Section>

      <Section variant="band">
        <Reveal>
          <SectionHead block={home.questionsBlock} />
        </Reveal>
        <ol className="q-list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {dict.questions.openQuestions.map((q) => (
            <Reveal key={q.id} as="li" className="q">
              <span className="q__num">{q.number}</span>
              <div className="q__body">
                <h3 className="q__question">{q.question}</h3>
                <p className="q__why">{q.why}</p>
                <span className="flag">{q.statusLabel}</span>
              </div>
            </Reveal>
          ))}
        </ol>
        <p style={{ marginTop: 36 }}>
          <Link
            href={path(lang, home.questionsCta.route)}
            className="btn btn--primary"
          >
            {home.questionsCta.label} <Arrow />
          </Link>
        </p>
      </Section>

      {/* Three policy threads on one dark panel, because the argument is that
          they are one thing. Separating them visually would concede the point. */}
      <Section variant="panel" size="air">
        <Reveal>
          <SectionHead block={home.convergence} />
        </Reveal>
        <div className="steps">
          {home.convergence.steps.map((step, i) => (
            <Reveal key={step.title} className="step" delay={i * 80}>
              <p className="step__label">{step.label}</p>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
              <Cites ids={step.cite} label={ui.sources} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p
            style={{
              marginTop: "clamp(32px, 4vw, 48px)",
              fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)",
              lineHeight: 1.55,
              color: "var(--panel-fg)",
              maxWidth: "60ch",
            }}
          >
            {home.convergence.closing}
          </p>
        </Reveal>
      </Section>

      <Section narrow>
        <Reveal>
          <SectionHead block={home.notWhat} />
          <Prose body={home.notWhat.body} />
        </Reveal>
      </Section>

      <Section variant="band" size="tight">
        <Reveal>
          <SectionHead block={home.share} />
          <div className="hero__actions" style={{ marginTop: 0 }}>
            {home.share.cta.map((cta, i) => (
              <Link
                key={cta.route}
                href={path(lang, cta.route)}
                className={i === 0 ? "btn btn--primary" : "btn btn--ghost"}
              >
                {cta.label} <Arrow />
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
