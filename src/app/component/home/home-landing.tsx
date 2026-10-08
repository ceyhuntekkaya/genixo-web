import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { companyInfo } from "@/utils/company";
import HeroBoard from "./hero-board";
import { bodyFont, displayFont, monoFont } from "./fonts";
import styles from "./home.module.css";

interface HomeLandingProps {
  dict: Dictionary;
  locale: Locale;
}

const SHOWCASE_PRODUCTS = ["StudyScoreAI", "Egitimiste", "ILC"] as const;

function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function blogSlug(key: string, locale: Locale) {
  if (key !== "ai-not-just-technology") return key;
  return locale === "tr"
    ? "yapay-zeka-sadece-bir-teknoloji-degil-yeni-bir-calisma-kulturu"
    : "ai-not-just-technology";
}

export default function HomeLanding({ dict, locale }: HomeLandingProps) {
  const t = dict.landing;
  if (!t) return null;

  const services = (dict.services ?? [])
    .filter((s) => s.active !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const products = SHOWCASE_PRODUCTS.map((key) => ({
    key,
    ...(dict.products[key] as Dictionary["products"]["ILC"] & { logo?: string }),
  })).filter((p) => p.active !== false && p.webLink);

  const posts = Object.entries(dict.blogs ?? {})
    .filter(([, post]) => post && post.active !== false)
    .slice(0, 2);

  const traits = [
    { title: dict.ngsd.remote.title, text: t.ngsd.remote },
    { title: dict.ngsd.dynamic.title, text: t.ngsd.dynamic },
    { title: dict.ngsd.global.title, text: t.ngsd.global },
  ];

  return (
    <div className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} ${styles.page}`}>
      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
            <h1 className={styles.heroTitle}>
              {t.hero.titleBefore}
              <span className={styles.mark}>{t.hero.titleMark}</span>
              {t.hero.titleAfter}
            </h1>
            <p className={styles.heroLead}>{t.hero.lead}</p>
            <div className={styles.actions}>
              <Link className={styles.btnPrimary} href={`/${locale}/contact`}>
                {t.hero.primary}
                <Arrow />
              </Link>
              <Link className={styles.btnGhost} href={`/${locale}/solutions`}>
                {t.hero.secondary}
              </Link>
            </div>
          </div>
          <HeroBoard board={t.board} />
        </div>
      </section>

      <section className={`${styles.band} ${styles.bandWhite}`}>
        <div className={styles.shell}>
          <header className={styles.sectionHead}>
            <p className={styles.eyebrow}>{t.problems.eyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.problems.title}</h2>
          </header>
          <div className={styles.compare}>
            <div className={styles.compareHead} aria-hidden="true">
              <span className={styles.colLabel}>
                <i className={styles.dotMuted} />
                {t.board.before}
              </span>
              <span className={styles.colLabel}>
                <i className={styles.dotBrand} />
                {t.board.after}
              </span>
            </div>
            {dict.whyDigitalTransformation.items.map((item) => (
              <article key={item.title} className={styles.compareRow}>
                <div className={styles.compareBefore}>
                  <span className={styles.colLabelInline}>{t.board.before}</span>
                  <h3 className={styles.compareTitle}>{item.title}</h3>
                  <p className={styles.compareText}>{item.description}</p>
                </div>
                <div className={styles.compareAfter}>
                  <span className={styles.colLabelInline}>{t.board.after}</span>
                  <p className={styles.compareSolution}>{item.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.band}>
        <div className={styles.shell}>
          <header className={`${styles.sectionHead} ${styles.sectionHeadSplit}`}>
            <div>
              <p className={styles.eyebrow}>{t.solutions.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{t.solutions.title}</h2>
            </div>
            <Link className={styles.textLink} href={`/${locale}/solutions`}>
              {t.solutions.all}
              <Arrow />
            </Link>
          </header>
          <ul className={styles.serviceList}>
            {services.map((service) => (
              <li key={service.slug}>
                <Link className={styles.serviceRow} href={`/${locale}/solutions/${service.slug}`}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.serviceSummary}>{service.summary}</span>
                  <span className={styles.serviceGo}>
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.band} ${styles.bandNavy}`}>
        <div className={styles.shell}>
          <header className={styles.sectionHead}>
            <p className={styles.eyebrow}>{t.process.eyebrow}</p>
            <h2 className={styles.sectionTitle}>{t.process.title}</h2>
          </header>
          <ol className={styles.steps}>
            {t.process.steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepIndex}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {products.length > 0 && (
        <section className={`${styles.band} ${styles.bandWhite}`}>
          <div className={styles.shell}>
            <header className={`${styles.sectionHead} ${styles.sectionHeadSplit}`}>
              <div>
                <p className={styles.eyebrow}>{t.products.eyebrow}</p>
                <h2 className={styles.sectionTitle}>{t.products.title}</h2>
              </div>
              <p className={styles.sectionLead}>{t.products.lead}</p>
            </header>
            <div className={styles.productGrid}>
              {products.map((product) => (
                <a
                  key={product.key}
                  className={styles.productCard}
                  href={product.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.logo && (
                    <span className={styles.productLogo}>
                      <Image src={product.logo} alt="" fill sizes="160px" style={{ objectFit: "contain", objectPosition: "left center" }} />
                    </span>
                  )}
                  <span className={styles.productName}>{product.name}</span>
                  <span className={styles.productSummary}>{product.summary}</span>
                  <span className={styles.productVisit}>
                    {t.products.visit}
                    <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.band}>
        <div className={styles.shell}>
          <div className={styles.ngsd}>
            <div className={styles.ngsdCopy}>
              <p className={styles.eyebrow}>{t.ngsd.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{t.ngsd.title}</h2>
              <p className={styles.sectionLead}>{t.ngsd.lead}</p>
              <Link className={styles.btnPrimary} href={`/${locale}/ngsd`}>
                {t.ngsd.cta}
                <Arrow />
              </Link>
            </div>
            <dl className={styles.traits}>
              {traits.map((trait) => (
                <div key={trait.title} className={styles.trait}>
                  <dt className={styles.traitTitle}>{trait.title}</dt>
                  <dd className={styles.traitText}>{trait.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className={`${styles.band} ${styles.bandWhite} ${styles.bandTight}`}>
          <div className={styles.shell}>
            <header className={styles.sectionHead}>
              <p className={styles.eyebrow}>{t.reading.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{t.reading.title}</h2>
            </header>
            <ul className={styles.posts}>
              {posts.map(([key, post]) => (
                <li key={key}>
                  <Link className={styles.post} href={`/${locale}/blog/${blogSlug(key, locale)}`}>
                    <span className={styles.postTitle}>{post.title}</span>
                    <span className={styles.postExcerpt}>{post.excerpt}</span>
                    <span className={styles.textLink}>
                      {t.reading.read}
                      <Arrow />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className={`${styles.band} ${styles.bandNavy} ${styles.contact}`}>
        <div className={`${styles.shell} ${styles.contactGrid}`}>
          <div>
            <h2 className={styles.contactTitle}>{t.contact.title}</h2>
            <p className={styles.contactLead}>{t.contact.lead}</p>
          </div>
          <div className={styles.contactActions}>
            <Link className={styles.btnPrimary} href={`/${locale}/contact`}>
              {t.contact.primary}
              <Arrow />
            </Link>
            <p className={styles.contactDirect}>{t.contact.direct}</p>
            <a className={styles.contactLine} href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
              {companyInfo.phone}
            </a>
            <a className={styles.contactLine} href={`mailto:${companyInfo.email}`}>
              {companyInfo.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
