import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

const blogPosts = [
  {
    title: "Indique Ganhe agora é Renda PopGás",
    slug: "indique-ganhe-agora-e-renda-popgas",
    excerpt:
      "O programa Indique e Ganhe evoluiu! Agora você acumula renda a cada indicação e pode trocar por descontos exclusivos na sua próxima compra de gás.",
    content: `<p>O programa <strong>Indique e Ganhe</strong> evoluiu e agora se chama <strong>Renda PopGás</strong>!</p>
<p>A cada amigo que você indicar e que fizer a primeira compra pelo aplicativo, você acumula créditos que podem ser usados como desconto nas suas próximas compras de gás de cozinha.</p>
<h3>Como funciona?</h3>
<ol>
<li>Acesse o aplicativo PopGas e encontre seu código de indicação na aba "Descontos".</li>
<li>Compartilhe o código com seus amigos e familiares.</li>
<li>Quando o indicado fizer a primeira compra usando o código, você recebe créditos automaticamente.</li>
<li>Use seus créditos acumulados como desconto no próximo pedido.</li>
</ol>
<p>Quanto mais você indica, mais você economiza. Não perca essa oportunidade!</p>`,
    category: "Promoções",
    publishedAt: new Date("2022-10-25"),
    sticky: true,
  },
  {
    title: "Preço do gás de cozinha vai aumentar R$ 5,00",
    slug: "preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2025",
    excerpt:
      "A partir de setembro de 2025, o preço do gás de cozinha sofrerá um reajuste de R$ 5,00. Confira os detalhes.",
    content: `<p>Informamos que a partir de <strong>setembro de 2025</strong>, o preço do gás de cozinha (P13) sofrerá um reajuste de <strong>R$ 5,00</strong>.</p>
<p>O aumento é decorrente do reajuste aplicado pelas distribuidoras, que reflete variações no custo do GLP e na logística de distribuição.</p>
<p>A PopGas reforça seu compromisso em oferecer o melhor preço da região e a entrega mais rápida. Continue acompanhando nosso blog e nossas redes sociais para ficar por dentro de todas as novidades.</p>
<p>Dúvidas? Entre em contato pelo nosso WhatsApp ou pelo telefone (34) 3238-7777.</p>`,
    category: "Aumento de Preço",
    publishedAt: new Date("2025-09-11"),
    sticky: false,
  },
  {
    title: "Horário de Funcionamento dia de Natal 25/12/2024",
    slug: "horario-de-funcionamento-dia-de-natal-25-12-2024",
    excerpt:
      "Confira o horário especial de funcionamento da PopGas no dia de Natal.",
    content: `<p>Informamos o horário especial de funcionamento da PopGas no dia <strong>25 de dezembro de 2024 (Natal)</strong>:</p>
<ul>
<li><strong>Funcionamento:</strong> das 8h às 12h</li>
</ul>
<p>Planeje seu pedido com antecedência para não ficar sem gás durante as festas!</p>
<p>Desejamos um Feliz Natal a todos os nossos clientes e parceiros.</p>`,
    category: "Informativos",
    publishedAt: new Date("2024-12-24"),
    sticky: false,
  },
  {
    title: "Feliz Natal e um Próspero Ano Novo!",
    slug: "feliz-natal-e-um-prospero-ano-novo",
    excerpt:
      "A equipe PopGas deseja a todos um Feliz Natal e um Ano Novo repleto de realizações.",
    content: `<p>A equipe <strong>PopGas</strong> deseja a todos os nossos clientes e parceiros um <strong>Feliz Natal</strong> e um <strong>Próspero Ano Novo</strong>!</p>
<p>Agradecemos pela confiança depositada em nosso trabalho ao longo de todo o ano. É um prazer atender cada um de vocês.</p>
<p>Que 2025 seja um ano repleto de realizações, saúde e muita alegria. Conte sempre com a PopGas!</p>`,
    category: "Informativos",
    publishedAt: new Date("2024-12-24"),
    sticky: false,
  },
  {
    title: "Preço do gás de cozinha vai aumentar R$ 5,00",
    slug: "preco-do-gas-de-cozinha-vai-aumentar-r-5-00-setembro-2024",
    excerpt:
      "Novo reajuste no preço do gás de cozinha a partir de setembro de 2024.",
    content: `<p>Comunicamos que a partir de <strong>setembro de 2024</strong>, haverá um reajuste de <strong>R$ 5,00</strong> no preço do botijão de gás de cozinha (P13).</p>
<p>O reajuste é reflexo das variações no custo do GLP praticado pelas distribuidoras. A PopGas segue trabalhando para garantir o melhor custo-benefício aos nossos clientes.</p>
<p>Fique atento às nossas promoções e ao programa Renda PopGás para economizar ainda mais!</p>`,
    category: "Aumento de Preço",
    publishedAt: new Date("2024-09-01"),
    sticky: false,
  },
  {
    title: "Promoção Dia das Mães",
    slug: "promocao-dia-das-maes",
    excerpt:
      "Neste Dia das Mães, a PopGas preparou uma promoção especial para você!",
    content: `<p>Neste <strong>Dia das Mães</strong>, a PopGas preparou algo especial para você!</p>
<p>Na compra de um botijão P13 pelo aplicativo, você ganha um cupom de desconto para a próxima compra. Aproveite para presentear quem mais importa com praticidade e economia.</p>
<h3>Condições:</h3>
<ul>
<li>Promoção válida de 10 a 12 de maio de 2024.</li>
<li>Pedidos realizados exclusivamente pelo aplicativo PopGas.</li>
<li>Cupom de desconto válido para uso em até 30 dias.</li>
</ul>
<p>Feliz Dia das Mães!</p>`,
    category: "Promoções",
    publishedAt: new Date("2024-05-11"),
    sticky: false,
  },
  {
    title: "Como deletar minha conta no aplicativo PopGás",
    slug: "como-deletar-minha-conta-no-aplicativo",
    excerpt:
      "Saiba como deletar sua conta no aplicativo PopGás de forma simples e rápida. Confira o passo a passo completo.",
    content: `<p>Se você deseja deletar sua conta no aplicativo PopGás, siga o passo a passo abaixo. O processo é simples e pode ser feito diretamente pelo aplicativo.</p>

<h3>Passo 1: Acesse os Detalhes da Conta</h3>
<p>Abra o aplicativo PopGás e acesse a tela de <strong>Detalhes da Conta</strong>.</p>

<h3>Passo 2: Encontre a seção "Deletar Conta"</h3>
<p>Role a tela até o final. Você verá uma seção destacada em vermelho com o título <strong>"Deletar Conta"</strong>.</p>

<h3>Passo 3: Clique em "Quero deletar minha conta"</h3>
<p>Toque no botão <strong>"Quero deletar minha conta"</strong> para iniciar o processo de exclusão.</p>

<h3>Passo 4: Confirme a exclusão</h3>
<p>Uma tela de confirmação será exibida com a seguinte mensagem:</p>
<blockquote>"Ao deletar sua conta você perderá todo seu histórico de pedidos, indicações e saldo do programa Renda PopGás."</blockquote>
<p>Para confirmar, digite a palavra <strong>"deletar"</strong> no campo indicado e toque no botão <strong>"Deletar minha conta"</strong>.</p>

<h3>O que acontece após a exclusão?</h3>
<p>Após confirmar a exclusão, sua conta será deletada e você será desconectado automaticamente do aplicativo. Os seguintes dados serão removidos:</p>
<ul>
<li>Seus dados pessoais (nome, telefone, e-mail, CPF, data de nascimento)</li>
<li>Histórico de pedidos</li>
<li>Indicações e saldo do programa Renda PopGás</li>
<li>Endereços cadastrados</li>
</ul>

<p><strong>Importante:</strong> Esta ação é irreversível. Uma vez deletada, não será possível recuperar sua conta ou os dados associados a ela.</p>

<p>Se tiver dúvidas ou precisar de ajuda, entre em contato com nosso suporte pelo WhatsApp.</p>`,
    category: "Informativos",
    publishedAt: new Date("2026-03-10"),
    sticky: false,
  },
  {
    title: "Horário de Funcionamento - Carnaval 2024",
    slug: "horario-de-funcionamento-carnaval-2024",
    excerpt:
      "Confira o horário de funcionamento da PopGas durante o Carnaval 2024.",
    content: `<p>Informamos o horário de funcionamento da PopGas durante o <strong>Carnaval 2024</strong>:</p>
<ul>
<li><strong>Sábado (10/02):</strong> 8h às 18h</li>
<li><strong>Domingo (11/02):</strong> 8h às 14h</li>
<li><strong>Segunda (12/02):</strong> 8h às 14h</li>
<li><strong>Terça (13/02):</strong> 8h às 14h</li>
<li><strong>Quarta de Cinzas (14/02):</strong> Horário normal a partir das 12h</li>
</ul>
<p>Programe-se para não ficar sem gás durante o feriado!</p>`,
    category: "Informativos",
    publishedAt: new Date("2024-02-09"),
    sticky: false,
  },
  {
    title: "Preço do gás de cozinha vai aumentar R$ 4,00",
    slug: "preco-do-gas-de-cozinha-vai-aumentar-r-4-00-marco-2024",
    excerpt:
      "Reajuste de R$ 4,00 no preço do gás de cozinha a partir de março de 2024.",
    content: `<p>Informamos que a partir de <strong>março de 2024</strong>, o preço do botijão de gás de cozinha (P13) sofrerá um reajuste de <strong>R$ 4,00</strong>.</p>
<p>O aumento é resultado do reajuste praticado pelas distribuidoras, refletindo os custos de produção e logística do GLP no mercado nacional.</p>
<p>Continuamos comprometidos em oferecer o melhor serviço e as melhores condições para nossos clientes. Dúvidas? Fale conosco!</p>`,
    category: "Aumento de Preço",
    publishedAt: new Date("2024-03-01"),
    sticky: false,
  },
  {
    title: "PopGas agora aceita cartão de crédito e débito",
    slug: "popgas-agora-aceita-cartao-de-credito-e-debito",
    excerpt:
      "Novidade! Agora você pode pagar suas compras com cartão de crédito ou débito na entrega.",
    content: `<p>Temos uma ótima novidade para você! A partir de agora, a PopGas aceita pagamento com <strong>cartão de crédito e débito</strong> diretamente na entrega.</p>
<p>Além do pagamento em dinheiro, nossos entregadores agora estão equipados com máquinas de cartão para maior comodidade.</p>
<h3>Formas de pagamento aceitas:</h3>
<ul>
<li>Dinheiro</li>
<li>Cartão de crédito (todas as bandeiras)</li>
<li>Cartão de débito</li>
</ul>
<p>Peça já pelo aplicativo e escolha a forma de pagamento que preferir!</p>`,
    category: "Informativos",
    publishedAt: new Date("2023-06-15"),
    sticky: false,
  },
  {
    title: "Promoção de Ano Novo - Desconto Especial",
    slug: "promocao-de-ano-novo-desconto-especial",
    excerpt:
      "Comece o ano economizando! Promoção especial de Ano Novo com desconto no botijão P13.",
    content: `<p>Para começar 2024 com o pé direito, a PopGas preparou uma <strong>promoção especial de Ano Novo</strong>!</p>
<p>Durante a primeira semana de janeiro, todos os pedidos realizados pelo aplicativo terão um <strong>desconto especial de R$ 5,00</strong> no botijão P13.</p>
<h3>Regras da promoção:</h3>
<ul>
<li>Válida de 01 a 07 de janeiro de 2024.</li>
<li>Desconto aplicado automaticamente no pedido pelo aplicativo.</li>
<li>Limitado a um pedido por cliente.</li>
</ul>
<p>Aproveite e feliz Ano Novo!</p>`,
    category: "Promoções",
    publishedAt: new Date("2023-12-30"),
    sticky: false,
  },
];

