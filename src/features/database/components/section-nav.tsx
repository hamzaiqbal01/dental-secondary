"use client";

import { useEffect, useState } from "react";
import styles from "./school-detail-page.module.css";

type Section = {
  id: string;
  label: string;
};

type SectionNavProps = {
  sections: Section[];
};

export function SectionNav({ sections }: SectionNavProps) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className={styles.sectionNav}>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`${styles.snavPill} ${active === s.id ? styles.snavPillActive : ""}`}
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
