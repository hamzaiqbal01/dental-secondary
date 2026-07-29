import ContactPage from "@/features/contact/components/contact-page";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Dental School Secondary",
  description:
    "Have a question about dental school applications or our secondary database? Get in touch with the Dental School Secondary team — we typically respond within 1–2 business days.",
  openGraph: {
    title: "Contact Us — Dental School Secondary",
    description:
      "Get in touch with the Dental School Secondary team. We're here to help with your dental school application.",
    url: "https://www.dentalschoolsecondary.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://www.dentalschoolsecondary.com/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
