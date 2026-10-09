import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/product-studio";

export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "product-studio", PATH);
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="product-studio" path={PATH} service />;
}
