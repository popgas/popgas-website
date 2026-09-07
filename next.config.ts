import type { NextConfig } from 'next';

const isE2EBrowserIsolation =
  process.env.NEXT_PUBLIC_E2E_BROWSER_ISOLATION === 'true';

const e2eContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'none'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const nextConfig: NextConfig = {
  output: 'standalone',
  ...(isE2EBrowserIsolation
    ? {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                {
                  key: 'Content-Security-Policy',
                  value: e2eContentSecurityPolicy,
                },
              ],
            },
          ];
        },
      }
    : {}),
  async redirects() {
    return [
      { source: '/area-de-atendimento', destination: '/', permanent: true },
      { source: '/regras-programa-renda-popgas', destination: '/', permanent: true },
      {
        source: '/termos-de-uso-e-politica-de-privacidade-entregadores',
        destination: '/',
        permanent: true,
      },
      {
        source: '/politica-de-privacidade-e-autorizacao-para-tratamento-de-dados-popgas-entregadores',
        destination: '/',
        permanent: true,
      },
      { source: '/termos-de-uso', destination: '/termos', permanent: true },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
