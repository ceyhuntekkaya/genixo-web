import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, countryToLocale, type Locale } from './i18n/config';

// Vercel geo tipini genişletelim
interface RequestWithGeo extends NextRequest {
    geo?: {
        country?: string;
        city?: string;
        region?: string;
    };
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Public dosyaları ve API'leri atla
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/assets') ||
        pathname.includes('.')
    ) {
        return;
    }

    // Pathname'de zaten locale var mı kontrol et
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Kullanıcının ülkesine göre locale belirle
    const req = request as RequestWithGeo;
    const country = req.geo?.country || '';
    const locale = countryToLocale[country] || defaultLocale;

    // Yeni URL'e yönlendir
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};