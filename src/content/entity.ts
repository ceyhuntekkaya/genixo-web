import type { Locale } from "@/i18n/config";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://genixo.ai";

/**
 * Doğrulanmamış alanlar (kuruluş tarihi, posta kodu, kurucu LinkedIn,
 * The Manifest / Clutch / Cyberpark firma sayfası / YouTube) bilinçli olarak yok.
 * Schema üreticisi boş alan basmaz.
 */
export const entity = {
  legalName: "Genixo Bilişim ve Teknoloji A.Ş.",
  brandName: "Genixo",
  phone: "+90 312 265 04 56",
  email: "hello@genixo.ai",
  address: {
    streetAddress: "Bilkent Cyberpark, Cyberplaza H Blok No:8",
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    addressCountry: "TR",
  },
  geo: { latitude: 39.8819, longitude: 32.7551 },
  logoPath: "/images/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/genixoglobal/",
    "https://www.instagram.com/genixo.global/",
  ],
  founder: {
    id: "ceyhun-tekkaya",
    name: "Ceyhun Tekkaya",
    jobTitle: {
      tr: "Kurucu ve CEO",
      en: "Founder & CEO",
    },
  },
  memberships: [
    { name: "Bilkent Cyberpark", url: "https://www.cyberpark.com.tr/" },
    { name: "Türkiye Bilişim Derneği", url: "https://www.tbd.org.tr/" },
    {
      name: "ALTE – Association of Language Testers in Europe",
      url: "https://www.alte.org/",
    },
  ],
  definition: {
    tr: "Genixo Bilişim ve Teknoloji A.Ş. (Genixo), Ankara Bilkent Cyberpark merkezli bir yazılım ve yapay zekâ mühendislik şirketidir. KOBİ'lere ve kurumlara dış yazılım departmanı olarak çalışır: insan onaylı yapay zekâ süreç otomasyonu, özel yazılım, ürün geliştirme ve sürekli yazılım ekibi modeli NGSD.",
    en: "Genixo Bilişim ve Teknoloji A.Ş. (Genixo) is a software and AI engineering company based in Bilkent Cyberpark, Ankara, Türkiye. It works as an external software department for SMEs and organizations, covering AI process automation with human approval, custom software, product development and NGSD, an ongoing software team model.",
  } satisfies Partial<Record<Locale, string>>,
  shortDefinition: {
    tr: "Yazılım departmanınız, yapay zekâ dahil. Bilkent Cyberpark, Ankara'da yazılım ve yapay zekâ ekibi: AI otomasyonu, özel yazılım, ürün stüdyosu ve NGSD.",
    en: "Your software department, AI included. A software and AI team at Bilkent Cyberpark, Ankara: AI automation, custom software, product studio and NGSD.",
  } satisfies Partial<Record<Locale, string>>,
} as const;

export function definitionFor(locale: Locale): string {
  return locale === "tr" ? entity.definition.tr : entity.definition.en;
}

export function shortDefinitionFor(locale: Locale): string {
  return locale === "tr" ? entity.shortDefinition.tr : entity.shortDefinition.en;
}

export function jobTitleFor(locale: Locale): string {
  return locale === "tr" ? entity.founder.jobTitle.tr : entity.founder.jobTitle.en;
}

/** İletişim sayfası, footer ve schema aynı metni kullanır. */
export function formatAddress(): string {
  const { streetAddress, addressLocality, addressRegion, addressCountry } = entity.address;
  const country = addressCountry === "TR" ? "Türkiye" : addressCountry;
  return `${streetAddress}, ${addressLocality}, ${addressRegion}, ${country}`;
}

export function telHref(): string {
  return `tel:${entity.phone.replace(/\s/g, "")}`;
}
