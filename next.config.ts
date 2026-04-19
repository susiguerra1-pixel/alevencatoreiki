import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /* ── Compressão gzip automática ── */
  compress: true,

  /* ── Remove header "X-Powered-By: Next.js" (segurança) ── */
  poweredByHeader: false,

  /* ── Imagens: AVIF + WebP, tamanhos mobile-first, cache longo ── */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 ano
  },

  /* ── Headers HTTP de segurança e cache ── */
  async headers() {
    const csp = [
      "default-src 'self'",
      // Scripts: próprio site + GTM + GA4 + Google Ads + Meta Pixel
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://ssl.google-analytics.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://connect.facebook.net",
      // Imagens: próprio site + pixels Google + Meta
      "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://stats.g.doubleclick.net https://www.google.com https://www.google.com.br https://googleads.g.doubleclick.net https://www.facebook.com",
      // Conexões: GA4 + GTM + Meta
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://region1.analytics.google.com https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net",
      // Fontes: Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Estilos
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Frames: Google Ads + Meta + Google Maps
      "frame-src https://bid.g.doubleclick.net https://td.doubleclick.net https://www.googletagmanager.com https://www.facebook.com https://maps.google.com https://www.google.com",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",        value: "nosniff" },
          { key: "X-Frame-Options",               value: "DENY" },
          { key: "Referrer-Policy",               value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",            value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy",       value: csp },
        ],
      },
      /* Cache longo para assets estáticos */
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      /* Cache longo para favicon */
      {
        source: "/favicon.svg",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      /* Cache moderado para páginas */
      {
        source: "/",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
