import { Suspense } from "react";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { NewsletterSection } from "@/shared/components/newsletter/newsletter-section";
import { DbPageHero } from "./db-page-hero";
import { DbContent } from "./db-content";
import styles from "./database-page.module.css";

export function DatabasePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <DbPageHero />
      <Suspense fallback={null}>
        <DbContent />
      </Suspense>
      <NewsletterSection />
      <Footer />
    </div>
  );
}
