"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const copy: Record<Locale, { title: string; body: string; home: string; solutions: string; contact: string }> = {
  tr: { title: "Sayfa bulunamadı", body: "Aradığınız adres yayında değil.", home: "Ana sayfa", solutions: "Çözümler", contact: "İletişim" },
  en: { title: "Page not found", body: "This address is not published.", home: "Home", solutions: "Solutions", contact: "Contact" },
  de: { title: "Seite nicht gefunden", body: "Diese Adresse ist nicht veröffentlicht.", home: "Startseite", solutions: "Lösungen", contact: "Kontakt" },
  fr: { title: "Page introuvable", body: "Cette adresse n'est pas publiée.", home: "Accueil", solutions: "Solutions", contact: "Contact" },
  ru: { title: "Страница не найдена", body: "Этот адрес не опубликован.", home: "Главная", solutions: "Решения", contact: "Контакты" },
};

export default function LocaleNotFound() {
  const pathname = usePathname() || "/tr";
  const first = pathname.split("/").filter(Boolean)[0] || "tr";
  const locale = (locales as readonly string[]).includes(first) ? (first as Locale) : "tr";
  const text = copy[locale];

  return (
    <div className="section section-padding">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1>{text.title}</h1>
        <p>{text.body}</p>
        <p>
          <Link href={`/${locale}`}>{text.home}</Link>
          {" · "}
          <Link href={`/${locale}/solutions`}>{text.solutions}</Link>
          {" · "}
          <Link href={`/${locale}/contact`}>{text.contact}</Link>
        </p>
      </div>
    </div>
  );
}
