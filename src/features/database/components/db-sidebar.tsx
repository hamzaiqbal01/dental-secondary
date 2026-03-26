import styles from "./database-page.module.css";

export function DbSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarCard}>
        <span className={styles.sidebarCardEmoji}>🎯</span>
        <div className={styles.sidebarCardTitle}>Need Application Help?</div>
        <p>
          Our admissions experts help craft compelling secondary essays, interview prep, and full application strategy.
        </p>
        <a href="#" className={styles.sidebarBtn}>
          View Application Services
        </a>
        <a href="#" className={`${styles.sidebarBtn} ${styles.sidebarBtnOutline}`}>
          Schedule a Free Call
        </a>
      </div>

      <div className={styles.sidebarCard}>
        <span className={styles.sidebarCardEmoji}>💡</span>
        <div className={styles.sidebarCardTitle}>Secondary Tips</div>
        <ul className={styles.tipList}>
          <li className={styles.tipItem}>
            <span className={styles.tipBullet} />
            Submit within 2 weeks of receiving your secondary for best consideration.
          </li>
          <li className={styles.tipItem}>
            <span className={styles.tipBullet} />
            Pre-write essays before your AADSAS app opens to save critical time.
          </li>
          <li className={styles.tipItem}>
            <span className={styles.tipBullet} />
            Tailor each essay to the specific school&apos;s mission statement.
          </li>
          <li className={styles.tipItem}>
            <span className={styles.tipBullet} />
            Track every deadline carefully — missing one costs you an interview.
          </li>
        </ul>
      </div>

      <div className={`${styles.sidebarCard} ${styles.sidebarCardHighlight}`}>
        <span className={styles.sidebarCardEmoji}>📬</span>
        <div className={styles.sidebarCardTitle}>Stay Updated</div>
        <p>Get notified when secondaries open or deadlines change.</p>
        <input type="email" placeholder="Your email address…" className={styles.nlInput} />
        <button className={styles.sidebarBtn}>Subscribe Free</button>
      </div>
    </aside>
  );
}
