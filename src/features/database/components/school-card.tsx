import Link from "next/link";
import type { School } from "../data/schools";
import styles from "./database-page.module.css";

type SchoolCardProps = {
  school: School;
  saved: boolean;
  onToggleSave: (abbr: string) => void;
};

export function SchoolCard({ school, saved, onToggleSave }: SchoolCardProps) {
  return (
    <Link
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
        <button
          className={`${styles.btnSave}${saved ? ` ${styles.saved}` : ""}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleSave(school.abbr);
          }}
        >
          {saved ? "★ Saved" : "☆ Save"}
        </button>
      </div>
    </Link>
  );
}
