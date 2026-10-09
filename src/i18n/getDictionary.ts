import 'server-only';
import type { Locale } from './config';
import type { Dictionary } from './types';

const FILES = ['common', 'products', 'seo'] as const;

/** A locale file that has not been translated yet falls back to English. */
async function load(locale: Locale, file: (typeof FILES)[number]) {
    try {
        return (await import(`@/locales/${locale}/${file}.json`)).default;
    } catch {
        return (await import(`@/locales/en/${file}.json`)).default;
    }
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    const parts = await Promise.all(FILES.map((file) => load(locale, file)));
    return Object.assign({}, ...parts) as Dictionary;
};
