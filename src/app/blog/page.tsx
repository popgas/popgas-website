import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { prisma } from '@/lib/db';

const staticPosts = [
  {
    id: '1',
    title: 'Indique Ganhe agora é Renda PopGás',
    slug: 'indique-ganhe-agora-e-renda-popgas',
    excerpt:
      'O programa Indique e Ganhe evoluiu! Agora você acumula renda a cada indicação e pode trocar por descontos exclusivos na sua próxima compra de gás.',
    category: 'Promoções',
    publishedAt: new Date('2022-10-25'),
    sticky: true,
    imageUrl: null,
  },
  {
    id: '2',
    title: 'Preço do gás de cozinha vai aumentar R$ 5,00',
    slug: 'preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2025',
    excerpt:
      'A partir de setembro de 2025, o preço do gás de cozinha sofrerá um reajuste de R$ 5,00. Confira os detalhes e como isso afeta o seu bolso.',
    category: 'Estratégia',
    publishedAt: new Date('2025-09-11'),
    sticky: false,
    imageUrl: null,
  },
  {
    id: '3',
    title: 'Horário de Funcionamento dia de Natal 25/12/2024',
    slug: 'horario-de-funcionamento-dia-de-natal-25-12-2024',
    excerpt:
      'Confira o horário especial de funcionamento da PopGas no dia de Natal. Planeje seu pedido com antecedência!',
    category: 'Informativos',
    publishedAt: new Date('2024-12-24'),
    sticky: false,
    imageUrl: null,
  },
  {
    id: '4',
    title: 'Feliz Natal e um Próspero Ano Novo!',
    slug: 'feliz-natal-e-um-prospero-ano-novo',
    excerpt:
      'A equipe PopGas deseja a todos os clientes um Feliz Natal e um Ano Novo repleto de realizações. Agradecemos pela confiança!',
    category: 'Informativos',
    publishedAt: new Date('2024-12-24'),
    sticky: false,
    imageUrl: null,
  },
  {
    id: '5',
    title: 'Preço do gás de cozinha vai aumentar R$ 5,00',
    slug: 'preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2024',
    excerpt:
      'Novo reajuste no preço do gás de cozinha a partir de setembro de 2024. Saiba mais sobre os motivos e o impacto no valor final.',
    category: 'Estratégia',
    publishedAt: new Date('2024-09-01'),
    sticky: false,
    imageUrl: null,
  },
  {
    id: '7',
    title: 'Como deletar minha conta no aplicativo PopGás',
    slug: 'como-deletar-minha-conta-no-aplicativo',
    excerpt:
      'Saiba como deletar sua conta no aplicativo PopGás de forma simples e rápida. Confira o passo a passo completo.',
    category: 'Informativos',
    publishedAt: new Date('2026-03-10'),
    sticky: false,
    imageUrl: null,
  },
  {
    id: '6',
    title: 'Promoção Dia das Mães',
    slug: 'promocao-dia-das-maes',
    excerpt:
      'Neste Dia das Mães, a PopGas preparou uma promoção especial para você presentear quem mais importa. Confira as condições!',
    category: 'Promoções',
    publishedAt: new Date('2024-05-11'),
    sticky: false,
    imageUrl: null,
  },
];

const allCategories = [
  'Gestão',
  'Tecnologia',
  'Fiscal',
  'Estratégia',
  'Informativos',
  'Promoções',
];

const sidebarPages = [
  { title: 'Início', href: '/' },
  { title: 'Recursos', href: '/recursos' },
  { title: 'Planos', href: '/planos' },
  { title: 'FAQ', href: '/faq' },
];

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string;
  publishedAt: Date;
  sticky: boolean;
  imageUrl: string | null;
};

