import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
