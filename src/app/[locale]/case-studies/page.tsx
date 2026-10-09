import { getAllPosts } from "@/lib/content";
import StandardPage, { standardMetadata, toLocale, type LocaleParams } from "../standard-page";

const PATH = "/case-studies";

/** Stays out of the index until at least one case study is published. */
export async function generateMetadata({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  return standardMetadata(params, "case-studies", PATH, { noindex: getAllPosts(locale, "case-study").length === 0 });
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="case-studies" path={PATH} pageType="CollectionPage" />;
}
