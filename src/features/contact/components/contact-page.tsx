import Link from "next/link";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { ContactForm } from "./contact-form";
import styles from "./contact-page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* ─── PAGE HEADER ─── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderBg} />
        <div className={styles.pageHeaderOverlay} />
        <div className={styles.glowTr} />
        <div className={styles.glowBl} />

        <div className={styles.pageHeaderContent}>
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCur}>Contact Us</span>
          </div>

          <div className={styles.pageBadge}>
            <span>✦</span> We&apos;re Here to Help
          </div>

          <h1 className={styles.pageTitle}>
            Get in Touch With
            <br />
            <span className={styles.pageTitleEm}>Our Team</span>
          </h1>

          <p className={styles.pageSub}>
            Have a question about dental school applications, our secondary
            database, or anything else? Fill out the form below and we&apos;ll
            get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* ─── MAIN ─── */}
      <div className={styles.main}>
        <div className={styles.contactLayout}>

          {/* ── LEFT: Info Cards ── */}
          <div className={styles.infoStack}>
            <div className={styles.infoCard}>
              <div className={`${styles.infoIconWrap} ${styles.infoIconTeal}`}>
                📧
              </div>
              <div className={styles.infoCardBody}>
                <div className={styles.infoCardTitle}>Email Us</div>
                <p className={styles.infoCardText}>
                  Send us an email and we&apos;ll respond within 1–2 business days.
                </p>
                <a
                  href="mailto:dentalschoolsecondary@gmail.com"
                  className={styles.infoCardLink}
                >
                  dentalschoolsecondary@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={`${styles.infoIconWrap} ${styles.infoIconBlue}`}>
                👥
              </div>
              <div className={styles.infoCardBody}>
                <div className={styles.infoCardTitle}>Join the Community</div>
                <p className={styles.infoCardText}>
                  Connect with thousands of pre-dental students in our active
                  Facebook group for peer support and application advice.
                </p>
                <a
                  href="https://www.facebook.com/groups/dentalschoolinterviewbootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoCardLink}
                >
                  Join Facebook Group →
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={`${styles.infoIconWrap} ${styles.infoIconGold}`}>
                🏆
              </div>
              <div className={styles.infoCardBody}>
                <div className={styles.infoCardTitle}>Application Services</div>
                <p className={styles.infoCardText}>
                  Need expert help with your secondary essays or interview prep?
                  Bootcamp offers the #1 rated dental admissions coaching.
                </p>
                <a
                  href="https://www.bootcamp.com/dat/application-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoCardLink}
                >
                  View Services →
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={`${styles.infoIconWrap} ${styles.infoIconTeal}`}>
                ⏱️
              </div>
              <div className={styles.infoCardBody}>
                <div className={styles.infoCardTitle}>Response Time</div>
                <p className={styles.infoCardText}>
                  We typically respond to all inquiries within 1–2 business days.
                  For urgent questions, the community group is the fastest way to
                  get an answer.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className={styles.formCard}>
            <div className={styles.sectionLabel}>Send a Message</div>
            <h2 className={styles.formTitle}>How Can We Help?</h2>
            <p className={styles.formSubtitle}>
              Fill out the form below and our team will get back to you shortly.
            </p>
            <ContactForm />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
