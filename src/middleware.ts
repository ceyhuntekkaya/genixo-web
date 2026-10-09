import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "./i18n/config";

const KNOWN_ROOTS = new Set([
  "about",
  "contact",
  "blog",
  "products",
  "solutions",
  "case-study",
  "government-support",
  "ngsd",
  "chat",
  "service",
  "authors",
  "guides",
]);

function localeFromHeader(header: string | null): Locale {
  if (!header) return defaultLocale;
  const first = header.split(",")[0]?.trim().toLowerCase() ?? "";
  if (first.startsWith("tr")) return "tr";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = localeFromHeader(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();

  if (pathname === "/") {
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  if (KNOWN_ROOTS.has(first)) {
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\..*).*)"],
};
