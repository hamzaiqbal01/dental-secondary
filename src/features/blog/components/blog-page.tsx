import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { NewsletterSection } from "@/shared/components/newsletter/newsletter-section";
import { blogPosts, type BlogPost } from "../data/posts";
import styles from "./blog-page.module.css";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function categoryClass(color: BlogPost["categoryColor"]) {
  if (color === "gold") return styles.categoryGold;
  if (color === "blue") return styles.categoryBlue;
  return styles.categoryTeal;
}

export function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

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
            <span className={styles.breadcrumbCur}>Blog</span>
          </nav>
          <div className={styles.pageBadge}>📚 Guides & Tips</div>
          <h1 className={styles.pageTitle}>
            Dental School <em className={styles.pageTitleEm}>Application Blog</em>
          </h1>
          <p className={styles.pageSub}>
            Expert guides, writing tips, and strategy articles to help you navigate every
            step of the dental school secondary application process.
          </p>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className={styles.main}>

        {/* ── CATEGORY FILTER LABELS ── */}
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>Topics:</span>
          <span className={`${styles.filterBtn} ${styles.filterBtnActive}`}>All Articles</span>
          <span className={styles.filterBtn}>School Guides</span>
          <span className={styles.filterBtn}>Essay Writing</span>
          <span className={styles.filterBtn}>Application Strategy</span>
        </div>

        {/* ── ARTICLES GRID ── */}
        <div className={styles.grid}>
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              <div className={styles.cardCover}>
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.cardCoverImg}
                />
                <span className={styles.cardCoverEmoji} aria-hidden>
                  {post.coverEmoji}
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={`${styles.categoryBadge} ${categoryClass(post.categoryColor)}`}>
                    {post.category}
                  </span>
                  <span className={styles.readTime}>⏱ {post.readTime}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardDate}>{formatDate(post.publishedAt)}</span>
                  <span className={styles.cardArrow}>Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
