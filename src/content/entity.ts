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
    tr: "Genixo Bilişim ve Teknoloji A.Ş. (Genixo), Ankara Bilkent Cyberpark merkezli bir yazılım ve Ar-Ge şirketidir; KOBİ'lere ve kurumlara dijital dönüşüm danışmanlığı, iş süreçleri dijitalleştirme ve yapay zekâ entegrasyonu (RAG chatbot, kurum içi (on-prem) büyük dil modelleri, konuşma tanıma ve seslendirme) hizmetleri sunar.",
    en: "Genixo Bilişim ve Teknoloji A.Ş. (Genixo) is a software and R&D company based in Bilkent Cyberpark, Ankara, Türkiye. It provides digital transformation consulting, business process digitalization and AI integration (RAG chatbots, on-premise large language models, speech-to-text and text-to-speech) for SMEs and organizations.",
  } satisfies Partial<Record<Locale, string>>,
  shortDefinition: {
    tr: "Ankara Bilkent Cyberpark'ta yazılım ve Ar-Ge şirketi. KOBİ'lere dijital dönüşüm danışmanlığı, süreç dijitalleştirme ve yapay zekâ entegrasyonu.",
    en: "Software and R&D company in Bilkent Cyberpark, Ankara. Digital transformation consulting, process digitalization and AI integration for SMEs.",
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
