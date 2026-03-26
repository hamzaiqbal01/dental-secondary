import Link from "next/link";
import styles from "./database-page.module.css";

export function DbPageHero() {
  return (
    <section className={styles.pageHero}>
      <div className={styles.pageHeroBg} />
      <div className={styles.pageHeroOverlay} />
      <div className={styles.heroGlowDb} />

      <div className={styles.pageHeroContent}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCur}>Secondary Database</span>
        </div>

        <div className={styles.pageBadge}>
          <span>✦</span> Updated for 2024 Cycle
        </div>

        <h1 className={styles.pageHeroH1}>
          U.S. Dental School
          <br />
          <em>Secondary Database</em>
        </h1>

        <p className={styles.pageHeroSub}>
          Browse secondary prompts, deadlines, and requirements for all 66 accredited U.S. dental schools — organized by
          state, completely free.
        </p>

        <div className={styles.heroStatRow}>
          <div>
            <div className={styles.hStatNum}>66</div>
            <div className={styles.hStatLbl}>Schools Listed</div>
          </div>
          <div>
            <div className={styles.hStatNum}>28</div>
            <div className={styles.hStatLbl}>States Covered</div>
          </div>
          <div>
            <div className={styles.hStatNum}>100%</div>
            <div className={styles.hStatLbl}>Free Access</div>
          </div>
        </div>
      </div>
    </section>
  );
}
