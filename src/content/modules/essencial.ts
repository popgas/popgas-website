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
  sections: [
    {
      id: 'pedidos-e-clientes',
      title: 'Pedidos e clientes',
      intro:
        'Tudo que a equipe de atendimento usa o dia inteiro: lançar pedido, achar o cliente, cobrar do jeito certo e acompanhar cada entrega até o fim.',
      screenshotPath: '/screenshots/01-pedidos-lista.png',
      screenshotAlt: 'Lista de pedidos realizados com cliente, endereço, situação e pagamento',
      features: [
        {
          id: 'gestao-de-pedidos',
          title: 'Gestão completa de pedidos',
          description:
            'Cada pedido passa por um fluxo claro: aberto, confirmado, saiu para entrega, entregue ou cancelado com motivo. Pedidos entregues podem ser reabertos para correção, e a lista mostra cliente, endereço, prazo, valor e forma de pagamento sem abrir nada.',
          screenshotPath: '/screenshots/features/gestao-de-pedidos.png',
          icon: 'package',
        },
        {
          id: 'lancamento-rapido',
          title: 'Balcão e telefone com bina',
          description:
            'Tela de novo pedido com busca de cliente por nome ou telefone, endereços salvos, produtos com preço da tabela vigente e cálculo automático de troco. Quando o telefone toca, a bina integrada identifica o cliente e abre o cadastro na hora.',
          screenshotPath: '/screenshots/features/lancamento-rapido.png',
          icon: 'phone',
        },
        {
          id: 'cadastro-de-clientes',
          title: 'Cadastro completo de clientes',
          description:
            'CPF ou CNPJ, telefones, e-mail e vários endereços por cliente, cada um com coordenadas no mapa. Histórico de pedidos, saldo em conta e observações ficam na mesma ficha, e a importação em lote traz sua base atual em planilha.',
          screenshotPath: '/screenshots/features/cadastro-de-clientes.png',
          icon: 'users',
        },
        {
          id: 'formas-de-pagamento',
          title: 'Múltiplas formas de pagamento',
          description:
            'Dinheiro com troco, cartão de débito e crédito na maquininha, PIX com QR code, boleto para clientes empresa e saldo em conta do cliente. Você escolhe quais formas cada canal de venda aceita.',
          screenshotPath: '/screenshots/erp/dashboard-pedidos-pagamento.png',
          icon: 'credit-card',
        },
        {
          id: 'precos-e-promocoes',
          title: 'Preços, promoções e descontos',
          description:
            'Tabelas de preço por unidade e por canal, com vigência programada. Descontos por cupom, primeira compra, leve mais pague menos, brinde e crédito do cliente são calculados automaticamente na hora do pedido.',
          screenshotPath: '/screenshots/features/precos-e-promocoes.png',
          icon: 'calculator',
        },
        {
          id: 'historico-de-compras',
          title: 'Histórico e frequência de compra',
          description:
            'Veja quando cada cliente comprou pela última vez, o intervalo médio entre pedidos e quem está atrasado para a próxima compra. Segmente clientes em risco, inativos ou VIP para ações de retenção.',
          screenshotPath: '/screenshots/features/historico-de-compras.png',
          icon: 'history',
        },
      ],
    },
    {
      id: 'app-do-cliente',
      title: 'App do cliente',
      intro:
        'Seu cliente pede sozinho, pelo app ou pelo navegador, e acompanha o entregador no mapa. Tudo com a marca da sua revenda.',
      screenshotPath: '/screenshots/app-cliente-rastreamento-full.png',
      screenshotAlt: 'App do cliente mostrando o entregador a caminho no mapa',
      screenshotPortrait: true,
      features: [
        {
          id: 'app-do-cliente-catalogo',
          title: 'Pedido no celular e no navegador',
          description:
            'Seu cliente faz o pedido sozinho, escolhe endereço, forma de pagamento e tipo de entrega. Você monta o catálogo com categorias, destaques e ofertas por horário, e aplica logo, cores e nome da sua revenda. Sem instalar nada, se ele preferir o navegador.',
          screenshotPath: '/screenshots/features/app-do-cliente-catalogo.png',
          icon: 'layout-grid',
        },
        {
          id: 'rastreamento-em-tempo-real',
          title: 'Rastreamento em tempo real',
          description:
            'Assim que o entregador sai, o cliente vê a posição dele no mapa e uma linha do tempo com cada etapa do pedido. Você acompanha todos os entregadores ao vivo no painel.',
          screenshotPath: '/screenshots/app-cliente-rastreamento-full.png',
          screenshotPortrait: true,
          icon: 'map-pin',
        },
        {
          id: 'avaliacao-pos-entrega',
          title: 'Avaliação pós-entrega',
          description:
            'Depois de cada entrega o cliente avalia tempo e atendimento do entregador de 1 a 5 estrelas, com comentário. As notas alimentam o relatório de avaliações e o ranking dos entregadores.',
          screenshotPath: '/screenshots/features/avaliacao-pos-entrega.png',
          icon: 'star',
        },
      ],
    },
    {
      id: 'app-do-entregador',
      title: 'App do entregador',
      intro:
        'O entregador trabalha pelo celular e você enxerga a rota inteira no painel, em tempo real.',
      screenshotPath: '/screenshots/erp/rastrear-entregadores.png',
      screenshotAlt: 'Mapa com a posição dos entregadores e das unidades',
      features: [
        {
          id: 'app-do-entregador-rota',
          title: 'Rota, venda na porta e acerto',
          description:
            'Carregamento do veículo, transferências entre entregadores, pedidos da rota com navegação, lançamento de venda na porta do cliente e acerto de contas no fim do dia. Escala de trabalho, ausências e pontuação também ficam no app.',
          screenshotPath: '/screenshots/features/app-do-entregador-rota.png',
          icon: 'truck',
        },
        {
          id: 'rastreamento-gps',
          title: 'Posição de cada entregador no mapa',
          description:
            'O app envia a localização enquanto o entregador está em rota. No painel você vê todos os entregadores e unidades no mapa e sabe quem está mais perto de cada pedido.',
          screenshotPath: '/screenshots/features/rastreamento-gps.png',
          icon: 'navigation',
        },
        {
          id: 'operacao-de-gas',
          title: 'Vasilhames, carregamentos e acerto',
          description:
            'As rotinas específicas da revenda de gás (carregamento do caminhão, controle de vasilhames, acerto diário do entregador, escala e penalidades) estão detalhadas na página da vertical.',
          screenshotPath: '/screenshots/features/operacao-de-gas.png',
          icon: 'cylinder',
          link: { href: '/recursos/revendas-de-gas#operacao', label: 'Ver na vertical de gás' },
        },
      ],
    },
    {
      id: 'multi-loja-e-relatorios',
      title: 'Dashboards, relatórios e multi-loja',
      intro:
        'Faturamento, ticket médio, pontualidade, cancelamentos e mapa de calor dos pedidos, atualizados o dia inteiro. Uma ou dez unidades, com o consolidado na sua tela.',
      screenshotPath: '/screenshots/erp/dashboard-pedidos-visao-geral.png',
      screenshotAlt: 'Dashboard de pedidos realizados: faturamento, pedidos entregues, ticket médio e gráfico mensal de pedidos e receita',
      features: [
        {
          id: 'dashboards-de-vendas',
          title: 'Dashboard de pedidos',
          description:
            'Faturamento, pedidos entregues, ticket médio, pontualidade e tempo médio de entrega, com comparação ao período anterior. Gráficos de pedidos por mês, por canal de venda (app, WhatsApp, telefone, balcão) e por tipo de entrega.',
          icon: 'bar-chart-3',
          screenshotPath: '/screenshots/erp/dashboard-pedidos-composicao.png',
        },
        {
          id: 'mapa-de-calor',
          title: 'Mapa de calor dos pedidos',
          description:
            'Cada pedido do período no mapa da cidade, agrupado por região. Mostra onde a revenda vende mais, onde está perdendo entregas para o atraso e onde vale abrir uma nova unidade ou ajustar a área de atendimento.',
          icon: 'map-pinned',
          screenshotPath: '/screenshots/erp/dashboard-pedidos-mapa-calor.png',
        },
        {
          id: 'pedidos-atrasados',
          title: 'Pedidos atrasados e pontualidade',
          description:
            'Taxa de entrega no prazo (OTD), atraso médio e a distribuição dos atrasos em faixas (até 10, 30, 60 minutos ou mais), dia a dia. É o painel para cobrar a operação com número, não com impressão.',
          icon: 'activity',
          screenshotPath: '/screenshots/erp/dashboard-pedidos-atrasados.png',
        },
        {
          id: 'pedidos-cancelados',
          title: 'Pedidos cancelados e recuperação',
          description:
            'Quantos pedidos foram cancelados, quanto de receita se perdeu, a taxa de cancelamento e quantos clientes voltaram a comprar em 24 horas. Cada cancelamento leva o motivo cadastrado pela equipe.',
          icon: 'history',
          screenshotPath: '/screenshots/erp/dashboard-pedidos-cancelados.png',
        },
        {
          id: 'multi-loja-e-permissoes',
          title: 'Multi-loja e permissões',
          description:
            'Cadastre várias unidades, cada uma com estoque, caixa e entregadores próprios, e veja tudo consolidado. Perfis de acesso definem o que cada operador pode ver e fazer, com trilha de auditoria.',
          icon: 'building-2',
          screenshotPath: '/screenshots/features/multi-loja-e-permissoes.png',
        },
      ],
    },
  ],
  synergies: [
    { moduleKey: 'gestao', reason: 'Estoque baixa automaticamente quando o pedido é entregue' },
    { moduleKey: 'fiscal', reason: 'NFC-e emitida automaticamente na entrega, se você quiser' },
    { moduleKey: 'techia', reason: 'IA atende no WhatsApp e cria o pedido direto no sistema' },
  ],
  nextModule: { slug: 'gestao', name: 'Gestão' },
};
