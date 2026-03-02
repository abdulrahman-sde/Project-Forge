import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";
import { PROJECT_SLUGS } from "./lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Dynamic project/case-study pages
  const projectPages: MetadataRoute.Sitemap = PROJECT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
