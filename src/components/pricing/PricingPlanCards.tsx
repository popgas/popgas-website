'use client';

import Link from 'next/link';
import { Check, X } from 'lucide-react';
import {
  calculateTotal,
  formatPrice,
  buildSignupUrl,
  type ModuleId,
} from '@/lib/pricing';
import { cn } from '@/lib/utils';
import { SignupLink } from '@/components/tracking/SignupLink';

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
      { included: true, label: 'Pedidos, clientes e vários endereços' },
      { included: true, label: 'Dinheiro, PIX, cartão, boleto e saldo' },
      { included: true, label: 'App do cliente com a sua marca' },
      { included: true, label: 'App do entregador e rastreamento' },
      { included: true, label: 'Multi-loja, perfis e dashboards de vendas' },
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
      { included: true, label: 'Estoque por lotes, depósitos e carregamentos' },
      { included: true, label: 'Contas a pagar/receber, caixa e acerto' },
      { included: true, label: 'DRE gerencial + conciliação bancária' },
      { included: true, label: 'NF-e, NFC-e e NFS-e (SEFAZ)' },
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
      { included: true, label: 'Atendente de IA no WhatsApp 24/7' },
      { included: true, label: 'WhatsApp oficial Meta ou número comum' },
      { included: true, label: 'Notificações automáticas de pedido' },
      { included: true, label: 'Central de atendimento e filas' },
      { included: true, label: 'Campanhas de marketing' },
      { included: true, label: 'Dashboards de IA e WhatsApp' },
    ],
    ctaLabel: 'Começar grátis',
    campaign: 'planos_escala',
  },
];

export function PricingPlanCards() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto items-stretch">
        {PLANS.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto mt-9 px-6 py-5 bg-[rgba(132,160,40,0.05)] border border-dashed border-[rgba(132,160,40,0.30)] rounded-2xl text-center text-sm text-[rgba(15,19,34,0.78)]">
        Quer combinação diferente?{' '}
        <Link
          href="/contato?tipo=sales"
          className="text-[#4a7818] font-bold border-b border-[#4a7818] hover:text-[#64a028] hover:border-[#64a028] transition-colors"
        >
          Fale com a gente para um plano sob medida →
        </Link>
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const total = calculateTotal(plan.modules);
  const ctaUrl = buildSignupUrl({
    modules: plan.modules,
    utmCampaign: plan.campaign,
  });

  return (
    <article
      className={cn(
        'relative h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col transition-all duration-200',
        plan.featured
          ? 'border-2 border-[#64a028] bg-gradient-to-b from-white to-[rgba(132,160,40,0.05)] shadow-[0_30px_60px_-20px_rgba(74,120,24,0.20)] lg:scale-[1.03] hover:lg:scale-[1.05] hover:-translate-y-1'
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
      </div>

      <SignupLink
        href={ctaUrl}
        className={cn(
          'block text-center py-3.5 px-5 rounded-xl font-bold text-sm tracking-[-0.01em] mb-7 transition-colors',
          plan.featured
            ? 'bg-[#64a028] hover:bg-[#84cc16] text-white shadow-[0_4px_14px_rgba(132,160,40,0.25)]'
            : 'bg-white border border-[rgba(15,19,34,0.10)] hover:border-[#0a1322] text-[#0a1322]'
        )}
      >
        {plan.ctaLabel}
      </SignupLink>

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
