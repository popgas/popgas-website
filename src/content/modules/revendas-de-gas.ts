import type { ModuleContent } from './types';

export const revendasDeGasContent: ModuleContent = {
  slug: 'revendas-de-gas',
  moduleKey: 'gas-vertical',
  hero: {
    eyebrow: 'VERTICAL ESPECIALIZADA · INCLUÍDA EM TODOS OS PLANOS',
    title: 'Pensado pelo dono de revenda, para o dono de revenda.',
    subtitle:
      'O PopGás nasceu dentro de uma distribuidora de gás. Vasilhames, carregamentos, acerto do entregador, escala e frota já vêm resolvidos, sem adaptação.',
  },
  screenshotPath: '/screenshots/07-acerto-entregador.png',
  screenshotAlt: 'Tela de acerto de contas do entregador no PopGás Sistema',
  sections: [
    {
      id: 'operacao',
      title: 'Operação diária',
      intro:
        'Carregar o caminhão, controlar cheios e vazios e fechar o dia com cada entregador.',
      screenshotPath: '/screenshots/07-acerto-entregador.png',
      screenshotAlt: 'Acerto de contas dos entregadores com valor, situação e data',
      features: [
        {
          id: 'carregamentos',
          title: 'Carregamentos de veículos',
          description:
            'Monte a carga de cada caminhão ou moto com os produtos do depósito. O entregador confere no app, e cada entrega baixa do carregamento até o retorno, quando o que sobrou volta para o estoque.',
          icon: 'truck',
        },
        {
          id: 'vasilhames',
          title: 'Gestão de vasilhames',
          description:
            'Controle de cheios e vazios por depósito e por veículo, remessa de vasilhames para a distribuidora com nota fiscal, e registro de troca, empréstimo, quebra e furto.',
          icon: 'cylinder',
        },
        {
          id: 'acerto-do-entregador',
          title: 'Acerto do entregador',
          description:
            'No fim do dia o sistema soma os pedidos entregues, separa dinheiro, cartão e PIX, desconta despesas e troco e mostra quanto o entregador precisa prestar contas. Divergências ficam visíveis na hora.',
          icon: 'calculator',
          link: { href: '/recursos/gestao#caixa-e-acerto', label: 'Ver caixa e acerto no módulo Gestão' },
        },
        {
          id: 'app-do-entregador',
          title: 'App do entregador',
          description:
            'Rota do dia com navegação, pedidos novos chegando em tempo real, lançamento de venda na porta do cliente, despesas de combustível e manutenção, e acerto ao final do turno.',
          icon: 'smartphone',
          link: { href: '/recursos/essencial#app-do-entregador', label: 'Ver no módulo Essencial' },
        },
      ],
    },
    {
      id: 'logistica',
      title: 'Logística e entregas',
      intro:
        'Quem entrega o quê, por onde, em quanto tempo e a que custo, definido por unidade.',
      screenshotPath: '/screenshots/erp/rastrear-entregadores.png',
      screenshotAlt: 'Mapa de rastreamento de entregadores e unidades',
      features: [
        {
          id: 'rastreamento-gps',
          title: 'Rastreamento GPS em tempo real',
          description:
            'A posição de cada entregador é atualizada continuamente enquanto ele está em rota. Você vê todos no mapa e o cliente vê o dele chegando.',
          icon: 'navigation',
        },
        {
          id: 'distribuicao-de-rotas',
          title: 'Distribuição de rotas por regra',
          description:
            'Defina como os pedidos são distribuídos entre os entregadores: por prazo de entrega ou pela melhor rota a partir da posição atual de cada um.',
          icon: 'map',
        },
        {
          id: 'areas-e-horarios',
          title: 'Áreas e horários de atendimento',
          description:
            'Desenhe as áreas de cobertura de cada unidade no mapa, com taxa e prazo por região, e configure horários de funcionamento e feriados. Pedidos fora da área são bloqueados no app.',
          icon: 'map-pinned',
        },
        {
          id: 'tipos-de-entrega',
          title: 'Tipos de entrega configuráveis',
          description:
            'Entrega rápida, normal, agendada com janelas de horário ou retirada na loja. Cada tipo tem sua taxa, prazo e regra de disponibilidade.',
          icon: 'sliders',
        },
      ],
    },
    {
      id: 'equipe-e-frota',
      title: 'Equipe, frota e pós-venda',
      intro:
        'Escala, penalidades, custo de frota e o suporte técnico que o cliente de gás precisa.',
      screenshotPath: '/screenshots/erp/manutencao-frota.png',
      screenshotAlt: 'Manutenção de frota com custo por veículo',
      features: [
        {
          id: 'escala-e-penalidades',
          title: 'Escala, ausências e penalidades',
          description:
            'Escala semanal e diária dos entregadores, registro de faltas com motivo, penalidades por tipo e pontuação mensal com bonificação, tudo visível no app de cada um.',
          icon: 'clipboard-check',
        },
        {
          id: 'frota-e-combustivel',
          title: 'Manutenção de frota e combustível',
          description:
            'Abastecimentos e manutenções por veículo com custo por quilômetro e por unidade entregue, para saber qual veículo está pesando no resultado.',
          icon: 'wrench',
          link: { href: '/recursos/gestao#manutencao-de-frota', label: 'Ver no módulo Gestão' },
        },
        {
          id: 'brindes-e-promocoes',
          title: 'Brindes e promoções',
          description:
            'Brinde automático por quantidade do produto principal, cupons, descontos de primeira compra e ofertas por horário no app do cliente.',
          icon: 'gift',
        },
        {
          id: 'suporte-tecnico',
          title: 'Suporte técnico vinculado ao pedido',
          description:
            'Abra um chamado de suporte técnico (vazamento, regulador, instalação) a partir do pedido e acompanhe até a conclusão.',
          icon: 'wrench',
        },
      ],
    },
  ],
};
