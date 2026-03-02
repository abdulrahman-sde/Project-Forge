import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  TWITTER_HANDLE,
  PRIMARY_KEYWORDS,
  canonicalUrl,
} from "./lib/seo";
import { OrganizationJsonLd, WebSiteJsonLd } from "./components/JsonLd";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* ═══════════════════════════════════════════
   VIEWPORT  (exported separately in Next 16)
   ═══════════════════════════════════════════ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F4",
};

/* ═══════════════════════════════════════════
   GLOBAL METADATA
   ═══════════════════════════════════════════ */
export const metadata: Metadata = {
  /* ── Basics ─────────────────────────────── */
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: PRIMARY_KEYWORDS as unknown as string[],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  /* ── Canonical & Alternates ─────────────── */
  alternates: {
    canonical: canonicalUrl(),
  },

  /* ── Robots ─────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* ── Open Graph ─────────────────────────── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg", // metadataBase handles full URL
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} preview image`,
      },
    ],
  },

  /* ── Twitter Card ───────────────────────── */
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },

  /* ── Icons & Manifest ───────────────────── */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  /* ── Verification (add IDs when available) */
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_ID",
  //   yandex: "YOUR_YANDEX_ID",
  // },

  /* ── App category for rich results ──────── */
  category: "technology",
};

/* ═══════════════════════════════════════════
   ROOT LAYOUT
   ═══════════════════════════════════════════ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        {/* Global structured data */}
        <OrganizationJsonLd />
        <WebSiteJsonLd />

        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
