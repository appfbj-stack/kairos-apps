import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps.config";
import { siteConfig } from "@/lib/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, priority: 1 },
    { url: `${base}/apps`, lastModified: now, priority: 0.9 },
    ...apps.map((a) => ({
      url: `${base}/apps/${a.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}