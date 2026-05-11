'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import {
  MODULES,
  calculateTotal,
  formatPrice,
  buildSignupUrl,
  ANNUAL_DISCOUNT,
  type ModuleId,
} from '@/lib/pricing';
import { cn } from '@/lib/utils';

type BillingCycle = 'monthly' | 'annual';

interface Plan {
  id: 'iniciante' | 'crescimento' | 'escala';
  tag: string;
  name: string;
  pitch: string;
  modules: ModuleId[];
  features: { included: boolean; label: string }[];
  ctaLabel: string;
  campaign: string;
  featured?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'iniciante',
    tag: 'Iniciante',
    name: 'Essencial',
    pitch: 'Pra quem está começando. Vendas, CRM e rastreamento.',
    modules: ['essencial'],
    features: [
      { included: true, label: 'Gestão de pedidos com máquina de estados' },
      { included: true, label: 'Cadastro de clientes (CPF/CNPJ + endereços)' },
      { included: true, label: 'Múltiplas formas de pagamento' },
      { included: true, label: 'Catálogo digital + app cliente' },
      { included: true, label: 'Programa de indicação Renda PopGás' },
      { included: false, label: 'Estoque + financeiro' },
      { included: false, label: 'Emissão NF-e' },
      { included: false, label: 'IA + WhatsApp' },
    ],
    ctaLabel: 'Começar grátis',
    campaign: 'planos_iniciante',
  },
  {
    id: 'crescimento',
    tag: 'Crescimento',
    name: 'Gestão Completa',
    pitch: 'Essencial + Gestão + Fiscal. ERP operacional plug-and-play.',
    modules: ['essencial', 'gestao', 'fiscal'],
    features: [
      { included: true, label: 'Tudo do Essencial' },
      { included: true, label: 'Estoque por lotes + múltiplos depósitos' },
      { included: true, label: 'Contas a pagar/receber + Boletos EFI' },
      { included: true, label: 'DRE + Conciliação bancária' },
      { included: true, label: 'NF-e e NFC-e (SEFAZ)' },
      { included: true, label: 'SPED Fiscal · CT-e · MDF-e' },
      { included: false, label: 'IA + WhatsApp' },
    ],
    ctaLabel: 'Começar grátis →',
    campaign: 'planos_crescimento',
    featured: true,
  },
  {
    id: 'escala',
    tag: 'Escala',
    name: 'Plataforma Completa',
    pitch: 'Tudo. IA, WhatsApp e automação no topo.',
    modules: ['essencial', 'gestao', 'fiscal', 'techia'],
    features: [
      { included: true, label: 'Tudo do Gestão Completa' },
      { included: true, label: 'Chatbot IA (OpenAI/Anthropic)' },
      { included: true, label: 'WhatsApp oficial Meta + whapi' },
      { included: true, label: 'Construtor visual de fluxos' },
      { included: true, label: 'Base de conhecimento (RAG)' },
      { included: true, label: 'App Web responsivo' },
      { included: true, label: 'Dashboards em tempo real' },
    ],
    ctaLabel: 'Começar grátis',
    campaign: 'planos_escala',
  },
];