const faqItems = [
  {
    question: "Qual é o produto de gás de cozinha padrão?",
    answer:
      "O P13 é o botijão residencial padrão. Ele possui 13 quilos e é utilizado em fogões residenciais para cozinhar alimentos. Medidas: 360mm de diâmetro × 460mm de altura.",
    order: 1,
  },
  {
    question: "Como funciona o pagamento pelo aplicativo?",
    answer:
      "O pagamento através do aplicativo ainda não está disponível; o pagamento ocorre apenas na entrega.",
    order: 2,
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos dinheiro, cartão de crédito e cartão de débito.",
    order: 3,
  },
  {
    question: "Como sei que meu pedido foi confirmado?",
    answer:
      "Após inserir o endereço, produto e forma de pagamento, o aplicativo exibe o status do pedido. O rastreamento em tempo real no mapa é ativado quando o entregador inicia a entrega.",
    order: 4,
  },
  {
    question: "Posso usar endereços de entrega diferentes?",
    answer:
      "Você pode usar quantos endereços quiser, desde que estejam na nossa área de atendimento.",
    order: 5,
  },
  {
    question: "Como cancelo um pedido?",
    answer:
      "Pedidos podem ser cancelados antes do início da entrega usando o botão de cancelar no aplicativo — sem cobrança.",
    order: 6,
  },
  {
    question: "Posso entrar em contato direto com o entregador?",
    answer:
      "O contato direto com o entregador não está disponível. Use nosso chat pelo WhatsApp para dúvidas.",
    order: 7,
  },
  {
    question: "Qual é a área de atendimento?",
    answer:
      "A equipe PopGas está expandindo a cobertura. Consulte o mapa de atendimento para ver as áreas atendidas.",
    order: 8,
  },
  {
    question: "O aplicativo não está funcionando, o que faço?",
    answer:
      "Verifique sua conexão com a internet. Depois vá em Configurações > Aplicativos > PopGas > Armazenamento > Limpar Dados. Entre em contato com o suporte se o problema persistir.",
    order: 9,
  },
  {
    question: "Meu desconto de indicação está pendente?",
    answer:
      "Os descontos são ativados quando o amigo indicado usa o código de indicação, mas ficam disponíveis somente após a primeira compra.",
    order: 10,
  },
  {
    question: "Como funciona o processo de indicação?",
    answer:
      "Clique na aba 'Descontos' no menu do aplicativo para encontrar seu código de indicação e compartilhar com amigos.",
    order: 11,
  },
  {
    question: "O atendimento funciona 24 horas?",
    answer:
      "O atendimento está disponível apenas durante o horário comercial das revendas PopGas. Segunda a Sábado das 7h às 21h e Domingos e feriados das 8h às 14h.",
    order: 12,
  },
  {
    question: "Como funciona o rastreamento em tempo real?",
    answer:
      "O rastreamento em tempo real fica disponível assim que o entregador inicia o processo de entrega.",
    order: 13,
  },
  {
    question: "Posso alterar o endereço de entrega durante a entrega?",
    answer:
      "Cancele e refaça o pedido se a entrega ainda não tiver começado. Se já tiver sido despachado, entre em contato com o suporte via WhatsApp.",
    order: 14,
  },
];

