import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import type { CopyLink, PageCopy } from "@/i18n/page-types";
import { entity, telHref } from "@/content/entity";
import SectionList from "./section-list";
import { Arrow, Text, localHref } from "./text";
import h from "../home/home.module.css";
import s from "./page.module.css";

export type Crumb = { name: string; path?: string };

export function Breadcrumbs({ items, locale }: { items: Crumb[]; locale: Locale }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={s.crumbs}>
        {items.map((item) => (
          <li key={item.name}>
            {item.path !== undefined ? <Link href={localHref(locale, item.path)}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  locale,
  crumbs,
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  children,
}: {
  locale: Locale;
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  primary?: CopyLink;
  secondary?: CopyLink;
  children?: ReactNode;
}) {
  return (
    <section className={s.hero}>
      <div className={h.shell}>
        <Breadcrumbs items={crumbs} locale={locale} />
        <p className={h.kicker}>{eyebrow}</p>
        <h1 className={s.heroTitle}>{title}</h1>
        {(lead || primary || secondary) && (
          <div className={h.heroFoot}>
            {lead && (
              <p className={h.heroLead}>
                <Text value={lead} locale={locale} />
              </p>
            )}
            {(primary || secondary) && (
              <div className={h.actions}>
                {primary && (
                  <Link className={h.btn} href={localHref(locale, primary.href)}>
                    {primary.label}
                    <Arrow />
                  </Link>
                )}
                {secondary && (
                  <Link className={h.textLink} href={localHref(locale, secondary.href)}>
                    {secondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function AnswerBox({ label, text, locale }: { label: string; text: string; locale: Locale }) {
  return (
    <section className={s.answer} aria-label={label}>
      <div className={`${h.shell} ${h.grid}`}>
        <p className={h.label}>{label}</p>
        <p className={`${h.main} ${s.answerText}`}>
          <Text value={text} locale={locale} />
        </p>
      </div>
    </section>
  );
}

export function CtaBand({
  locale,
  dict,
  title,
  lead,
  primary,
  secondary,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  lead: string;
  primary: CopyLink;
  secondary?: CopyLink;
}) {
  return (
    <section className={`${h.band} ${h.bandInk} ${h.contact}`}>
      <div className={h.shell}>
        <h2 className={h.contactTitle}>{title}</h2>
        <div className={h.contactFoot}>
          <p className={h.contactLead}>
            <Text value={lead} locale={locale} />
          </p>
          <div className={h.contactActions}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
              <Link className={`${h.btn} ${h.btnLight}`} href={localHref(locale, primary.href)}>
                {primary.label}
                <Arrow />
              </Link>
              {secondary && (
                <Link className={h.textLink} style={{ color: "#fff" }} href={localHref(locale, secondary.href)}>
                  {secondary.label}
                </Link>
              )}
            </div>
            <p className={h.contactDirect}>
              <span>{dict.ui.direct}</span>
              <a className={h.contactLine} href={telHref()}>
                {entity.phone}
              </a>
              <a className={h.contactLine} href={`mailto:${entity.email}`}>
                {entity.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Hero → answer box → sections → CTA, the layout shared by every copy-driven page. */
export default function PageView({
  copy,
  locale,
  dict,
  crumbs,
  children,
}: {
  copy: PageCopy;
  locale: Locale;
  dict: Dictionary;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <div className={h.page}>
      <PageHero locale={locale} crumbs={crumbs} {...copy.hero} />
      {copy.answer && <AnswerBox locale={locale} label={copy.answer.label} text={copy.answer.text} />}
      {children}
      <SectionList sections={copy.sections} locale={locale} dict={dict} />
      {copy.cta && <CtaBand locale={locale} dict={dict} {...copy.cta} />}
    </div>
  );
}
