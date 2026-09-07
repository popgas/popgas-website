import type { ModuleContent } from './types';

export const essencialContent: ModuleContent = {
  slug: 'essencial',
  moduleKey: 'essencial',
  hero: {
    eyebrow: 'PLANO BASE · R$ 99,90/mês',
    title: 'Vendas, clientes e entregas em um só lugar.',
    subtitle:
      'O coração do PopGás Sistema. Do pedido no balcão ou no app até a entrega confirmada pelo entregador, com o cadastro de clientes, os pagamentos e o app do entregador inclusos.',
  },
  screenshotPath: '/screenshots/01-pedidos-lista.png',
  screenshotAlt: 'Tela de pedidos realizados do PopGás Sistema',
  features: [
    {
      title: 'Gestão completa de pedidos',
      description:
        'Cada pedido passa por um fluxo claro: aberto, confirmado, saiu para entrega, entregue ou cancelado com motivo. Pedidos entregues podem ser reabertos para correção, e a lista mostra cliente, endereço, prazo, valor e forma de pagamento sem abrir nada.',
      icon: 'package',
    },
    {
      title: 'Lançamento rápido no balcão e no telefone',
      description:
        'Tela de novo pedido com busca de cliente por nome ou telefone, endereços salvos, produtos com preço da tabela vigente e cálculo automático de troco. A bina integrada identifica quem está ligando e abre o cadastro na hora.',
      icon: 'phone',
    },
    {
      title: 'Cadastro completo de clientes',
      description:
        'CPF ou CNPJ, telefones, e-mail e vários endereços por cliente, cada um com coordenadas no mapa. Histórico de pedidos, saldo em conta e observações ficam na mesma ficha, e a importação em lote traz sua base atual em planilha.',
      icon: 'users',
    },
    {
      title: 'Múltiplas formas de pagamento',
      description:
        'Dinheiro com troco, cartão de débito e crédito na maquininha, PIX com QR code, boleto para clientes empresa e saldo em conta do cliente. Você escolhe quais formas cada canal de venda aceita.',
      icon: 'credit-card',
    },
    {
      title: 'Preços, promoções e descontos',
      description:
        'Tabelas de preço por unidade e por canal, com vigência programada. Descontos por cupom, primeira compra, leve mais pague menos, brinde e crédito do cliente são calculados automaticamente na hora do pedido.',
      icon: 'calculator',
    },
    {
      title: 'App do cliente, no celular e no navegador',
      description:
        'Seu cliente faz o pedido sozinho, escolhe endereço e forma de pagamento e acompanha a entrega em tempo real. Você monta o catálogo com categorias, destaques e ofertas por horário, e aplica a identidade visual da sua revenda.',
      icon: 'layout-grid',
    },
    {
      title: 'Rastreamento em tempo real',
      description:
        'Assim que o entregador sai, o cliente vê a posição dele no mapa e uma linha do tempo com cada etapa do pedido. Você acompanha todos os entregadores ao vivo no painel.',
      icon: 'map-pin',
    },
    {
      title: 'Avaliação pós-entrega',
      description:
        'Depois de cada entrega o cliente avalia tempo e atendimento do entregador de 1 a 5 estrelas, com comentário. As notas alimentam o relatório de avaliações e o ranking dos entregadores.',
      icon: 'star',
    },
    {
      title: 'App do entregador',
      description:
        'Carregamento do veículo, transferências entre entregadores, pedidos da rota com navegação, lançamento de venda na porta do cliente e acerto de contas no fim do dia. Escala de trabalho, ausências e pontuação também ficam no app.',
      icon: 'truck',
    },
    {
      title: 'Histórico e frequência de compra',
      description:
        'Veja quando cada cliente comprou pela última vez, o intervalo médio entre pedidos e quem está atrasado para a próxima compra. Segmente clientes em risco, inativos ou VIP para ações de retenção.',
      icon: 'history',
    },
    {
      title: 'Multi-loja e permissões',
      description:
        'Cadastre várias unidades, cada uma com estoque, caixa e entregadores próprios, e veja tudo consolidado. Perfis de acesso definem o que cada operador pode ver e fazer, com trilha de auditoria.',
      icon: 'building-2',
    },
    {
      title: 'Dashboards e relatórios de vendas',
      description:
        'Dashboard de pedidos com faturamento, ticket médio, tempo de entrega e mapa de calor. Relatórios de cancelamentos, atrasos, resumo diário e movimentações por colaborador, todos exportáveis para Excel.',
      icon: 'bar-chart-3',
    },
  ],
  synergies: [
    { moduleKey: 'gestao', reason: 'Estoque baixa automaticamente quando o pedido é entregue' },
    { moduleKey: 'fiscal', reason: 'NFC-e emitida automaticamente na entrega, se você quiser' },
    { moduleKey: 'techia', reason: 'IA atende no WhatsApp e cria o pedido direto no sistema' },
  ],
  nextModule: { slug: 'gestao', name: 'Gestão' },
};
