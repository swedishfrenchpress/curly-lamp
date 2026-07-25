import Link from "next/link";
import { SITE_UPDATED } from "@/content";
import { path, type Dict } from "@/content/types";

export default function SiteFooter({ dict }: { dict: Dict }) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div>
            <p className="site-footer__wordmark">{dict.footer.wordmark}</p>
            <p className="site-footer__line">{dict.footer.line}</p>
            <p className="site-footer__credit">
              {dict.footer.credit}{" "}
              <a
                href={dict.footer.creditLink.href}
                className="text-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {dict.footer.creditLink.label}
              </a>
            </p>
          </div>

          {dict.footer.columns.map((col) => (
            <div key={col.title} className="site-footer__col">
              <p className="site-footer__col-title">{col.title}</p>
              <ul>
                {col.items.map((item) => (
                  <li key={item.route}>
                    <Link href={path(dict.lang, item.route)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__legal">{dict.footer.legal}</p>
          <p className="site-footer__updated">
            {dict.footer.updated} {SITE_UPDATED}
          </p>
        </div>
      </div>
    </footer>
  );
}
