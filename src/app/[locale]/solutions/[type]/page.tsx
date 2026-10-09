import { Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Dictionary } from "@/i18n/types";
import SolutionDetail from "@/app/component/solution-detail";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import { SITE_URL, shortDefinitionFor } from "@/content/entity";
import { breadcrumbList, faqPage, serviceNode } from "@/utils/schema";
import { faqsFor } from "@/content/service-faq";
import { getContentForService } from "@/lib/content";

type ServiceItem = Dictionary["services"][number];

export const dynamicParams = false;

function findService(dict: Dictionary, type: string) {
  return Array.isArray(dict.services) ? dict.services.find((service: ServiceItem) => service.slug === type) : undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; type: string }>;
}) {
  const { locale, type } = await params;
  const dict = await getDictionary(locale);
  const solution = findService(dict, type);
  if (!solution || solution.active === false) {
    return buildMetadata({
      locale,
      path: `/solutions/${type}`,
      title: "404",
      description: "Aradığınız çözüm sayfası yayında değil. Çözümler listesinden devam edebilirsiniz.",
      noindex: true,
    });
  }
  const seo = dict.seo?.pages?.[`solution.${type}`];
  const description = seo?.description || solution.summary || shortDefinitionFor(locale);
  return buildMetadata({
    locale,
    path: `/solutions/${type}`,
    title: seo?.title || solution.name,
    description,
    image: solution.image1,
  });
}

export async function generateStaticParams() {
  const result: { locale: Locale; type: string }[] = [];
  for (const locale of locales) {
    const dict = await getDictionary(locale);
    if (!Array.isArray(dict.services)) continue;
    for (const service of dict.services) {
      if (service.active !== false) result.push({ locale, type: service.slug });
    }
  }
  return result;
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; type: string }>;
}) {
  const { locale, type } = await params;
  const dict = await getDictionary(locale);
  const solution = findService(dict, type);
  if (!solution || solution.active === false) notFound();

  const url = `${SITE_URL}/${locale}/solutions/${type}`;
  const description = dict.seo?.pages?.[`solution.${type}`]?.description || solution.summary;
  const faq = solution.faq ?? faqsFor(locale, type);
  const related = getContentForService(locale, type);
  const graph = [
    serviceNode({ url, name: solution.name, description, locale }),
    breadcrumbList([
      { name: dict.menu.Home, url: `${SITE_URL}/${locale}` },
      { name: dict.menu.Solutions, url: `${SITE_URL}/${locale}/solutions` },
      { name: solution.name, url },
    ]),
    ...(faq.length ? [faqPage(url, faq)] : []),
  ];

  return (
    <>
      <JsonLd data={graph} />
      <SolutionDetail service={{ ...solution, faq }} dict={dict} locale={locale} related={related} />
    </>
  );
}
