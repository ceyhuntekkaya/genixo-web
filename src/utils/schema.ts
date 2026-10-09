import type { Locale } from "@/i18n/config";
import {
  SITE_URL,
  definitionFor,
  entity,
  jobTitleFor,
} from "@/content/entity";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PERSON_ID = `${SITE_URL}/#person-${entity.founder.id}`;

const knowsAbout: Record<"tr" | "en", string[]> = {
  tr: [
    "Yapay zekâ süreç otomasyonu",
    "Özel yazılım geliştirme",
    "ERP entegrasyonu",
    "Mobil uygulama geliştirme",
    "RAG",
    "Kurum içi (on-prem) büyük dil modelleri",
    "Konuşma tanıma (STT)",
    "Seslendirme (TTS)",
    "KVKK uyumlu yazılım mimarisi",
  ],
  en: [
    "AI process automation",
    "Custom software development",
    "ERP integration",
    "Mobile app development",
    "Retrieval-augmented generation",
    "On-premise large language models",
    "Speech-to-text",
    "Text-to-speech",
    "Data protection by design",
  ],
};

function authorLocale(locale: Locale): "tr" | "en" {
  return locale === "tr" ? "tr" : "en";
}

export function siteGraph(locale: Locale): Record<string, unknown> {
  const lang = authorLocale(locale);
  const address: Record<string, unknown> = {
    "@type": "PostalAddress",
    streetAddress: entity.address.streetAddress,
    addressLocality: entity.address.addressLocality,
    addressRegion: entity.address.addressRegion,
    addressCountry: entity.address.addressCountry,
  };

  const person: Record<string, unknown> = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: entity.founder.name,
    jobTitle: jobTitleFor(locale),
    worksFor: { "@id": ORG_ID },
    url: `${SITE_URL}/${authorLocale(locale)}/team/${entity.founder.id}`,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: entity.brandName,
        legalName: entity.legalName,
        alternateName: ["Genixo Bilişim ve Teknoloji", "Genixo Bilişim"],
        description: definitionFor(locale),
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}${entity.logoPath}`,
        },
        image: `${SITE_URL}/${lang}/opengraph-image`,
        telephone: entity.phone,
        email: entity.email,
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: entity.geo.latitude,
          longitude: entity.geo.longitude,
        },
        areaServed: [{ "@type": "Country", name: "Türkiye" }],
        founder: { "@id": PERSON_ID },
        memberOf: entity.memberships.map((item) => ({
          "@type": "Organization",
          name: item.name,
          url: item.url,
        })),
        knowsAbout: knowsAbout[lang],
        sameAs: [...entity.sameAs],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: entity.phone,
          email: entity.email,
          contactType: "sales",
          areaServed: "TR",
          availableLanguage: ["tr", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: entity.brandName,
        publisher: { "@id": ORG_ID },
        inLanguage: ["tr", "en"],
      },
      person,
    ],
  };
}

export function breadcrumbList(items: Array<{ name: string; url: string }>): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webPage(options: {
  url: string;
  name: string;
  description: string;
  locale: Locale;
  type?: string;
  mainEntity?: string;
}): Record<string, unknown> {
  return {
    "@type": options.type || "WebPage",
    "@id": `${options.url}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: options.locale,
    ...(options.mainEntity ? { mainEntity: { "@id": options.mainEntity } } : {}),
  };
}

export function serviceNode(options: {
  url: string;
  name: string;
  description: string;
  locale: Locale;
}): Record<string, unknown> {
  return {
    "@type": "Service",
    "@id": `${options.url}#service`,
    name: options.name,
    description: options.description,
    url: options.url,
    serviceType: options.name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Türkiye" },
    inLanguage: options.locale,
  };
}

export function faqPage(url: string, faq: Array<{ q: string; a: string }>): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function softwareNode(options: {
  url: string;
  name: string;
  description: string;
  locale: Locale;
  applicationCategory: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@type": "SoftwareApplication",
    "@id": `${options.url}#software`,
    name: options.name,
    description: options.description,
    url: options.url,
    applicationCategory: options.applicationCategory,
    publisher: { "@id": ORG_ID },
    inLanguage: options.locale,
    ...(options.image ? { image: options.image } : {}),
  };
}

export function blogPosting(options: {
  url: string;
  headline: string;
  description: string;
  locale: Locale;
  datePublished: string;
  dateModified: string;
  authorId: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@type": "BlogPosting",
    "@id": `${options.url}#article`,
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    inLanguage: options.locale,
    mainEntityOfPage: options.url,
    author: { "@id": `${SITE_URL}/#person-${options.authorId}` },
    publisher: { "@id": ORG_ID },
    ...(options.image ? { image: options.image.startsWith("http") ? options.image : `${SITE_URL}${options.image}` } : {}),
  };
}

export function articleNode(options: {
  url: string;
  headline: string;
  description: string;
  locale: Locale;
  datePublished: string;
  dateModified: string;
  authorId: string;
  aboutServiceUrl?: string;
}): Record<string, unknown> {
  return {
    "@type": "Article",
    "@id": `${options.url}#article`,
    headline: options.headline,
    description: options.description,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    inLanguage: options.locale,
    mainEntityOfPage: options.url,
    author: { "@id": `${SITE_URL}/#person-${options.authorId}` },
    publisher: { "@id": ORG_ID },
    ...(options.aboutServiceUrl ? { about: { "@id": `${options.aboutServiceUrl}#service` } } : {}),
  };
}

export function collectionPage(options: {
  url: string;
  name: string;
  description: string;
  locale: Locale;
  items: Array<{ name: string; url: string }>;
}): Record<string, unknown> {
  return {
    "@type": "CollectionPage",
    "@id": `${options.url}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: options.locale,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: options.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function profilePage(options: {
  url: string;
  name: string;
  description: string;
  locale: Locale;
  personId: string;
}): Record<string, unknown> {
  return {
    "@type": "ProfilePage",
    "@id": `${options.url}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: options.locale,
    mainEntity: { "@id": `${SITE_URL}/#person-${options.personId}` },
  };
}

export const organizationId = ORG_ID;
