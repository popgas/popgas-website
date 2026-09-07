import type { ModuleContent } from './types';

export const techIaContent: ModuleContent = {
  slug: 'tech-ia',
  moduleKey: 'techia',
  hero: {
    eyebrow: 'MÓDULO PREMIUM · + R$ 199,90/mês',
    title: 'IA e WhatsApp atendendo a sua revenda.',
    subtitle:
      'Conecte o WhatsApp da revenda, deixe a inteligência artificial atender, tirar dúvidas e fechar pedidos 24 horas por dia, e transfira para um atendente quando precisar.',
  },
  screenshotPath: '/screenshots/04-conversa-whatsapp.png',
  screenshotAlt: 'Tela de atendimento no WhatsApp com chatbot de IA do PopGás Sistema',
  sections: [
    {
      id: 'ia-no-whatsapp',
      title: 'IA no WhatsApp',
      intro:
        'A IA conhece seus produtos, preços, áreas e horários, e fecha pedidos sozinha no número da revenda.',
      screenshotPath: '/screenshots/04-conversa-whatsapp.png',
      screenshotAlt: 'Conversa no WhatsApp com o chatbot transferindo para um atendente',
      features: [
        {
          id: 'atendente-de-ia',
          title: 'Atendente de IA no WhatsApp',
          description:
            'A IA conhece seus produtos, preços, áreas de entrega e horários. Ela responde o cliente, monta o carrinho, confirma endereço e forma de pagamento e cria o pedido no sistema, sem intervenção humana.',
          icon: 'sparkles',
        },
        {
          id: 'modelos-de-ia',
          title: 'Modelos de IA de última geração',
          description:
            'A plataforma usa modelos do Google e, via OpenRouter, da OpenAI e da Anthropic, e escolhe o mais adequado para cada etapa da conversa. Você não precisa configurar nada disso.',
          icon: 'sparkles',
        },
        {
          id: 'base-de-conhecimento',
          title: 'Base de conhecimento própria',
          description:
            'Cadastre as regras da sua revenda (política de troca, formas de pagamento, dúvidas frequentes) e a IA responde com base nelas, sem inventar.',
          icon: 'book-open',
        },
        {
          id: 'whatsapp-oficial-ou-numero-comum',
          title: 'WhatsApp oficial (Meta) ou número comum',
          description:
            'Conecte um número pela API oficial do WhatsApp Business ou use um número comum lendo um QR code. Dá para ter mais de um número por revenda, cada um com sua finalidade.',
          icon: 'message-circle',
        },
      ],
    },
    {
      id: 'central-de-atendimento',
      title: 'Central de atendimento',
      intro:
        'Quando a IA não resolve, a conversa cai na fila da sua equipe, com todo o contexto.',
      screenshotPath: '/screenshots/erp/canais-chatbot-ia.png',
      screenshotAlt: 'Canais de WhatsApp conectados ao chatbot de IA',
      features: [
        {
          id: 'conversas-em-uma-tela',
          title: 'Todas as conversas em uma tela',
          description:
            'Separadas em atendimentos, fila e chatbot. Cada conversa mostra o número de origem, o atendente responsável e o histórico completo, com envio de texto, áudio e arquivos.',
          icon: 'message-square',
        },
        {
          id: 'transferencia-humana',
          title: 'Transferência para atendente humano',
          description:
            'Quando o cliente pede ou quando a IA percebe que não vai resolver, a conversa vai para a fila da equipe. O atendente assume com todo o contexto e devolve para o bot quando terminar.',
          icon: 'user-check',
        },
        {
          id: 'filas-de-atendimento',
          title: 'Filas de atendimento',
          description:
            'Crie filas por assunto ou por unidade (vendas, suporte, loja centro) e defina quais atendentes recebem cada uma, tanto para WhatsApp quanto para a bina do telefone.',
          icon: 'list-ordered',
        },
      ],
    },
    {
      id: 'notificacoes-e-campanhas',
      title: 'Notificações e campanhas',
      intro:
        'O mesmo número avisa o cliente sobre cada etapa do pedido e leva promoções para quem parou de comprar.',
      screenshotPath: '/screenshots/erp/templates-whatsapp.png',
      screenshotAlt: 'Templates de mensagens do WhatsApp aprovados pela Meta',
      features: [
        {
          id: 'notificacoes-de-pedido',
          title: 'Notificações automáticas de pedido',
          description:
            'Pedido confirmado, pagamento recebido, saiu para entrega com link de rastreamento, entregador chegando, entregue e cancelado. Cada mensagem usa um template aprovado pela Meta e você liga só as que quiser.',
          icon: 'bell',
        },
        {
          id: 'campanhas',
          title: 'Campanhas de marketing',
          description:
            'Envie promoções segmentadas para clientes inativos, em risco ou VIP pelo WhatsApp, com cupom e link de pedido. Acompanhe enviadas, lidas e conversões, e integre com anúncios do Meta Ads.',
          icon: 'message-square-text',
        },
        {
          id: 'dashboards-de-ia',
          title: 'Dashboards de IA e WhatsApp',
          description:
            'Volume de conversas, taxa de resolução pela IA, pedidos criados pelo bot, custo por conversa e entregabilidade das mensagens, tudo por período.',
          icon: 'activity',
        },
      ],
    },
  ],
  synergies: [
    { moduleKey: 'essencial', reason: 'IA cria o pedido direto no sistema, com preço e entrega corretos' },
    { moduleKey: 'gestao', reason: 'Pedidos do WhatsApp entram no mesmo caixa e acerto' },
  ],
  nextModule: { slug: 'revendas-de-gas', name: 'Para revendas de gás' },
};