export function PricingPlanCards() {
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  return (
    <div>
      <BillingToggle billing={billing} onChange={setBilling} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto items-stretch">
        {PLANS.map(plan => (
          <PlanCard key={plan.id} plan={plan} billing={billing} />
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto mt-9 px-6 py-5 bg-[rgba(0,149,204,0.04)] border border-dashed border-[rgba(0,149,204,0.30)] rounded-2xl text-center text-sm text-[rgba(15,19,34,0.78)]">
        Quer combinação diferente?{' '}
        <Link
          href="/contato?tipo=sales"
          className="text-[#006085] font-bold border-b border-[#006085] hover:text-[#0095cc] hover:border-[#0095cc] transition-colors"
        >
          Fale com a gente para um plano sob medida →
        </Link>
      </div>
    </div>
  );
}

function BillingToggle({
  billing,
  onChange,
}: {
  billing: BillingCycle;
  onChange: (b: BillingCycle) => void;
}) {
  return (
    <div className="flex justify-center mb-10">
      <div className="inline-flex items-center gap-1 bg-white border border-[rgba(15,19,34,0.10)] rounded-full p-1 shadow-[0_1px_3px_rgba(15,19,34,0.05)]">
        <button
          type="button"
          onClick={() => onChange('monthly')}
          className={cn(
            'px-5 py-2 rounded-full text-[13px] font-semibold tracking-[-0.01em] transition-colors',
            billing === 'monthly'
              ? 'bg-[#0a1322] text-white'
              : 'text-[rgba(15,19,34,0.6)] hover:text-[#0a1322]'
          )}
          aria-pressed={billing === 'monthly'}
        >
          Mensal
        </button>
        <button
          type="button"
          onClick={() => onChange('annual')}
          className={cn(
            'inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold tracking-[-0.01em] transition-colors',
            billing === 'annual'
              ? 'bg-[#0a1322] text-white'
              : 'text-[rgba(15,19,34,0.6)] hover:text-[#0a1322]'
          )}
          aria-pressed={billing === 'annual'}
        >
          Anual
          <span
            className={cn(
              'font-mono text-[9px] px-1.5 py-0.5 rounded',
              billing === 'annual'
                ? 'bg-white/15 text-white'
                : 'bg-[rgba(132,160,40,0.14)] text-[#4a7818]'
            )}
          >
            -{Math.round(ANNUAL_DISCOUNT * 100)}%
          </span>
        </button>
      </div>
    </div>
  );
}

function PlanCard({ plan, billing }: { plan: Plan; billing: BillingCycle }) {
  const total = calculateTotal(plan.modules, billing);
  const monthlyTotal = calculateTotal(plan.modules, 'monthly');
  const annualTotal = total * 12;
  const annualSavings = (monthlyTotal - total) * 12;
  const ctaUrl = buildSignupUrl({
    modules: plan.modules,
    billing,
    utmCampaign: plan.campaign,
  });

  return (
    <article
      className={cn(
        'relative h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col transition-all duration-200',
        plan.featured
          ? 'border-2 border-[#0095cc] bg-gradient-to-b from-white to-[rgba(0,149,204,0.04)] shadow-[0_30px_60px_-20px_rgba(0,96,133,0.20)] lg:scale-[1.03] hover:lg:scale-[1.05] hover:-translate-y-1'
          : 'border border-[rgba(15,19,34,0.08)] shadow-[0_1px_3px_rgba(15,19,34,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,19,34,0.08)]'
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center bg-gradient-to-br from-[#4a7818] to-[#64a028] text-white px-3.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-[1.5px] font-bold shadow-[0_4px_14px_rgba(132,160,40,0.30)]">
          Recomendado
        </span>
      )}

      <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-[rgba(15,19,34,0.5)] font-semibold mb-3">
        {plan.tag}
      </div>

      <h3
        className={cn(
          'mb-2 leading-[1.1] tracking-[-0.025em]',
          plan.featured
            ? 'font-serif italic font-normal text-[32px] italic-accent'
            : 'font-display text-[26px] font-bold text-[#0a1322]'
        )}
      >
        {plan.name}
      </h3>

      <p className="text-sm leading-[1.5] text-[rgba(15,19,34,0.62)] mb-5 min-h-[42px]">
        {plan.pitch}
      </p>

      <div className="mb-5">
        <div className="flex items-baseline gap-1.5">
          <span className="font-mono text-[42px] font-bold tracking-[-0.03em] text-[#0a1322] leading-none">
            R$ {formatPrice(total)}
          </span>
          <span className="text-[13px] font-medium text-[rgba(15,19,34,0.55)]">/mês</span>
        </div>
        {billing === 'annual' && (
          <div className="mt-3 px-4 py-3 bg-white border border-[rgba(132,160,40,0.25)] rounded-xl shadow-[0_2px_6px_rgba(132,160,40,0.06)]">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[rgba(15,19,34,0.55)] font-semibold">Total no ano</span>
              <span className="text-[17px] font-extrabold tracking-[-0.02em] text-[#0a1322]">R$ {formatPrice(annualTotal)}</span>
            </div>
            <div className="flex items-center justify-between gap-3 mt-2.5 pt-2.5 border-t border-dashed border-[rgba(132,160,40,0.30)]">
              <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#4a7818] font-bold">Você economiza</span>
              <span className="text-[14px] font-extrabold text-[#4a7818]">↓ R$ {formatPrice(annualSavings)}</span>
            </div>
          </div>
        )}
      </div>

      <Link
        href={ctaUrl}
        className={cn(
          'block text-center py-3.5 px-5 rounded-xl font-bold text-sm tracking-[-0.01em] mb-7 transition-colors',
          plan.featured
            ? 'bg-[#006085] hover:bg-[#0095cc] text-white shadow-[0_4px_14px_rgba(0,96,133,0.20)]'
            : 'bg-white border border-[rgba(15,19,34,0.10)] hover:border-[#0a1322] text-[#0a1322]'
        )}
      >
        {plan.ctaLabel}
      </Link>

      <div className="font-mono text-[9px] uppercase tracking-[1.5px] text-[rgba(15,19,34,0.5)] font-semibold mb-3">
        Inclui
      </div>

      <ul className="flex flex-col gap-1 mt-auto">
        {plan.features.map((f, i) => (
          <li
            key={i}
            className={cn(
              'flex items-start gap-2.5 py-1.5 text-[13.5px] leading-[1.45] tracking-[-0.005em]',
              f.included ? 'text-[rgba(15,19,34,0.78)]' : 'text-[rgba(15,19,34,0.40)]'
            )}
          >
            {f.included ? (
              <Check className="w-4 h-4 text-[#64a028] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            ) : (
              <X className="w-4 h-4 text-[rgba(15,19,34,0.30)] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            )}
            <span>{f.label}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
