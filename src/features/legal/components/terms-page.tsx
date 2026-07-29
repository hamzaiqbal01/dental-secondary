import Link from "next/link";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import styles from "./legal-page.module.css";

const EFFECTIVE_DATE = "March 26, 2026";
const CONTACT_EMAIL = "dentalschoolsecondary@gmail.com";

const sections = [
  { id: "acceptance", icon: "✅", num: "01", title: "Acceptance of Terms" },
  { id: "description", icon: "📋", num: "02", title: "Description of Service" },
  { id: "use-of-site", icon: "🖥️", num: "03", title: "Use of the Site" },
  { id: "intellectual-property", icon: "©️", num: "04", title: "Intellectual Property" },
  { id: "disclaimer", icon: "⚠️", num: "05", title: "Disclaimer of Warranties" },
  { id: "limitation", icon: "🛡️", num: "06", title: "Limitation of Liability" },
  { id: "third-party", icon: "🔗", num: "07", title: "Third-Party Links" },
  { id: "user-content", icon: "📝", num: "08", title: "User Submissions" },
  { id: "termination", icon: "🚫", num: "09", title: "Termination" },
  { id: "governing-law", icon: "⚖️", num: "10", title: "Governing Law" },
  { id: "changes", icon: "🔄", num: "11", title: "Changes to Terms" },
  { id: "contact", icon: "📬", num: "12", title: "Contact Us" },
];

