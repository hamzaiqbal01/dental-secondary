import { Suspense } from "react";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { NewsletterSection } from "@/shared/components/newsletter/newsletter-section";
import { DbPageHero } from "./db-page-hero";
import { DbContent } from "./db-content";
import { DbStaticFallback } from "./db-static-fallback";
import styles from "./database-page.module.css";

export function DatabasePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <DbPageHero />
      {/* DbStaticFallback renders all 66 school links in the initial server HTML
          so Googlebot can index every school page from this listing page.
          DbContent replaces it once client-side JS hydrates. */}
      <Suspense fallback={<DbStaticFallback />}>
        <DbContent />
      </Suspense>
      <NewsletterSection />
      <Footer />
    </div>
  );
}
