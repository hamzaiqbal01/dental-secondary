import type { Metadata } from "next";
import { SchoolDetailPage } from "@/features/database/components/school-detail-page";
import { schoolDetails, getSchoolDetail } from "@/features/database/data/school-details";
import { JsonLd } from "@/shared/components/seo/json-ld";

export async function generateStaticParams() {
  return schoolDetails.map((s) => ({ slug: s.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const school = getSchoolDetail(slug);

  if (!school) {
    return {
      title: "School Not Found",
      description: "This dental school could not be found in our database.",
    };
  }

  const totalQuestions = school.questions.length;
  const title = `${school.name} Secondary Application — Questions & Essays`;
  const description = `${totalQuestions > 0 ? `${totalQuestions} secondary essay prompts` : "Secondary application info"} for ${school.name} (${school.abbr}). Get writing tips, word limits, and expert advice to submit a strong ${school.abbr} secondary application.`;

  // Pages with no secondary questions are thin content — prevent indexing
  // until real essay data is added, so they don't drag down site-wide quality.
  const hasThinContent = totalQuestions === 0;

  return {
    title,
    description,
    keywords: [
      `${school.name} secondary application`,
      `${school.abbr} secondary questions`,
      `${school.abbr} secondary essays`,
      `${school.abbr} dental school secondary`,
      `${school.name} secondary prompts`,
      `${school.stateFull} dental school secondary`,
      "dental school secondary application",
      "dental school secondary prompts",
    ],
    openGraph: {
      title,
      description,
      url: `https://www.dentalschoolsecondary.com/database/${slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://www.dentalschoolsecondary.com/database/${slug}`,
    },
    robots: hasThinContent
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const school = getSchoolDetail(slug);

  const breadcrumbSchema = school
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.dentalschoolsecondary.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Secondary Database",
            item: "https://www.dentalschoolsecondary.com/database",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: school.name,
            item: `https://www.dentalschoolsecondary.com/database/${slug}`,
          },
        ],
      }
    : null;

  return (
    <>
      {breadcrumbSchema && <JsonLd data={breadcrumbSchema} />}
      <SchoolDetailPage slug={slug} />
    </>
  );
}