const siteSettings = [
  { key: "phone", value: "(34) 3238-7777" },
  { key: "whatsapp", value: "(34) 99999-9999" },
  { key: "email", value: "contato@popgas.com.br" },
  { key: "address", value: "Uberlândia - MG" },
  { key: "hours_weekday", value: "Segunda a Sábado: 7h às 21h" },
  { key: "hours_weekend", value: "Domingos e Feriados: 8h às 14h" },
  { key: "instagram", value: "https://www.instagram.com/popgas.app" },
  { key: "facebook", value: "https://www.facebook.com/popgas.app" },
];

async function main() {
  console.log("Seeding database...");

  // Seed blog posts
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        publishedAt: post.publishedAt,
        sticky: post.sticky,
        published: true,
      },
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        publishedAt: post.publishedAt,
        sticky: post.sticky,
        published: true,
      },
    });
    console.log(`  Blog post: ${post.title}`);
  }

  // Seed FAQ items
  for (const item of faqItems) {
    const existing = await prisma.faqItem.findFirst({
      where: { question: item.question },
    });

    if (existing) {
      await prisma.faqItem.update({
        where: { id: existing.id },
        data: { answer: item.answer, order: item.order },
      });
    } else {
      await prisma.faqItem.create({
        data: item,
      });
    }
    console.log(`  FAQ: ${item.question.substring(0, 50)}...`);
  }

  // Seed site settings
  for (const setting of siteSettings) {
    await prisma.siteSettings.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: { key: setting.key, value: setting.value },
    });
    console.log(`  Setting: ${setting.key} = ${setting.value}`);
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
