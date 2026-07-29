import ResourcesPage from "@/features/resources/components/resources-page";
import { JsonLd } from "@/shared/components/seo/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental School Application Resources — Guides, Tips & Services",
  description:
    "Hand-picked guides, communities, and expert services to help you navigate every stage of the dental school application process — from DAT prep to interview day.",
  keywords: [
    "dental school application resources",
    "dental school interview prep",
    "DAT preparation",
    "dental school admissions guide",
    "how to get into dental school",
    "dental school application tips",
  ],
  openGraph: {
    title: "Dental School Application Resources — Guides, Tips & Services",
    description:
      "Hand-picked guides, communities, and expert services for every stage of the dental school application process.",
    url: "https://www.dentalschoolsecondary.com/resources",
    type: "website",
  },
  alternates: {
    canonical: "https://www.dentalschoolsecondary.com/resources",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I start working on secondary applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start working on your secondary applications as soon as you submit your primary AADSAS application in June. Pre-writing essays before receiving your secondaries gives you a significant head start.",
      },
    },
    {
      "@type": "Question",
      name: "How long should secondary essays be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most dental school secondary essays have specific word or character limits provided by the school. If no limit is given, aim for 250–500 words per response. Quality and relevance matter more than length.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Bootcamp admissions service worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have an exceptionally high satisfaction rate and are able to get students with lower academics admitted into multiple schools.",
      },
    },
    {
      "@type": "Question",
      name: "How many dental schools should I apply to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most applicants apply to 10–20 schools, but the right number depends on your GPA, DAT score, and geographic preferences. Applying broadly increases your chances, but tailor each application carefully.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a strong dental school secondary application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A strong secondary demonstrates genuine interest in the specific school, highlights unique experiences and qualities, and answers each prompt directly and honestly. Submit quickly after receiving the secondary — within 2 weeks is ideal.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ResourcesPage />
    </>
  );
}
