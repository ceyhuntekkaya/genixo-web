import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.genixo.ai" }],
        destination: "https://genixo.ai/:path*",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.genixo.ai" }],
        destination: "https://genixo.ai/",
        permanent: true,
      },
      {
        source: "/:locale(tr|en|de|fr|ru)/service",
        destination: "/:locale/solutions",
        permanent: true,
      },
      {
        source: "/:locale(tr|en|de|fr|ru)/service/:type",
        destination: "/:locale/solutions/:type",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
