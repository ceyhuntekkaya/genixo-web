import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/pricing";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "pricing", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="pricing" path={PATH} />;
}
