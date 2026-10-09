import Image from "next/image";
import Link from "next/link";
import whiteLogo from "@/app/assets/Genixo_Logo_White.png";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { EmailLink, PhoneLink } from "@/app/component/contact-links";
import { entity, formatAddress, jobTitleFor, shortDefinitionFor } from "@/content/entity";
import type { FooterGroup } from "./nav";
import styles from "./site.module.css";

interface SiteFooterProps {
  locale: Locale;
  dict: Dictionary;
  groups: FooterGroup[];
}

function socialName(url: string) {
  if (url.includes("linkedin")) return "LinkedIn";
  if (url.includes("instagram")) return "Instagram";
  return new URL(url).hostname;
}

export default function SiteFooter({ locale, dict, groups }: SiteFooterProps) {
  const { footer, chrome } = dict;
  const memberships = [
    { url: entity.memberships[0].url, ...footer.cyberpark },
    { url: entity.memberships[1].url, ...footer.tbd },
    { url: entity.memberships[2].url, ...footer.alte },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footShell}>
        <div className={styles.footGrid}>
          <div className={styles.footBrand}>
            <Link href={`/${locale}`} aria-label="Genixo">
              <Image src={whiteLogo} alt="Genixo" sizes="132px" className={styles.footLogo} />
            </Link>
            <p>{shortDefinitionFor(locale)}</p>
          </div>

          <nav className={styles.footCols} aria-label={chrome.pages}>
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className={styles.footTitle}>{group.title}</h2>
                <ul className={styles.footList}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className={styles.footTitle}>{footer.contact}</h2>
              <ul className={styles.footList}>
                <li>
                  <PhoneLink />
                </li>
                <li>
                  <EmailLink />
                </li>
                <li>
                  <address className={styles.footAddress}>{formatAddress()}</address>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.footMembers}>
          <h2 className={styles.footTitle}>{footer.memberships}</h2>
          <ul>
            {memberships.map((m) => (
              <li key={m.url}>
                <a href={m.url} target="_blank" rel="noopener noreferrer">
                  <span>{m.title}</span>
                  <span className={styles.footMemberNote}>{m.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footBase}>
          <p>
            © {new Date().getFullYear()} {entity.legalName}
            <span className={styles.footSep} aria-hidden="true" />
            {entity.founder.name} · {jobTitleFor(locale)}
          </p>
          <ul className={styles.footSocial}>
            {entity.sameAs.map((href) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {socialName(href)}
                </a>
              </li>
            ))}
            <li>
              <a href="#top">{chrome.backToTop}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
