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
            <li><a href="https://www.bootcamp.com/dat/application-services" target="_blank" rel="noopener noreferrer">Application Services</a></li>
            <li><Link href="/resources">Other Resources</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Resources</h4>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><a href="https://www.bootcamp.com/dat" target="_blank" rel="noopener noreferrer">DAT Prep</a></li>
            <li><Link href="/resources">Interview Tips</Link></li>
            <li><Link href="/resources">FAQ</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </footer>

      <div className={styles.footerBottom}>
        &copy; Dental School Secondary 2022 — All Rights Reserved
      </div>
    </>
  );
}
