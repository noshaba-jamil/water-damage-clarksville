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
        "waterdamageclarksville.com",
        "www.waterdamageclarksville.com",
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
        has: [{ type: "host", value: "www.waterdamageclarksville.com" }],
        destination: "https://waterdamageclarksville.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
