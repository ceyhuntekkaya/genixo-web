/**
 * URL slug'larını JSON key'lerine map eden utility fonksiyonlar
 */

// Product slug'ları -> JSON key mapping
export const productSlugToKey: Record<string, keyof import('@/i18n/types').Dictionary['products']> = {
    'ilc': 'ILC',
    'study-score-ai': 'StudyScoreAI',
    'egitimiste': 'Egitimiste',
    'genixo-work-ai': 'GenixoWorkAI',
    'genixo-assistant': 'GenixoAssistant',
    'tomer-e-yadis': 'TOMEREYadis',
    'retired-travel-app': 'RetiredTravelApp',
};

/**
 * Product slug'ını JSON key'ine çevirir
 */
export function getProductKey(slug: string): keyof import('@/i18n/types').Dictionary['products'] | null {
    return productSlugToKey[slug] || null;
}

/**
 * Product key'ini slug'a çevirir
 */
export function getProductSlug(key: keyof import('@/i18n/types').Dictionary['products']): string | null {
    const slug = Object.keys(productSlugToKey).find(s => productSlugToKey[s] === key);
    return slug || null;
}

