import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/ai-automation";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "ai-automation", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="ai-automation" path={PATH} service />;
}