export function TermsPage() {
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
            <span className={styles.breadcrumbCur}>Terms of Service</span>
          </nav>
          <div className={styles.pageBadge}>⚖️ Legal</div>
          <h1 className={styles.pageTitle}>
            Terms of <em className={styles.pageTitleEm}>Service</em>
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
                  Please read these Terms of Service carefully before using <strong>Dental School Secondary</strong>.
                  By accessing or using our website, you agree to be bound by these terms. If you do not agree,
                  please do not use our site.
                </p>
              </div>
            </div>

            {/* 01 */}
            <section className={styles.section}>
              <span id="acceptance" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>✅</div>
                <div>
                  <span className={styles.sectionNum}>Section 01</span>
                  <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>By accessing or using <strong>dentalschoolsecondary.com</strong> (the "Site"), you agree to be bound by these Terms of Service ("Terms") and our <Link href="/privacy">Privacy Policy</Link>. These Terms apply to all visitors, users, and others who access or use the Site.</p>
                <p>If you are using the Site on behalf of an organization, you agree to these Terms on behalf of that organization and represent that you have the authority to do so.</p>
              </div>
            </section>

            {/* 02 */}
            <section className={styles.section}>
              <span id="description" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>📋</div>
                <div>
                  <span className={styles.sectionNum}>Section 02</span>
                  <h2 className={styles.sectionTitle}>Description of Service</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>Dental School Secondary provides a database of dental school secondary application prompts, essay questions, writing tips, and related admissions resources for pre-dental students applying to accredited U.S. dental schools.</p>
                <p>Our service is <strong>informational only</strong>. We do not guarantee admission to any dental school, and the content on this site should not replace professional admissions counseling.</p>
                <p>Secondary application data is collected from publicly available sources and user contributions. We strive to keep data accurate and up-to-date but cannot guarantee the completeness or accuracy of all information.</p>
              </div>
            </section>

            {/* 03 */}
            <section className={styles.section}>
              <span id="use-of-site" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🖥️</div>
                <div>
                  <span className={styles.sectionNum}>Section 03</span>
                  <h2 className={styles.sectionTitle}>Use of the Site</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You agree <strong>not</strong> to:</p>
                <ul>
                  <li>Scrape, crawl, or systematically extract content from the Site without prior written permission</li>
                  <li>Use automated tools to access the Site in a way that places excessive load on our servers</li>
                  <li>Reproduce, republish, or commercially exploit our database content without permission</li>
                  <li>Attempt to gain unauthorized access to any part of the Site or its related systems</li>
                  <li>Transmit any harmful, offensive, or disruptive content through our contact forms</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                </ul>
                <p>We reserve the right to terminate or restrict access to any user who violates these Terms.</p>
              </div>
            </section>

            {/* 04 */}
            <section className={styles.section}>
              <span id="intellectual-property" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>©️</div>
                <div>
                  <span className={styles.sectionNum}>Section 04</span>
                  <h2 className={styles.sectionTitle}>Intellectual Property</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>All content on this Site — including but not limited to text, design, layout, graphics, icons, and compiled database information — is the property of Dental School Secondary and is protected by applicable copyright and intellectual property laws.</p>
                <p>You may view, print, or download content from this Site for your <strong>personal, non-commercial use only</strong>. You may not reproduce, distribute, modify, or create derivative works from our content without prior written consent.</p>
                <p>Secondary application questions sourced from dental schools remain the property of their respective institutions. Our writing tips, analysis, and organization of that data are our original work.</p>
              </div>
            </section>

            {/* 05 */}
            <section className={styles.section}>
              <span id="disclaimer" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>⚠️</div>
                <div>
                  <span className={styles.sectionNum}>Section 05</span>
                  <h2 className={styles.sectionTitle}>Disclaimer of Warranties</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>The Site and its content are provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                <p>We do not warrant that:</p>
                <ul>
                  <li>The Site will be uninterrupted, error-free, or secure</li>
                  <li>The information on the Site is complete, accurate, or current</li>
                  <li>The Site will meet your specific requirements or expectations</li>
                  <li>Any errors or defects will be corrected</li>
                </ul>
                <p>Secondary application prompts and deadlines change year to year. Always verify current requirements directly with the dental school.</p>
              </div>
            </section>

            {/* 06 */}
            <section className={styles.section}>
              <span id="limitation" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🛡️</div>
                <div>
                  <span className={styles.sectionNum}>Section 06</span>
                  <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>To the fullest extent permitted by applicable law, Dental School Secondary and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, revenue, or goodwill, arising out of your use or inability to use the Site.</p>
                <p>In no event shall our total liability to you for all claims exceed the amount you paid us (if any) in the twelve months preceding the claim.</p>
              </div>
            </section>

            {/* 07 */}
            <section className={styles.section}>
              <span id="third-party" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🔗</div>
                <div>
                  <span className={styles.sectionNum}>Section 07</span>
                  <h2 className={styles.sectionTitle}>Third-Party Links</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>The Site may contain links to third-party websites, including dental school official sites, Bootcamp.com, and other admissions resources. These links are provided for your convenience only.</p>
                <p>We have no control over the content, privacy practices, or availability of third-party sites. Inclusion of a link does not imply endorsement by Dental School Secondary. You access third-party sites at your own risk.</p>
              </div>
            </section>

            {/* 08 */}
            <section className={styles.section}>
              <span id="user-content" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>📝</div>
                <div>
                  <span className={styles.sectionNum}>Section 08</span>
                  <h2 className={styles.sectionTitle}>User Submissions</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>By submitting information through our contact form or newsletter signup, you grant Dental School Secondary a non-exclusive, royalty-free license to use, store, and process that information for the purposes described in our <Link href="/privacy">Privacy Policy</Link>.</p>
                <p>You represent that any information you submit is accurate and does not violate the rights of any third party.</p>
              </div>
            </section>

            {/* 09 */}
            <section className={styles.section}>
              <span id="termination" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🚫</div>
                <div>
                  <span className={styles.sectionNum}>Section 09</span>
                  <h2 className={styles.sectionTitle}>Termination</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>We reserve the right to terminate or suspend your access to the Site at any time, with or without notice, for any reason, including if we believe you have violated these Terms.</p>
                <p>Upon termination, all provisions of these Terms which by their nature should survive will continue to apply, including intellectual property, disclaimers, and limitations of liability.</p>
              </div>
            </section>

            {/* 10 */}
            <section className={styles.section}>
              <span id="governing-law" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>⚖️</div>
                <div>
                  <span className={styles.sectionNum}>Section 10</span>
                  <h2 className={styles.sectionTitle}>Governing Law</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>These Terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from these Terms or your use of the Site shall be resolved through binding arbitration or in the courts of competent jurisdiction.</p>
              </div>
            </section>

            {/* 11 */}
            <section className={styles.section}>
              <span id="changes" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🔄</div>
                <div>
                  <span className={styles.sectionNum}>Section 11</span>
                  <h2 className={styles.sectionTitle}>Changes to Terms</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>We reserve the right to modify these Terms at any time. When we make material changes, we will update the "Effective Date" at the top of this page.</p>
                <p>Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.</p>
              </div>
            </section>

            {/* 12 */}
            <section className={styles.section}>
              <span id="contact" className={styles.sectionAnchor} />
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>📬</div>
                <div>
                  <span className={styles.sectionNum}>Section 12</span>
                  <h2 className={styles.sectionTitle}>Contact Us</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>
                <p>If you have any questions about these Terms of Service, please contact us:</p>
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
                <p className={styles.contactBoxTitle}>Questions about our Terms?</p>
                <p className={styles.contactBoxDesc}>
                  Reach out and our team will clarify anything you need.
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
