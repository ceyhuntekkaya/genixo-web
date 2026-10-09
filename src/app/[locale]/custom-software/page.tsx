import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/custom-software";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "custom-software", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="custom-software" path={PATH} service />;
}
