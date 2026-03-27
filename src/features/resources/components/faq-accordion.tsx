"use client";

import { useState } from "react";
import styles from "./resources-page.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`${styles.faqItem}${isOpen ? ` ${styles.faqItemOpen}` : ""}`}
          >
            <button className={styles.faqQ} onClick={() => toggle(i)}>
              {item.question}
              <span className={`${styles.faqArrow}${isOpen ? ` ${styles.faqArrowOpen}` : ""}`}>
                ▾
              </span>
            </button>
            <div className={`${styles.faqA}${isOpen ? ` ${styles.faqAOpen}` : ""}`}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
