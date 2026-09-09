// src/components/pricing/FeatureComparisonTable.tsx
import { Check, X } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

type ModuleKey = 'essencial' | 'gestao' | 'fiscal' | 'techia';
type ModuleSet = ModuleKey[];

interface FeatureRow {
  name: string;
  description?: string;
  modules: ModuleSet;
}

interface FeatureGroup {
  title: string;
  description: string;
  rows: FeatureRow[];
}

const GROUPS: FeatureGroup[] = [
  {
    title: 'Vendas e atendimento',
    description: 'O básico pra atender bem e fechar pedidos sem perder tempo.',
    rows: [
      { name: 'Cadastro de Clientes (CPF/CNPJ, vários endereços)', modules: ['essencial'] },
      { name: 'Gestão de Pedidos', modules: ['essencial'] },
      { name: 'Meios de Pagamento (Dinheiro · PIX · Cartão · Boleto · Saldo)', modules: ['essencial'] },
      { name: 'Tabelas de Preço, Cupons e Brindes', modules: ['essencial'] },
      { name: 'App do Cliente (celular e navegador)', modules: ['essencial'] },
      { name: 'Rastreamento de Entregas em Tempo Real', modules: ['essencial'] },
      { name: 'Avaliação Pós-Entrega', modules: ['essencial'] },
      { name: 'App do Entregador', modules: ['essencial'] },
      { name: 'Bina Integrada ao Telefone', modules: ['essencial'] },
      { name: 'Multi-loja e Perfis de Acesso', modules: ['essencial'] },
      { name: 'Notificações Push no App', modules: ['essencial'] },
    ],
  },
  {
    title: 'Estoque',
    description: 'Sabe exatamente o que entra, o que sai e onde está.',
    rows: [
      { name: 'Controle de Estoque por Lotes', modules: ['gestao'] },
      { name: 'Múltiplos Depósitos e Veículos', modules: ['gestao'] },
      { name: 'Transferências (com aceite entre entregadores)', modules: ['gestao'] },
      { name: 'Recebimento de Mercadorias', modules: ['gestao'] },
      { name: 'Conferência de Estoque', modules: ['gestao'] },
      { name: 'Carregamentos e Vasilhames', modules: ['gestao'] },
      { name: 'Cadastro de Fornecedores', modules: ['gestao'] },
    ],
  },
  {
    title: 'Financeiro',
    description: 'Onde tá o dinheiro, o que falta receber, o que falta pagar.',
    rows: [
      { name: 'Contas a Pagar', modules: ['gestao'] },
      { name: 'Contas a Receber', modules: ['gestao'] },
      { name: 'Conciliação Bancária (OFX + IA)', modules: ['gestao'] },
      { name: 'DRE Gerencial', modules: ['gestao'] },
      { name: 'Centros de Custo', modules: ['gestao'] },
      { name: 'Caixa e Acerto do Entregador', modules: ['gestao'] },
      { name: 'Manutenção de Frota e Combustível', modules: ['gestao'] },
      { name: 'Relatórios de Faturamento e Estoque', modules: ['gestao'] },
    ],
  },
  {
    title: 'Fiscal',
    description: 'Nota fiscal emitida em segundos, sem dor de cabeça com a Receita.',
    rows: [
      { name: 'Emissão de NF-e', modules: ['fiscal'] },
      { name: 'Emissão de NFC-e (automática na entrega)', modules: ['fiscal'] },
      { name: 'NFS-e Nacional', modules: ['fiscal'] },
      { name: 'Carta de Correção e Manifestação', modules: ['fiscal'] },
      { name: 'CT-e e MDF-e (Transporte e Manifesto)', modules: ['fiscal'] },
      { name: 'Cálculo Automático de Impostos', modules: ['fiscal'] },
      { name: 'SPED Fiscal', modules: ['fiscal'] },
      { name: 'Exportação de XMLs em Lote', modules: ['fiscal'] },
    ],
  },
  {
    title: 'WhatsApp e Inteligência Artificial',
    description: 'IA atende, cria pedidos sozinha e libera seu time pro que importa.',
    rows: [
      { name: 'Atendente de IA no WhatsApp — 24/7', modules: ['techia'] },
      { name: 'WhatsApp Oficial — Meta Business', modules: ['techia'] },
      { name: 'WhatsApp com Número Comum (QR code)', modules: ['techia'] },
      { name: 'Base de Conhecimento da Revenda', modules: ['techia'] },
      { name: 'Notificações Automáticas de Pedido', modules: ['techia'] },
      { name: 'Central de Atendimento e Filas', modules: ['techia'] },
      { name: 'Transferência para Atendente Humano', modules: ['techia'] },
      { name: 'Campanhas de Marketing', modules: ['techia'] },
      { name: 'Dashboards de IA e WhatsApp', modules: ['techia'] },
    ],
  },
];

