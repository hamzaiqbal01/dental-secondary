import type { Metadata } from "next";
import { TermsPage } from "@/features/legal/components/terms-page";
import { JsonLd } from "@/shared/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Dental School Secondary's Terms of Service — the rules and guidelines for using our dental school secondary application database and resources.",
  alternates: {
    canonical: "https://www.dentalschoolsecondary.com/terms",
  },
  robots: { index: true, follow: true },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service — Dental School Secondary",
  url: "https://www.dentalschoolsecondary.com/terms",
  description: "Terms of service for Dental School Secondary.",
  publisher: {
    "@type": "Organization",
    name: "Dental School Secondary",
    url: "https://www.dentalschoolsecondary.com",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <TermsPage />
    </>
  );
}
