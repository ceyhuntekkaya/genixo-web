import 'server-only';
import type { Locale } from './config';
import type { HomeCopy, PageCopy } from './page-types';

export type StandardPageKey =
    | 'services'
    | 'ai-automation'
    | 'custom-software'
    | 'product-studio'
    | 'ngsd'
    | 'how-we-work'
    | 'what-we-dont-do'
    | 'pricing'
    | 'data-security'
    | 'ai-readiness'
    | 'about'
    | 'contact'
    | 'hello'
    | 'case-studies';

type PageMap = { home: HomeCopy } & Record<StandardPageKey, PageCopy>;

/**
 * Untranslated pages fall back to English. `translated: false` keeps such a page out of the index
 * so an English body is never served as a Turkish document.
 */
export async function getPage<K extends keyof PageMap>(
    locale: Locale,
    key: K,
): Promise<{ copy: PageMap[K]; translated: boolean }> {
    try {
        const copy = (await import(`@/locales/${locale}/pages/${key}.json`)).default as PageMap[K];
        return { copy, translated: true };
    } catch {
        const copy = (await import(`@/locales/en/pages/${key}.json`)).default as PageMap[K];
        return { copy, translated: locale === 'en' };
    }
}
