import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import type { Section } from "@/i18n/page-types";
import { definitionFor, entity, formatAddress, telHref } from "@/content/entity";
import { team } from "@/content/team";
import { credentials } from "@/content/credentials";
import { testimonials } from "@/content/testimonials";
import { getAllPosts, getScenarios, contentPath } from "@/lib/content";
import ContactForm from "@/app/component/contact-form";
import { Arrow, Text, domainOf, localHref } from "./text";
import h from "../home/home.module.css";
import s from "./page.module.css";

type Ctx = { locale: Locale; dict: Dictionary };

const SHOWCASE_PRODUCTS = ["StudyScoreAI", "Egitimiste", "ILC"] as const;

/** Sections whose data source is empty render nothing, so unfilled TODO lists never show an empty frame. */
export default function SectionList({ sections, locale, dict }: { sections: Section[] } & Ctx) {
  let alternate = 0;
  return (
    <>
      {sections.map((section, index) => {
        const body = renderBody(section, { locale, dict });
        if (body === null) return null;
        const tone = section.tone ?? (section.kind === "steps" ? "ink" : alternate++ % 2 === 0 ? "paper" : "mist");
        return (
          <Band key={section.id ?? `${section.kind}-${index}`} section={section} tone={tone} locale={locale} dict={dict}>
            {body}
          </Band>
        );
      })}
    </>
  );
}

const FULL_WIDTH = new Set<Section["kind"]>(["doors", "steps", "scenarios", "cases", "products", "team", "testimonials", "form"]);

