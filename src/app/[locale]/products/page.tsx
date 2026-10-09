import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import type { Dictionary } from "@/i18n/types";
import { SITE_URL, shortDefinitionFor } from "@/content/entity";
import { getProductSlug } from "@/utils/slugMapping";
import { collectionPage } from "@/utils/schema";
import { buildMetadata } from "@/utils/seo";
import JsonLd from "@/app/component/json-ld";
import { PageHero } from "@/app/component/page/page-view";
import { Arrow, domainOf, localHref } from "@/app/component/page/text";
import h from "@/app/component/home/home.module.css";
import { toLocale, type LocaleParams } from "../standard-page";

type ProductKey = Exclude<keyof Dictionary["products"], "hero">;

export async function generateMetadata({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = await getDictionary(locale);
  const copy = dict.seo?.pages?.products;
  return buildMetadata({
    locale,
    path: "/products",
    title: copy?.title || dict.menu.Products,
    description: copy?.description || shortDefinitionFor(locale),
  });
}

export default async function ProductsPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = await getDictionary(locale);
  const copy = dict.seo?.pages?.products;
  const products = (Object.keys(dict.products) as Array<keyof Dictionary["products"]>)
    .filter((key): key is ProductKey => key !== "hero")
    .map((key) => ({ key, slug: getProductSlug(key), ...dict.products[key] }))
    .filter((product) => product.active !== false && product.slug);

  return (
    <>
      <JsonLd
        data={collectionPage({
          url: `${SITE_URL}/${locale}/products`,
          name: copy?.title || dict.menu.Products,
          description: copy?.description || shortDefinitionFor(locale),
          locale,
          items: products.map((p) => ({ name: p.name, url: `${SITE_URL}/${locale}/products/${p.slug}` })),
        })}
      />
      <div className={h.page}>
        <PageHero
          locale={locale}
          crumbs={[{ name: dict.ui.home, path: "/" }, { name: dict.menu.Products }]}
          eyebrow={dict.menu.Products}
          title={copy?.title || dict.menu.Products}
          lead={copy?.description}
        />
        <section className={`${h.band} ${h.bandMist}`}>
          <ul className={`${h.shell} ${h.products}`} style={{ marginTop: 0 }}>
            {products.map((product) => (
              <li key={product.key}>
                <Link className={h.product} href={localHref(locale, `/products/${product.slug}`)}>
                  {product.webLink && (
                    <span className={h.productDomain}>
                      {domainOf(product.webLink)}
                      <Arrow />
                    </span>
                  )}
                  {product.logo && (
                    <span className={h.productLogo}>
                      <Image src={product.logo} alt="" fill sizes="180px" style={{ objectFit: "contain", objectPosition: "left center" }} />
                    </span>
                  )}
                  <span className={h.productName}>{product.name}</span>
                  <span className={h.productSummary}>{product.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
