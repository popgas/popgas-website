import type { ModuleContent } from './types';

export const gestaoContent: ModuleContent = {
  slug: 'gestao',
  moduleKey: 'gestao',
  hero: {
    eyebrow: 'MÓDULO ADICIONAL · + R$ 49,90/mês',
    title: 'Estoque e financeiro integrados.',
    subtitle:
      'Transforme o sistema em uma plataforma de gestão operacional. Controle financeiro centralizado com integração total às vendas.',
  },
  screenshotPath: '/screenshots/06-financeiro-contas.png',
  screenshotAlt: 'Tela de contas a pagar do PopGás Sistema',
  features: [
    { title: 'Estoque por lotes e condições', description: 'Controle por lote com condições (bom, avariado, recall) e múltiplos depósitos.', icon: 'package' },
    { title: 'Movimentações com rastreabilidade', description: 'Cada entrada/saída registrada e auditável.', icon: 'arrow-up-down' },
    { title: 'Transferência entre depósitos', description: 'Mova produtos entre warehouses com workflow de confirmação.', icon: 'truck' },
    { title: 'Recebimento de mercadorias', description: 'Entrada com vínculo a fornecedor e nota fiscal.', icon: 'inbox' },
    { title: 'Inventário e contagem física', description: 'Processo de contagem com relatório de divergências.', icon: 'clipboard-check' },
    { title: 'Contas a pagar e a receber', description: 'Parcelamento, agendamento, baixa e estorno.', icon: 'wallet' },
    { title: 'Boletos bancários (EFI)', description: 'Geração e gestão automática integrada à EFI Pagamentos.', icon: 'file-text' },
    { title: 'Conciliação bancária', description: 'Importação de extrato e conciliação com movimentações internas.', icon: 'check-circle' },
    { title: 'Centros de custo', description: 'Alocação de despesas por centro/projeto.', icon: 'building-2' },
    { title: 'Plano de contas e DRE', description: 'Estrutura contábil completa com demonstrativo gerencial.', icon: 'bar-chart-3' },
    { title: 'Acerto do entregador', description: 'Cálculo e conferência financeira do fechamento diário.', icon: 'calculator' },
    { title: 'Resumo diário de contas', description: 'Saldo diário automático de cada conta bancária.', icon: 'calendar' },
    { title: '+30 relatórios e dashboards', description: 'Estoque, Financeiro, Vendas, Marketing e operação — controle total da revenda em um só lugar.', icon: 'bar-chart-3' },
  ],
  synergies: [
    { moduleKey: 'essencial', reason: 'Estoque baixa quando pedido é confirmado' },
    { moduleKey: 'fiscal', reason: 'Movimentações alimentam SPED e NF-e' },
  ],
  nextModule: { slug: 'fiscal', name: 'Fiscal' },
};
