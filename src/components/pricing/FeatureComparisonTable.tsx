// src/components/pricing/FeatureComparisonTable.tsx
import { Check, X } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

type ModuleSet = ('essencial' | 'gestao' | 'fiscal' | 'techia')[];

interface FeatureRow {
  name: string;
  modules: ModuleSet;
}

const FEATURES: FeatureRow[] = [
  // Essencial
  { name: 'Pedidos com máquina de estados', modules: ['essencial'] },
  { name: 'Cadastro de clientes (CPF/CNPJ + endereços)', modules: ['essencial'] },
  { name: 'Catálogo digital para o app', modules: ['essencial'] },
  { name: 'Múltiplas formas de pagamento', modules: ['essencial'] },
  { name: 'Rastreamento de pedido em tempo real', modules: ['essencial'] },
  { name: 'Programa de indicação multinível', modules: ['essencial'] },
  // Gestão
  { name: 'Estoque por lotes e múltiplos depósitos', modules: ['gestao'] },
  { name: 'Contas a pagar e a receber', modules: ['gestao'] },
  { name: 'Boletos bancários (EFI)', modules: ['gestao'] },
  { name: 'Conciliação bancária', modules: ['gestao'] },
  { name: 'Plano de contas e DRE', modules: ['gestao'] },
  { name: 'Acerto do entregador', modules: ['gestao'] },
  // Fiscal
  { name: 'NF-e e NFC-e (SEFAZ)', modules: ['fiscal'] },
  { name: 'Carta de correção e manifestação', modules: ['fiscal'] },
  { name: 'CT-e e MDF-e', modules: ['fiscal'] },
  { name: 'Cálculo de impostos (ICMS, PIS/COFINS, IPI)', modules: ['fiscal'] },
  { name: 'SPED Fiscal', modules: ['fiscal'] },
  // Tech & IA
  { name: 'Chatbot com IA (OpenAI/Anthropic)', modules: ['techia'] },
  { name: 'WhatsApp oficial Meta + whapi', modules: ['techia'] },
  { name: 'Construtor visual de fluxos', modules: ['techia'] },
  { name: 'Base de conhecimento (RAG)', modules: ['techia'] },
  { name: 'App Web responsivo', modules: ['techia'] },
  { name: 'Dashboards em tempo real', modules: ['techia'] },
];

const COLS: { key: 'essencial' | 'gestao' | 'fiscal' | 'techia'; label: string }[] = [
  { key: 'essencial', label: 'Essencial' },
  { key: 'gestao', label: 'Gestão' },
  { key: 'fiscal', label: 'Fiscal' },
  { key: 'techia', label: 'Tech & IA' },
];

export function FeatureComparisonTable() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <Container>
        <SectionHeader
          eyebrow="Comparação detalhada"
          title="O que tem em cada módulo."
        />
        <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#fafafa] border-b border-[#e2e8f0]">
                <tr>
                  <th className="text-left p-4 text-xs font-bold uppercase tracking-wider text-[#475569]">
                    Funcionalidade
                  </th>
                  {COLS.map(col => (
                    <th
                      key={col.key}
                      className="text-center p-4 text-xs font-bold uppercase tracking-wider text-[#475569] min-w-[110px]"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((row, i) => (
                  <tr key={i} className="border-b border-[#f1f5f9] last:border-b-0">
                    <td className="p-4 text-sm text-[#0f172a]">{row.name}</td>
                    {COLS.map(col => (
                      <td key={col.key} className="text-center p-4">
                        {row.modules.includes(col.key) ? (
                          <Check className="inline-block w-5 h-5 text-[#729E2F]" />
                        ) : (
                          <X className="inline-block w-5 h-5 text-[#cbd5e1]" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-[#94a3b8] text-center mt-4">
          Limites por plano: 1 CNPJ + 1 WhatsApp inclusos · 300 NF-e/mês · 500 conversas IA/mês ·
          Adicionais cobrados como add-on.
        </p>
      </Container>
    </section>
  );
}
