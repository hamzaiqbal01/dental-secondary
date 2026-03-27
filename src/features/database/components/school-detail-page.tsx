import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import {
  getSchoolDetail,
  getAdjacentSchools,
  type Question,
} from "../data/school-details";
import { schools } from "../data/schools";
import { SectionNav } from "./section-nav";
import { CopyBtn, CopyAllBtn } from "./copy-btn";
import styles from "./school-detail-page.module.css";

type Props = {
  slug: string;
};

function getStatusLabel(status: string) {
  if (status === "open") return "● Open";
  if (status === "rolling") return "● Rolling";
  return "● Closed";
}
function getStatusClass(status: string) {
  if (status === "open") return styles.srValOpen;
  if (status === "rolling") return styles.srValRolling;
  return "";
}

function getWordLimitSummary(questions: Question[]): string {
  if (questions.length === 0) return "No Essays";
  const limits = questions.map((q) => q.limit ?? "No Limit");
  const unique = [...new Set(limits)];
  if (unique.length === 1) return unique[0];
  if (unique.every((l) => l === "No Limit")) return "No Limit";
  return "Mixed";
}

// Group questions by groupLabel to render headers before each group
function groupQuestions(questions: Question[]) {
  const groups: { label?: string; questions: Question[] }[] = [];
  for (const q of questions) {
    const last = groups[groups.length - 1];
    if (last && last.label === q.groupLabel) {
      last.questions.push(q);
    } else {
      groups.push({ label: q.groupLabel, questions: [q] });
    }
  }
  return groups;
}

