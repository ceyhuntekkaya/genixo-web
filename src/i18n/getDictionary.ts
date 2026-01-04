import 'server-only';
import type { Locale } from './config';

const loadDictionary = async (locale: Locale) => {
    const [
        common,
        services,
        products,
        home,
        about,
        blog,
        ngsd,
        contact,
        seo
    ] = await Promise.all([
        import(`@/locales/${locale}/common.json`).then((m) => m.default),
        import(`@/locales/${locale}/services.json`).then((m) => m.default),
        import(`@/locales/${locale}/products.json`).then((m) => m.default),
        import(`@/locales/${locale}/pages/home.json`).then((m) => m.default),
        import(`@/locales/${locale}/pages/about.json`).then((m) => m.default),
        import(`@/locales/${locale}/pages/blog.json`).then((m) => m.default),
        import(`@/locales/${locale}/pages/ngsd.json`).then((m) => m.default),
        import(`@/locales/${locale}/pages/contact.json`).then((m) => m.default),
        import(`@/locales/${locale}/seo.json`).then((m) => m.default),
    ]);

    return {
        ...common,
        ...services,
        ...products,
        ...home,
        ...about,
        ...blog,
        ...ngsd,
        ...contact,
        ...seo,
    };
};

const dictionaries = {
    en: () => loadDictionary('en'),
    tr: () => loadDictionary('tr'),
    de: () => loadDictionary('de'),
    fr: () => loadDictionary('fr'),
    ru: () => loadDictionary('ru'),
};

export const getDictionary = async (locale: Locale) => {
    return dictionaries[locale]?.() ?? dictionaries.en();
};