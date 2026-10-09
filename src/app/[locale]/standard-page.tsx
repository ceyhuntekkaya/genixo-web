import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { getPage, type StandardPageKey } from "@/i18n/getPage";
import type { PageCopy } from "@/i18n/page-types";
import { SITE_URL } from "@/content/entity";
import { buildMetadata } from "@/utils/seo";
import { breadcrumbList, faqPage, serviceNode, webPage } from "@/utils/schema";
import JsonLd from "@/app/component/json-ld";
import PageView from "@/app/component/page/page-view";
import { plain } from "@/app/component/page/text";

export type LocaleParams = { params: Promise<{ locale: string }> };

export function toLocale(value: string): Locale {
  if (!(locales as readonly string[]).includes(value)) notFound();
  return value as Locale;
}

/** Turkish pages that still fall back to English are noindex and are left out of hreflang. */
async function translationsFor(key: StandardPageKey, path: string) {
  const tr = await getPage("tr", key);
  return tr.translated ? undefined : { en: path };
}

export async function standardMetadata(
  params: LocaleParams["params"],
  key: StandardPageKey,
  path: string,
  options: { noindex?: boolean } = {},
): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const { copy, translated } = await getPage(locale, key);
  return buildMetadata({
    locale,
    path,
    title: copy.meta.title,
    description: copy.meta.description,
    noindex: options.noindex || !translated,
    translations: await translationsFor(key, path),
  });
}

export function faqItems(copy: PageCopy) {
  return copy.sections.flatMap((section) => (section.kind === "faq" ? section.items : []));
}

export function pageSchema(
  copy: PageCopy,
  locale: Locale,
  path: string,
  options: { service?: boolean; parent?: { name: string; path: string }; pageType?: string } = {},
) {
  const url = `${SITE_URL}/${locale}${path}`;
  const faq = faqItems(copy).map((item) => ({ q: item.q, a: plain(item.a) }));
  const trail = [
    { name: "Genixo", url: `${SITE_URL}/${locale}` },
    ...(options.parent ? [{ name: options.parent.name, url: `${SITE_URL}/${locale}${options.parent.path}` }] : []),
    { name: copy.breadcrumb, url },
  ];
  return [
    webPage({
      url,
      name: copy.meta.title,
      description: copy.meta.description,
      locale,
      type: options.pageType,
      mainEntity: options.service ? `${url}#service` : undefined,
    }),
    breadcrumbList(trail),
    ...(options.service
      ? [serviceNode({ url, name: plain(copy.hero.title), description: plain(copy.answer?.text ?? copy.meta.description), locale })]
      : []),
    ...(faq.length ? [faqPage(url, faq)] : []),
  ];
}

export default async function StandardPage({
  params,
  pageKey,
  path,
  service,
  pageType,
  children,
}: LocaleParams & {
  pageKey: StandardPageKey;
  path: string;
  /** Offer pages: Service schema and a Services breadcrumb parent. */
  service?: boolean;
  /** schema.org page type, e.g. AboutPage or ContactPage. */
  pageType?: string;
  children?: ReactNode;
}) {
  const locale = toLocale((await params).locale);
  const [dict, { copy }] = await Promise.all([getDictionary(locale), getPage(locale, pageKey)]);
  const parent = service ? { name: dict.menu.Services, path: "/services" } : undefined;
  const crumbs = [
    { name: dict.ui.home, path: "/" },
    ...(parent ? [{ name: parent.name, path: parent.path }] : []),
    { name: copy.breadcrumb },
  ];

  return (
    <>
      <JsonLd data={pageSchema(copy, locale, path, { service, parent, pageType })} />
      <PageView copy={copy} locale={locale} dict={dict} crumbs={crumbs}>
        {children}
      </PageView>
    </>
  );
}
