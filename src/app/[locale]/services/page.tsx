import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/services";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "services", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="services" path={PATH} />;
}
