import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getDict, isLang } from "@/content";

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
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(lang)}`,
        }}
      />
      <div className="site-frame">
        <a href="#main" className="skip-link">
          {dict.nav.skipToContent}
        </a>
        <SiteHeader dict={dict} />
        <main id="main">{children}</main>
        <SiteFooter dict={dict} />
      </div>
    </>
  );
}
