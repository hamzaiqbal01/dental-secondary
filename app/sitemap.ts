import type { MetadataRoute } from "next";
import { schoolDetails } from "@/features/database/data/school-details";

const BASE_URL = "https://www.dentalschoolsecondary.com";

// Use static ISO dates so Google doesn't think content changes every deploy.
// Update these when you actually publish new content.
const LAST_UPDATED_HOME = "2026-03-26";
const LAST_UPDATED_DB = "2026-03-26";
const LAST_UPDATED_SCHOOLS = "2026-03-26";
const LAST_UPDATED_STATIC = "2026-03-01";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED_HOME,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/database`,
      lastModified: LAST_UPDATED_DB,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: LAST_UPDATED_STATIC,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_UPDATED_STATIC,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const schoolPages: MetadataRoute.Sitemap = schoolDetails.map((school) => ({
    url: `${BASE_URL}/database/${school.slug}`,
    lastModified: LAST_UPDATED_SCHOOLS,
    changeFrequency: "monthly" as const,
    priority: school.questions.length > 0 ? 0.8 : 0.5,
  }));

  return [...staticPages, ...schoolPages];
}
