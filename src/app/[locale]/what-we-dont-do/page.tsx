import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/what-we-dont-do";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "what-we-dont-do", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="what-we-dont-do" path={PATH} />;
}
