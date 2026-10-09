import Link from "next/link";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import type { HomeCopy } from "@/i18n/page-types";
import { getAllPosts } from "@/lib/content";
import SectionList from "@/app/component/page/section-list";
import { CtaBand } from "@/app/component/page/page-view";
import { Arrow, localHref } from "@/app/component/page/text";
import OrderJourney from "./order-journey";
import styles from "./home.module.css";

interface HomeLandingProps {
  copy: HomeCopy;
  dict: Dictionary;
  locale: Locale;
}

export default function HomeLanding({ copy, dict, locale }: HomeLandingProps) {
  const { hero } = copy;
  const secondary = getAllPosts(locale, "case-study").length > 0 ? hero.secondaryWithCases : hero.secondary;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.kicker}>{hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>
            {hero.titleBefore}
            <span className={styles.thread}>{hero.titleMark}</span>
            {hero.titleAfter}
          </h1>
          <div className={styles.heroFoot}>
            <p className={styles.heroLead}>{hero.lead}</p>
            <div className={styles.actions}>
              <Link className={styles.btn} href={localHref(locale, hero.primary.href)}>
                {hero.primary.label}
                <Arrow />
              </Link>
              <Link className={styles.textLink} href={localHref(locale, secondary.href)}>
                {secondary.label}
              </Link>
            </div>
          </div>
          <OrderJourney journey={copy.journey} />
        </div>
      </section>

      <SectionList sections={copy.sections} locale={locale} dict={dict} />
      <CtaBand locale={locale} dict={dict} {...copy.cta} />
    </div>
  );
}
