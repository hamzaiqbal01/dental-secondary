import Link from "next/link";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>🦷</div>
            Dental School Secondary
          </Link>
          <p>The #1 platform helping pre-dental students navigate applications with confidence and clarity.</p>
        </div>

        <div className={styles.footerCol}>
          <h4>Support</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/database">Secondary Databases</Link></li>
            <li><Link href="/services">Application Services</Link></li>
            <li><Link href="/resources">Other Resources</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Resources</h4>
          <ul>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">DAT Prep</Link></li>
            <li><Link href="#">Interview Tips</Link></li>
            <li><Link href="#">FAQ</Link></li>
          </ul>
        </div>
      </footer>

      <div className={styles.footerBottom}>
        &copy; Dental School Secondary 2022 — All Rights Reserved
      </div>
    </>
  );
}
