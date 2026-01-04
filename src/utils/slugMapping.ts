/**
 * URL slug'larını JSON key'lerine map eden utility fonksiyonlar
 */

// Solution slug'ları -> JSON key mapping
export const solutionSlugToKey: Record<string, keyof import('@/i18n/types').Dictionary['services']> = {
    'web': 'WebApplication',
    'arch': 'ArchitectureAsAService',
    'custom': 'CustomSoftwareDevelopment',
    'dev': 'DevOpsServices',
    'cloud': 'CloudDevelopment',
    'mobile': 'MobileDevelopment',
    'support': 'ApplicationMaintenanceAndSupportServices',
    'data': 'DataScience',
};

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
 * Solution slug'ını JSON key'ine çevirir
 */
export function getSolutionKey(slug: string): keyof import('@/i18n/types').Dictionary['services'] | null {
    return solutionSlugToKey[slug] || null;
}

/**
 * Product slug'ını JSON key'ine çevirir
 */
export function getProductKey(slug: string): keyof import('@/i18n/types').Dictionary['products'] | null {
    return productSlugToKey[slug] || null;
}

/**
 * Solution key'ini slug'a çevirir
 */
export function getSolutionSlug(key: keyof import('@/i18n/types').Dictionary['services']): string | null {
    const slug = Object.keys(solutionSlugToKey).find(s => solutionSlugToKey[s] === key);
    return slug || null;
}

/**
 * Product key'ini slug'a çevirir
 */
export function getProductSlug(key: keyof import('@/i18n/types').Dictionary['products']): string | null {
    const slug = Object.keys(productSlugToKey).find(s => productSlugToKey[s] === key);
    return slug || null;
}

