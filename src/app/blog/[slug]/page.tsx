import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

const staticPosts: Record<
  string,
  {
    title: string;
    category: string;
    publishedAt: Date;
    content: string;
    sticky: boolean;
  }
> = {
  "indique-ganhe-agora-e-renda-popgas": {
    title: "Indique Ganhe agora é Renda PopGás",
    category: "Promoções",
    publishedAt: new Date("2022-10-25"),
    sticky: true,
    content: `<div style="max-width:700px;margin:0 auto 30px;">
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:7px;">
<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/lC1RMYRjD8s?feature=oembed" title="Renda PopGas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>

<p>Temos uma ótima notícia para compartilhar com nossos clientes! Decidimos turbinar a nossa promoção <strong>Indique e Ganhe</strong> para que nossos clientes possam lucrar com suas indicações a partir de agora. Por este motivo, mudamos o nome da promoção para <strong>Renda PopGás.</strong></p>

<h3>Como vai funcionar?</h3>
<p>A partir de agora, você irá ganhar sempre que uma indicação fizer uma compra. E não para por ai, você também ganhará quando indicações das suas indicações comprarem também, e assim por diante até completar 3 níveis de indicação!</p>
<p><strong>Importante: Indicações feitas antes do lançamento desta promoção não serão válidas.</strong></p>

<p>Além disso, você poderá sacar todo o dinheiro que você acumular através de compras realizadas por pessoas que você indicou. O limite de saque mínimo será de <strong>R$ 50,00</strong>.</p>

<h3>Vamos fazer uma simulação?</h3>

<table>
<thead>
<tr><th>Nível</th><th>Pessoas Indicadas</th><th>Você ganha</th></tr>
</thead>
<tbody>
<tr><td><strong>Nível 1</strong> — Suas indicações</td><td>10 pessoas</td><td>R$ 5,00 no primeiro pedido; R$ 1,00 por pedido após</td></tr>
<tr><td><strong>Nível 2</strong> — Indicações das suas indicações</td><td>100 pessoas</td><td>R$ 1,00 por pedido</td></tr>
<tr><td><strong>Nível 3</strong> — Indicações das indicações Nível 2</td><td>1000 pessoas</td><td>R$ 1,00 por pedido</td></tr>
</tbody>
</table>

<h3>Ranking (Top 20)</h3>
<p>Todos os meses, os 5 primeiros colocados no ranking de indicações receberão prêmios em dinheiro:</p>

<table>
<thead>
<tr><th>Posição</th><th>Prêmio</th></tr>
</thead>
<tbody>
<tr><td>1º lugar</td><td>R$ 100,00</td></tr>
<tr><td>2º lugar</td><td>R$ 50,00</td></tr>
<tr><td>3º lugar</td><td>R$ 25,00</td></tr>
<tr><td>4º lugar</td><td>R$ 15,00</td></tr>
<tr><td>5º lugar</td><td>R$ 10,00</td></tr>
</tbody>
</table>

<p><strong>O ranking só passará a valer a partir de novembro, com os primeiros pagamentos de prêmios realizados em dezembro.</strong></p>`,
  },
  "preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2025": {
    title: "Preço do gás de cozinha vai aumentar R$ 5,00",
    category: "Aumento de Preço",
    publishedAt: new Date("2025-09-11"),
    sticky: false,
    content: `<img src="/images/blog/aumento-gas.jpeg" alt="Aumento do preço do gás de cozinha" />
<p>Informamos a todos os nossos clientes que, devido a um reajuste por parte das distribuidoras de gás, estaremos realizando um reajuste de <strong>R$ 5,00</strong> no preço do nosso botijão de 13kg a partir de <strong>setembro de 2025</strong>.</p>
<p>O preço do gás de cozinha haverá um reajuste em setembro de 2025, no valor de <strong>R$ 0,37 por kg</strong>.</p>
<p>Como ocorre em todos os anos, no mês de setembro é realizada a revisão anual dos preços de venda do GLP em todas as redes.</p>
<p>O reajuste reflete os impactos inflacionários nas estrutura de custo, especialmente relacionado à malha de distribuição, bem como aumento de despesas de folha de pagamento, em virtude do dissídio de setembro.</p>
<p><em>Fonte: Jornal MT</em></p>`,
  },
  "horario-de-funcionamento-dia-de-natal-25-12-2024": {
    title: "Horário de Funcionamento dia de Natal 25/12/2024",
    category: "Informativos",
    publishedAt: new Date("2024-12-24"),
    sticky: false,
    content: `<p>Informamos a todos os nossos clientes o funcionamento no dia <strong>25 de dezembro de 2024 (Natal)</strong>:</p>
<p><strong>Pedidos pelo Aplicativo:</strong> Normal e haverá entrega em toda a cidade.</p>
<p><strong>Atendimento por Telefone:</strong> Não haverá atendimento.</p>
<h3>Lojas abertas para retirada:</h3>
<ul>
<li><strong>Alto Umuarama</strong> — Av. Dom Pedro II, 1147</li>
<li><strong>Laranjeiras</strong> — Rua do Adolescente, 10</li>
<li><strong>Morumbi</strong> — Av. Antônio Jorge Isaac, 599</li>
<li><strong>Martins</strong> — Av. Estrela do Sul, 2090</li>
<li><strong>Roosevelt</strong> — Av. Cleanto Vieira Gonçalves, 152</li>
<li><strong>Nova Uberlândia</strong> — Av. Dr. João Patrus de Souza, 1555</li>
<li><strong>Tocantins</strong> — Av. Taylor Silva, 999</li>
</ul>
<p>Atenciosamente, Equipe PopGás!</p>`,
  },
  "feliz-natal-e-um-prospero-ano-novo": {
    title: "Feliz Natal e um Próspero Ano Novo!",
    category: "Informativos",
    publishedAt: new Date("2024-12-24"),
    sticky: false,
    content: `<p>Queridos clientes,</p>
<p>Neste <strong>Natal</strong>, desejamos que seus lares sejam preenchidos com muito amor, paz e alegria. Que a luz do Natal ilumine suas casas com uma fé renovada.</p>
<p>Que o <strong>Ano Novo</strong> traga novas oportunidades, sonhos realizados e muitos momentos felizes. Agradecemos pela confiança depositada em nosso trabalho ao longo de todo o ano. É um prazer atender cada um de vocês.</p>
<p>Lembrem-se de que cada desafio é uma oportunidade para crescer, e temos certeza de que 2025 será um ano incrível para todos nós.</p>
<p>Com carinho, <strong>Equipe PopGas</strong></p>
<img src="/images/blog/feliz-natal-2024.png" alt="Feliz Natal - PopGas" />`,
  },
  "preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2024": {
    title: "Preço do gás de cozinha vai aumentar R$ 5,00 a partir de segunda-feira (02/09/2024)",
    category: "Aumento de Preço",
    publishedAt: new Date("2024-09-01"),
    sticky: false,
    content: `<img src="/images/blog/aumento-gas.jpeg" alt="Aumento do preço do gás de cozinha" />
<p>Informamos a todos os nossos clientes que, devido a um reajuste por parte das distribuidoras de gás, estaremos realizando um reajuste de <strong>R$ 5,00</strong> no preço do nosso botijão de 13kg em todos os canais de venda a partir de segunda-feira <strong>(02/09/2024)</strong>.</p>
<p>O preço do gás de cozinha haverá um reajuste em setembro de 2024, no valor de <strong>R$ 0,37 por kg</strong>.</p>
<p>Como ocorre em todos os anos, no mês de setembro é realizada a revisão anual dos preços de venda do GLP em todas as redes.</p>
<p>O reajuste reflete os impactos inflacionários nas estrutura de custo, especialmente relacionado à malha de distribuição, bem como aumento de despesas de folha de pagamento, em virtude do dissídio de setembro.</p>
<p><em>Fonte: Jornal MT</em></p>`,
  },
  "promocao-dia-das-maes": {
    title: "Promoção Dia das Mães",
    category: "Promoções",
    publishedAt: new Date("2024-05-11"),
    sticky: false,
    content: `<p>Gostaríamos de informar a todos nossos clientes que <strong>dia 11 e 12 de maio</strong>, estaremos com uma <strong>PROMOÇÃO</strong> para todos os clientes que agendarem o pedido pelo nosso aplicativo!</p>
<p>Aproveite esta oportunidade especial de Dia das Mães para economizar no seu pedido de gás.</p>
<p><strong>Importante:</strong> As demais promoções vigentes não estarão disponíveis durante o período para entregas agendadas.</p>
<img src="/images/blog/promocao-dia-das-maes.jpeg" alt="Promoção Dia das Mães - PopGas" />
<p>Atenciosamente, Equipe PopGás</p>`,
  },
};

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const staticPost = staticPosts[slug];
  const title = staticPost?.title ?? "Post";
  return {
    title: `${title} - Blog PopGas`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: {
    title: string;
    category: string;
    publishedAt: Date;
    content: string;
    sticky: boolean;
  } | null = null;

  try {
    const dbPost = await prisma.blogPost.findUnique({
      where: { slug },
    });
    if (dbPost) {
      post = dbPost;
    }
  } catch {
    // DB not available, fall through to static
  }

  if (!post) {
    const staticPost = staticPosts[slug];
    if (staticPost) {
      post = staticPost;
    }
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-[1100px] px-4 py-10">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="text-[13px] no-underline transition-colors duration-200 hover:text-[#729E2F]"
            style={{ color: "#729E2F" }}
          >
            &laquo; Voltar para o Blog
          </Link>
        </div>

        <article>
          {/* Category & Date */}
          <div
            className="text-[12px] mb-2 flex items-center gap-2"
            style={{ color: "#999999" }}
          >
            <span style={{ color: "#729E2F" }}>{post.category}</span>
            <span>|</span>
            <span>{formatDate(new Date(post.publishedAt))}</span>
          </div>

          {/* Title */}
          <h1
            className="text-[28px] font-semibold leading-[38px] mb-6"
            style={{ color: "#24355A" }}
          >
            {post.title}
          </h1>

          {/* Divider */}
          <hr className="border-t border-[#e8e8e8] mb-6" />

          {/* Content */}
          <div
            className="blog-content text-[15px] leading-[25px]"
            style={{ color: "#222222" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Bottom back link */}
        <div className="mt-10 pt-6 border-t border-[#e8e8e8]">
          <Link
            href="/blog"
            className="text-[13px] no-underline transition-colors duration-200 hover:text-[#729E2F]"
            style={{ color: "#729E2F" }}
          >
            &laquo; Voltar para o Blog
          </Link>
        </div>
      </div>

      {/* Blog content styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .blog-content h2 {
              color: #24355A;
              font-size: 22px;
              font-weight: 600;
              margin-top: 28px;
              margin-bottom: 14px;
            }
            .blog-content h3 {
              color: #24355A;
              font-size: 20px;
              font-weight: 600;
              margin-top: 24px;
              margin-bottom: 12px;
            }
            .blog-content h4 {
              color: #24355A;
              font-size: 17px;
              font-weight: 600;
              margin-top: 20px;
              margin-bottom: 10px;
            }
            .blog-content p {
              margin-bottom: 16px;
            }
            .blog-content ul, .blog-content ol {
              margin-bottom: 16px;
              padding-left: 24px;
            }
            .blog-content ul {
              list-style-type: disc;
            }
            .blog-content ol {
              list-style-type: decimal;
            }
            .blog-content li {
              margin-bottom: 6px;
            }
            .blog-content strong {
              color: #24355A;
            }
            .blog-content a {
              color: #729E2F;
              text-decoration: underline;
            }
            .blog-content a:hover {
              color: #24355A;
            }
            .blog-content img {
              max-width: 100%;
              height: auto;
              border-radius: 7px;
              margin: 16px 0;
            }
            .blog-content figure {
              margin: 20px 0;
            }
            .blog-content figcaption {
              font-size: 13px;
              color: #999;
              text-align: center;
              margin-top: 8px;
            }
            .blog-content table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
              font-size: 14px;
            }
            .blog-content th {
              background-color: #24355A;
              color: #ffffff;
              font-weight: 600;
              padding: 10px 14px;
              text-align: left;
              border: 1px solid #1a2740;
            }
            .blog-content td {
              padding: 10px 14px;
              border: 1px solid #e8e8e8;
            }
            .blog-content tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            .blog-content iframe {
              max-width: 100%;
              margin: 20px 0;
              border-radius: 7px;
            }
            .blog-content .wp-block-embed,
            .blog-content .wp-block-video,
            .blog-content .wp-block-embed__wrapper {
              position: relative;
              width: 100%;
              margin: 20px 0;
            }
            .blog-content .wp-block-embed__wrapper iframe {
              width: 100%;
              aspect-ratio: 16/9;
              height: auto;
            }
            .blog-content blockquote {
              border-left: 4px solid #729E2F;
              margin: 20px 0;
              padding: 12px 20px;
              background-color: #f6f8fa;
              font-style: italic;
              color: #555;
            }
            .blog-content hr {
              border: none;
              border-top: 1px solid #e8e8e8;
              margin: 24px 0;
            }
            .blog-content pre {
              background-color: #f6f8fa;
              padding: 16px;
              border-radius: 7px;
              overflow-x: auto;
              font-size: 14px;
              margin: 16px 0;
            }
            .blog-content code {
              background-color: #f6f8fa;
              padding: 2px 6px;
              border-radius: 3px;
              font-size: 14px;
            }
          `,
        }}
      />
    </div>
  );
}
