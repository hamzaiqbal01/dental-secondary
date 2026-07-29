import type { Metadata } from "next";
import { LandingPage } from "@/features/landing/components/landing-page";
import { JsonLd } from "@/shared/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Dental School Secondary — #1 Secondary Application Database",
  description:
    "Access the most complete database of dental school secondary application prompts, essay questions, deadlines, and expert writing tips for all 66 U.S. dental schools. Pre-write your essays and submit faster.",
  keywords: [
    "dental school secondary application",
    "dental school secondary prompts 2025",
    "dental school secondary questions",
    "dental school application database",
    "pre-dental application help",
    "AADSAS secondary",
    "dental school essays",
    "how to get into dental school",
  ],
  openGraph: {
    title: "Dental School Secondary — #1 Secondary Application Database",
    description:
      "The most complete database of dental school secondary prompts and essay questions for all 66 accredited U.S. dental schools. Free to access.",
    url: "https://www.dentalschoolsecondary.com",
    type: "website",
  },
  alternates: {
    canonical: "https://www.dentalschoolsecondary.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dental School Secondary",
  url: "https://www.dentalschoolsecondary.com",
  logo: "https://www.dentalschoolsecondary.com/favicon.ico",
  description:
    "The #1 database of dental school secondary application prompts, essay questions, and writing tips for all 66 accredited U.S. dental schools.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "dentalschoolsecondary@gmail.com",
    contactType: "customer support",
  },
  sameAs: [
    "https://www.facebook.com/groups/dentalschoolinterviewbootcamp",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dental School Secondary",
  url: "https://www.dentalschoolsecondary.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.dentalschoolsecondary.com/database?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <LandingPage />
    </>
  );
}

