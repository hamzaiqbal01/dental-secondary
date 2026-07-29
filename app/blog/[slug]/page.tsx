import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/features/blog/components/blog-post-page";
import { JsonLd } from "@/shared/components/seo/json-ld";
import { blogPosts, getBlogPost } from "@/features/blog/data/posts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.dentalschoolsecondary.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: `https://www.dentalschoolsecondary.com${post.coverImage}`,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://www.dentalschoolsecondary.com/blog/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://www.dentalschoolsecondary.com/blog/${slug}`,
    datePublished: post.publishedAt,
    image: `https://www.dentalschoolsecondary.com${post.coverImage}`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.dentalschoolsecondary.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Dental School Secondary",
      url: "https://www.dentalschoolsecondary.com",
    },
    keywords: post.keywords.join(", "),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dentalschoolsecondary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.dentalschoolsecondary.com/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://www.dentalschoolsecondary.com/blog/${slug}` },
      ],
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogPostPage slug={slug} />
    </>
  );
}
