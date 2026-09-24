/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance
  compress: true,
  poweredByHeader: false,

  // Images
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },

  // Experimental
  experimental: {
    serverActions: {
      allowedOrigins: [
        "water-damage-clarksville.com",
        "www.water-damage-clarksville.com", // fixed: was missing hyphens, so it matched the wrong domain
        "localhost:3000",
        "localhost:3001",
      ],
    },
    optimizePackageImports: ["react", "react-dom"],
  },

  // Security + caching headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/favicon(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/(.*)\\.svg",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },

  async redirects() {
    return [
      // www → non-www (handled by Vercel domains, but just in case)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.water-damage-clarksville.com" }],
        destination: "https://water-damage-clarksville.com/:path*", // fixed: was missing the leading slash before :path*
        permanent: true,
      },

      // Retired location pages: too far from Clarksville (45-55+ min) or too little
      // real content to be worth keeping. Each had 0-6 Search Console impressions
      // and none had any clicks. Redirected to the service-areas hub instead of
      // left as thin, near-duplicate pages. Reviewed 2026-09.
      { source: "/locations/erin-tn", destination: "/service-areas", permanent: true },
      { source: "/locations/indian-mound-tn", destination: "/service-areas", permanent: true },
      { source: "/locations/cumberland-city-tn", destination: "/service-areas", permanent: true },
      { source: "/locations/big-rock-tn", destination: "/service-areas", permanent: true },
      { source: "/locations/chapmansboro-tn", destination: "/service-areas", permanent: true },
      { source: "/locations/charlotte-tn", destination: "/service-areas", permanent: true },
      { source: "/locations/cumberland-furnace-tn", destination: "/service-areas", permanent: true },
      // { source: "/locations/trenton-tn", destination: "/service-areas", permanent: true }, // uncomment once the county is confirmed
    ];
  },
};

module.exports = nextConfig;