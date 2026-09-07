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
  features: [
    {
      title: 'Atendente de IA no WhatsApp',
      description:
        'A IA conhece seus produtos, preços, áreas de entrega e horários. Ela responde o cliente, monta o carrinho, confirma endereço e forma de pagamento e cria o pedido no sistema, sem intervenção humana.',
      icon: 'sparkles',
    },
    {
      title: 'Modelos de IA de última geração',
      description:
        'A plataforma usa modelos do Google e, via OpenRouter, da OpenAI e da Anthropic, e escolhe o mais adequado para cada etapa da conversa. Você não precisa configurar nada disso.',
      icon: 'sparkles',
    },
    {
      title: 'Base de conhecimento própria',
      description:
        'Cadastre as regras da sua revenda (política de troca, formas de pagamento, dúvidas frequentes) e a IA responde com base nelas, sem inventar.',
      icon: 'book-open',
    },
    {
      title: 'WhatsApp oficial (Meta) ou número comum',
      description:
        'Conecte um número pela API oficial do WhatsApp Business ou use um número comum lendo um QR code. Dá para ter mais de um número por revenda, cada um com sua finalidade.',
      icon: 'message-circle',
    },
    {
      title: 'Notificações automáticas de pedido',
      description:
        'Pedido confirmado, pagamento recebido, saiu para entrega com link de rastreamento, entregador chegando, entregue e cancelado. Cada mensagem usa um template aprovado pela Meta e você liga só as que quiser.',
      icon: 'bell',
    },
    {
      title: 'Central de atendimento',
      description:
        'Todas as conversas em uma tela, separadas em atendimentos, fila e chatbot. Cada conversa mostra o número de origem, o atendente responsável e o histórico completo, com envio de texto, áudio e arquivos.',
      icon: 'message-square',
    },
    {
      title: 'Transferência para atendente humano',
      description:
        'Quando o cliente pede ou quando a IA percebe que não vai resolver, a conversa vai para a fila da equipe. O atendente assume com todo o contexto e devolve para o bot quando terminar.',
      icon: 'user-check',
    },
    {
      title: 'Filas de atendimento',
      description:
        'Crie filas por assunto ou por unidade (vendas, suporte, loja centro) e defina quais atendentes recebem cada uma, tanto para WhatsApp quanto para a bina do telefone.',
      icon: 'list-ordered',
    },
    {
      title: 'Campanhas de marketing',
      description:
        'Envie promoções segmentadas para clientes inativos, em risco ou VIP pelo WhatsApp, com cupom e link de pedido. Acompanhe enviadas, lidas e conversões, e integre com anúncios do Meta Ads.',
      icon: 'message-square-text',
    },
    {
      title: 'Dashboards de IA e WhatsApp',
      description:
        'Volume de conversas, taxa de resolução pela IA, pedidos criados pelo bot, custo por conversa e entregabilidade das mensagens, tudo por período.',
      icon: 'activity',
    },
    {
      title: 'Bina integrada ao telefone',
      description:
        'Quando o telefone toca, o sistema identifica o cliente e abre o cadastro com endereços e pedidos anteriores, para o operador lançar o pedido em segundos.',
      icon: 'phone',
    },
  ],
  synergies: [
    { moduleKey: 'essencial', reason: 'IA cria o pedido direto no sistema, com preço e entrega corretos' },
    { moduleKey: 'gestao', reason: 'Pedidos do WhatsApp entram no mesmo caixa e acerto' },
  ],
  nextModule: { slug: 'revendas-de-gas', name: 'Para revendas de gás' },
};
