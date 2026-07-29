import Link from "next/link";
import { schools } from "../data/schools";
import styles from "./database-page.module.css";

// Groups schools by state for the initial server-rendered HTML.
// This is the Suspense fallback — ensures all 66 school links are present
// in the static HTML that Googlebot indexes, before client JS loads.
export function DbStaticFallback() {
  const grouped: Record<string, typeof schools> = {};
  for (const school of schools) {
    if (!grouped[school.state]) grouped[school.state] = [];
    grouped[school.state].push(school);
  }

  return (
    <div className={styles.dbLayout}>
      <div>
        {Object.keys(grouped)
          .sort()
          .map((state) => (
            <div key={state} className={styles.stateSection}>
              <div className={styles.stateHeader}>
                <span className={styles.statePill}>{grouped[state][0].short}</span>
                <span className={styles.stateNameTxt}>{state}</span>
                <span className={styles.stateCountBadge}>
                  {grouped[state].length} school{grouped[state].length > 1 ? "s" : ""}
                </span>
              </div>
              <div className={styles.schoolsGrid}>
                {grouped[state].map((school) => (
                  <Link
                    key={school.abbr}
                    href={`/database/${school.slug}`}
                    className={styles.schoolCard}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className={styles.cardTopRow}>
                      <span className={styles.abbrTag}>{school.abbr}</span>
                    </div>
                    <div className={styles.schoolCardName}>{school.name}</div>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardMetaItem}>📍 {school.state}</span>
                      <span className={styles.cardMetaItem}>📋 Secondary Available</span>
                    </div>
                    <div className={styles.cardActions}>
                      <span className={styles.btnView}>View Secondary →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
