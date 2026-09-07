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
          screenshotPath: '/screenshots/features/formas-de-pagamento.png',
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
      screenshotPath: '/screenshots/app-cliente-rastreamento.png',
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
          screenshotPath: '/screenshots/app-cliente-rastreamento.png',
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
      title: 'Multi-loja e relatórios',
      intro:
        'Uma ou dez unidades, cada operador vê só o que precisa, e você vê o consolidado.',
      screenshotPath: '/screenshots/erp/dashboard-contas-a-pagar.png',
      screenshotAlt: 'Dashboard com indicadores e gráficos',
      features: [
        {
          id: 'multi-loja-e-permissoes',
          title: 'Multi-loja e permissões',
          description:
            'Cadastre várias unidades, cada uma com estoque, caixa e entregadores próprios, e veja tudo consolidado. Perfis de acesso definem o que cada operador pode ver e fazer, com trilha de auditoria.',
          screenshotPath: '/screenshots/features/multi-loja-e-permissoes.png',
          icon: 'building-2',
        },
        {
          id: 'dashboards-de-vendas',
          title: 'Dashboards e relatórios de vendas',
          description:
            'Dashboard de pedidos com faturamento, ticket médio, tempo de entrega e mapa de calor. Relatórios de cancelamentos, atrasos, resumo diário e movimentações por colaborador, todos exportáveis para Excel.',
          screenshotPath: '/screenshots/features/dashboards-de-vendas.png',
          icon: 'bar-chart-3',
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
