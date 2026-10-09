import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Locale } from "@/i18n/config";
import { getAuthor, type ContentDoc } from "@/lib/content";

const months: Record<string, string[]> = {
  tr: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
};

function formatDate(value: string, locale: Locale) {
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  if (locale === "tr") {
    return `${date.getUTCDate()} ${months.tr[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  }
  return date.toLocaleDateString(locale === "en" ? "en-US" : locale, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

const labels = {
  tr: { updated: "Güncellendi", faq: "Sık sorulan sorular", services: "İlgili çözümler", sources: "Kaynaklar", author: "Yazar" },
  en: { updated: "Updated", faq: "Frequently asked questions", services: "Related solutions", sources: "Sources", author: "Author" },
};

export default function ArticleView({
  doc,
  locale,
  crumbs,
  serviceNames = {},
}: {
  doc: ContentDoc;
  locale: Locale;
  crumbs: Array<{ label: string; href: string }>;
  serviceNames?: Record<string, string>;
}) {
  const author = getAuthor(locale, doc.author);
  const ui = locale === "tr" ? labels.tr : labels.en;
  const showUpdated = doc.dateModified !== doc.datePublished;

  return (
    <article className="section section-padding">
      <div className="container" style={{ maxWidth: 860 }}>
        <nav aria-label="Breadcrumb">
          {crumbs.map((crumb, index) => (
            <span key={crumb.href}>
              {index > 0 ? " / " : null}
              {index === crumbs.length - 1 ? crumb.label : <Link href={crumb.href}>{crumb.label}</Link>}
            </span>
          ))}
        </nav>
        <h1 style={{ marginTop: 16 }}>{doc.title}</h1>
        <p>
          {author ? (
            <Link href={`/${locale}/authors/${author.slug}`}>{author.name}</Link>
          ) : (
            doc.author
          )}
          {author ? ` · ${author.jobTitle}` : ""}
          {" · "}
          <time dateTime={doc.datePublished}>{formatDate(doc.datePublished, locale)}</time>
          {showUpdated ? (
            <>
              {" · "}
              {ui.updated}: <time dateTime={doc.dateModified}>{formatDate(doc.dateModified, locale)}</time>
            </>
          ) : null}
        </p>
        <p className="geo-answer">{doc.summary}</p>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => <h2 {...props} />,
            a: ({ href, children }) => (
              <a href={href} rel={href?.startsWith("http") ? "noopener" : undefined}>
                {children}
              </a>
            ),
          }}
        >
          {doc.body}
        </ReactMarkdown>
        {doc.faq.length > 0 && (
          <section>
            <h2>{ui.faq}</h2>
            {doc.faq.map((item) => (
              <details key={item.q} className="geo-faq">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </section>
        )}
        {doc.relatedServices.length > 0 && (
          <section>
            <h2>{ui.services}</h2>
            <ul>
              {doc.relatedServices.map((slug) => (
                <li key={slug}>
                  <Link href={`/${locale}/solutions/${slug}`}>{serviceNames[slug] || slug}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        {author && (
          <aside>
            <h2>{ui.author}</h2>
            <p>
              <Link href={`/${locale}/authors/${author.slug}`}>{author.name}</Link>
              {` · ${author.jobTitle}`}
            </p>
            <p>{author.summary}</p>
            {author.linkedin ? (
              <p>
                <a href={author.linkedin} rel="noopener">LinkedIn</a>
              </p>
            ) : null}
          </aside>
        )}
        {doc.sources.length > 0 && (
          <section>
            <h2>{ui.sources}</h2>
            <ol>
              {doc.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} rel="noopener">{source.title}</a>
                  {source.accessed ? ` (${source.accessed})` : ""}
                </li>
              ))}
            </ol>
          </section>
        )}
        <p>
          <Link href={`/${locale}/contact`}>{locale === "tr" ? "Görüşme planlayın" : "Book a call"}</Link>
        </p>
      </div>
    </article>
  );
}
