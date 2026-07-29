import type { Metadata } from "next";
import { DatabasePage } from "@/features/database/components/database-page";
import { JsonLd } from "@/shared/components/seo/json-ld";
import { schools } from "@/features/database/data/schools";

export const metadata: Metadata = {
  title: "Dental School Secondary Database — All 66 Schools",
  description:
    "Browse secondary application prompts, essay questions, word limits, and deadlines for all 66 accredited U.S. dental schools. Filter by state, search by school name, and pre-write your essays before the cycle opens.",
  keywords: [
    "dental school secondary database",
    "dental school secondary prompts",
    "dental school secondary questions 2025",
    "dental school secondary application",
    "AADSAS secondary prompts",
    "dental school essay questions",
    "dental school application database",
  ],
  openGraph: {
    title: "Dental School Secondary Database — All 66 Schools",
    description:
      "Browse secondary prompts, essay questions, and deadlines for all 66 accredited U.S. dental schools. Free to access.",
    url: "https://www.dentalschoolsecondary.com/database",
    type: "website",
  },
  alternates: {
    canonical: "https://www.dentalschoolsecondary.com/database",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "U.S. Dental School Secondary Application Database",
  description:
    "Secondary application prompts, essay questions, and writing tips for all 66 accredited U.S. dental schools.",
  url: "https://www.dentalschoolsecondary.com/database",
  numberOfItems: schools.length,
  itemListElement: schools.map((school, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: school.name,
    url: `https://www.dentalschoolsecondary.com/database/${school.slug}`,
  })),
};

export default function DatabaseRoute() {
  return (
    <>
      <JsonLd data={itemListSchema} />
      <DatabasePage />
    </>
  );
}
