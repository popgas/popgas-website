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

// Cada item aponta pra âncora da funcionalidade na página do módulo (/recursos/<modulo>#<id>).
// Abas com 6 ou 9 itens pra grade de 3 colunas fechar sem sobra.
export const RESOURCES_TABS: MenuTab[] = [
  {
    id: 'vendas',
    label: 'Vendas',
    moduleHref: '/recursos/essencial',
    ctaLabel: 'Ver módulo Essencial',
    eyebrow: 'Módulo Essencial · R$ 99,90/mês',
    titlePlain: 'O coração da',
    titleAccent: 'sua revenda.',
    description:
      'Pedidos, clientes, pagamentos, app do cliente e app do entregador. Tudo pra você vender e entregar com controle.',
    features: [
      { name: 'Gestão de Pedidos', description: 'Do lançamento à entrega, com reabertura.', icon: 'package', href: '/recursos/essencial#gestao-de-pedidos' },
      { name: 'Balcão e Telefone com Bina', description: 'Telefone toca, cadastro abre.', icon: 'phone', href: '/recursos/essencial#lancamento-rapido' },
      { name: 'Cadastro de Clientes', description: 'CPF/CNPJ, vários endereços, histórico.', icon: 'users', href: '/recursos/essencial#cadastro-de-clientes' },
      { name: 'Formas de Pagamento', description: 'PIX, dinheiro, cartão, boleto, saldo.', icon: 'credit-card', href: '/recursos/essencial#formas-de-pagamento' },
      { name: 'Preços e Promoções', description: 'Tabelas, cupons, brindes, primeira compra.', icon: 'gift', href: '/recursos/essencial#precos-e-promocoes' },
      { name: 'App do Cliente', description: 'Celular e navegador, com a sua marca.', icon: 'layout-grid', href: '/recursos/essencial#app-do-cliente' },
      { name: 'Rastreamento em Tempo Real', description: 'Cliente acompanha o entregador no mapa.', icon: 'map-pin', href: '/recursos/essencial#rastreamento-em-tempo-real' },
      { name: 'App do Entregador', description: 'Rota, venda na porta, acerto, escala.', icon: 'truck', href: '/recursos/essencial#app-do-entregador' },
      { name: 'Dashboards de Vendas', description: 'Pedidos, atrasos, cancelamentos, mapa de calor.', icon: 'bar-chart-3', href: '/recursos/essencial#multi-loja-e-relatorios' },
    ],
  },
  {
    id: 'estoque',
    label: 'Estoque',
    moduleHref: '/recursos/gestao#estoque',
    ctaLabel: 'Ver Estoque no módulo Gestão',
    eyebrow: 'Módulo Gestão · Estoque + Financeiro',
    titlePlain: 'Cada lote',
    titleAccent: 'no seu lugar.',
    description:
      'Lotes, condições, depósitos, transferências e conferência. Rastreabilidade do recebimento à entrega.',
    features: [
      { name: 'Estoque por Lotes', description: 'Bom estado, avariado, vencido, devolvido.', icon: 'package', href: '/recursos/gestao#estoque-por-lotes' },
      { name: 'Movimentações e Conferência', description: 'Cada entrada e saída registrada.', icon: 'arrow-up-down', href: '/recursos/gestao#movimentacoes' },
      { name: 'Transferências', description: 'Entre depósitos e entregadores, com aceite.', icon: 'truck', href: '/recursos/gestao#transferencias' },
      { name: 'Recebimento de Mercadorias', description: 'Entrada com fornecedor e nota.', icon: 'inbox', href: '/recursos/gestao#recebimento-de-mercadorias' },
      { name: 'Carregamentos e Vasilhames', description: 'Estoque dos veículos, cheios e vazios.', icon: 'cylinder', href: '/recursos/revendas-de-gas#operacao' },
      { name: 'Frota e Combustível', description: 'Custo por km e por unidade entregue.', icon: 'wrench', href: '/recursos/gestao#manutencao-de-frota' },
    ],
  },
  {
    id: 'financeiro',
    label: 'Financeiro',
    moduleHref: '/recursos/gestao#financeiro',
    ctaLabel: 'Ver Financeiro no módulo Gestão',
    eyebrow: 'Módulo Gestão · Estoque + Financeiro',
    titlePlain: 'Financeiro',
    titleAccent: 'de verdade.',
    description:
      'Contas a pagar e receber, conciliação bancária, caixa, DRE gerencial. Saiba onde o dinheiro está.',
    features: [
      { name: 'Contas a Pagar e a Receber', description: 'Parcele, agende, baixe em lote.', icon: 'wallet', href: '/recursos/gestao#contas-a-pagar-e-receber' },
      { name: 'Caixa e Acerto do Entregador', description: 'Fechamento diário com conferência.', icon: 'calculator', href: '/recursos/gestao#caixa-e-acerto' },
      { name: 'Conciliação Bancária', description: 'Importa OFX e concilia com ajuda da IA.', icon: 'check-circle', href: '/recursos/gestao#conciliacao' },
      { name: 'DRE Gerencial', description: 'Resultado mês a mês, do seu jeito.', icon: 'bar-chart-3', href: '/recursos/gestao#dre-gerencial' },
      { name: 'Centros de Custo', description: 'Despesas por centro e por loja.', icon: 'building-2', href: '/recursos/gestao#centros-de-custo' },
      { name: '+25 Relatórios', description: 'Estoque, vendas, financeiro, entregas.', icon: 'bar-chart-3', href: '/recursos/gestao#relatorios' },
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
      { name: 'NF-e e NFC-e', description: 'Autorização em segundos; NFC-e automática na entrega.', icon: 'file-text', href: '/recursos/fiscal#nfe-e-nfce' },
      { name: 'NFS-e Nacional', description: 'Nota de serviço no padrão nacional.', icon: 'file-text', href: '/recursos/fiscal#nfse' },
      { name: 'Carta de Correção', description: 'CC-e direto pela nota.', icon: 'edit', href: '/recursos/fiscal#carta-de-correcao' },
      { name: 'Manifestação de NF-e', description: 'Ciência, confirmação, desconhecimento.', icon: 'check-square', href: '/recursos/fiscal#manifestacao' },
      { name: 'CT-e e MDF-e', description: 'Transporte e manifesto eletrônicos.', icon: 'truck', href: '/recursos/fiscal#cte-e-mdfe' },
      { name: 'Cálculo de Impostos', description: 'ICMS, monofásico, PIS/COFINS, IPI, ISS, DIFAL.', icon: 'percent', href: '/recursos/fiscal#calculo-de-impostos' },
      { name: 'Configurações por Produto', description: 'NCM, CFOP, CST e alíquotas no cadastro.', icon: 'tag', href: '/recursos/fiscal#configuracoes-por-produto' },
      { name: 'SPED Fiscal', description: 'Arquivo mensal por unidade.', icon: 'database', href: '/recursos/fiscal#sped-fiscal' },
      { name: 'XMLs e Relatório Mensal', description: 'Download em lote pro contador.', icon: 'download', href: '/recursos/fiscal#exportacao-de-xmls' },
    ],
  },
  {
    id: 'whatsapp-ia',
    label: 'WhatsApp & IA',
    moduleHref: '/recursos/tech-ia',
    ctaLabel: 'Ver módulo Tech & IA',
    eyebrow: 'Módulo Tech & IA · +R$ 199,90/mês',
    titlePlain: 'Atendimento',
    titleAccent: '24/7 com IA.',
    description:
      'IA atende no WhatsApp, cria pedidos e transfere pra humano quando precisa. Notificações e campanhas no mesmo canal.',
    features: [
      { name: 'Atendente de IA', description: 'Tira dúvidas e fecha pedidos sozinha.', icon: 'sparkles', href: '/recursos/tech-ia#atendente-de-ia' },
      { name: 'Base de Conhecimento', description: 'Suas regras, suas respostas.', icon: 'book-open', href: '/recursos/tech-ia#base-de-conhecimento' },
      { name: 'WhatsApp Oficial ou Número Comum', description: 'API Meta ou QR code.', icon: 'message-circle', href: '/recursos/tech-ia#whatsapp-oficial-ou-numero-comum' },
      { name: 'Central de Atendimento', description: 'Todas as conversas em uma tela.', icon: 'message-square', href: '/recursos/tech-ia#conversas-em-uma-tela' },
      { name: 'Transferência Humana', description: 'Bot passa pra fila da equipe.', icon: 'user-check', href: '/recursos/tech-ia#transferencia-humana' },
      { name: 'Filas de Atendimento', description: 'Por assunto ou por unidade.', icon: 'list-ordered', href: '/recursos/tech-ia#filas-de-atendimento' },
      { name: 'Notificações de Pedido', description: 'Confirmado, saiu, chegando, entregue.', icon: 'bell', href: '/recursos/tech-ia#notificacoes-de-pedido' },
      { name: 'Campanhas', description: 'Promoções segmentadas com cupom.', icon: 'message-square-text', href: '/recursos/tech-ia#campanhas' },
      { name: 'Dashboards de IA', description: 'Conversas, resolução, custo.', icon: 'activity', href: '/recursos/tech-ia#dashboards-de-ia' },
    ],
  },
  {
    id: 'revendas-de-gas',
    label: 'Revendas de gás',
    moduleHref: '/recursos/revendas-de-gas',
    ctaLabel: 'Ver vertical completa',
    eyebrow: 'Vertical especializada · incluída em todos os planos',
    titlePlain: 'Feito por quem',
    titleAccent: 'vive a revenda.',
    description:
      'Vasilhames, carregamentos, acerto do entregador, rotas e escala já vêm resolvidos, sem adaptação.',
    features: [
      { name: 'Carregamentos', description: 'Carga do caminhão, baixa por entrega.', icon: 'truck', href: '/recursos/revendas-de-gas#carregamentos' },
      { name: 'Vasilhames', description: 'Cheios, vazios, remessa, troca, quebra.', icon: 'cylinder', href: '/recursos/revendas-de-gas#vasilhames' },
      { name: 'Acerto do Entregador', description: 'Fechamento do dia sem divergência.', icon: 'calculator', href: '/recursos/revendas-de-gas#acerto-do-entregador' },
      { name: 'Rastreamento GPS', description: 'Todos os entregadores no mapa.', icon: 'navigation', href: '/recursos/revendas-de-gas#rastreamento-gps' },
      { name: 'Distribuição de Rotas', description: 'Por prazo ou melhor rota.', icon: 'map', href: '/recursos/revendas-de-gas#distribuicao-de-rotas' },
      { name: 'Áreas e Horários', description: 'Cobertura, taxa e prazo por região.', icon: 'map-pinned', href: '/recursos/revendas-de-gas#areas-e-horarios' },
      { name: 'Tipos de Entrega', description: 'Rápida, normal, agendada, retirada.', icon: 'sliders', href: '/recursos/revendas-de-gas#tipos-de-entrega' },
      { name: 'Escala e Penalidades', description: 'Escala, faltas, pontuação, bonificação.', icon: 'clipboard-check', href: '/recursos/revendas-de-gas#escala-e-penalidades' },
      { name: 'Suporte Técnico', description: 'Chamado vinculado ao pedido.', icon: 'wrench', href: '/recursos/revendas-de-gas#suporte-tecnico' },
    ],
  },
];
