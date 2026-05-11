export interface MenuFeature {
  name: string;
  description: string;
  icon: string;
  href: string;
}

export interface MenuTab {
  id: string;
  label: string;
  moduleHref: string;
  ctaLabel: string;
  eyebrow: string;
  titlePlain: string;
  titleAccent: string;
  description: string;
  features: MenuFeature[];
}

export const RESOURCES_TABS: MenuTab[] = [
  {
    id: 'vendas',
    label: 'Vendas',
    moduleHref: '/recursos/essencial',
    ctaLabel: 'Ver módulo Essencial',
    eyebrow: 'Módulo Essencial · A partir de R$ 99,90/mês',
    titlePlain: 'O coração da',
    titleAccent: 'sua revenda.',
    description:
      'Pedidos, CRM, pagamentos, rastreamento e indicação. Tudo pra você vender e atender com qualidade.',
    features: [
      { name: 'Gestão de Pedidos', description: 'Do recebimento à entrega — máquina de estados.', icon: 'package', href: '/recursos/essencial' },
      { name: 'CRM — Clientes', description: 'Cadastro completo com múltiplos endereços.', icon: 'users', href: '/recursos/essencial' },
      { name: 'Múltiplos Pagamentos', description: 'PIX, dinheiro, cartão, saldo em conta.', icon: 'credit-card', href: '/recursos/essencial' },
      { name: 'Catálogo Digital', description: 'Configure o app do cliente.', icon: 'layout-grid', href: '/recursos/essencial' },
      { name: 'Rastreamento Real-Time', description: 'Cliente acompanha cada etapa.', icon: 'map-pin', href: '/recursos/essencial' },
      { name: 'Avaliação Pós-Entrega', description: 'Tempo e qualidade — 1 a 5 estrelas.', icon: 'star', href: '/recursos/essencial' },
      { name: 'Programa de Indicação', description: 'Renda PopGás — 3 níveis multinível.', icon: 'gift', href: '/recursos/essencial' },
      { name: 'Push Notifications', description: 'Envio segmentado pra clientes.', icon: 'bell', href: '/recursos/essencial' },
      { name: 'Histórico de Compras', description: 'Visão completa pra retenção.', icon: 'history', href: '/recursos/essencial' },
    ],
  },
  {
    id: 'estoque',
    label: 'Estoque',
    moduleHref: '/recursos/gestao',
    ctaLabel: 'Ver módulo Gestão',
    eyebrow: 'Módulo Gestão · +R$ 49,90/mês',
    titlePlain: 'Cada lote',
    titleAccent: 'no seu lugar.',
    description:
      'Lotes, condições, depósitos, transferências, inventário. Rastreabilidade do recebimento à saída.',
    features: [
      { name: 'Estoque por Lotes', description: 'Bom, avariado, recall — múltiplos depósitos.', icon: 'package', href: '/recursos/gestao' },
      { name: 'Múltiplos Depósitos', description: 'Vários warehouses por filial.', icon: 'building-2', href: '/recursos/gestao' },
      { name: 'Transferências', description: 'Movimentação entre depósitos com workflow.', icon: 'truck', href: '/recursos/gestao' },
      { name: 'Recebimento de Mercadorias', description: 'Entrada vinculada a fornecedor e nota.', icon: 'inbox', href: '/recursos/gestao' },
      { name: 'Inventário Físico', description: 'Contagem com relatório de divergências.', icon: 'clipboard-check', href: '/recursos/gestao' },
      { name: 'Movimentações Auditáveis', description: 'Cada entrada e saída registrada.', icon: 'arrow-up-down', href: '/recursos/gestao' },
    ],
  },
  {
    id: 'financeiro',
    label: 'Financeiro',
    moduleHref: '/recursos/gestao',
    ctaLabel: 'Ver módulo Gestão',
    eyebrow: 'Módulo Gestão · +R$ 49,90/mês',
    titlePlain: 'Financeiro',
    titleAccent: 'de verdade.',
    description:
      'Contas a pagar e receber, conciliação bancária, DRE, fechamento de caixa. Saiba onde o dinheiro tá.',
    features: [
      { name: 'Contas a Pagar', description: 'Agende, parcele, baixe automático.', icon: 'wallet', href: '/recursos/gestao' },
      { name: 'Contas a Receber', description: 'Parcelas com baixa automática.', icon: 'credit-card', href: '/recursos/gestao' },
      { name: 'Boleto Bancário', description: 'Gerado pelo sistema (EFI Pagamentos).', icon: 'file-text', href: '/recursos/gestao' },
      { name: 'Conciliação Bancária', description: 'Importa extrato e reconcilia automático.', icon: 'check-circle', href: '/recursos/gestao' },
      { name: 'Plano de Contas + DRE', description: 'Demonstrativo gerencial completo.', icon: 'bar-chart-3', href: '/recursos/gestao' },
      { name: 'Fechamento de Caixa', description: '5 minutos com auditoria automática.', icon: 'calculator', href: '/recursos/gestao' },
      { name: 'Acerto do Entregador', description: 'Settlement diário com conferência.', icon: 'user-check', href: '/recursos/gestao' },
      { name: 'Centros de Custo', description: 'Aloque despesas por centro ou projeto.', icon: 'building-2', href: '/recursos/gestao' },
      { name: 'Saldo Diário', description: 'Posição de cada conta bancária.', icon: 'calendar', href: '/recursos/gestao' },
    ],
  },
  {
    id: 'fiscal',
    label: 'Fiscal',
    moduleHref: '/recursos/fiscal',
    ctaLabel: 'Ver módulo Fiscal',
    eyebrow: 'Módulo Fiscal · +R$ 49,90/mês',
    titlePlain: 'Compliance',
    titleAccent: 'sem dor.',
    description:
      'NF-e e NFC-e direto na SEFAZ, cálculo automático de impostos, SPED Fiscal pronto pro contador.',
    features: [
      { name: 'Emissão de NF-e', description: 'Integração SEFAZ — retorno em segundos.', icon: 'file-text', href: '/recursos/fiscal' },
      { name: 'Emissão de NFC-e', description: 'Cupom fiscal eletrônico de venda.', icon: 'file-text', href: '/recursos/fiscal' },
      { name: 'Carta de Correção', description: 'CC-e direto pelo sistema.', icon: 'edit', href: '/recursos/fiscal' },
      { name: 'Manifestação de NF-e', description: 'Ciência, confirmação, desconhecimento.', icon: 'check-square', href: '/recursos/fiscal' },
      { name: 'CT-e (Transporte)', description: 'Conhecimento de transporte eletrônico.', icon: 'truck', href: '/recursos/fiscal' },
      { name: 'MDF-e (Manifesto)', description: 'Manifesto eletrônico de docs fiscais.', icon: 'clipboard-list', href: '/recursos/fiscal' },
      { name: 'Cálculo de Impostos', description: 'ICMS, PIS/COFINS, IPI, ISS, DIFAL.', icon: 'percent', href: '/recursos/fiscal' },
      { name: 'SPED Fiscal', description: 'Arquivo pronto pra entregar ao fisco.', icon: 'database', href: '/recursos/fiscal' },
      { name: 'Exportação de XMLs', description: 'Download em lote do mês fechado.', icon: 'download', href: '/recursos/fiscal' },
    ],
  },
  {
    id: 'whatsapp-ia',
    label: 'WhatsApp & IA',
    moduleHref: '/recursos/tech-ia',
    ctaLabel: 'Ver módulo Tech & IA',
    eyebrow: 'Tech & IA · +R$ 199,90/mês',
    titlePlain: 'Atendimento',
    titleAccent: '24/7 com IA.',
    description:
      'Chatbot LLM, fluxos visuais, WhatsApp oficial e RAG. Reduza até 70% do trabalho manual de atendimento.',
    features: [
      { name: 'Chatbot com IA', description: 'OpenAI e Anthropic — múltiplos modelos.', icon: 'sparkles', href: '/recursos/tech-ia' },
      { name: 'Construtor Visual de Fluxos', description: 'Drag-and-drop sem código.', icon: 'workflow', href: '/recursos/tech-ia' },
      { name: 'Base de Conhecimento (RAG)', description: 'Você ensina a IA com seus docs.', icon: 'book-open', href: '/recursos/tech-ia' },
      { name: 'WhatsApp Oficial Meta', description: 'API oficial WhatsApp Business.', icon: 'message-circle', href: '/recursos/tech-ia' },
      { name: 'WhatsApp Alternativo', description: 'whapi.cloud pra números pessoais.', icon: 'message-square', href: '/recursos/tech-ia' },
      { name: 'Templates Aprovados', description: 'Criação e gestão de templates Meta.', icon: 'message-square-text', href: '/recursos/tech-ia' },
      { name: 'Fila de Atendimento', description: 'Gestão com priorização.', icon: 'list-ordered', href: '/recursos/tech-ia' },
      { name: 'Escalação Humana', description: 'Bot transfere pra atendente quando precisa.', icon: 'user-check', href: '/recursos/tech-ia' },
      { name: 'App Web Responsivo', description: 'Acesse de qualquer dispositivo.', icon: 'globe', href: '/recursos/tech-ia' },
    ],
  },
];
