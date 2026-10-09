import { ContentPage, metadataFor, staticParamsFor } from "../../content-route";
import { toLocale } from "../../standard-page";

export const dynamicParams = false;

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return staticParamsFor("scenario");
}

export async function generateMetadata({ params }: Params) {
  const { locale, slug } = await params;
  return metadataFor(toLocale(locale), slug, "scenario");
}

export default async function ScenarioPage({ params }: Params) {
  const { locale, slug } = await params;
  return <ContentPage locale={toLocale(locale)} slug={slug} type="scenario" />;
}
