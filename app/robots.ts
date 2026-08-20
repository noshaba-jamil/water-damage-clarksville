import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/admin/", "/api/blog/posts/"],
      },
      // ✅ Allow Facebook scraper
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      // ✅ Allow Twitter scraper
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
    ],
    sitemap: "https://water-damage-clarksville.com/sitemap.xml",
    host: "https://water-damage-clarksville.com",
  };
}