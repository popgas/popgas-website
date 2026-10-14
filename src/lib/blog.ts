import { prisma } from '@/lib/db';

/**
 * Posts do site antigo, voltados ao consumidor final da revenda. Continuam acessíveis pela URL
 * (ex.: instrução de exclusão de conta exigida pelas lojas de apps), mas ficam fora da listagem,
 * do sitemap e do índice do Google, porque não falam com o público B2B do site.
 */
export const HIDDEN_BLOG_SLUGS = new Set([
  'indique-ganhe-agora-e-renda-popgas',
  'preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2025',
  'horario-de-funcionamento-dia-de-natal-25-12-2024',
  'feliz-natal-e-um-prospero-ano-novo',
  'preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2024',
  'promocao-dia-das-maes',
  'como-deletar-minha-conta-no-aplicativo',
]);

export function isIndexableBlogSlug(slug: string): boolean {
  return !HIDDEN_BLOG_SLUGS.has(slug);
}

/** Posts publicados no banco que podem ir para o sitemap/índice, do mais recente para o mais antigo. */
export async function listIndexableBlogPosts(): Promise<{ slug: string; publishedAt: Date }[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, publishedAt: true },
      orderBy: { publishedAt: 'desc' },
    });
    return posts.filter(p => isIndexableBlogSlug(p.slug));
  } catch {
    return [];
  }
}
