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
      'Pedidos, clientes, pagamentos, app do cliente e app do entregador. Tudo pra você vender e entregar com controle.',
    features: [
      { name: 'Gestão de Pedidos', description: 'Do lançamento à entrega, com reabertura.', icon: 'package', href: '/recursos/essencial' },
      { name: 'Cadastro de Clientes', description: 'CPF/CNPJ, vários endereços, histórico.', icon: 'users', href: '/recursos/essencial' },
      { name: 'Múltiplos Pagamentos', description: 'PIX, dinheiro, cartão, boleto, saldo em conta.', icon: 'credit-card', href: '/recursos/essencial' },
      { name: 'App do Cliente', description: 'Celular e navegador, com a sua marca.', icon: 'layout-grid', href: '/recursos/essencial' },
      { name: 'Rastreamento em Tempo Real', description: 'Cliente acompanha o entregador no mapa.', icon: 'map-pin', href: '/recursos/essencial' },
      { name: 'Avaliação Pós-Entrega', description: 'Tempo e atendimento, 1 a 5 estrelas.', icon: 'star', href: '/recursos/essencial' },
      { name: 'Preços e Promoções', description: 'Tabelas, cupons, brindes, primeira compra.', icon: 'gift', href: '/recursos/essencial' },
      { name: 'Bina Integrada', description: 'Telefone toca, cadastro abre.', icon: 'phone', href: '/recursos/essencial' },
      { name: 'App do Entregador', description: 'Carregamentos, rota, venda, acerto, escala.', icon: 'truck', href: '/recursos/essencial' },
      { name: 'Histórico de Compras', description: 'Frequência e segmentação pra retenção.', icon: 'history', href: '/recursos/essencial' },
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
      'Lotes, condições, depósitos, transferências e conferência. Rastreabilidade do recebimento à entrega.',
    features: [
      { name: 'Estoque por Lotes', description: 'Bom estado, avariado, vencido, devolvido.', icon: 'package', href: '/recursos/gestao' },
      { name: 'Múltiplos Depósitos', description: 'Lojas, depósitos e veículos.', icon: 'building-2', href: '/recursos/gestao' },
      { name: 'Transferências', description: 'Entre depósitos e entre entregadores, com aceite.', icon: 'truck', href: '/recursos/gestao' },
      { name: 'Recebimento de Mercadorias', description: 'Entrada com fornecedor e nota.', icon: 'inbox', href: '/recursos/gestao' },
      { name: 'Conferência de Estoque', description: 'Físico × sistema, por produto.', icon: 'clipboard-check', href: '/recursos/gestao' },
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
      'Contas a pagar e receber, conciliação bancária, caixa, DRE gerencial. Saiba onde o dinheiro está.',
    features: [
      { name: 'Contas a Pagar', description: 'Parcele, agende, baixe em lote.', icon: 'wallet', href: '/recursos/gestao' },
      { name: 'Contas a Receber', description: 'Parcelas, vencidos e prazo médio.', icon: 'credit-card', href: '/recursos/gestao' },
      { name: 'Conciliação Bancária', description: 'Importa OFX e concilia com ajuda da IA.', icon: 'check-circle', href: '/recursos/gestao' },
      { name: 'DRE Gerencial', description: 'Resultado mês a mês, do seu jeito.', icon: 'bar-chart-3', href: '/recursos/gestao' },
      { name: 'Caixa', description: 'Abertura, fechamento, sangria, suprimento.', icon: 'calculator', href: '/recursos/gestao' },
      { name: 'Acerto do Entregador', description: 'Fechamento diário com conferência.', icon: 'user-check', href: '/recursos/gestao' },
      { name: 'Centros de Custo', description: 'Despesas por centro e por loja.', icon: 'building-2', href: '/recursos/gestao' },
      { name: 'Saldo Diário', description: 'Posição de cada conta, dia a dia.', icon: 'calendar', href: '/recursos/gestao' },
      { name: 'Frota e Combustível', description: 'Custo por km e por unidade entregue.', icon: 'wrench', href: '/recursos/gestao' },
      { name: '+25 Relatórios', description: 'Estoque, vendas, financeiro, entregas.', icon: 'bar-chart-3', href: '/recursos/gestao' },
    ],
  },
  {
    id: 'fiscal',
    label: 'Fiscal',
    moduleHref: '/recursos/fiscal',
    ctaLabel: 'Ver módulo Fiscal',
    eyebrow: 'Módulo Fiscal · +R$ 49,90/mês',
    titlePlain: 'Nota fiscal',
    titleAccent: 'sem dor.',
    description:
      'NF-e, NFC-e, NFS-e, CT-e e MDF-e homologados junto à SEFAZ, impostos automáticos, SPED pronto pro contador.',
    features: [
      { name: 'Emissão de NF-e', description: 'Autorização em segundos.', icon: 'file-text', href: '/recursos/fiscal' },
      { name: 'Emissão de NFC-e', description: 'Automática na entrega, se quiser.', icon: 'file-text', href: '/recursos/fiscal' },
      { name: 'NFS-e Nacional', description: 'Nota de serviço no padrão nacional.', icon: 'file-text', href: '/recursos/fiscal' },
      { name: 'Carta de Correção', description: 'CC-e direto pela nota.', icon: 'edit', href: '/recursos/fiscal' },
      { name: 'Manifestação de NF-e', description: 'Ciência, confirmação, desconhecimento.', icon: 'check-square', href: '/recursos/fiscal' },
      { name: 'CT-e e MDF-e', description: 'Transporte e manifesto eletrônicos.', icon: 'truck', href: '/recursos/fiscal' },
      { name: 'Cálculo de Impostos', description: 'ICMS, monofásico, PIS/COFINS, IPI, ISS, DIFAL.', icon: 'percent', href: '/recursos/fiscal' },
      { name: 'SPED Fiscal', description: 'Arquivo mensal por unidade.', icon: 'database', href: '/recursos/fiscal' },
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
      'IA atende no WhatsApp, cria pedidos e transfere pra humano quando precisa. Notificações e campanhas no mesmo canal.',
    features: [
      { name: 'Atendente de IA', description: 'Tira dúvidas e fecha pedidos sozinha.', icon: 'sparkles', href: '/recursos/tech-ia' },
      { name: 'Base de Conhecimento', description: 'Suas regras, suas respostas.', icon: 'book-open', href: '/recursos/tech-ia' },
      { name: 'WhatsApp Oficial Meta', description: 'API oficial do WhatsApp Business.', icon: 'message-circle', href: '/recursos/tech-ia' },
      { name: 'Número Comum', description: 'Conecta lendo um QR code.', icon: 'message-square', href: '/recursos/tech-ia' },
      { name: 'Notificações de Pedido', description: 'Confirmado, saiu, chegando, entregue.', icon: 'bell', href: '/recursos/tech-ia' },
      { name: 'Central de Atendimento', description: 'Todas as conversas em uma tela.', icon: 'message-square-text', href: '/recursos/tech-ia' },
      { name: 'Transferência Humana', description: 'Bot passa pra fila da equipe.', icon: 'user-check', href: '/recursos/tech-ia' },
      { name: 'Filas de Atendimento', description: 'Por assunto ou por unidade.', icon: 'list-ordered', href: '/recursos/tech-ia' },
      { name: 'Campanhas', description: 'Promoções segmentadas com cupom.', icon: 'gift', href: '/recursos/tech-ia' },
      { name: 'Dashboards de IA', description: 'Conversas, resolução, custo.', icon: 'activity', href: '/recursos/tech-ia' },
    ],
  },
];
