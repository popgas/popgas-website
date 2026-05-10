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
      { name: 'Gestão de Clientes — CRM', modules: ['essencial'] },
      { name: 'Gestão de Pedidos', modules: ['essencial'] },
      { name: 'Meios de Pagamento (Dinheiro · PIX · Cartão · Saldo)', modules: ['essencial'] },
      { name: 'App do Cliente', modules: ['essencial'] },
      { name: 'Rastreamento de Entregas em Tempo Real', modules: ['essencial'] },
      { name: 'Avaliação Pós-Entrega', modules: ['essencial'] },
      { name: 'Programa de Indicação — Renda PopGás', modules: ['essencial'] },
      { name: 'Push Notifications', modules: ['essencial'] },
    ],
  },
  {
    title: 'Estoque',
    description: 'Sabe exatamente o que entra, o que sai e onde está.',
    rows: [
      { name: 'Controle de Estoque', modules: ['gestao'] },
      { name: 'Gestão de Depósitos', modules: ['gestao'] },
      { name: 'Lotes e Condições', modules: ['gestao'] },
      { name: 'Recebimento de Mercadorias', modules: ['gestao'] },
      { name: 'Inventário e Contagem Física', modules: ['gestao'] },
      { name: 'Cadastro de Fornecedores', modules: ['gestao'] },
    ],
  },
  {
    title: 'Financeiro',
    description: 'Onde tá o dinheiro, o que falta receber, o que falta pagar.',
    rows: [
      { name: 'Contas a Pagar', modules: ['gestao'] },
      { name: 'Contas a Receber', modules: ['gestao'] },
      { name: 'Boleto Bancário', modules: ['gestao'] },
      { name: 'Conciliação Bancária', modules: ['gestao'] },
      { name: 'Plano de Contas e DRE', modules: ['gestao'] },
      { name: 'Centros de Custo', modules: ['gestao'] },
      { name: 'Fechamento de Caixa', modules: ['gestao'] },
      { name: 'Acerto do Entregador', modules: ['gestao'] },
    ],
  },
  {
    title: 'Fiscal',
    description: 'Nota fiscal emitida em segundos, sem dor de cabeça com a Receita.',
    rows: [
      { name: 'Emissão de NF-e', modules: ['fiscal'] },
      { name: 'Emissão de NFC-e', modules: ['fiscal'] },
      { name: 'Carta de Correção', modules: ['fiscal'] },
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
      { name: 'Chatbot com IA — 24/7', modules: ['techia'] },
      { name: 'WhatsApp Oficial — Meta Business', modules: ['techia'] },
      { name: 'WhatsApp Alternativo — whapi', modules: ['techia'] },
      { name: 'Construtor Visual de Fluxos', modules: ['techia'] },
      { name: 'Base de Conhecimento (RAG)', modules: ['techia'] },
      { name: 'Templates de Mensagens', modules: ['techia'] },
      { name: 'Fila de Atendimento', modules: ['techia'] },
      { name: 'App Web', modules: ['techia'] },
      { name: 'Dashboards em Tempo Real', modules: ['techia'] },
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#fafafa] border-b border-[rgba(15,19,34,0.08)] sticky top-0">
                <tr>
                  <th className="text-left px-5 md:px-7 py-4 font-mono text-[10px] uppercase tracking-[1.5px] font-semibold text-[rgba(15,19,34,0.55)] min-w-[280px]">
                    Funcionalidade
                  </th>
                  {COLS.map(col => (
                    <th
                      key={col.key}
                      className="text-center px-3 py-4 font-mono text-[10px] uppercase tracking-[1.5px] font-semibold text-[rgba(15,19,34,0.55)] min-w-[100px]"
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
          Limites por plano: 1 CNPJ + 1 WhatsApp inclusos · 300 NF-e/mês · 500 conversas IA/mês.
          Acima dos limites, cobramos um valor por unidade extra (sem bloqueio).
        </p>
      </Container>
    </section>
  );
}

function FeatureGroupRows({ group }: { group: FeatureGroup }) {
  return (
    <>
      <tr className="bg-gradient-to-r from-[rgba(0,149,204,0.04)] to-transparent border-b border-[rgba(15,19,34,0.06)]">
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
          className="border-b border-[rgba(15,19,34,0.04)] last:border-b-0 hover:bg-[rgba(0,149,204,0.02)]"
        >
          <td className="px-5 md:px-7 py-3.5 text-[14px] text-[rgba(15,19,34,0.85)] leading-[1.4] tracking-[-0.005em]">
            {row.name}
          </td>
          {COLS.map(col => (
            <td key={col.key} className="text-center px-3 py-3.5">
              {row.modules.includes(col.key) ? (
                <Check className="inline-block w-[18px] h-[18px] text-[#006085]" strokeWidth={2.5} />
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