const COLS: { key: ModuleKey; label: string }[] = [
  { key: 'essencial', label: 'Essencial' },
  { key: 'gestao', label: 'Gestão' },
  { key: 'fiscal', label: 'Fiscal' },
  { key: 'techia', label: 'Tech & IA' },
];

export function FeatureComparisonTable() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#fbfbfa] to-[#f1f5f9]">
      <Container>
        <SectionHeader
          eyebrow="Comparação detalhada"
          title={
            <>
              O que tem em <em className="italic-accent">cada módulo</em>.
            </>
          }
          subtitle="Sem jargão técnico. O que cada módulo realmente faz pra você."
        />
        <div className="bg-white border border-[rgba(15,19,34,0.08)] rounded-3xl overflow-hidden shadow-[0_4px_14px_rgba(15,19,34,0.04)] max-w-[1100px] mx-auto">
          <p className="md:hidden px-4 py-2.5 text-[12px] text-[#64748b] border-b border-[rgba(15,19,34,0.06)] bg-[#fafafa]">Deslize a tabela para o lado para ver os quatro módulos →</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#fafafa] border-b border-[rgba(15,19,34,0.08)] sticky top-0">
                <tr>
                  <th className="text-left px-4 md:px-7 py-4 font-mono text-[10px] uppercase tracking-[1.5px] font-semibold text-[rgba(15,19,34,0.55)] min-w-[200px] md:min-w-[280px] sticky left-0 bg-[#fafafa] z-[1] md:static shadow-[4px_0_6px_-4px_rgba(15,19,34,0.08)] md:shadow-none">
                    Funcionalidade
                  </th>
                  {COLS.map(col => (
                    <th
                      key={col.key}
                      className="text-center px-3 py-4 font-mono text-[10px] uppercase tracking-[1.5px] font-semibold text-[rgba(15,19,34,0.55)] min-w-[80px] md:min-w-[100px]"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {GROUPS.map(group => (
                  <FeatureGroupRows key={group.title} group={group} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-[rgba(15,19,34,0.55)] text-center mt-6 max-w-[680px] mx-auto leading-relaxed">
          Cada plano inclui 1 CNPJ e 1 número de WhatsApp, além de uma franquia mensal de documentos fiscais e de conversas atendidas pela IA.
          Precisa de mais? Amplie pelo painel ou fale com a gente.
        </p>
      </Container>
    </section>
  );
}

function FeatureGroupRows({ group }: { group: FeatureGroup }) {
  return (
    <>
      <tr className="bg-gradient-to-r from-[rgba(132,160,40,0.05)] to-transparent border-b border-[rgba(15,19,34,0.06)]">
        <td colSpan={5} className="px-5 md:px-7 py-4">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-display text-[17px] font-bold text-[#0a1322] tracking-[-0.02em]">
              {group.title}
            </h3>
            <p className="text-[13px] text-[rgba(15,19,34,0.55)] leading-snug">
              {group.description}
            </p>
          </div>
        </td>
      </tr>
      {group.rows.map((row, i) => (
        <tr
          key={i}
          className="border-b border-[rgba(15,19,34,0.04)] last:border-b-0 hover:bg-[rgba(132,160,40,0.03)]"
        >
          <td className="px-4 md:px-7 py-3.5 text-[13px] md:text-[14px] text-[rgba(15,19,34,0.85)] leading-[1.4] tracking-[-0.005em] sticky left-0 bg-white z-[1] md:static shadow-[4px_0_6px_-4px_rgba(15,19,34,0.06)] md:shadow-none">
            {row.name}
          </td>
          {COLS.map(col => (
            <td key={col.key} className="text-center px-3 py-3.5">
              {row.modules.includes(col.key) ? (
                <Check className="inline-block w-[18px] h-[18px] text-[#64a028]" strokeWidth={2.5} />
              ) : (
                <X
                  className="inline-block w-[16px] h-[16px] text-[rgba(15,19,34,0.18)]"
                  strokeWidth={2}
                />
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
