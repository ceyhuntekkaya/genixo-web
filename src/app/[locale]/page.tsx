import HomeLanding from "@/app/component/home/home-landing";
import JsonLd from "@/app/component/json-ld";
import { getDictionary } from "@/i18n/getDictionary";
import { getPage } from "@/i18n/getPage";
import { SITE_URL } from "@/content/entity";
import { webPage } from "@/utils/schema";
import { buildMetadata } from "@/utils/seo";
import { toLocale, type LocaleParams } from "./standard-page";

export async function generateMetadata({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const [{ copy, translated }, tr] = await Promise.all([getPage(locale, "home"), getPage("tr", "home")]);
  return buildMetadata({
    locale,
    path: "",
    absoluteTitle: copy.meta.title,
    description: copy.meta.description,
    noindex: !translated,
    translations: tr.translated ? undefined : { en: "" },
  });
}

export default async function Home({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const [dict, { copy }] = await Promise.all([getDictionary(locale), getPage(locale, "home")]);

  return (
    <>
      <JsonLd
        data={webPage({
          url: `${SITE_URL}/${locale}`,
          name: copy.meta.title,
          description: copy.meta.description,
          locale,
        })}
      />
      <HomeLanding copy={copy} dict={dict} locale={locale} />
    </>
  );
}
