import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/about";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "about", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="about" path={PATH} pageType="AboutPage" />;
}
