import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { NewsletterSection } from "@/shared/components/newsletter/newsletter-section";
import { blogPosts, getBlogPost, type BlogPost } from "../data/posts";
import styles from "./blog-post-page.module.css";

type Props = { slug: string };

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

export function BlogPostPage({ slug }: Props) {
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

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
            <Link href="/blog">Blog</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCur}>{post.category}</span>
          </nav>
          <div className={`${styles.categoryBadge} ${categoryClass(post.categoryColor)}`}>
            {post.coverEmoji} {post.category}
          </div>
          <h1 className={styles.pageTitle}>{post.title}</h1>
          <div className={styles.pageMeta}>
            <span className={styles.pageMetaItem}>📅 {formatDate(post.publishedAt)}</span>
            <span className={styles.pageMetaItem}>⏱ {post.readTime}</span>
            <span className={styles.pageMetaItem}>✍️ {post.author}</span>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <div className={styles.main}>
        <div className={styles.layout}>

          {/* ── ARTICLE ── */}
          <div>
            <div className={styles.backRow}>
              <Link href="/blog" className={styles.backLink}>
                ← Back to Blog
              </Link>
            </div>

            <div className={styles.heroImageWrap}>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 960px) 100vw, 720px"
                className={styles.heroImage}
              />
            </div>

            <article className={styles.article}>
              {post.content.map((section) => (
                <section key={section.id} className={styles.section}>
                  <span id={section.id} className={styles.sectionAnchor} />
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <div
                    className={styles.sectionBody}
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </section>
              ))}
            </article>

            {/* ── MORE POSTS ── */}
            {related.length > 0 && (
              <div className={styles.moreSection}>
                <p className={styles.moreSectionLabel}>More Articles</p>
                <div className={styles.moreGrid}>
                  {related.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.moreCard}>
                      <span className={styles.moreCardThumb}>
                        <Image
                          src={p.coverImage}
                          alt=""
                          fill
                          sizes="200px"
                          className={styles.moreCardThumbImg}
                        />
                      </span>
                      <span className={styles.moreCardTitle}>{p.title}</span>
                      <span className={styles.moreCardArrow}>Read article →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <aside className={styles.sidebar}>
            {/* Table of Contents */}
            <div className={styles.tocCard}>
              <p className={styles.tocCardTitle}>In This Article</p>
              <ol className={styles.tocList}>
                {post.content.map((s) => (
                  <li key={s.id} className={styles.tocItem}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA — Database */}
            <div className={styles.ctaCard}>
              <span className={styles.ctaEmoji}>🦷</span>
              <p className={styles.ctaTitle}>Browse Secondary Questions</p>
              <p className={styles.ctaDesc}>
                Access secondary essay prompts for all 66 U.S. dental schools — organized, searchable, and free.
              </p>
              <Link href="/database" className={styles.ctaLink}>
                Open Database →
              </Link>
            </div>

            {/* CTA — Resources */}
            <div className={styles.ctaCard}>
              <span className={styles.ctaEmoji}>📚</span>
              <p className={styles.ctaTitle}>More Resources</p>
              <p className={styles.ctaDesc}>
                Guides, expert tools, and communities to support your entire application.
              </p>
              <Link href="/resources" className={styles.ctaLink}>
                View Resources →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
