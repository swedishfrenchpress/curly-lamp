import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CampaignImageSlot from "@/components/campaign-image-slot";
import Reveal from "@/components/reveal";
import PressSection from "@/components/press-section";
import SharePanel from "@/components/share-panel";
import { Cites, Prose, Section, SectionHead } from "@/components/ui";
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
  const socialImage =
    lang === "sv"
      ? "/share/vem-svarar-acus-landscape-sv.png"
      : "/share/who-answers-acus-landscape-en.png";
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    alternates: {
      languages: { sv: "/sv/", en: "/en/" },
    },
    openGraph: {
      title: dict.home.meta.title,
      description: dict.home.meta.description,
      siteName: dict.site.name,
      locale: lang === "sv" ? "sv_SE" : "en_GB",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: dict.site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.home.meta.title,
      description: dict.home.meta.description,
      images: [socialImage],
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
      <div className="hero hero--home">
        <div className="shell">
          <Reveal immediate className="home-hero__grid">
            <h1 className="display">{home.hero.title}</h1>
            <div className="home-hero__intro">
              <p className="hero__lead">{home.hero.lead}</p>
            </div>
            <CampaignImageSlot
              kind="home"
              lang={lang}
              className="home-hero__art"
            />
          </Reveal>
        </div>
      </div>

      <Section variant="band" className="home-stats">
        <div className="editorial-grid stats-layout">
          <Reveal className="editorial-grid__rail">
            <SectionHead block={home.statsBlock} />
          </Reveal>
          <div className="editorial-grid__body stat-grid">
            {home.stats.map((stat) => (
              <Reveal key={stat.value} className="stat">
                <p className="stat__value">{stat.value}</p>
                <p className="stat__label">{stat.label}</p>
                <p className="stat__note">{stat.note}</p>
                <Cites ids={stat.cite} label={ui.sources} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* The minister's own words, unedited. No commentary around them —
          the gap between the question and the answer is self-evident. */}
      <Section size="air" className="home-quote">
        <Reveal className="pullquote">
          <div className="pullquote__copy">
            <blockquote className="pullquote__text">
              “{home.quote.text}”
            </blockquote>
            <p className="pullquote__attr">{home.quote.attribution}</p>
            <p className="pullquote__context">{home.quote.context}</p>
            <Cites ids={home.quote.cite} label={ui.sources} />
          </div>
          <figure className="pullquote__media">
            <Image
              src="/press/gunnar-strommer.png"
              alt={
                lang === "sv"
                  ? "Justitieminister Gunnar Strömmer"
                  : "Minister for Justice Gunnar Strömmer"
              }
              width={860}
              height={573}
              sizes="(max-width: 800px) calc(100vw - 40px), 42vw"
            />
          </figure>
        </Reveal>
      </Section>

      <Section variant="band" className="home-questions">
        <div className="editorial-grid">
          <Reveal className="editorial-grid__rail">
            <SectionHead block={home.questionsBlock} />
            <Link
              href={path(lang, home.questionsCta.route)}
              className="btn btn--primary"
            >
              {home.questionsCta.label}
            </Link>
          </Reveal>
          <ol
            className="q-list editorial-grid__body"
          >
            {dict.questions.openQuestions.map((q) => (
              <Reveal key={q.id} as="li" className="q">
                <div className="q__body">
                  <h3 className="q__question">{q.question}</h3>
                  <p className="q__why">{q.why}</p>
                  <span className="flag">{q.statusLabel}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Three policy threads on one dark panel, because the argument is that
          they are one thing. Separating them visually would concede the point. */}
      <Section variant="panel" size="air" className="home-convergence">
        <div className="editorial-grid">
          <Reveal className="editorial-grid__rail">
            <SectionHead block={home.convergence} />
          </Reveal>
          <Reveal className="editorial-grid__body">
            <p className="convergence__closing">
              {home.convergence.closing}
            </p>
          </Reveal>
        </div>
        <div className="steps">
          {home.convergence.steps.map((step) => (
            <Reveal key={step.title} className="step">
              <p className="step__label">{step.label}</p>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
              <Cites ids={step.cite} label={ui.sources} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section size="tight" className="home-record">
        <Reveal className="scope-statement editorial-grid">
          <div className="editorial-grid__rail">
            <SectionHead block={home.notWhat} />
          </div>
          <div className="editorial-grid__body">
            <Prose body={home.notWhat.body} />
          </div>
        </Reveal>
        <Reveal className="home-press">
          <PressSection block={home.pressBlock} lang={lang} variant="compact" />
        </Reveal>
      </Section>

      <Section
        id="share"
        variant="band"
        size="tight"
        className="home-share"
      >
        <div className="editorial-grid">
          <Reveal className="editorial-grid__rail">
            <SectionHead block={home.share} />
          </Reveal>
          <Reveal className="editorial-grid__body">
            <SharePanel
              block={home.share}
              lang={lang}
              siteName={dict.site.name}
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
