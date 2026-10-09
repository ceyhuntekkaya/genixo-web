import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/contact";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "contact", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="contact" path={PATH} pageType="ContactPage" />;
}
