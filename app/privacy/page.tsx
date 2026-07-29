import type { Metadata } from "next";
import { PrivacyPage } from "@/features/legal/components/privacy-page";
import { JsonLd } from "@/shared/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Dental School Secondary's Privacy Policy — learn how we collect, use, and protect your personal information when you use our secondary application database.",
  alternates: {
    canonical: "https://www.dentalschoolsecondary.com/privacy",
  },
  robots: { index: true, follow: true },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy — Dental School Secondary",
  url: "https://www.dentalschoolsecondary.com/privacy",
  description: "Privacy policy for Dental School Secondary.",
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
      <PrivacyPage />
    </>
  );
}