export const metadata = {
  title: 'Blog — PopGás Sistema',
  description: 'Conteúdos sobre gestão, tecnologia e operação para revendas de gás.',
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    const dbPosts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: [{ sticky: 'desc' }, { publishedAt: 'desc' }],
    });
    posts = dbPosts.length > 0 ? dbPosts : staticPosts;
  } catch {
    posts = staticPosts;
  }

  const sortedPosts = [...posts].sort((a, b) => {
    if (a.sticky && !b.sticky) return -1;
    if (!a.sticky && b.sticky) return 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <>
      <section className="pt-16 md:pt-20 pb-8">
        <Container className="max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 bg-[rgba(0,149,204,0.06)] border border-[rgba(0,149,204,0.20)] rounded-full font-mono text-[11px] uppercase tracking-[0.4px] text-[#006085] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0095cc]" aria-hidden />
            Blog
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-[-0.045em] leading-[1.05] text-[#0a1322] mb-4">
            Conteúdo para <em className="italic-accent">revendas</em>.
          </h1>
          <p className="text-base md:text-lg text-[rgba(15,19,34,0.62)] leading-[1.5] tracking-[-0.01em]">
            Gestão, tecnologia, fiscal e estratégia — direto pra quem opera distribuidora de gás.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 max-w-[1100px] mx-auto">
            <main className="flex-1 min-w-0">
              {sortedPosts.map(post => (
                <article
                  key={post.id}
                  className="border-b border-[rgba(15,19,34,0.08)] pb-7 mb-7 last:border-b-0"
                >
                  <h2 className="font-display text-xl md:text-2xl font-bold tracking-[-0.02em] leading-[1.25] text-[#0a1322] mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#0095cc] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <div className="flex items-center gap-2 flex-wrap font-mono text-[11px] text-[rgba(15,19,34,0.55)] mb-3 tracking-[0.5px]">
                    <span>{formatDate(new Date(post.publishedAt))}</span>
                    <span className="text-[rgba(15,19,34,0.25)]">·</span>
                    <span className="text-[#006085] font-semibold uppercase">{post.category}</span>
                    {post.sticky && (
                      <>
                        <span className="text-[rgba(15,19,34,0.25)]">·</span>
                        <span className="font-semibold uppercase text-[#0095cc]">Destaque</span>
                      </>
                    )}
                  </div>

                  {post.excerpt && (
                    <p className="text-[15px] leading-[1.6] text-[rgba(15,19,34,0.7)] mb-3 tracking-[-0.005em]">
                      {post.excerpt}
                    </p>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#006085] hover:text-[#0095cc] transition-colors"
                  >
                    Leia mais →
                  </Link>
                </article>
              ))}

              <nav
                className="flex items-center gap-1 pt-4"
                aria-label="Paginação"
              >
                <span className="inline-flex h-9 min-w-9 px-3 items-center justify-center text-[13px] font-bold rounded-full bg-[#006085] text-white">
                  1
                </span>
                {[2, 3].map(n => (
                  <span
                    key={n}
                    className="inline-flex h-9 min-w-9 px-3 items-center justify-center text-[13px] cursor-pointer rounded-full border border-[rgba(15,19,34,0.10)] hover:border-[#0095cc] hover:text-[#006085] text-[#0a1322] transition-colors"
                  >
                    {n}
                  </span>
                ))}
                <span className="text-[13px] px-2 text-[rgba(15,19,34,0.40)]">…</span>
                <span className="inline-flex h-9 min-w-9 px-3 items-center justify-center text-[13px] cursor-pointer rounded-full border border-[rgba(15,19,34,0.10)] hover:border-[#0095cc] hover:text-[#006085] text-[#0a1322] transition-colors">
                  14
                </span>
                <span className="inline-flex h-9 px-4 items-center justify-center text-[13px] cursor-pointer rounded-full border border-[rgba(15,19,34,0.10)] hover:border-[#0095cc] hover:text-[#006085] text-[#0a1322] transition-colors ml-1">
                  Próxima →
                </span>
              </nav>
            </main>

            <aside className="w-full lg:w-[280px] shrink-0">
              <SidebarSection title="Pesquisar">
                <form className="flex gap-2" role="search">
                  <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="flex-1 border border-[rgba(15,19,34,0.14)] hover:border-[rgba(15,19,34,0.25)] rounded-[10px] px-3.5 py-2.5 text-[14px] outline-none focus:border-[#0095cc] focus:ring-4 focus:ring-[rgba(0,149,204,0.10)] transition-all text-[#0a1322] placeholder:text-[rgba(15,19,34,0.40)]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-[13px] font-bold text-white bg-[#006085] hover:bg-[#0095cc] rounded-[10px] transition-colors"
                  >
                    Buscar
                  </button>
                </form>
              </SidebarSection>

              <SidebarSection title="Categorias">
                <ul className="list-none p-0 m-0">
                  {allCategories.map(cat => (
                    <li
                      key={cat}
                      className="border-b border-[rgba(15,19,34,0.06)] last:border-b-0"
                    >
                      <span className="block py-[7px] text-[14px] leading-[22px] cursor-pointer transition-colors text-[rgba(15,19,34,0.78)] hover:text-[#0095cc]">
                        {cat}
                      </span>
                    </li>
                  ))}
                </ul>
              </SidebarSection>

              <SidebarSection title="Páginas">
                <ul className="list-none p-0 m-0">
                  {sidebarPages.map(page => (
                    <li
                      key={page.href}
                      className="border-b border-[rgba(15,19,34,0.06)] last:border-b-0"
                    >
                      <Link
                        href={page.href}
                        className="block py-[7px] text-[14px] leading-[22px] transition-colors text-[rgba(15,19,34,0.78)] hover:text-[#0095cc]"
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SidebarSection>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[1.5px] text-[rgba(15,19,34,0.55)] mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}
