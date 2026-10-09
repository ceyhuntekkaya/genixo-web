"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import h from "@/app/component/home/home.module.css";
import s from "@/app/component/page/page.module.css";

const copy: Record<Locale, { title: string; body: string; links: Array<[string, string]> }> = {
  tr: {
    title: "Sayfa bulunamadı",
    body: "Aradığınız adres yayında değil. Şu sayfalar yardımcı olabilir:",
    links: [["Ana sayfa", ""], ["Hizmetler", "/services"], ["Nasıl çalışıyoruz", "/how-we-work"], ["İletişim", "/contact"]],
  },
  en: {
    title: "Page not found",
    body: "This address is not published. These pages may help:",
    links: [["Home", ""], ["Services", "/services"], ["How we work", "/how-we-work"], ["Contact", "/contact"]],
  },
};

export default function LocaleNotFound() {
  const pathname = usePathname() || "/tr";
  const first = pathname.split("/").filter(Boolean)[0] || "tr";
  const locale = (locales as readonly string[]).includes(first) ? (first as Locale) : "tr";
  const text = copy[locale];

  return (
    <div className={h.page}>
      <section className={s.hero}>
        <div className={h.shell}>
          <h1 className={s.heroTitle}>{text.title}</h1>
          <p className={h.lead}>{text.body}</p>
          <ul className={s.links}>
            {text.links.map(([label, path]) => (
              <li key={path}>
                <Link className={h.textLink} href={`/${locale}${path}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
