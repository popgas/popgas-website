import type { ModuleContent } from './types';

export const revendasDeGasContent: ModuleContent = {
  slug: 'revendas-de-gas',
  moduleKey: 'gas-vertical',
  hero: {
    eyebrow: 'VERTICAL ESPECIALIZADA',
    title: 'Pensado pelo dono de revenda, para o dono de revenda.',
    subtitle:
      'O PopGás nasceu dentro de uma distribuidora de gás. Vasilhames, carregamentos, acerto do entregador, escala e frota já vêm resolvidos, sem adaptação.',
  },
  screenshotPath: '/screenshots/07-acerto-entregador.png',
  screenshotAlt: 'Tela de acerto de contas do entregador no PopGás Sistema',
  features: [
    {
      title: 'Carregamentos de veículos',
      description:
        'Monte a carga de cada caminhão ou moto com os produtos do depósito. O entregador confere no app, e cada entrega baixa do carregamento até o retorno, quando o que sobrou volta para o estoque.',
      icon: 'truck',
    },
    {
      title: 'Gestão de vasilhames',
      description:
        'Controle de cheios e vazios por depósito e por veículo, remessa de vasilhames para a distribuidora com nota fiscal, e registro de troca, empréstimo, quebra e furto.',
      icon: 'cylinder',
    },
    {
      title: 'Acerto do entregador',
      description:
        'No fim do dia o sistema soma os pedidos entregues, separa dinheiro, cartão e PIX, desconta despesas e troco e mostra quanto o entregador precisa prestar contas. Divergências ficam visíveis na hora.',
      icon: 'calculator',
    },
    {
      title: 'App do entregador',
      description:
        'Rota do dia com navegação, pedidos novos chegando em tempo real, lançamento de venda na porta do cliente, despesas de combustível e manutenção, e acerto ao final do turno.',
      icon: 'smartphone',
    },
    {
      title: 'Rastreamento GPS em tempo real',
      description:
        'A posição de cada entregador é atualizada continuamente enquanto ele está em rota. Você vê todos no mapa e o cliente vê o dele chegando.',
      icon: 'navigation',
    },
    {
      title: 'Distribuição de rotas por regra',
      description:
        'Defina como os pedidos são distribuídos entre os entregadores: por prazo de entrega ou pela melhor rota a partir da posição atual de cada um.',
      icon: 'map',
    },
    {
      title: 'Áreas e horários de atendimento',
      description:
        'Desenhe as áreas de cobertura de cada unidade no mapa, com taxa e prazo por região, e configure horários de funcionamento e feriados. Pedidos fora da área são bloqueados no app.',
      icon: 'map-pinned',
    },
    {
      title: 'Tipos de entrega configuráveis',
      description:
        'Entrega rápida, normal, agendada com janelas de horário ou retirada na loja. Cada tipo tem sua taxa, prazo e regra de disponibilidade.',
      icon: 'sliders',
    },
    {
      title: 'Escala, ausências e penalidades',
      description:
        'Escala semanal e diária dos entregadores, registro de faltas com motivo, penalidades por tipo e pontuação mensal com bonificação, tudo visível no app de cada um.',
      icon: 'clipboard-check',
    },
    {
      title: 'Manutenção de frota e combustível',
      description:
        'Abastecimentos e manutenções por veículo com custo por quilômetro e por unidade entregue, para saber qual veículo está pesando no resultado.',
      icon: 'wrench',
    },
    {
      title: 'Brindes e promoções',
      description:
        'Brinde automático por quantidade do produto principal, cupons, descontos de primeira compra e ofertas por horário no app do cliente.',
      icon: 'gift',
    },
    {
      title: 'Suporte técnico vinculado ao pedido',
      description:
        'Abra um chamado de suporte técnico (vazamento, regulador, instalação) a partir do pedido e acompanhe até a conclusão.',
      icon: 'wrench',
    },
  ],
};
