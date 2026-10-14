/**
 * Endereço público oficial do site. A Vercel serve o site em www e redireciona o domínio sem www,
 * então canônicas, sitemap, robots e dados estruturados precisam apontar para www.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.popgas.com.br').replace(/\/$/, '');

export const SITE_NAME = 'PopGás Sistema';

export const SOCIAL_PROFILES = ['https://instagram.com/popgas', 'https://www.youtube.com/@popgas_IA'];

export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