export async function SchoolDetailPage({ slug }: Props) {
  const detail = getSchoolDetail(slug);
  if (!detail) notFound();

  const schoolEntry = schools.find((s) => s.slug === slug);
  const status = schoolEntry?.status ?? "open";
  const adj = getAdjacentSchools(slug);

  const totalQuestions = detail.questions.length;
  const wordLimitSummary = getWordLimitSummary(detail.questions);
  const requiredCount = detail.questions.filter((q) => q.tag === "required").length;
  const questionGroups = groupQuestions(detail.questions);

  const hasSections =
    totalQuestions > 0 ||
    Boolean(detail.noEssayNote);

  const navSections = [
    { id: "distribution", label: "📬 Distribution" },
    { id: "questions", label: "📋 Secondary Questions" },
    { id: "tips", label: "💡 Writing Tips" },
  ];

  const allQuestionTexts = detail.questions.map((q) => q.text);

  return (
    <div style={{ background: "var(--navy)", minHeight: "100vh", color: "var(--white)" }}>
      <Navbar />

      {/* ── PAGE HEADER ─────────────────────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderBg} />
        <div className={styles.pageHeaderOverlay} />
        <div className={styles.headerGlow} />
        <div className={styles.pageHeaderContent}>

          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <Link href="/database">Secondary Database</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCur}>
              {detail.stateAbbr} — {detail.abbr}
            </span>
          </div>

          {/* School identity */}
          <div className={styles.schoolIdentity}>
            <div className={styles.schoolMonogram}>{detail.stateAbbr}</div>
            <div>
              <div className={styles.stateBadge}>✦ {detail.stateFull}</div>
              <h1 className={styles.schoolFullName}>{detail.name}</h1>
              <p className={styles.schoolAbbrLine}>
                Abbreviation: <span>{detail.abbr}</span>
                &nbsp;·&nbsp;{detail.stateFull}
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className={styles.quickStats}>
            <div className={styles.qsItem}>
              <div className={styles.qsLabel}>Secondary Status</div>
              <div className={`${styles.qsValue} ${styles.qsValueTeal}`}>
                {getStatusLabel(status)}
              </div>
            </div>
            <div className={styles.qsItem}>
              <div className={styles.qsLabel}>Distribution</div>
              <div className={styles.qsValue}>{detail.distribution}</div>
            </div>
            <div className={styles.qsItem}>
              <div className={styles.qsLabel}>Total Questions</div>
              <div className={styles.qsValue}>
                {totalQuestions === 0
                  ? "No Essays"
                  : requiredCount > 0
                  ? `${requiredCount} Required`
                  : `${totalQuestions} Questions`}
              </div>
            </div>
            <div className={styles.qsItem}>
              <div className={styles.qsLabel}>Word Limit</div>
              <div className={styles.qsValue}>{wordLimitSummary}</div>
            </div>
            <div className={styles.qsItem}>
              <div className={styles.qsLabel}>Last Updated</div>
              <div className={styles.qsValue}>2024 Cycle</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCHOOL NAV BAR ──────────────────────────────────────────── */}
      <div className={styles.schoolNavBar}>
        {adj.prev ? (
          <Link
            href={`/database/${adj.prev.slug}`}
            className={styles.schoolNavBtn}
          >
            ← {adj.prev.abbr}
          </Link>
        ) : (
          <span className={`${styles.schoolNavBtn} ${styles.schoolNavBtnDisabled}`}>
            ← Previous
          </span>
        )}
        <div className={styles.schoolNavCenter}>
          {schools.length} Schools in Database
        </div>
        {adj.next ? (
          <Link
            href={`/database/${adj.next.slug}`}
            className={styles.schoolNavBtn}
          >
            {adj.next.abbr} →
          </Link>
        ) : (
          <span className={`${styles.schoolNavBtn} ${styles.schoolNavBtnDisabled}`}>
            Next →
          </span>
        )}
      </div>

      {/* ── MAIN LAYOUT ─────────────────────────────────────────────── */}
      <div className={styles.mainLayout}>

        {/* LEFT CONTENT */}
        <div>
          {hasSections && <SectionNav sections={navSections} />}

          {/* Distribution block */}
          <div className={styles.contentBlock} id="distribution">
            <div className={styles.blockHeader}>
              <div className={styles.blockIcon}>📬</div>
              <div>
                <div className={styles.blockTitle}>Secondary Distribution</div>
                <div className={styles.blockSubtitle}>
                  Who receives the secondary application
                </div>
              </div>
            </div>
            <div className={styles.deliveryBanner}>
              <span className={styles.deliveryIcon}>ℹ️</span>
              <div>
                <strong>Supplemental questions are distributed via:</strong>{" "}
                {detail.distributionDetail}
              </div>
            </div>
          </div>

          {/* Questions block */}
          <div className={styles.contentBlock} id="questions">
            <div className={styles.blockHeader}>
              <div className={styles.blockIcon}>📋</div>
              <div>
                <div className={styles.blockTitle}>Secondary Questions</div>
                <div className={styles.blockSubtitle}>
                  {totalQuestions === 0
                    ? "No essay responses required"
                    : `${totalQuestions} question${totalQuestions !== 1 ? "s" : ""} total`}
                </div>
              </div>
              {totalQuestions > 0 && (
                <div className={styles.distBadge}>
                  {totalQuestions} Question{totalQuestions !== 1 ? "s" : ""}{" "}
                  · {wordLimitSummary}
                </div>
              )}
            </div>

            {totalQuestions === 0 ? (
              <div className={styles.noEssayBox}>
                <strong>📭 No Essay Questions</strong>
                {detail.noEssayNote ?? "This school does not require supplemental essay responses."}
              </div>
            ) : (
              <>
                <div className={styles.questionsList}>
                  {questionGroups.map((group, gi) => {
                    let globalIdx = 0;
                    for (let i = 0; i < gi; i++) globalIdx += questionGroups[i].questions.length;
                    return (
                      <div key={gi} className={styles.questionGroup}>
                        {group.label && (
                          <div className={styles.groupLabel}>{group.label}</div>
                        )}
                        {group.questions.map((q, qi) => {
                          const idx = globalIdx + qi;
                          return (
                            <div key={idx} className={styles.questionCard}>
                              <div className={styles.qTop}>
                                <div className={styles.qNum}>{idx + 1}</div>
                                <div className={styles.qText}>{q.text}</div>
                                <div className={styles.qActions}>
                                  <CopyBtn text={q.text} />
                                </div>
                              </div>
                              <div className={styles.qMeta}>
                                <span
                                  className={
                                    q.tag === "required"
                                      ? styles.qTagRequired
                                      : q.tag === "optional"
                                      ? styles.qTagOptional
                                      : styles.qTagOptional
                                  }
                                >
                                  {q.tag === "required"
                                    ? "Required"
                                    : q.tag === "optional"
                                    ? "Optional"
                                    : "Conditional"}
                                </span>
                                {q.limit && (
                                  <span className={styles.qTagNoLimit}>
                                    {q.limit === "No Limit"
                                      ? "No Word / Character Limit"
                                      : q.limit}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>

                {/* Copy All */}
                <div className={styles.copyAllBar}>
                  <CopyAllBtn
                    questions={allQuestionTexts}
                    className={styles.copyAllBtn}
                  />
                </div>
              </>
            )}
          </div>

          {/* Tips block */}
          <div className={styles.contentBlock} id="tips">
            <div className={styles.blockHeader}>
              <div className={styles.blockIcon}>💡</div>
              <div>
                <div className={styles.blockTitle}>
                  Writing Tips for {detail.abbr}
                </div>
                <div className={styles.blockSubtitle}>
                  Expert advice for this specific school
                </div>
              </div>
            </div>
            <div className={styles.tipsList}>
              {detail.tips.map((tip, i) => (
                <div key={i} className={styles.tipRow}>
                  <span className={styles.tipEmoji}>{tip.emoji}</span>
                  <div>
                    <span className={styles.tipTitle}>{tip.title}:</span>{" "}
                    {tip.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className={styles.sidebar}>

          {/* Status Card */}
          <div className={styles.statusCard}>
            <div className={styles.statusCardTitle}>School Status</div>
            <div className={styles.statusRow}>
              <span className={styles.srLabel}>Secondary</span>
              <span className={`${styles.srVal} ${getStatusClass(status)}`}>
                {getStatusLabel(status)}
              </span>
            </div>
            <div className={styles.statusRow}>
              <span className={styles.srLabel}>State</span>
              <span className={styles.srVal}>
                {detail.stateFull} ({detail.stateAbbr})
              </span>
            </div>
            <div className={styles.statusRow}>
              <span className={styles.srLabel}>Questions</span>
              <span className={styles.srVal}>
                {totalQuestions === 0 ? "None" : totalQuestions}
              </span>
            </div>
            <div className={styles.statusRow}>
              <span className={styles.srLabel}>Distribution</span>
              <span className={`${styles.srVal} ${styles.srValTeal}`}>
                {detail.distribution}
              </span>
            </div>
            <div className={styles.statusRow}>
              <span className={styles.srLabel}>Last Updated</span>
              <span className={styles.srVal}>2024 Cycle</span>
            </div>
          </div>

          {/* Help card */}
          <div className={styles.sidebarCard}>
            <span className={styles.scEmoji}>🎯</span>
            <div className={styles.scTitle}>Need Help With {detail.abbr}?</div>
            <p className={styles.scDesc}>
              Our admissions experts can review your {detail.abbr} secondary
              essays and give you personalized feedback.
            </p>
            <a href="#" className={styles.scBtn}>
              Get Essay Review
            </a>
            <a href="#" className={`${styles.scBtn} ${styles.scBtnGhost}`}>
              Book a Free Consult
            </a>
          </div>

          {/* Checklist card */}
          <div className={styles.sidebarCard}>
            <span className={styles.scEmoji}>✅</span>
            <div className={styles.scTitle}>{detail.abbr} Checklist</div>
            <div>
              {[
                `Read ${detail.abbr}'s mission statement`,
                `Pre-write all ${totalQuestions || ""} essays`.trim(),
                "Have someone proofread",
                "Submit within 2 weeks",
                "Confirm submission email",
              ].map((item, i) => (
                <label key={i} className={styles.checklistItem}>
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Newsletter sidebar card */}
          <div
            className={`${styles.sidebarCard} ${styles.sidebarNewsletterCard}`}
          >
            <span className={styles.scEmoji}>📬</span>
            <div className={styles.scTitle}>Stay Updated</div>
            <p className={styles.scDesc}>
              Get notified when {detail.abbr} updates their secondary or
              deadlines change.
            </p>
            <input
              type="email"
              placeholder="Your email…"
              className={styles.emailInput}
            />
            <a href="#" className={styles.scBtn}>
              Subscribe Free
            </a>
          </div>
        </aside>
      </div>

      {/* ── NEWSLETTER ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: "80px 8%",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            padding: "60px",
            maxWidth: "640px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--teal)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "var(--teal)",
              }}
            />
            Stay Updated
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.9rem",
              marginBottom: "10px",
            }}
          >
            Sign Up for Our Newsletter
          </h2>
          <p
            style={{
              color: "var(--muted)",
              marginBottom: "28px",
              fontSize: "0.93rem",
            }}
          >
            Get the latest deadlines, school updates, and application tips
            delivered straight to your inbox.
          </p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "6px 6px 6px 18px",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address…"
              style={{
                flex: 1,
                background: "none",
                border: "none",
                outline: "none",
                fontFamily: "inherit",
                color: "var(--white)",
                fontSize: "0.9rem",
              }}
            />
            <button
              style={{
                background: "linear-gradient(135deg, var(--teal), var(--teal-light))",
                color: "var(--navy)",
                border: "none",
                padding: "11px 22px",
                borderRadius: "8px",
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
