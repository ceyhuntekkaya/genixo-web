import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { locales, type Locale } from "@/i18n/config";

export type ContentType = "post" | "guide" | "case-study" | "scenario";

export type ScenarioCard = { today: string; withAi: string; measure: string };

export type FaqItem = { q: string; a: string };

export type SourceItem = { title: string; url: string; accessed?: string };

export type ContentDoc = {
  type: ContentType;
  locale: Locale;
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  translationKey: string;
  author: string;
  reviewedBy?: string;
  datePublished: string;
  dateModified: string;
  summary: string;
  relatedServices: string[];
  faq: FaqItem[];
  sources: SourceItem[];
  image?: string;
  draft: boolean;
  body: string;
  client?: string;
  industry?: string;
  companySize?: string;
  duration?: string;
  stack?: string[];
  permission?: string;
  order: number;
  card?: ScenarioCard;
  relatedCases: string[];
  cta?: { title: string; lead: string };
};

export type AuthorDoc = {
  slug: string;
  locale: Locale;
  name: string;
  jobTitle: string;
  summary: string;
  linkedin?: string;
  image?: string;
  body: string;
};

const ROOT = path.join(process.cwd(), "content");

const DIRS: Record<ContentType, string> = {
  post: "blog",
  guide: "guides",
  "case-study": "case-studies",
  scenario: "scenarios",
};

function fail(message: string): never {
  throw new Error(`content: ${message}`);
}

function asString(data: Record<string, unknown>, key: string, file: string): string {
  const value = data[key];
  if (typeof value !== "string" || !value.trim()) fail(`${file} missing ${key}`);
  return value.trim();
}

function loadDoc(filePath: string, type: ContentType, locale: Locale, slug: string): ContentDoc {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;

  const title = asString(data, "title", filePath);
  const description = asString(data, "description", filePath);
  if (description.length < 120 || description.length > 155) {
    fail(`${filePath} description length ${description.length} (need 120–155)`);
  }
  if (data.type !== type) fail(`${filePath} type must be "${type}"`);

  const author = asString(data, "author", filePath);
  const authorFile = path.join(ROOT, "authors", `${author}.${locale}.md`);
  if (!fs.existsSync(authorFile)) fail(`${filePath} author file missing (${author}.${locale}.md)`);

  const sources = Array.isArray(data.sources) ? (data.sources as SourceItem[]) : [];
  if ((type === "post" || type === "guide") && sources.length === 0) {
    fail(`${filePath} sources empty`);
  }
  for (const source of sources) {
    if (!source?.title || !source?.url) fail(`${filePath} source missing title or url`);
  }

  const faq = Array.isArray(data.faq) ? (data.faq as FaqItem[]) : [];
  for (const item of faq) {
    if (!item?.q || !item?.a) fail(`${filePath} faq item missing q or a`);
  }

  return {
    type,
    locale,
    slug,
    title,
    metaTitle: typeof data.metaTitle === "string" && data.metaTitle.trim() ? data.metaTitle.trim() : title,
    description,
    translationKey: asString(data, "translationKey", filePath),
    author,
    reviewedBy: typeof data.reviewedBy === "string" ? data.reviewedBy : undefined,
    datePublished: asString(data, "datePublished", filePath),
    dateModified: asString(data, "dateModified", filePath),
    summary: asString(data, "summary", filePath),
    relatedServices: Array.isArray(data.relatedServices) ? (data.relatedServices as string[]) : [],
    faq,
    sources,
    image: typeof data.image === "string" ? data.image : undefined,
    draft: data.draft === true,
    body: parsed.content.trim(),
    client: typeof data.client === "string" ? data.client : undefined,
    industry: typeof data.industry === "string" ? data.industry : undefined,
    companySize: typeof data.companySize === "string" ? data.companySize : undefined,
    duration: typeof data.duration === "string" ? data.duration : undefined,
    stack: Array.isArray(data.stack) ? (data.stack as string[]) : undefined,
    permission: typeof data.permission === "string" ? data.permission : undefined,
    order: typeof data.order === "number" ? data.order : 0,
    card: readCard(data.card, type, filePath),
    relatedCases: Array.isArray(data.relatedCases) ? (data.relatedCases as string[]) : [],
    cta: readCta(data.cta),
  };
}

function readCta(value: unknown): ContentDoc["cta"] {
  const cta = value as Partial<{ title: string; lead: string }> | undefined;
  return cta?.title && cta?.lead ? { title: cta.title, lead: cta.lead } : undefined;
}

