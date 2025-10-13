'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';

interface LanguageSwitcherProps {
    currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (newLocale: Locale) => {
        // Mevcut pathname'den locale'i çıkar
        const segments = pathname.split('/');
        segments[1] = newLocale; // İlk segment locale
        const newPath = segments.join('/');

        router.push(newPath);
    };

    return (
        <div className="language-switcher">
            <select
                value={currentLocale}
                onChange={(e) => handleLanguageChange(e.target.value as Locale)}
                className="form-select"
            >
                {locales.map((locale) => (
                    <option key={locale} value={locale}>
                        {localeNames[locale]}
                    </option>
                ))}
            </select>
        </div>
    );
}