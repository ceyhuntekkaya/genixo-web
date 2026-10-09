import type { NextConfig } from "next";

/** Site v1 paths and where their content lives now. More specific paths first. */
const LEGACY_REDIRECTS: Array<[string, string]> = [
  ["/service", "/services"],
  ["/service/:type", "/services"],
  ["/solutions/ai-integration", "/ai-automation"],
  ["/solutions/digital-transformation", "/ai-readiness-assessment"],
  ["/solutions/business-process-digitalization", "/custom-software"],
  ["/solutions/smart-reporting-analytics", "/custom-software"],
  ["/solutions/system-improvement-modernization", "/custom-software"],
  ["/solutions/cost-optimization", "/custom-software"],
  ["/solutions/product-project-development", "/product-studio"],
  ["/solutions", "/services"],
  ["/government-support", "/pricing"],
  ["/case-study", "/case-studies"],
  ["/case-study/:slug", "/case-studies/:slug"],
  ["/authors/:slug", "/team/:slug"],
];

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
        source: "/:old(de|fr|ru)",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/:old(de|fr|ru)/:path*",
        destination: "/en/:path*",
        permanent: true,
      },
      ...LEGACY_REDIRECTS.map(([from, to]) => ({
        source: `/:locale(tr|en)${from}`,
        destination: `/:locale${to}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
