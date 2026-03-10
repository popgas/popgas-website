import Link from "next/link";
import { prisma } from "@/lib/db";

const staticPosts = [
  {
    id: "1",
    title: "Indique Ganhe agora é Renda PopGás",
    slug: "indique-ganhe-agora-e-renda-popgas",
    excerpt:
      "O programa Indique e Ganhe evoluiu! Agora você acumula renda a cada indicação e pode trocar por descontos exclusivos na sua próxima compra de gás.",
    category: "Promoções",
    publishedAt: new Date("2022-10-25"),
    sticky: true,
    imageUrl: null,
  },
  {
    id: "2",
    title: "Preço do gás de cozinha vai aumentar R$ 5,00",
    slug: "preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2025",
    excerpt:
      "A partir de setembro de 2025, o preço do gás de cozinha sofrerá um reajuste de R$ 5,00. Confira os detalhes e como isso afeta o seu bolso.",
    category: "Aumento de Preço",
    publishedAt: new Date("2025-09-11"),
    sticky: false,
    imageUrl: null,
  },
  {
    id: "3",
    title: "Horário de Funcionamento dia de Natal 25/12/2024",
    slug: "horario-de-funcionamento-dia-de-natal-25-12-2024",
    excerpt:
      "Confira o horário especial de funcionamento da PopGas no dia de Natal. Planeje seu pedido com antecedência!",
    category: "Informativos",
    publishedAt: new Date("2024-12-24"),
    sticky: false,
    imageUrl: null,
  },
  {
    id: "4",
    title: "Feliz Natal e um Próspero Ano Novo!",
    slug: "feliz-natal-e-um-prospero-ano-novo",
    excerpt:
      "A equipe PopGas deseja a todos os clientes um Feliz Natal e um Ano Novo repleto de realizações. Agradecemos pela confiança!",
    category: "Informativos",
    publishedAt: new Date("2024-12-24"),
    sticky: false,
    imageUrl: null,
  },
  {
    id: "5",
    title: "Preço do gás de cozinha vai aumentar R$ 5,00",
    slug: "preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2024",
    excerpt:
      "Novo reajuste no preço do gás de cozinha a partir de setembro de 2024. Saiba mais sobre os motivos e o impacto no valor final.",
    category: "Aumento de Preço",
    publishedAt: new Date("2024-09-01"),
    sticky: false,
    imageUrl: null,
  },
  {
    id: "6",
    title: "Promoção Dia das Mães",
    slug: "promocao-dia-das-maes",
    excerpt:
      "Neste Dia das Mães, a PopGas preparou uma promoção especial para você presentear quem mais importa. Confira as condições!",
    category: "Promoções",
    publishedAt: new Date("2024-05-11"),
    sticky: false,
    imageUrl: null,
  },
];

const allCategories = [
  "Promoções",
  "Aumento de Preço",
  "Informativos",
  "Uncategorized",
  "Sorteio",
  "Contratação",
];

