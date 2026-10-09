"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "@/app/assets/logo.png";
import { locales, localeNames, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { EmailLink, PhoneLink } from "@/app/component/contact-links";
import type { NavItem } from "./nav";
import styles from "./site.module.css";

const HIDE_AFTER_PX = 240;

interface SiteHeaderProps {
  locale: Locale;
  nav: NavItem[];
  chrome: NonNullable<Dictionary["chrome"]>;
}

function localizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || `/${locale}`;
}

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function LanguageMenu({ locale, pathname, label }: { locale: Locale; pathname: string; label: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.lang} ref={root}>
      <button
        type="button"
        className={styles.langButton}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${label}: ${localeNames[locale]}`}
        onClick={() => setOpen((v) => !v)}
      >
        {locale.toUpperCase()}
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <path d="M3 4.5 6 7.5l3-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>
      {open && (
        <ul className={styles.langList}>
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={localizedPath(pathname, l)}
                hrefLang={l}
                aria-current={l === locale ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{localeNames[l]}</span>
                <span className={styles.langCode}>{l.toUpperCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function SiteHeader({ locale, nav, chrome }: SiteHeaderProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [panelsSuppressed, setPanelsSuppressed] = useState(false);
  const lastY = useRef(0);
  const lastPath = useRef(pathname);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 4);
      setHidden(y > HIDE_AFTER_PX && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A link inside an open panel keeps hover/focus after client navigation; close it.
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    setDrawerOpen(false);
    setPanelsSuppressed(true);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  const headerClass = [
    styles.header,
    scrolled ? styles.isScrolled : "",
    hidden && !drawerOpen ? styles.isHidden : "",
    drawerOpen ? styles.isOpen : "",
  ].join(" ");

  return (
    <>
      <a className={styles.skip} href="#main">
        {chrome.skip}
      </a>
      <header className={headerClass}>
        <div className={styles.bar}>
          <Link className={styles.logo} href={`/${locale}`} aria-label="Genixo">
            <Image src={logo} alt="Genixo" priority sizes="132px" />
          </Link>

          <nav
            className={`${styles.nav} ${panelsSuppressed ? styles.panelsOff : ""}`}
            aria-label={chrome.primaryNav}
            onPointerLeave={() => setPanelsSuppressed(false)}
            onKeyDown={() => setPanelsSuppressed(false)}
          >
            <ul className={styles.navList}>
              {nav.map((item) => (
                <li key={item.href} className={item.children?.length ? styles.hasPanel : undefined}>
                  <Link
                    className={styles.navLink}
                    href={item.href}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <div className={styles.panel}>
                      <div className={styles.panelInner}>
                        <div className={styles.panelHead}>
                          <p className={styles.panelTitle}>{item.label}</p>
                          <Link className={styles.panelAll} href={item.href}>
                            {chrome.viewAll}
                          </Link>
                        </div>
                        <ul className={styles.panelList}>
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link className={styles.panelLink} href={child.href}>
                                <span className={styles.panelName}>{child.label}</span>
                                {child.summary && <span className={styles.panelSummary}>{child.summary}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <LanguageMenu locale={locale} pathname={pathname} label={chrome.language} />
            <Link className={styles.cta} href={`/${locale}/contact`}>
              {chrome.cta}
            </Link>
            <button
              type="button"
              className={styles.burger}
              aria-expanded={drawerOpen}
              aria-controls="site-drawer"
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <span>{drawerOpen ? chrome.menuClose : chrome.menuOpen}</span>
              <i aria-hidden="true" />
            </button>
          </div>
        </div>

        <div id="site-drawer" className={styles.drawer} inert={!drawerOpen}>
          <nav className={styles.drawerInner} aria-label={chrome.primaryNav}>
            <ul className={styles.drawerList}>
              {nav.map((item) =>
                item.children?.length ? (
                  <li key={item.href}>
                    <details className={styles.drawerGroup}>
                      <summary>{item.label}</summary>
                      <ul>
                        <li>
                          <Link href={item.href}>{chrome.viewAll}</Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      className={styles.drawerLink}
                      href={item.href}
                      aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div className={styles.drawerFoot}>
              <Link className={styles.drawerCta} href={`/${locale}/contact`}>
                {chrome.cta}
              </Link>
              <div className={styles.drawerContact}>
                <PhoneLink />
                <EmailLink />
              </div>
              <ul className={styles.drawerLangs} aria-label={chrome.language}>
                {locales.map((l) => (
                  <li key={l}>
                    <Link
                      href={localizedPath(pathname, l)}
                      hrefLang={l}
                      lang={l}
                      aria-current={l === locale ? "true" : undefined}
                    >
                      {l.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
