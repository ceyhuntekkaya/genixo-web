import 'server-only';
import type { Locale } from './config';

const dictionaries = {
    en: () => import('@/locales/en/common.json').then((module) => module.default),
    tr: () => import('@/locales/tr/common.json').then((module) => module.default),
    de: () => import('@/locales/de/common.json').then((module) => module.default),
    fr: () => import('@/locales/fr/common.json').then((module) => module.default),
    ru: () => import('@/locales/ru/common.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    return dictionaries[locale]?.() ?? dictionaries.en();
};