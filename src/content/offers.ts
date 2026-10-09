/** The four entry points of the site. Names and summaries live in `common.json` → `offers`. */
export const OFFERS = [
  { key: "ai-automation", path: "/ai-automation" },
  { key: "custom-software", path: "/custom-software" },
  { key: "product-studio", path: "/product-studio" },
  { key: "ngsd", path: "/ngsd" },
] as const;

export type OfferKey = (typeof OFFERS)[number]["key"];

/** v1 solution slugs still referenced from older content frontmatter (`relatedServices`). */
const LEGACY: Record<string, OfferKey> = {
  "ai-integration": "ai-automation",
  "digital-transformation": "ai-automation",
  "business-process-digitalization": "custom-software",
  "smart-reporting-analytics": "custom-software",
  "system-improvement-modernization": "custom-software",
  "cost-optimization": "custom-software",
  "product-project-development": "product-studio",
};

export function offerKey(slug: string): OfferKey | undefined {
  if (OFFERS.some((offer) => offer.key === slug)) return slug as OfferKey;
  return LEGACY[slug];
}

export function offerPath(key: OfferKey): string {
  return OFFERS.find((offer) => offer.key === key)!.path;
}