const sidebarPages = [
  { title: "Início", href: "/" },
  { title: "FAQ", href: "/faq" },
  { title: "Blog", href: "/blog" },
];

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
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
  title: "Blog - PopGas",
  description: "Fique por dentro das novidades da PopGas",
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    const dbPosts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: [{ sticky: "desc" }, { publishedAt: "desc" }],
    });
    if (dbPosts.length > 0) {
      posts = dbPosts;
    } else {
      posts = staticPosts;
    }
  } catch {
    posts = staticPosts;
  }

  // Sort: sticky first, then by date descending
  const sortedPosts = [...posts].sort((a, b) => {
    if (a.sticky && !b.sticky) return -1;
    if (!a.sticky && b.sticky) return 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-[1100px] px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <main className="flex-1 min-w-0">
            {sortedPosts.map((post) => (
              <article
                key={post.id}
                className="border-b border-[#e8e8e8] pb-6 mb-6"
              >
                <h2 className="text-[20px] font-semibold leading-[28px] mb-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="no-underline text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h2>

                <div
                  className="text-[12px] mb-3 flex items-center gap-2 flex-wrap"
                  style={{ color: "#999999" }}
                >
                  <span>{formatDate(new Date(post.publishedAt))}</span>
                  <span>|</span>
                  <span style={{ color: "#729E2F" }}>{post.category}</span>
                  {post.sticky && (
                    <>
                      <span>|</span>
                      <span
                        className="font-semibold"
                        style={{ color: "#d4a017" }}
                      >
                        Destaque
                      </span>
                    </>
                  )}
                </div>

                {post.excerpt && (
                  <p
                    className="text-[15px] leading-[25px] mb-3"
                    style={{ color: "#222222" }}
                  >
                    {post.excerpt}
                  </p>
                )}

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[13px] font-semibold no-underline transition-colors duration-200"
                  style={{ color: "#729E2F" }}
                >
                  Leia mais &raquo;
                </Link>
              </article>
            ))}

            {/* Pagination placeholder */}
            <nav className="flex items-center gap-1 pt-4">
              <span
                className="inline-flex h-[30px] w-[30px] items-center justify-center text-[13px] font-bold text-white"
                style={{ backgroundColor: "#729E2F" }}
              >
                1
              </span>
              {[2, 3].map((n) => (
                <span
                  key={n}
                  className="inline-flex h-[30px] w-[30px] items-center justify-center text-[13px] cursor-pointer border border-[#e8e8e8] hover:bg-[#f5f5f5]"
                  style={{ color: "#24355A" }}
                >
                  {n}
                </span>
              ))}
              <span className="text-[13px] px-1" style={{ color: "#999" }}>
                ...
              </span>
              <span
                className="inline-flex h-[30px] w-[30px] items-center justify-center text-[13px] cursor-pointer border border-[#e8e8e8] hover:bg-[#f5f5f5]"
                style={{ color: "#24355A" }}
              >
                14
              </span>
              <span
                className="inline-flex h-[30px] items-center px-2 text-[13px] cursor-pointer border border-[#e8e8e8] hover:bg-[#f5f5f5]"
                style={{ color: "#24355A" }}
              >
                Próxima página &raquo;
              </span>
            </nav>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] shrink-0">
            {/* Search */}
            <div className="mb-8">
              <h3
                className="text-[16px] font-semibold mb-3"
                style={{ color: "#24355A" }}
              >
                Pesquisar
              </h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="flex-1 border border-[#e8e8e8] px-3 py-2 text-[14px] outline-none focus:border-[#729E2F]"
                />
                <button
                  className="px-4 py-2 text-[13px] font-semibold text-white"
                  style={{ backgroundColor: "#729E2F" }}
                >
                  Buscar
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3
                className="text-[16px] font-semibold mb-3"
                style={{ color: "#24355A" }}
              >
                Categorias
              </h3>
              <ul className="list-none p-0 m-0">
                {allCategories.map((cat) => (
                  <li
                    key={cat}
                    className="border-b border-[#f0f0f0] last:border-b-0"
                  >
                    <span
                      className="block py-[6px] text-[14px] leading-[22px] cursor-pointer transition-colors duration-200 hover:text-[#729E2F]"
                      style={{ color: "#222222" }}
                    >
                      {cat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div className="mb-8">
              <h3
                className="text-[16px] font-semibold mb-3"
                style={{ color: "#24355A" }}
              >
                Páginas
              </h3>
              <ul className="list-none p-0 m-0">
                {sidebarPages.map((page) => (
                  <li
                    key={page.href}
                    className="border-b border-[#f0f0f0] last:border-b-0"
                  >
                    <Link
                      href={page.href}
                      className="block py-[6px] text-[14px] leading-[22px] no-underline transition-colors duration-200 hover:text-[#729E2F]"
                      style={{ color: "#222222" }}
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
