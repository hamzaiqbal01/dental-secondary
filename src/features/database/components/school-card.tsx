import type { School } from "../data/schools";
import styles from "./database-page.module.css";

type SchoolCardProps = {
  school: School;
  saved: boolean;
  onToggleSave: (abbr: string) => void;
};

export function SchoolCard({ school, saved, onToggleSave }: SchoolCardProps) {
  return (
    <div className={styles.schoolCard}>
      <div className={styles.cardTopRow}>
        <span className={styles.abbrTag}>{school.abbr}</span>
      </div>

      <div className={styles.schoolCardName}>{school.name}</div>

      <div className={styles.cardMeta}>
        <span className={styles.cardMetaItem}>📍 {school.state}</span>
        <span className={styles.cardMetaItem}>📋 Secondary Available</span>
      </div>

      <div className={styles.cardActions}>
        <button className={styles.btnView}>View Secondary →</button>
        <button
          className={`${styles.btnSave}${saved ? ` ${styles.saved}` : ""}`}
          onClick={() => onToggleSave(school.abbr)}
        >
          {saved ? "★ Saved" : "☆ Save"}
        </button>
      </div>
    </div>
  );
}
