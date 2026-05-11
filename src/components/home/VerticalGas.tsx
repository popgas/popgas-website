'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Cylinder, Truck, Calculator, Monitor } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';

const DeliveryMap = dynamic(() => import('./DeliveryMap').then(m => m.DeliveryMap), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#eff6ff]" />,
});

interface Feature {
  icon: LucideIcon;
  label: string;
}

const FEATURES: Feature[] = [
  { icon: Cylinder, label: 'Gestão de vasilhames' },
  { icon: Truck, label: 'Carregamentos de veículos' },
  { icon: Calculator, label: 'Acerto do entregador' },
  { icon: Monitor, label: 'Máquinas de autoatendimento 24h' },
];

export function VerticalGas() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#fbfbfa] to-[#f1f5f9]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 sm:gap-10 lg:gap-14 items-center">
          <AnimatedReveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 sm:mb-6 bg-[rgba(132,160,40,0.08)] border border-[rgba(132,160,40,0.30)] rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4px] text-[#4a7818] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64a028]" aria-hidden />
                Vertical especializada
              </div>
              <h2 className="font-display text-[28px] sm:text-3xl md:text-5xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#0a1322] mb-4 sm:mb-5">
                Pensado pelo dono de revenda, <em className="italic-accent">para o dono</em> de revenda.
              </h2>
              <p className="text-[15px] sm:text-base md:text-[17px] text-[rgba(15,19,34,0.62)] leading-[1.5] tracking-[-0.005em] mb-7 sm:mb-8">
                Funcionalidades exclusivas para distribuição de gás GLP. Vasilhames, carregamentos, acerto do entregador, máquinas 24h e app do entregador — tudo que sua operação precisa.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {FEATURES.map(f => (
                  <FeatureRow key={f.label} icon={f.icon} label={f.label} />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link
                  href="/recursos/revendas-de-gas"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#64a028] hover:bg-[#84cc16] text-white font-bold text-sm rounded-full transition-colors tracking-tight shadow-[0_4px_14px_rgba(132,160,40,0.25)]"
                >
                  Ver vertical completa <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/recursos"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-[rgba(15,19,34,0.7)] hover:text-[#0a1322] font-semibold text-sm transition-colors"
                >
                  Outros segmentos →
                </Link>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <OperationalMockup />
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}

function FeatureRow({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="group flex items-center gap-3.5 px-4 py-3.5 bg-white border border-[rgba(15,19,34,0.06)] rounded-xl hover:border-[rgba(132,160,40,0.30)] hover:shadow-[0_4px_14px_rgba(132,160,40,0.12)] hover:translate-x-1 transition-all duration-200">
      <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-[rgba(132,160,40,0.10)] text-[#4a7818] flex items-center justify-center">
        <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
      </div>
      <div className="text-sm font-semibold text-[#0a1322] tracking-[-0.01em]">{label}</div>
    </div>
  );
}

function OperationalMockup() {
  return (
    <div className="bg-white border border-[rgba(15,19,34,0.08)] rounded-[20px] p-5 md:p-6 shadow-[0_30px_60px_-20px_rgba(15,19,34,0.10)]">
      <div className="flex items-center justify-between mb-4 pb-3.5 border-b border-[rgba(15,19,34,0.06)]">
        <div className="font-mono text-[11px] uppercase tracking-[1.5px] font-semibold text-[#4a7818]">
          Operação · Hoje
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-[rgba(15,19,34,0.55)]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#84cc16]"
            style={{ boxShadow: '0 0 6px rgba(132,204,22,0.6)', animation: 'pulse-cyan 2s ease-in-out infinite' }}
            aria-hidden
          />
          Ao vivo
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <Kpi label="Pedidos" value="87" />
        <Kpi label="Em rota" value="12" />
        <Kpi label="Vasilhames" value="214" suffix="un" />
      </div>
      <div className="h-[280px] rounded-xl overflow-hidden border border-[rgba(15,19,34,0.06)]">
        <DeliveryMap />
      </div>
    </div>
  );
}

function Kpi({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="bg-[rgba(132,160,40,0.05)] rounded-[10px] p-3">
      <div className="font-mono text-[9px] uppercase tracking-[1px] text-[rgba(15,19,34,0.55)] mb-1">{label}</div>
      <div className="font-mono text-[22px] font-bold text-[#0a1322] tracking-[-0.025em] leading-none">
        {value}
        {suffix && <small className="text-[11px] text-[rgba(15,19,34,0.5)] ml-0.5 font-medium">{suffix}</small>}
      </div>
    </div>
  );
}
