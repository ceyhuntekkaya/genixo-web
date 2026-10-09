import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { OFFERS } from "@/content/offers";
import { getAllPosts } from "@/lib/content";

export type NavLink = { label: string; href: string; summary?: string };
export type NavItem = NavLink & { children?: NavLink[] };
export type FooterGroup = { title: string; links: NavLink[] };

export function serviceLinks(dict: Dictionary, locale: Locale): NavLink[] {
  return OFFERS.map((offer) => ({
    label: dict.offers[offer.key].name,
    href: `/${locale}${offer.path}`,
    summary: dict.offers[offer.key].summary,
  }));
}

/** Case studies appear in the menu only once at least one has been published. */
function hasCaseStudies(locale: Locale): boolean {
  return getAllPosts(locale, "case-study").length > 0;
}

export function buildNav(dict: Dictionary, locale: Locale): NavItem[] {
  const m = dict.menu;
  const items: Array<NavItem | false> = [
    { label: m.Services, href: `/${locale}/services`, children: serviceLinks(dict, locale) },
    hasCaseStudies(locale) && { label: m.CaseStudies, href: `/${locale}/case-studies` },
    { label: m.HowWeWork, href: `/${locale}/how-we-work` },
    { label: m.Pricing, href: `/${locale}/pricing` },
    { label: m.AboutUs, href: `/${locale}/about` },
    { label: m.Blog, href: `/${locale}/blog` },
  ];
  return items.filter((item): item is NavItem => Boolean(item));
}

export function footerGroups(dict: Dictionary, locale: Locale): FooterGroup[] {
  const m = dict.menu;
  const f = dict.footer;
  const at = (path: string) => `/${locale}${path}`;
  return [
    {
      title: f.services,
      links: [
        ...serviceLinks(dict, locale).map(({ label, href }) => ({ label, href })),
        { label: f.aiReadiness, href: at("/ai-readiness-assessment") },
      ],
    },
    {
      title: f.company,
      links: [
        { label: m.AboutUs, href: at("/about") },
        ...(hasCaseStudies(locale) ? [{ label: m.CaseStudies, href: at("/case-studies") }] : []),
        { label: m.Products, href: at("/products") },
        { label: m.Blog, href: at("/blog") },
        { label: m.ContactUs, href: at("/contact") },
      ],
    },
    {
      title: f.resources,
      links: [
        { label: f.howWeWork, href: at("/how-we-work") },
        { label: m.Pricing, href: at("/pricing") },
        { label: f.whatWeDontDo, href: at("/what-we-dont-do") },
        { label: f.dataSecurity, href: at("/data-security") },
      ],
    },
  ];
}
