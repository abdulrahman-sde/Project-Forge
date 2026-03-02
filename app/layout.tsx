import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

export const metadata: Metadata = {
  title: "ProjectForge — Complete FYP Development & Documentation Agency",
  description:
    "We build and document complete Final Year Projects for university students. Expert web, AI/ML development with full SRS, reports, and presentations delivered on time.",
  keywords: [
    "final year project",
    "FYP help",
    "FYP development",
    "project documentation",
    "SRS",
    "university project",
    "AI project",
    "web development",
  ],
  openGraph: {
    title: "ProjectForge — Complete FYP Development & Documentation",
    description:
      "Expert Final Year Project development and documentation services for university students.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
