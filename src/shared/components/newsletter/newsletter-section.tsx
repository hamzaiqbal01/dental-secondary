import { NewsletterForm } from "@/features/landing/components/newsletter-form";
import styles from "./newsletter-section.module.css";

export function NewsletterSection() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterBox}>
        <div className={styles.label}>Stay Updated</div>
        <h2 className={styles.title}>Sign Up for Our Newsletter</h2>
        <p className={styles.sub}>
          Get the latest deadlines, school updates, and application tips
          delivered straight to your inbox.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
