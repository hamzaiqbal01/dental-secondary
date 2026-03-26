import type { School } from "../data/schools";
import { SchoolCard } from "./school-card";
import styles from "./database-page.module.css";

type StateSectionProps = {
  state: string;
  short: string;
  schools: School[];
  savedSchools: Set<string>;
  onToggleSave: (abbr: string) => void;
};

export function StateSection({ state, short, schools, savedSchools, onToggleSave }: StateSectionProps) {
  return (
    <div className={styles.stateSection}>
      <div className={styles.stateHeader}>
        <span className={styles.statePill}>{short}</span>
        <span className={styles.stateNameTxt}>{state}</span>
        <span className={styles.stateCountBadge}>
          {schools.length} school{schools.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className={styles.schoolsGrid}>
        {schools.map((school) => (
          <SchoolCard
            key={school.abbr}
            school={school}
            saved={savedSchools.has(school.abbr)}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
    </div>
  );
}
