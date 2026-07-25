import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getDict, isLang } from "@/content";
import { LANGS } from "@/content/types";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDict(lang);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
      <a href="#main" className="skip-link">
        {dict.nav.skipToContent}
      </a>
      <SiteHeader dict={dict} />
      <main id="main">{children}</main>
      <SiteFooter dict={dict} />
    </div>
  );
}
