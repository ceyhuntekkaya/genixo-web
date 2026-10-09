import StandardPage, { standardMetadata, type LocaleParams } from "../standard-page";

const PATH = "/hello";

/** QR landing page for events and printed material; kept out of the index. */
export function generateMetadata({ params }: LocaleParams) {
  return standardMetadata(params, "hello", PATH, { noindex: true });
}

export default function Page({ params }: LocaleParams) {
  return <StandardPage params={params} pageKey="hello" path={PATH} />;
}
