import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { offerKey, offerPath } from "@/content/offers";
import { getAuthor, type ContentDoc } from "@/lib/content";
import Markdown from "./page/markdown";
import SectionList from "./page/section-list";
import { AnswerBox, CtaBand, PageHero, type Crumb } from "./page/page-view";
import { Arrow, Text, localHref } from "./page/text";
import h from "./home/home.module.css";
import s from "./page/page.module.css";

const TR_MONTHS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

function formatDate(value: string, locale: Locale) {
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  if (locale === "tr") return `${date.getUTCDate()} ${TR_MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  return date.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export default function ArticleView({
  doc,
  locale,
  dict,
  crumbs,
  eyebrow,
}: {
  doc: ContentDoc;
  locale: Locale;
  dict: Dictionary;
  crumbs: Crumb[];
  eyebrow: string;
}) {
  const author = getAuthor(locale, doc.author) ?? getAuthor("en", doc.author);
  const showUpdated = doc.dateModified !== doc.datePublished;
  const offers = [...new Set(doc.relatedServices.map(offerKey).filter((key) => key !== undefined))];
  const facts = [
    { label: dict.ui.caseFacts.industry, value: doc.industry },
    { label: dict.ui.caseFacts.size, value: doc.companySize },
    { label: dict.ui.caseFacts.duration, value: doc.duration },
    { label: dict.ui.caseFacts.stack, value: doc.stack?.join(", ") },
  ].filter((fact) => fact.value);

  return (
    <div className={h.page}>
      <PageHero locale={locale} crumbs={crumbs} eyebrow={eyebrow} title={doc.title}>
        <p className={s.byline}>
          {author ? (
            <span>
              <Link href={localHref(locale, `/team/${author.slug}`)}>{author.name}</Link> · {author.jobTitle}
            </span>
          ) : null}
          <time dateTime={doc.datePublished}>{formatDate(doc.datePublished, locale)}</time>
          {showUpdated ? (
            <span>
              {dict.ui.updated}: <time dateTime={doc.dateModified}>{formatDate(doc.dateModified, locale)}</time>
            </span>
          ) : null}
        </p>
      </PageHero>

      <AnswerBox locale={locale} label={dict.ui.inShort} text={doc.summary} />

      <article className={s.article}>
        <div className={`${h.shell} ${h.grid}`}>
          <div className={h.label} />
          <div className={h.main}>
            {facts.length > 0 && (
              <dl className={s.facts}>
                {facts.map((fact, i) => (
                  <div key={i}>
                    <dt>{fact.label}</dt>
                    <dd>
                      <Text value={fact.value!} locale={locale} />
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <Markdown body={doc.body} locale={locale} />

            {doc.sources.length > 0 && (
              <div className={s.sources}>
                <p>{dict.ui.sources}</p>
                <ol>
                  {doc.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        {source.title}
                      </a>
                      {source.accessed ? ` (${source.accessed})` : ""}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {offers.length > 0 && (
              <aside className={s.aside}>
                <h2>{dict.ui.related}</h2>
                <ul className={s.relatedList}>
                  {offers.map((key) => (
                    <li key={key}>
                      <Link href={localHref(locale, offerPath(key))}>
                        {dict.offers[key].name}
                        <Arrow />
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            {author && (
              <aside className={`${s.aside} ${s.authorBox}`}>
                <p>{dict.ui.author}</p>
                <Link href={localHref(locale, `/team/${author.slug}`)}>{author.name}</Link>
                <p style={{ marginTop: 8 }}>{author.summary}</p>
              </aside>
            )}
          </div>
        </div>
      </article>

      {doc.faq.length > 0 && (
        <SectionList
          locale={locale}
          dict={dict}
          sections={[{ kind: "faq", label: dict.ui.faq, items: doc.faq, tone: "mist" }]}
        />
      )}

      <CtaBand
        locale={locale}
        dict={dict}
        title={doc.cta?.title ?? dict.ui.articleCta.title}
        lead={doc.cta?.lead ?? dict.ui.articleCta.lead}
        primary={{ label: dict.ui.bookCall, href: "/contact" }}
        secondary={doc.type === "scenario" ? { label: dict.footer.aiReadiness, href: "/ai-readiness-assessment" } : undefined}
      />
    </div>
  );
}
