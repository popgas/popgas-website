import type { ModuleContent } from './types';

export const gestaoContent: ModuleContent = {
  slug: 'gestao',
  moduleKey: 'gestao',
  hero: {
    eyebrow: 'MÓDULO ADICIONAL · + R$ 49,90/mês · Estoque + Financeiro',
    title: 'Estoque e financeiro integrados às vendas.',
    subtitle:
      'Cada pedido entregue movimenta o estoque e o caixa sozinho. Contas a pagar e a receber, conciliação bancária, centros de custo e DRE gerencial, sem planilha paralela.',
  },
  screenshotPath: '/screenshots/06-financeiro-contas.png',
  screenshotAlt: 'Tela de contas a pagar do PopGás Sistema',
  sections: [
    {
      id: 'estoque',
      title: 'Estoque',
      intro:
        'Lotes, condições, depósitos e veículos. Você sabe exatamente o que tem, onde está e quanto custou.',
      screenshotPath: '/screenshots/erp/lotes-em-estoque.png',
      screenshotAlt: 'Lotes em estoque com depósito, quantidade, custo e condição',
      features: [
        {
          id: 'estoque-por-lotes',
          title: 'Estoque por lotes e condições',
          description:
            'Cada entrada gera um lote com custo unitário e quantidade. Produtos são separados por condição (bom estado, avariado, vencido ou devolvido) e por depósito, então você sabe exatamente o que tem e quanto custou.',
          icon: 'package',
        },
        {
          id: 'movimentacoes',
          title: 'Movimentações e conferência',
          description:
            'Toda entrada e saída fica registrada com usuário, data, origem e destino. A conferência diária de estoque compara o físico com o sistema e mostra as diferenças por produto.',
          icon: 'arrow-up-down',
        },
        {
          id: 'transferencias',
          title: 'Transferência entre depósitos e veículos',
          description:
            'Mova produtos entre lojas, depósitos e caminhões. Transferências entre entregadores exigem aceite de quem recebe, e a remessa de vasilhames pode gerar a nota fiscal de remessa automaticamente.',
          icon: 'truck',
        },
        {
          id: 'recebimento-de-mercadorias',
          title: 'Recebimento de mercadorias',
          description:
            'Registre a compra com fornecedor, nota fiscal e valores. A entrada cria os lotes no estoque e, se quiser, já lança a conta a pagar correspondente no financeiro.',
          icon: 'inbox',
        },
        {
          id: 'carregamentos-e-vasilhames',
          title: 'Carregamentos e vasilhames',
          description:
            'O estoque dos veículos, a carga do dia e o controle de cheios e vazios seguem as regras da revenda de gás e estão detalhados na página da vertical.',
          icon: 'cylinder',
          link: { href: '/recursos/revendas-de-gas#operacao', label: 'Ver na vertical de gás' },
        },
      ],
    },
    {
      id: 'financeiro',
      title: 'Financeiro',
      intro:
        'Contas a pagar e a receber, caixa, conciliação e DRE, alimentados pelos pedidos que já estão no sistema.',
      screenshotPath: '/screenshots/06-financeiro-contas.png',
      screenshotAlt: 'Contas a pagar com centro de custo, unidade, valor e situação',
      features: [
        {
          id: 'contas-a-pagar-e-receber',
          title: 'Contas a pagar e a receber',
          description:
            'Lançamentos com parcelamento, recorrência mensal, agendamento e baixa individual ou em lote. Dashboards mostram o que vence hoje, o que está atrasado e o prazo médio de pagamento e recebimento.',
          icon: 'wallet',
        },
        {
          id: 'caixa-e-acerto',
          title: 'Caixa e acerto do entregador',
          description:
            'Abertura e fechamento de caixa por loja, sangrias e suprimentos. No fim do dia o acerto de cada entregador confere pedidos, dinheiro, cartão, PIX, despesas e troco, e fecha com um clique.',
          icon: 'calculator',
        },
        {
          id: 'conciliacao-bancaria',
          title: 'Conciliação bancária com IA',
          description:
            'Importe o extrato OFX do banco e o sistema casa cada lançamento com os pedidos, recebimentos e pagamentos do período. A IA sugere as conciliações que faltam e você só confirma.',
          icon: 'check-circle',
        },
        {
          id: 'contas-e-saldo-diario',
          title: 'Contas financeiras e saldo diário',
          description:
            'Cadastre contas bancárias, caixas e contas de recebimento de cartão e PIX. Transferências entre contas ficam registradas e o saldo de cada uma é fechado dia a dia, automaticamente.',
          icon: 'calendar',
        },
        {
          id: 'centros-de-custo',
          title: 'Centros de custo',
          description:
            'Classifique despesas por centro de custo (combustível, frota, folha, impostos) e por loja. O relatório de despesas por centro mostra para onde o dinheiro está indo.',
          icon: 'building-2',
        },
        {
          id: 'dre-gerencial',
          title: 'DRE gerencial',
          description:
            'Monte a estrutura do seu demonstrativo de resultado com as linhas que fazem sentido para a revenda e acompanhe receita, custos, despesas e resultado mês a mês, com comparativo de períodos.',
          icon: 'bar-chart-3',
        },
      ],
    },
    {
      id: 'frota-e-relatorios',
      title: 'Frota e relatórios',
      intro:
        'Custo por veículo e por entrega, e mais de 25 relatórios cruzando estoque, financeiro e vendas.',
      screenshotPath: '/screenshots/erp/manutencao-frota.png',
      screenshotAlt: 'Manutenção de frota com indicadores de custo por veículo',
      features: [
        {
          id: 'manutencao-de-frota',
          title: 'Manutenção de frota e combustível',
          description:
            'Registre abastecimentos, manutenções preventivas e corretivas por veículo. O sistema calcula custo por quilômetro e por unidade entregue, e alerta quando o gasto foge do padrão.',
          icon: 'wrench',
        },
        {
          id: 'relatorios',
          title: 'Mais de 25 relatórios e dashboards',
          description:
            'Faturamento detalhado e comparativo, estoque diário, estoque fiscal, compras, tempo de entrega, cancelamentos, crédito de clientes e muito mais. Tudo com filtros e exportação para Excel.',
          icon: 'bar-chart-3',
        },
      ],
    },
  ],
  synergies: [
    { moduleKey: 'essencial', reason: 'Pedido entregue baixa o estoque e entra no caixa do entregador' },
    { moduleKey: 'fiscal', reason: 'Compras e remessas de vasilhame geram os documentos fiscais' },
  ],
  nextModule: { slug: 'fiscal', name: 'Fiscal' },
};
