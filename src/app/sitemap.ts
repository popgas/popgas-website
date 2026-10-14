import type { MetadataRoute } from 'next';
import { allFeatureParams } from '@/content/modules';
import { listIndexableBlogPosts } from '@/lib/blog';
import { absoluteUrl } from '@/lib/site';

// Revalida de hora em hora para pegar posts novos do blog sem precisar de novo deploy.
export const revalidate = 3600;

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/planos', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/recursos', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/recursos/essencial', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/recursos/gestao', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/recursos/fiscal', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/recursos/tech-ia', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/recursos/revendas-de-gas', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/contato', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/sobre-nos', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/termos', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/privacidade', priority: 0.2, changeFrequency: 'yearly' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const posts = await listIndexableBlogPosts();

  return [
    ...STATIC_ROUTES.map(r => ({ url: absoluteUrl(r.path), lastModified: now, changeFrequency: r.changeFrequency, priority: r.priority })),
    ...allFeatureParams().map(({ module, feature }) => ({
      url: absoluteUrl(`/recursos/${module}/${feature}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // O /blog só entra quando tiver post indexável (sem posts ele fica noindex).
    ...(posts.length > 0
      ? [
          { url: absoluteUrl('/blog'), lastModified: posts[0].publishedAt, changeFrequency: 'weekly' as const, priority: 0.6 },
          ...posts.map(p => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: p.publishedAt, changeFrequency: 'monthly' as const, priority: 0.5 })),
        ]
      : []),
  ];
}
