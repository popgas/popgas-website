import type { ModuleContent } from './types';

export const essencialContent: ModuleContent = {
  slug: 'essencial',
  moduleKey: 'essencial',
  hero: {
    eyebrow: 'PLANO BASE · R$ 99,90/mês',
    title: 'Vendas, CRM e rastreamento.',
    subtitle:
      'O coração do PopGás Sistema. Tudo o que sua revenda precisa para começar a vender e atender com qualidade.',
  },
  screenshotPath: '/screenshots/01-pedidos-lista.png',
  screenshotAlt: 'Tela de lista de pedidos do PopGás Sistema',
  features: [
    { title: 'Gestão completa de pedidos', description: 'Criação, confirmação, envio, entrega, cancelamento e reabertura com máquina de estados.', icon: 'package' },
    { title: 'Cadastro completo de clientes', description: 'CPF/CNPJ, telefone, e-mail, múltiplos endereços com geolocalização.', icon: 'users' },
    { title: 'Múltiplas formas de pagamento', description: 'Dinheiro com troco, cartão de débito/crédito, PIX, saldo em conta.', icon: 'credit-card' },
    { title: 'Cálculo automático de preços', description: 'Motor de precificação com descontos, promoções, taxas e créditos.', icon: 'calculator' },
    { title: 'Catálogo digital para o app', description: 'Configure seções, menus, categorias, ofertas e destaques.', icon: 'layout-grid' },
    { title: 'Rastreamento em tempo real', description: 'Cliente acompanha o pedido com timeline visual de cada etapa.', icon: 'map-pin' },
    { title: 'Avaliação pós-entrega', description: 'Cliente avalia tempo de entrega e qualidade do entregador (1-5 estrelas).', icon: 'star' },
    { title: 'Programa de indicação multinível', description: 'Renda PopGás: 3 níveis de indicação com acúmulo automático de créditos.', icon: 'gift' },
    { title: 'Push notifications', description: 'Envio segmentado para dispositivos cadastrados.', icon: 'bell' },
    { title: 'Histórico e frequência de compra', description: 'Visão completa de cada cliente para ações de retenção.', icon: 'history' },
  ],
  synergies: [
    { moduleKey: 'gestao', reason: 'Estoque baixa automático ao confirmar pedido' },
    { moduleKey: 'fiscal', reason: 'NF-e gerada na conclusão do pedido' },
    { moduleKey: 'techia', reason: 'IA atende e cria pedidos via WhatsApp' },
  ],
  nextModule: { slug: 'gestao', name: 'Gestão' },
};