function Band({
  section,
  tone,
  locale,
  dict,
  children,
}: { section: Section; tone: "paper" | "mist" | "ink"; children: ReactNode } & Ctx) {
  const toneClass = tone === "mist" ? h.bandMist : tone === "ink" ? `${h.bandInk} ${s.inkBand}` : "";
  const wide = FULL_WIDTH.has(section.kind) || (section.kind === "points" && section.layout === "grid");
  const hasHead = Boolean(section.title || section.lead);

  const extras = (
    <>
      {section.links?.length ? (
        <ul className={s.links}>
          {section.links.map((link) => (
            <li key={link.href}>
              <Link className={h.textLink} href={localHref(locale, link.href)} style={tone === "ink" ? { color: "#fff" } : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {section.sources?.length ? (
        <div className={s.sources}>
          <p>{dict.ui.sources}</p>
          <ol>
            {section.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </>
  );

  return (
    <section id={section.id} className={`${h.band} ${toneClass}`}>
      <div className={`${h.shell} ${h.grid}`}>
        <h2 className={h.label}>{section.label}</h2>
        <div className={h.main}>
          {hasHead && (
            <>
              {section.title && <p className={h.sectionTitle}>{section.title}</p>}
              {section.lead && (
                <p className={h.lead} style={tone === "ink" ? { color: "rgba(255,255,255,0.7)" } : undefined}>
                  <Text value={section.lead} locale={locale} />
                </p>
              )}
            </>
          )}
          {!wide && <div className={hasHead ? s.body : undefined}>{children}</div>}
          {!wide && extras}
        </div>
      </div>
      {wide && (
        <div className={h.shell}>
          <div className={hasHead ? s.body : undefined}>{children}</div>
          {extras}
        </div>
      )}
    </section>
  );
}

function renderBody(section: Section, { locale, dict }: Ctx): ReactNode | null {
  const t = (value: string) => <Text value={value} locale={locale} />;

  switch (section.kind) {
    case "prose":
      return (
        <div className={s.prose}>
          {section.paragraphs.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
        </div>
      );

    case "statement":
      return (
        <>
          <p className={h.statement}>{definitionFor(locale)}</p>
          <div className={h.members}>
            <span className={h.membersLabel}>{section.members}</span>
            <ul>
              {entity.memberships.map((item) => (
                <li key={item.url}>
                  <a href={item.url} rel="noopener">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      );

    case "points":
      return (
        <ul className={section.layout === "grid" ? s.pointGrid : s.pointRows}>
          {section.items.map((item, i) => (
            <li key={i}>
              <h3 className={s.pointTitle}>{t(item.title)}</h3>
              <p className={s.pointText}>{t(item.text)}</p>
            </li>
          ))}
        </ul>
      );

    case "quotes":
      return (
        <ul className={s.quotes}>
          {section.items.map((item, i) => (
            <li key={i}>{t(item)}</li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className={h.process} style={{ marginTop: 0 }}>
          {section.items.map((step, i) => (
            <li key={i} className={h.processStep}>
              <span className={h.processIndex}>
                {String(i + 1).padStart(2, "0")}
                {step.meta ? <> · {t(step.meta)}</> : null}
              </span>
              <h3 className={h.processTitle}>{t(step.title)}</h3>
              <p className={h.processText}>{t(step.text)}</p>
            </li>
          ))}
        </ol>
      );

    case "list":
      return (
        <ul className={`${s.list} ${section.variant === "limits" ? s.limits : section.variant === "checks" ? s.checks : ""}`}>
          {section.items.map((item, i) => (
            <li key={i}>
              <span>{t(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                {section.columns.map((column, i) => (
                  <th key={i} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row">
                        {t(cell)}
                      </th>
                    ) : (
                      <td key={i}>{t(cell)}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "faq":
      return (
        <div className={s.faq}>
          {section.items.map((item, i) => (
            <details key={i}>
              <summary>{item.q}</summary>
              <p className={s.faqAnswer}>{t(item.a)}</p>
            </details>
          ))}
        </div>
      );

    case "doors":
      return (
        <ul className={s.doors}>
          {section.items.map((door) => (
            <li key={door.href}>
              <Link className={s.door} href={localHref(locale, door.href)}>
                <p className={s.doorQuote}>“{door.quote}”</p>
                <h3 className={s.doorName}>{door.name}</h3>
                <p className={s.doorText}>{t(door.text)}</p>
                <span className={s.doorStep}>
                  {door.step}
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      );

    case "scenarios": {
      const scenarios = getScenarios(locale);
      if (!scenarios.length) return null;
      return (
        <ul className={s.cards}>
          {scenarios.map((doc) => (
            <li key={doc.slug}>
              <Link className={s.card} href={localHref(locale, contentPath(doc))}>
                <h3 className={s.cardTitle}>{doc.title}</h3>
                {doc.card && (
                  <dl className={s.cardRows}>
                    <div>
                      <dt>{dict.ui.today}</dt>
                      <dd>{doc.card.today}</dd>
                    </div>
                    <div>
                      <dt>{dict.ui.withAi}</dt>
                      <dd>{doc.card.withAi}</dd>
                    </div>
                    <div>
                      <dt>{dict.ui.measure}</dt>
                      <dd>{doc.card.measure}</dd>
                    </div>
                  </dl>
                )}
                <span className={s.cardMore}>
                  {dict.ui.readScenario}
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    case "cases": {
      const cases = getAllPosts(locale, "case-study").filter(
        (doc) => !section.service || doc.relatedServices.includes(section.service),
      );
      if (!cases.length) return null;
      return (
        <ul className={s.cards}>
          {cases.slice(0, section.limit ?? cases.length).map((doc) => (
            <li key={doc.slug}>
              <Link className={s.card} href={localHref(locale, contentPath(doc))}>
                <h3 className={s.cardTitle}>{doc.title}</h3>
                <p className={s.cardText}>{doc.summary}</p>
                <span className={s.cardMore}>
                  {dict.ui.readCase}
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    case "products": {
      const products = SHOWCASE_PRODUCTS.map((key) => ({ key, ...dict.products[key] })).filter(
        (p) => p.active !== false && p.webLink,
      );
      if (!products.length) return null;
      return (
        <ul className={h.products} style={{ marginTop: 0 }}>
          {products.map((product) => (
            <li key={product.key}>
              <a
                className={h.product}
                style={{ boxShadow: "inset 0 0 0 1px var(--rule)" }}
                href={product.webLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${product.name}: ${section.visit}`}
              >
                <span className={h.productDomain}>
                  {domainOf(product.webLink)}
                  <Arrow external />
                </span>
                {product.logo && (
                  <span className={h.productLogo}>
                    <Image src={product.logo} alt="" fill sizes="180px" style={{ objectFit: "contain", objectPosition: "left center" }} />
                  </span>
                )}
                <span className={h.productName}>{product.name}</span>
                <span className={h.productSummary}>{product.summary}</span>
              </a>
            </li>
          ))}
        </ul>
      );
    }

    case "team":
      if (!team.length) return null;
      return (
        <ul className={s.cards}>
          {team.map((person) => (
            <li key={person.name} className={s.person}>
              {person.photo && (
                <span className={s.personPhoto}>
                  <Image src={person.photo} alt={person.name} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                </span>
              )}
              <h3 className={s.personName}>
                {person.profile ? <Link href={localHref(locale, `/team/${person.profile}`)}>{person.name}</Link> : person.name}
              </h3>
              <p className={s.personRole}>{person.role[locale]}</p>
              <p className={s.personFocus}>{person.focus[locale]}</p>
            </li>
          ))}
        </ul>
      );

    case "credentials":
      if (!credentials.length) return null;
      return (
        <dl className={h.traits}>
          {credentials.map((item, i) => (
            <div key={i} className={h.trait}>
              <dt>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
                {item.year ? ` · ${item.year}` : ""}
              </dt>
              <dd>{item.detail[locale]}</dd>
            </div>
          ))}
        </dl>
      );

    case "testimonials":
      if (!testimonials.length) return null;
      return (
        <ul className={s.cards}>
          {testimonials.map((item, i) => (
            <li key={i}>
              <figure className={s.quoteCard}>
                <blockquote>“{item.quote[locale]}”</blockquote>
                <figcaption>
                  {item.person}, {item.role[locale]}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      );

    case "posts": {
      const posts = getAllPosts(locale, "post").slice(0, 2);
      if (!posts.length) return null;
      return (
        <ul className={h.posts} style={{ marginTop: 0 }}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link className={h.post} href={localHref(locale, contentPath(post))}>
                <span className={h.postTitle}>{post.title}</span>
                <span className={h.postExcerpt}>{post.summary}</span>
                <span className={h.postRead}>
                  {section.read}
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    case "form":
      return (
        <div className={s.contactGrid}>
          <ContactForm dict={dict} />
          <dl className={s.details}>
            <div>
              <dt>{section.details.phone}</dt>
              <dd>
                <a href={telHref()}>{entity.phone}</a>
              </dd>
            </div>
            <div>
              <dt>{section.details.email}</dt>
              <dd>
                <a href={`mailto:${entity.email}`}>{entity.email}</a>
              </dd>
            </div>
            <div>
              <dt>{section.details.address}</dt>
              <dd>{formatAddress()}</dd>
            </div>
            {section.details.extra?.map((row, i) => (
              <div key={i}>
                <dt>{row.label}</dt>
                <dd>{t(row.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      );
  }
}
