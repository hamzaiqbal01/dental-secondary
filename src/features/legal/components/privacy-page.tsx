import Link from "next/link";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import styles from "./legal-page.module.css";

const EFFECTIVE_DATE = "March 26, 2026";
const CONTACT_EMAIL = "dentalschoolsecondary@gmail.com";

const sections = [
  { id: "information-we-collect", icon: "📋", num: "01", title: "Information We Collect" },
  { id: "how-we-use", icon: "🔍", num: "02", title: "How We Use Your Information" },
  { id: "data-sharing", icon: "🤝", num: "03", title: "Data Sharing & Disclosure" },
  { id: "data-storage", icon: "🔒", num: "04", title: "Data Storage & Security" },
  { id: "cookies", icon: "🍪", num: "05", title: "Cookies & Tracking" },
  { id: "your-rights", icon: "✅", num: "06", title: "Your Rights" },
  { id: "third-party", icon: "🔗", num: "07", title: "Third-Party Services" },
  { id: "childrens-privacy", icon: "👶", num: "08", title: "Children's Privacy" },
  { id: "changes", icon: "📝", num: "09", title: "Changes to This Policy" },
  { id: "contact", icon: "📬", num: "10", title: "Contact Us" },
];

export function PrivacyPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderBg} />
        <div className={styles.pageHeaderOverlay} />
        <div className={styles.glowTr} />
        <div className={styles.pageHeaderContent}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCur}>Privacy Policy</span>
          </nav>
          <div className={styles.pageBadge}>⚖️ Legal</div>
          <h1 className={styles.pageTitle}>
            Privacy <em className={styles.pageTitleEm}>Policy</em>
          </h1>
          <div className={styles.pageMeta}>
            <span className={styles.pageMetaItem}>📅 Effective: {EFFECTIVE_DATE}</span>
            <span className={styles.pageMetaItem}>📍 dentalschoolsecondary.com</span>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <div className={styles.main}>
        <div className={styles.layout}>

          {/* ── TOC ── */}
          <aside className={styles.toc} aria-label="Table of contents">
            <p className={styles.tocTitle}>Contents</p>
            <ol className={styles.tocList}>
              {sections.map((s) => (
                <li key={s.id} className={styles.tocItem}>
                  <a href={`#${s.id}`}>{s.num} — {s.title}</a>
                </li>
              ))}
            </ol>
          </aside>

          {/* ── CONTENT ── */}
          <article className={styles.content}>

            <div className={styles.section}>
              <div className={styles.highlightBox}>
                <p>
                  At <strong>Dental School Secondary</strong>, your privacy matters. This policy explains what
                  information we collect, how we use it, and your rights regarding your data. We keep it simple
                  and honest — we do not sell your data to anyone.
                </p>
              </div>
            </div>

            {/* 01 */}
            <section className={styles.section}>
              <span id="information-we-collect" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>📋</div>
                <div>
                  <span className={styles.sectionNum}>Section 01</span>
                  <h2 className={styles.sectionTitle}>Information We Collect</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>We collect information you voluntarily provide and data automatically generated when you use our site.</p>
                <p><strong>Information you provide:</strong></p>
                <ul>
                  <li><strong>Name</strong> — when you sign up for our newsletter (optional)</li>
                  <li><strong>Email address</strong> — when you subscribe to the newsletter or submit a contact form</li>
                  <li><strong>Message content</strong> — when you use the Contact Us form (subject and message)</li>
                </ul>
                <p><strong>Information collected automatically:</strong></p>
                <ul>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on the site</li>
                  <li>Referring website or search query</li>
                  <li>General geographic location (country/region level only, via IP)</li>
                </ul>
                <p>We do <strong>not</strong> collect sensitive personal information such as Social Security numbers, financial data, medical records, or government identification.</p>
              </div>
            </section>

            {/* 02 */}
            <section className={styles.section}>
              <span id="how-we-use" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🔍</div>
                <div>
                  <span className={styles.sectionNum}>Section 02</span>
                  <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>We use the information we collect solely to operate and improve our platform:</p>
                <ul>
                  <li><strong>Newsletter communications</strong> — send you updates about new school data, deadline reminders, and application tips</li>
                  <li><strong>Customer support</strong> — respond to your messages and inquiries submitted via the contact form</li>
                  <li><strong>Site analytics</strong> — understand how users interact with our platform to improve content and navigation</li>
                  <li><strong>Service improvements</strong> — identify technical issues and optimize performance</li>
                </ul>
                <p>We will <strong>never</strong> use your email address to send unsolicited marketing from third parties, and you can unsubscribe from our newsletter at any time.</p>
              </div>
            </section>

            {/* 03 */}
            <section className={styles.section}>
              <span id="data-sharing" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🤝</div>
                <div>
                  <span className={styles.sectionNum}>Section 03</span>
                  <h2 className={styles.sectionTitle}>Data Sharing & Disclosure</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p><strong>We do not sell, rent, or trade your personal information to any third party.</strong></p>
                <p>We may share your data only in the following limited circumstances:</p>
                <ul>
                  <li><strong>Service providers</strong> — trusted third-party tools that help us operate the site (e.g., form processing via SheetDB, analytics via Google Analytics). These providers are contractually obligated to protect your data.</li>
                  <li><strong>Legal requirements</strong> — if required by law, court order, or governmental authority.</li>
                  <li><strong>Business transfers</strong> — in the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you before any such transfer occurs.</li>
                </ul>
              </div>
            </section>

            {/* 04 */}
            <section className={styles.section}>
              <span id="data-storage" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🔒</div>
                <div>
                  <span className={styles.sectionNum}>Section 04</span>
                  <h2 className={styles.sectionTitle}>Data Storage & Security</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>Form submissions (newsletter and contact) are stored in a private Google Spreadsheet managed via SheetDB. Access is restricted to authorized personnel only.</p>
                <p>We implement reasonable technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
                <p>We retain your data only as long as necessary to fulfill the purposes described in this policy or as required by applicable law.</p>
              </div>
            </section>

            {/* 05 */}
            <section className={styles.section}>
              <span id="cookies" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🍪</div>
                <div>
                  <span className={styles.sectionNum}>Section 05</span>
                  <h2 className={styles.sectionTitle}>Cookies & Tracking</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>Our site uses cookies and similar technologies to enhance your browsing experience and gather analytics data.</p>
                <ul>
                  <li><strong>Essential cookies</strong> — required for the site to function correctly (e.g., remembering your session)</li>
                  <li><strong>Analytics cookies</strong> — help us understand how visitors use the site (via Google Analytics)</li>
                </ul>
                <p>You can control or disable cookies through your browser settings. Disabling cookies may affect some functionality of the site.</p>
              </div>
            </section>

            {/* 06 */}
            <section className={styles.section}>
              <span id="your-rights" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>✅</div>
                <div>
                  <span className={styles.sectionNum}>Section 06</span>
                  <h2 className={styles.sectionTitle}>Your Rights</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul>
                  <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
                  <li><strong>Correction</strong> — request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion</strong> — request that we delete your personal data</li>
                  <li><strong>Opt-out</strong> — unsubscribe from our newsletter at any time by contacting us</li>
                  <li><strong>Data portability</strong> — request your data in a portable format</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within 30 days.</p>
              </div>
            </section>

            {/* 07 */}
            <section className={styles.section}>
              <span id="third-party" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🔗</div>
                <div>
                  <span className={styles.sectionNum}>Section 07</span>
                  <h2 className={styles.sectionTitle}>Third-Party Services</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>Our site contains links to external websites including Bootcamp.com and other dental school resources. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
                <p>Third-party services we use include:</p>
                <ul>
                  <li><strong>SheetDB</strong> — form data storage (<a href="https://sheetdb.io/privacy-policy" target="_blank" rel="noopener noreferrer">SheetDB Privacy Policy</a>)</li>
                  <li><strong>Google Analytics</strong> — website analytics (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>)</li>
                  <li><strong>Vercel</strong> — site hosting and deployment (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>)</li>
                </ul>
              </div>
            </section>

            {/* 08 */}
            <section className={styles.section}>
              <span id="childrens-privacy" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>👶</div>
                <div>
                  <span className={styles.sectionNum}>Section 08</span>
                  <h2 className={styles.sectionTitle}>Children's Privacy</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately and we will take steps to delete it.</p>
              </div>
            </section>

            {/* 09 */}
            <section className={styles.section}>
              <span id="changes" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>📝</div>
                <div>
                  <span className={styles.sectionNum}>Section 09</span>
                  <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations. When we make material changes, we will update the "Effective Date" at the top of this page.</p>
                <p>We encourage you to review this policy periodically. Your continued use of our site after any changes constitutes acceptance of the updated policy.</p>
              </div>
            </section>

            {/* 10 */}
            <section className={styles.section}>
              <span id="contact" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>📬</div>
                <div>
                  <span className={styles.sectionNum}>Section 10</span>
                  <h2 className={styles.sectionTitle}>Contact Us</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out:</p>
                <ul>
                  <li><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
                  <li><strong>Contact form:</strong> <Link href="/contact">dentalschoolsecondary.com/contact</Link></li>
                </ul>
              </div>
            </section>

            {/* ── CONTACT CTA ── */}
            <div className={styles.contactBox}>
              <div className={styles.contactBoxIcon}>💬</div>
              <div className={styles.contactBoxText}>
                <p className={styles.contactBoxTitle}>Have a privacy question?</p>
                <p className={styles.contactBoxDesc}>
                  We're happy to answer any questions about how we handle your data.
                </p>
              </div>
              <Link href="/contact" className={styles.contactBoxLink}>
                Contact Us →
              </Link>
            </div>

          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
}
