import {Locale} from "@/i18n/config";
import {getDictionary} from "@/i18n/getDictionary";
import {getProductKey} from "@/utils/slugMapping";
import ProductDetail from "@/app/component/product-detail";
import {notFound} from "next/navigation";
import {generateMetadata as generateSEOMetadata, generateStructuredData} from "@/utils/seo";
import {locales} from "@/i18n/config";
import Script from "next/script";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale; product: string }>;
}) {
    const { locale, product } = await params;
    const dict = await getDictionary(locale);
    const productKey = getProductKey(product);
    
    if (!productKey) {
        return generateSEOMetadata({
            title: '404 - Sayfa Bulunamadı',
            description: 'Aradığınız sayfa bulunamadı.',
            locale,
            noindex: true,
            dict,
        });
    }

    const productData = dict.products[productKey];
    const alternateLocales = locales.filter(l => l !== locale) as Locale[];

    // Check if product is active
    if (!productData || productData.active === false) {
        return generateSEOMetadata({
            title: '404 - Sayfa Bulunamadı',
            description: 'Aradığınız sayfa bulunamadı.',
            locale,
            noindex: true,
            dict,
        });
    }

    return generateSEOMetadata({
        title: productData.name,
        description: productData.summary || productData.description.substring(0, 160),
        keywords: `${productData.name}, ${dict.seo?.common?.softwareProducts || 'software products'}, ${dict.about.slogan}`,
        url: `/${locale}/products/${product}`,
        type: 'website', // Open Graph doesn't support 'product' type, using 'website' instead
        locale,
        alternateLocales,
        image: `/images/products/${product}.jpg`,
        dict,
    });
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
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://genixo.ai';
    
    // Check if product is active
    if (!productData || productData.active === false) {
        notFound();
    }
    
    // Structured Data for Product
    const productStructuredData = generateStructuredData({
        type: 'Product',
        name: productData.name,
        description: productData.summary || productData.description.substring(0, 200),
        url: `${siteUrl}/${locale}/products/${product}`,
        image: `${siteUrl}/images/products/${product}.jpg`,
        dict,
    });

    // Breadcrumb Structured Data
    const breadcrumbStructuredData = generateStructuredData({
        type: 'BreadcrumbList',
        breadcrumbs: [
            { name: dict.menu.Home, url: `${siteUrl}/${locale}` },
            { name: dict.menu.Products, url: `${siteUrl}/${locale}/products` },
            { name: productData.name, url: `${siteUrl}/${locale}/products/${product}` },
        ],
        dict,
    });

    return (
        <>
            <Script
                id="product-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
            />
            <Script
                id="breadcrumb-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
            />
            <ProductDetail productKey={productKey} dict={dict} locale={locale} />
        </>
    );
}

