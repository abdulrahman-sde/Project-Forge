/* ═══════════════════════════════════════════
   CENTRAL SEO CONFIGURATION
   ═══════════════════════════════════════════ */

/** Base site URL — update when domain is finalized */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://getgrade.tech";

export const SITE_NAME = "GetGrade";

export const SITE_DESCRIPTION =
  "We build and document complete Final Year Projects for university students. Expert web, AI/ML & mobile development with full SRS, reports, and presentations — delivered on time, every time.";

export const SITE_TAGLINE = "Complete FYP Development & Documentation Agency";

/** Default OG image path (relative to public/) */
export const DEFAULT_OG_IMAGE = "/og_image.png";

/** Social links */
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/getgrade",
  github: "https://github.com/getgrade",
  linkedin: "https://linkedin.com/company/getgrade",
  instagram: "https://instagram.com/getgrade",
} as const;

/** Twitter handle for card attribution */
export const TWITTER_HANDLE = "@getgrade";

/** Primary keywords for the site */
export const PRIMARY_KEYWORDS = [
  "final year project",
  "FYP help",
  "FYP development",
  "FYP agency",
  "FYP development agency",
  "project documentation",
  "SRS document",
  "university project help",
  "AI project development",
  "web development FYP",
  "mobile app FYP",
  "final year project documentation",
  "FYP SRS writing",
  "FYP presentation",
  "viva preparation",
  "university project agency",
  "complete FYP solution",
  "FYP experts",
  "hire FYP developer",
  "getgrade",
  "get grade FYP",
  "buy final year project",
  "FYP for sale",
  "custom FYP development",
] as const;

/** Canonical URL builder */
export function canonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/** Build full page title with site name suffix */
export function pageTitle(title: string): string {
  return `${title} — ${SITE_NAME}`;
}
