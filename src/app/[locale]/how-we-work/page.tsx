import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/how-we-work";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "how-we-work", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="how-we-work" path={PATH} />;
}
