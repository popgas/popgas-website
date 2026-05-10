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
      { name: 'Cadastro de clientes com vários endereços', modules: ['essencial'] },
      { name: 'Pedido completo, do recebimento à entrega', modules: ['essencial'] },
      { name: 'Pagamento em dinheiro, cartão, Pix e saldo da conta', modules: ['essencial'] },
      { name: 'App pra o cliente fazer pedido sozinho', modules: ['essencial'] },
      { name: 'Cliente acompanha a entrega em tempo real', modules: ['essencial'] },
      { name: 'Cliente avalia tempo e qualidade da entrega', modules: ['essencial'] },
      { name: 'Programa "indique e ganhe" com crédito automático', modules: ['essencial'] },
      { name: 'Notificações no celular do cliente', modules: ['essencial'] },
    ],
  },
  {
    title: 'Estoque',
    description: 'Sabe exatamente o que entra, o que sai e onde está.',
    rows: [
      { name: 'Controle por lote (bom, avariado, defeito)', modules: ['gestao'] },
      { name: 'Vários depósitos ao mesmo tempo', modules: ['gestao'] },
      { name: 'Transferência entre depósitos', modules: ['gestao'] },
      { name: 'Recebimento de mercadoria do fornecedor', modules: ['gestao'] },
      { name: 'Inventário com contagem física', modules: ['gestao'] },
      { name: 'Cadastro de fornecedores', modules: ['gestao'] },
    ],
  },
  {
    title: 'Financeiro',
    description: 'Onde tá o dinheiro, o que falta receber, o que falta pagar.',
    rows: [
      { name: 'Contas a pagar (com agendamento e baixa)', modules: ['gestao'] },
      { name: 'Contas a receber (parcelas, baixa automática)', modules: ['gestao'] },
      { name: 'Boleto bancário gerado direto pelo sistema', modules: ['gestao'] },
      { name: 'Conciliação bancária automática', modules: ['gestao'] },
      { name: 'Saldo diário das contas', modules: ['gestao'] },
      { name: 'Centros de custo', modules: ['gestao'] },
      { name: 'DRE (Demonstrativo de Resultado)', modules: ['gestao'] },
      { name: 'Fechamento de caixa e acerto do entregador', modules: ['gestao'] },
    ],
  },
  {
    title: 'Fiscal',
    description: 'Nota fiscal emitida em segundos, sem dor de cabeça com a Receita.',
    rows: [
      { name: 'Emissão de NF-e (nota fiscal eletrônica)', modules: ['fiscal'] },
      { name: 'Emissão de NFC-e (cupom fiscal de venda)', modules: ['fiscal'] },
      { name: 'Carta de correção da nota fiscal', modules: ['fiscal'] },
      { name: 'CT-e (conhecimento de transporte)', modules: ['fiscal'] },
      { name: 'MDF-e (manifesto de carga)', modules: ['fiscal'] },
      { name: 'Cálculo automático de ICMS, PIS, COFINS e IPI', modules: ['fiscal'] },
      { name: 'Geração do SPED Fiscal pra entregar ao contador', modules: ['fiscal'] },
      { name: 'Exportação de XMLs em lote (mês fechado)', modules: ['fiscal'] },
    ],
  },
  {
    title: 'WhatsApp e Inteligência Artificial',
    description: 'IA atende, cria pedidos sozinha e libera seu time pro que importa.',
    rows: [
      { name: 'Chatbot com IA respondendo 24 horas por dia', modules: ['techia'] },
      { name: 'WhatsApp oficial (Meta Business)', modules: ['techia'] },
      { name: 'WhatsApp alternativo (whapi) para números pessoais', modules: ['techia'] },
      { name: 'Construtor de fluxos visuais (sem programar)', modules: ['techia'] },
      { name: 'Base de conhecimento (você ensina a IA)', modules: ['techia'] },
      { name: 'Templates aprovados pela Meta', modules: ['techia'] },
      { name: 'Fila de atendimento e transferência pra humano', modules: ['techia'] },
      { name: 'Painéis com indicadores em tempo real', modules: ['techia'] },
      { name: 'App web (acesse de qualquer celular ou computador)', modules: ['techia'] },
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
