import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/ai-readiness-assessment";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "ai-readiness", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="ai-readiness" path={PATH} />;
}
