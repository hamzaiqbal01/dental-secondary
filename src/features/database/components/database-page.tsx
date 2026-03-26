import { Suspense } from "react";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { DbPageHero } from "./db-page-hero";
import { DbContent } from "./db-content";
import { DbNewsletter } from "./db-newsletter";
import styles from "./database-page.module.css";

export function DatabasePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <DbPageHero />
      <Suspense fallback={null}>
        <DbContent />
      </Suspense>
      <DbNewsletter />
      <Footer />
    </div>
  );
}
