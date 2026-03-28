import Link from "next/link";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { NewsletterSection } from "@/shared/components/newsletter/newsletter-section";
import { FaqAccordion } from "./faq-accordion";
import styles from "./resources-page.module.css";

const FAQ_ITEMS = [
  {
    question: "What is a dental school secondary application?",
    answer:
      "A secondary application is an additional application sent by dental schools after they review your primary AADSAS application. It typically includes school-specific essays and sometimes additional forms or fees. Not all schools send secondaries to every applicant — some are sent to everyone, while others screen applicants first.",
  },
  {
    question: "How quickly should I submit my secondary?",
    answer:
      "As quickly as possible — ideally within 2 weeks of receiving it. Most dental schools use rolling admissions, so later submissions are reviewed after earlier ones, reducing your chances of an interview invite. Pre-writing your essays using this database is the best way to submit fast without sacrificing quality.",
  },
  {
    question: "How many schools should I apply to?",
    answer:
      "Most applicants apply to 10–20 schools. A balanced list includes reach schools (GPA/DAT above your stats), match schools (your stats match their averages), and safety schools (your stats exceed their averages). Applying to fewer than 10 schools significantly increases your risk of not being accepted in a given cycle.",
  },
  {
    question: "What DAT score do I need?",
    answer:
      "The average DAT score for dental school matriculants is around 20–21 AA. Competitive applicants typically score 21+ AA with a strong GPA (3.5+). However, DAT score is just one factor — research experience, dental hours, and the strength of your essays also matter significantly.",
  },
  {
    question: "Is the Bootcamp admissions service worth it?",
    answer:
      "We have an exceptionally high satisfaction rate and are able to get students with lower academics admitted into multiple schools.",
  },
];

export default function ResourcesPage() {
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
            <span className={styles.breadcrumbCur}>Other Resources</span>
          </div>

          <div className={styles.pageBadge}>
            <span>✦</span> Curated for Pre-Dents
          </div>

          <h1 className={styles.pageTitle}>
            Everything You Need to
            <br />
            <span className={styles.pageTitleEm}>Get Into Dental School</span>
          </h1>

          <p className={styles.pageSub}>
            Hand-picked guides, communities, and expert services to help you
            navigate every stage of the dental school application process — from
            DAT prep to interview day.
          </p>

          <div className={styles.headerStats}>
            <div>
              <div className={styles.hsNum}>4</div>
              <div className={styles.hsLbl}>Featured Resources</div>
            </div>
            <div>
              <div className={styles.hsNum}>12k+</div>
              <div className={styles.hsLbl}>Pre-Dents Helped</div>
            </div>
            <div>
              <div className={styles.hsNum}>100%</div>
              <div className={styles.hsLbl}>Free to Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN ─── */}
      <div className={styles.main}>

        {/* ── FEATURED RESOURCES ── */}
        <div className={styles.sectionLabel}>Featured Resources</div>
        <h2 className={styles.featuredIntroTitle}>
          The Best Tools for Pre-Dental{" "}
          <span className={styles.featuredIntroEm}>Success</span>
        </h2>
        <p className={styles.featuredIntroPara}>
          These are the resources we trust most — used and recommended by
          thousands of successful dental school applicants.
        </p>

        <div className={styles.featuredGrid}>

          {/* Resource 1 */}
          <a
            href="https://www.studentdoctor.net/how-to-get-into-dental-school/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceCard}
          >
            <span className={styles.resNum}>1</span>
            <div className={`${styles.resIconWrap} ${styles.resIconBlue}`}>📖</div>
            <span className={`${styles.resTag} ${styles.resTagGuide}`}>Complete Guide</span>
            <h3 className={styles.resTitle}>How to Get Into Dental School</h3>
            <p className={styles.resDesc}>
              The most complete and accurate guide available for anyone applying
              to dental school. Covers every step of the process — from building
              your application to crafting strong secondaries and acing your
              interview. Written by students who&apos;ve been through it.
            </p>
            <div className={styles.resUrl}>
              <span className={styles.resUrlDot} />
              studentdoctor.net/how-to-get-into-dental-school
            </div>
            <span className={styles.resLinkBtn}>Visit Resource ↗</span>
          </a>

          {/* Resource 2 */}
          <a
            href="https://www.facebook.com/groups/dentalschoolinterviewbootcamp"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceCard}
          >
            <span className={styles.resNum}>2</span>
            <div className={`${styles.resIconWrap} ${styles.resIconTeal}`}>👥</div>
            <span className={`${styles.resTag} ${styles.resTagCommunity}`}>Community</span>
            <h3 className={styles.resTitle}>
              Dental School Interview Bootcamp — Facebook Group
            </h3>
            <p className={styles.resDesc}>
              A large, active Facebook community specifically for pre-dental
              students. Get real answers about secondary essays, interview
              experiences, and application timelines from people going through the
              same process right now. A great place to ask questions and find peer
              support.
            </p>
            <div className={styles.resUrl}>
              <span className={styles.resUrlDot} />
              facebook.com/groups/dentalschoolinterviewbootcamp
            </div>
            <span className={styles.resLinkBtn}>Join the Community ↗</span>
          </a>

          {/* Resource 3 */}
          <a
            href="https://bootcamp.com/dat/admissions"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceCard}
          >
            <span className={styles.resNum}>3</span>
            <div className={`${styles.resIconWrap} ${styles.resIconGold}`}>🏆</div>
            <span className={`${styles.resTag} ${styles.resTagServices}`}>Expert Services</span>
            <h3 className={styles.resTitle}>
              Application &amp; Interview Services by Bootcamp
            </h3>
            <p className={styles.resDesc}>
              The #1 rated and results-proven dental school admissions company.
              Offering personalized coaching for personal statements, secondary
              essays, and interview preparation. Trusted by thousands of applicants
              with proven acceptance outcomes at top dental programs.
            </p>
            <div className={styles.resUrl}>
              <span className={styles.resUrlDot} />
              bootcamp.com/dat/admissions
            </div>
            <span className={styles.resLinkBtn}>Explore Services ↗</span>
          </a>

          {/* Resource 4 */}
          <a
            href="https://www.bootcamp.com/dat/private-tutoring"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceCard}
          >
            <span className={styles.resNum}>4</span>
            <div className={`${styles.resIconWrap} ${styles.resIconTeal}`}>🎓</div>
            <span className={`${styles.resTag} ${styles.resTagServices}`}>Private Tutoring</span>
            <h3 className={styles.resTitle}>Private Tutoring by Bootcamp</h3>
            <p className={styles.resDesc}>
              One-on-one tutoring sessions with expert instructors to help you
              master the DAT and strengthen your application. Personalized
              sessions tailored to your weaknesses — so you study smarter and
              score higher.
            </p>
            <div className={styles.resUrl}>
              <span className={styles.resUrlDot} />
              bootcamp.com/dat/private-tutoring
            </div>
            <span className={styles.resLinkBtn}>Get Tutoring ↗</span>
          </a>

        </div>

        {/* ── FAQ ── */}
        <div className={styles.faqSection}>
          <div className={styles.sectionLabel}>Common Questions</div>
          <h2 className={styles.faqIntroTitle}>Frequently Asked Questions</h2>
          <p className={styles.faqIntroPara}>
            Answers to the questions we hear most from pre-dental students.
          </p>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>

      </div>

      <NewsletterSection />

      <Footer />
    </div>
  );
}
