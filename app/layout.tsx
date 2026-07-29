import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dentalschoolsecondary.com"),
  title: {
    default: "Dental School Secondary — Secondary Application Database",
    template: "%s | Dental School Secondary",
  },
  description:
    "The #1 database of dental school secondary application prompts, essay questions, deadlines, and writing tips for all 66 accredited U.S. dental schools. Pre-write your secondaries and get accepted.",
  keywords: [
    "dental school secondary application",
    "dental school secondary prompts",
    "dental school secondary questions",
    "dental school secondary essays",
    "AADSAS secondary",
    "dental school application",
    "pre-dental",
    "DAT preparation",
  ],
  authors: [{ name: "Dental School Secondary" }],
  openGraph: {
    type: "website",
    siteName: "Dental School Secondary",
    title: "Dental School Secondary — Secondary Application Database",
    description:
      "The #1 database of dental school secondary application prompts and essay questions for all 66 accredited U.S. dental schools.",
    url: "https://www.dentalschoolsecondary.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental School Secondary — Secondary Application Database",
    description:
      "The #1 database of dental school secondary application prompts and essay questions for all 66 accredited U.S. dental schools.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