function readCard(value: unknown, type: ContentType, file: string): ScenarioCard | undefined {
  if (type !== "scenario") return undefined;
  const card = value as Partial<ScenarioCard> | undefined;
  if (!card?.today || !card?.withAi || !card?.measure) fail(`${file} scenario card needs today, withAi, measure`);
  return card as ScenarioCard;
}

let cache: ContentDoc[] | null = null;

export function loadAllContent(): ContentDoc[] {
  if (cache) return cache;
  const docs: ContentDoc[] = [];

  for (const type of Object.keys(DIRS) as ContentType[]) {
    for (const locale of locales) {
      const dir = path.join(ROOT, DIRS[type], locale);
      if (!fs.existsSync(dir)) continue;
      for (const file of fs.readdirSync(dir)) {
        if (!file.endsWith(".md")) continue;
        const slug = file.slice(0, -3);
        docs.push(loadDoc(path.join(dir, file), type, locale, slug));
      }
    }
  }

  const seen = new Set<string>();
  for (const doc of docs) {
    const key = `${doc.locale}:${doc.type}:${doc.translationKey}`;
    if (seen.has(key)) fail(`duplicate translationKey "${doc.translationKey}" in ${doc.locale} (${doc.type})`);
    seen.add(key);
  }

  cache = docs;
  return docs;
}

function isPublic(doc: ContentDoc): boolean {
  return !doc.draft;
}

export function contentPath(doc: Pick<ContentDoc, "type" | "slug">): string {
  if (doc.type === "post") return `/blog/${doc.slug}`;
  if (doc.type === "guide") return `/guides/${doc.slug}`;
  if (doc.type === "scenario") return `/ai-automation/${doc.slug}`;
  return `/case-studies/${doc.slug}`;
}

export function getAllPosts(locale?: Locale, type?: ContentType): ContentDoc[] {
  return loadAllContent()
    .filter((doc) => isPublic(doc))
    .filter((doc) => (locale ? doc.locale === locale : true))
    .filter((doc) => (type ? doc.type === type : true))
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

/** A locale with no scenario files falls back to English. Those pages stay noindex. */
export function getScenarios(locale: Locale): ContentDoc[] {
  const own = getAllPosts(locale, "scenario");
  const docs = own.length ? own : getAllPosts("en", "scenario");
  return [...docs].sort((a, b) => a.order - b.order);
}

export function getScenario(locale: Locale, slug: string): ContentDoc | null {
  return getScenarios(locale).find((doc) => doc.slug === slug) ?? null;
}

export function getPost(locale: Locale, slug: string, type?: ContentType): ContentDoc | null {
  const doc = loadAllContent().find(
    (item) => item.locale === locale && item.slug === slug && (type ? item.type === type : true) && isPublic(item),
  );
  return doc ?? null;
}

export function getTranslations(translationKey: string, type: ContentType): Partial<Record<Locale, string>> {
  const map: Partial<Record<Locale, string>> = {};
  for (const doc of getAllPosts(undefined, type)) {
    if (doc.translationKey === translationKey) {
      map[doc.locale] = contentPath(doc);
    }
  }
  return map;
}

export function getContentForService(locale: Locale, serviceSlug: string): ContentDoc[] {
  return getAllPosts(locale).filter((doc) => doc.relatedServices.includes(serviceSlug));
}

function loadAuthor(filePath: string, locale: Locale, slug: string): AuthorDoc {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;
  return {
    slug,
    locale,
    name: asString(data, "name", filePath),
    jobTitle: asString(data, "jobTitle", filePath),
    summary: asString(data, "summary", filePath),
    linkedin: typeof data.linkedin === "string" ? data.linkedin : undefined,
    image: typeof data.image === "string" ? data.image : undefined,
    body: parsed.content.trim(),
  };
}

export function getAuthor(locale: Locale, slug: string): AuthorDoc | null {
  const filePath = path.join(ROOT, "authors", `${slug}.${locale}.md`);
  if (!fs.existsSync(filePath)) return null;
  return loadAuthor(filePath, locale, slug);
}

export function getAllAuthors(locale: Locale): AuthorDoc[] {
  const dir = path.join(ROOT, "authors");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(`.${locale}.md`))
    .map((file) => {
      const slug = file.slice(0, -1 * `.${locale}.md`.length);
      return loadAuthor(path.join(dir, file), locale, slug);
    });
}
