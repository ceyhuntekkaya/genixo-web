import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/data-security";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "data-security", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="data-security" path={PATH} />;
}
