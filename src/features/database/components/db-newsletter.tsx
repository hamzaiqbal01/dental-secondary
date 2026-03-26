import styles from "./database-page.module.css";

export function DbNewsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterBox}>
        <div className={styles.newsletterLabel}>
          <span className={styles.newsletterLabelLine} />
          Stay Updated
        </div>
        <h2>Sign Up for Our Newsletter</h2>
        <p>Get the latest deadlines, school updates, and application tips delivered straight to your inbox.</p>
        <div className={styles.nlForm}>
          <input type="email" placeholder="Enter your email address…" />
          <button className={styles.nlBtn}>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
