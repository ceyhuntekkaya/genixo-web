import Link from "next/link";
import type { Locale } from "@/i18n/config";
import h from "../home/home.module.css";
import styles from "./page.module.css";

/** Copy may contain `[[TODO-NNN]]` placeholders (see docs/content-todos.md) and `[label](/path)` links. */
const TOKEN = /(\[\[TODO-\d{3}\]\]|\[[^\]]+\]\([^)]+\))/;

export function localHref(locale: Locale, href: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}

export function Text({ value, locale }: { value: string; locale: Locale }) {
  const parts = value.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const todo = part.match(/^\[\[(TODO-\d{3})\]\]$/);
        if (todo) {
          return (
            <mark key={i} className={styles.todo} title="docs/content-todos.md">
              {todo[1]}
            </mark>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const href = localHref(locale, link[2]);
          if (href.startsWith("http")) {
            return (
              <a key={i} href={href} className={styles.inline} target="_blank" rel="noopener noreferrer">
                {link[1]}
              </a>
            );
          }
          return /^(mailto:|tel:)/.test(href) ? (
            <a key={i} href={href} className={styles.inline}>
              {link[1]}
            </a>
          ) : (
            <Link key={i} href={href} className={styles.inline}>
              {link[1]}
            </Link>
          );
        }
        return part;
      })}
    </>
  );
}

/** Text for meta tags and JSON-LD: links keep their label, placeholders are dropped. */
export function plain(value: string): string {
  return value
    .replace(/\[\[TODO-\d{3}\]\]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,;:])/g, "$1")
    .trim();
}

export function hasTodo(value: string): boolean {
  return /\[\[TODO-\d{3}\]\]/.test(value);
}

export function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg className={h.arrow} viewBox="0 0 20 20" aria-hidden="true">
      {external ? (
        <path d="M6 14 14 6M7.5 6H14v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      ) : (
        <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
      )}
    </svg>
  );
}

export function domainOf(url = ""): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}
