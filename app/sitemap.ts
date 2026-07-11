  import { MetadataRoute } from "next";
import { locationsData } from "@/content/locations/locationsData";
import { servicesData } from "@/content/services/servicesData";
import { getPublishedPostsAsync } from "@/lib/blogStorage";

const BASE = "https://water-damage-clarksville.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages = [
    { url: BASE, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${BASE}/service-areas`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/emergency-water-damage-clarksville-tn`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.95 },
    { url: `${BASE}/flood-cleanup-clarksville-tn`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/mold-remediation-clarksville-tn`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/structural-drying-clarksville-tn`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${BASE}/water-damage-insurance-claim-clarksville-tn`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${BASE}/water-damage-odor-removal-clarksville-tn`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const locationPages = locationsData.map(loc => ({
    url: `${BASE}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const servicePages = servicesData.map(svc => ({
    url: `${BASE}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedPostsAsync();
    blogPages = posts.map(post => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch { /* blog dir may not exist on first build */ }

  return [...staticPages, ...locationPages, ...servicePages, ...blogPages];
}