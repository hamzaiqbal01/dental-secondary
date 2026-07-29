/**
 * Google Indexing API — Bulk URL Submission Script
 *
 * SETUP:
 *   1. Place your service-account.json in the project root
 *   2. Run: npm install googleapis
 *   3. Run: node scripts/submit-indexing.mjs
 *
 * Limit: 200 URLs/day on free tier
 */

import { google } from "googleapis";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Load service account credentials ──────────────────────────────────────
const keyFile = join(__dirname, "..", "service-account.json");
let credentials;
try {
  credentials = JSON.parse(readFileSync(keyFile, "utf-8"));
} catch {
  console.error("❌ service-account.json not found in project root.");
  console.error("   Download it from Google Cloud → IAM → Service Accounts → Keys");
  process.exit(1);
}

// ── All URLs to submit ─────────────────────────────────────────────────────
const BASE = "https://www.dentalschoolsecondary.com";

const URLS = [
  // Static pages
  BASE + "/",
  BASE + "/database",
  BASE + "/resources",
  BASE + "/contact",
  BASE + "/blog",
  BASE + "/privacy",
  BASE + "/terms",

  // Blog posts (SEO keyword-targeted)
  BASE + "/blog/when-do-dental-schools-send-secondaries",
  BASE + "/blog/nyu-dental-secondary-questions",
  BASE + "/blog/ucla-dental-secondary-essays",
  BASE + "/blog/usc-dental-secondary-questions",
  BASE + "/blog/dental-school-secondary-application-cost",
  BASE + "/blog/how-to-write-dental-school-secondary-essays",

  // School detail pages (40 with full content — indexed)
  BASE + "/database/university-of-alabama-school-of-dentistry",
  BASE + "/database/at-still-university-arizona-school-of-dentistry",
  BASE + "/database/midwestern-university-college-of-dental-medicine-arizona",
  BASE + "/database/california-northstate-university-college-of-dental-medicine",
  BASE + "/database/loma-linda-university-school-of-dentistry",
  BASE + "/database/ucla-school-of-dentistry",
  BASE + "/database/ucsf-school-of-dentistry",
  BASE + "/database/usc-ostrow-school-of-dentistry",
  BASE + "/database/western-university-health-sciences-college-of-dental-medicine",
  BASE + "/database/university-of-colorado-school-of-dental-medicine",
  BASE + "/database/university-of-connecticut-school-of-dental-medicine",
  BASE + "/database/howard-university-college-of-dentistry",
  BASE + "/database/dental-college-of-georgia-augusta-university",
  BASE + "/database/midwestern-university-college-of-dental-medicine-illinois",
  BASE + "/database/southern-illinois-university-school-of-dental-medicine",
  BASE + "/database/indiana-university-school-of-dentistry",
  BASE + "/database/university-of-iowa-college-of-dentistry",
  BASE + "/database/university-of-kentucky-college-of-dentistry",
  BASE + "/database/university-of-louisville-school-of-dentistry",
  BASE + "/database/louisiana-state-university-school-of-dentistry",
  BASE + "/database/university-of-new-england-college-of-dental-medicine",
  BASE + "/database/boston-university-school-of-dental-medicine",
  BASE + "/database/tufts-university-school-of-dental-medicine",
  BASE + "/database/university-of-michigan-school-of-dentistry",
  BASE + "/database/university-of-minnesota-school-of-dentistry",
  BASE + "/database/at-still-university-missouri-school-of-dentistry",
  BASE + "/database/university-of-missouri-kansas-city-school-of-dentistry",
  BASE + "/database/creighton-university-school-of-dentistry",
  BASE + "/database/university-of-nebraska-medical-center-college-of-dentistry",
  BASE + "/database/nyu-college-of-dentistry",
  BASE + "/database/stony-brook-university-school-of-dental-medicine",
  BASE + "/database/east-carolina-university-school-of-dental-medicine",
  BASE + "/database/unc-adams-school-of-dentistry",
  BASE + "/database/case-western-reserve-university-school-of-dental-medicine",
  BASE + "/database/ohio-state-university-college-of-dentistry",
  BASE + "/database/university-of-pittsburgh-school-of-dental-medicine",
  BASE + "/database/university-of-pennsylvania-school-of-dental-medicine",
  BASE + "/database/medical-university-of-south-carolina-college-of-dental-medicine",
  BASE + "/database/meharry-medical-college-school-of-dentistry",
  BASE + "/database/university-of-utah-school-of-dentistry",
  BASE + "/database/virginia-commonwealth-university-school-of-dentistry",
  BASE + "/database/university-of-washington-school-of-dentistry",
];

// ── Authenticate ───────────────────────────────────────────────────────────
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/indexing"],
});

const client = await auth.getClient();

// ── Submit URLs with delay to avoid rate limiting ──────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function submitUrl(url) {
  try {
    const res = await client.request({
      url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
      method: "POST",
      data: { url, type: "URL_UPDATED" },
    });
    console.log(`✅ ${res.status} — ${url}`);
  } catch (err) {
    const status = err?.response?.status;
    const message = err?.response?.data?.error?.message || err.message;
    console.error(`❌ ${status || "ERR"} — ${url}`);
    console.error(`   ${message}`);
  }
}

console.log(`\n🦷 Dental School Secondary — Google Indexing API`);
console.log(`📋 Submitting ${URLS.length} URLs...\n`);

for (let i = 0; i < URLS.length; i++) {
  await submitUrl(URLS[i]);
  // 300ms delay between requests to stay within rate limits
  if (i < URLS.length - 1) await sleep(300);
}

console.log(`\n✅ Done! ${URLS.length} URLs submitted.`);
console.log(`⏱  Check indexing status in 24–48 hours via Google Search Console.`);
