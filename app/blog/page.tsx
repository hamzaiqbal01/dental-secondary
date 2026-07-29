import type { Metadata } from "next";
import { BlogPage } from "@/features/blog/components/blog-page";
import { JsonLd } from "@/shared/components/seo/json-ld";
import { blogPosts } from "@/features/blog/data/posts";

export const metadata: Metadata = {
  title: "Blog — Dental School Application Guides & Tips",
  description:
    "Expert guides on writing dental school secondary essays, application strategy, DAT prep, and everything you need to submit a competitive dental school application.",
  keywords: [
    "dental school secondary application guide",
    "how to write dental school secondary essays",
    "dental school application tips",
    "dental school secondary prompts guide",
    "dental school admissions blog",
  ],
  openGraph: {
    title: "Blog — Dental School Application Guides & Tips",
    description:
      "Expert guides on writing dental school secondary essays, application strategy, and everything you need to submit a competitive application.",
    url: "https://www.dentalschoolsecondary.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://www.dentalschoolsecondary.com/blog",
  },
};

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Dental School Secondary — Application Blog",
  url: "https://www.dentalschoolsecondary.com/blog",
  description:
    "Expert guides on dental school secondary applications, essay writing, and admissions strategy.",
  publisher: {
    "@type": "Organization",
    name: "Dental School Secondary",
    url: "https://www.dentalschoolsecondary.com",
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `https://www.dentalschoolsecondary.com/blog/${post.slug}`,
    datePublished: post.publishedAt,
    description: post.excerpt,
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={blogListingSchema} />
      <BlogPage />
    </>
  );
}
