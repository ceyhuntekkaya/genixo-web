import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/ngsd";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "ngsd", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="ngsd" path={PATH} service />;
}
