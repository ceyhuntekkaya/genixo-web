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
        return NextResponse.next();
    }

    // Pathname'de zaten locale var mı kontrol et
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    // Kullanıcının ülkesine göre locale belirle
    // AWS Amplify'da geo bilgisi olmayabilir, bu durumda default locale kullan
    const req = request as RequestWithGeo;
    const country = req.geo?.country || '';
    const locale = countryToLocale[country] || defaultLocale;

    // Root path için locale'e yönlendir
    const url = request.nextUrl.clone();
    if (pathname === '/') {
        url.pathname = `/${locale}`;
    } else {
        url.pathname = `/${locale}${pathname}`;
    }
    return NextResponse.redirect(url);
}

export const config = {
    matcher: [
        // Root path dahil tüm pathler
        '/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\..*).*)',
    ],
};