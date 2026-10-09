import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {getProductKey, getProductSlug} from "@/utils/slugMapping";
import ProductDetail from "@/app/component/product-detail";
import {notFound} from "next/navigation";
import {buildMetadata} from "@/utils/seo";
import {locales} from "@/i18n/config";
import JsonLd from "@/app/component/json-ld";
import {SITE_URL} from "@/content/entity";
import {breadcrumbList, softwareNode} from "@/utils/schema";
import type { Dictionary } from "@/i18n/types";

export const dynamicParams = false;

/** Product detail key (excludes "hero" which is not a product entry). */
type ProductDetailKey = Exclude<keyof Dictionary["products"], "hero">;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale; product: string }>;
}) {
    const { locale, product } = await params;
    const dict = await getDictionary(locale);
    const productKey = getProductKey(product);
    
    if (!productKey) {
        return buildMetadata({
            locale,
            path: `/products/${product}`,
            title: "404",
            description: "Aradığınız ürün sayfası yayında değil. Ürünler listesinden devam edebilirsiniz.",
            noindex: true,
        });
    }

    const productData = dict.products[productKey];

    if (!productData || !("active" in productData) || productData.active === false) {
        return buildMetadata({
            locale,
            path: `/products/${product}`,
            title: "404",
            description: "Aradığınız ürün sayfası yayında değil. Ürünler listesinden devam edebilirsiniz.",
            noindex: true,
        });
    }

    const seo = dict.seo?.pages?.[`product.${product}`];
    const image = "image1" in productData ? productData.image1 : undefined;
    return buildMetadata({
        locale,
        path: `/products/${product}`,
        title: seo?.title || productData.name,
        description: seo?.description || productData.summary,
        image,
    });
}

export async function generateStaticParams() {
    const result: { locale: Locale; product: string }[] = [];
    for (const locale of locales) {
        const dict = await getDictionary(locale);
        const productKeys = Object.keys(dict.products) as (keyof Dictionary["products"])[];
        for (const key of productKeys) {
            if (key === "hero") continue;
            const product = dict.products[key];
            if (product && "active" in product && product.active !== false) {
                const slug = getProductSlug(key);
                if (slug) {
                    result.push({ locale, product: slug });
                }
            }
        }
    }
    return result;
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ locale: Locale; product: string }>;
}) {
    const { locale, product } = await params;
    const dict = await getDictionary(locale);
    
    // URL slug'ını JSON key'ine çevir
    const productKey = getProductKey(product);
    
    // Eğer geçersiz bir slug ise 404 döndür
    if (!productKey) {
        notFound();
    }

    const productData = dict.products[productKey];

    if (!productData || !("active" in productData) || productData.active === false) {
        notFound();
    }

    const productKeyForDetail = productKey as ProductDetailKey;
    const url = `${SITE_URL}/${locale}/products/${product}`;
    const image = "image1" in productData && productData.image1 ? `${SITE_URL}${productData.image1}` : undefined;

    return (
        <>
            <JsonLd
                data={[
                    softwareNode({
                        url,
                        name: productData.name,
                        description: productData.summary,
                        locale,
                        applicationCategory: "EducationalApplication",
                        image,
                    }),
                    breadcrumbList([
                        { name: dict.menu.Home, url: `${SITE_URL}/${locale}` },
                        { name: dict.menu.Products, url: `${SITE_URL}/${locale}/products` },
                        { name: productData.name, url },
                    ]),
                ]}
            />
            <ProductDetail productKey={productKeyForDetail} dict={dict} locale={locale} />
        </>
    );
}

