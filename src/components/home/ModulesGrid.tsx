import Link from 'next/link';
import { Check } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';
import { MODULES, calculateTotal, formatPrice, type ModuleId } from '@/lib/pricing';
import { cn } from '@/lib/utils';

const MODULE_ORDER: ModuleId[] = ['essencial', 'gestao', 'fiscal', 'techia'];

export function ModulesGrid() {
  const total = calculateTotal(MODULE_ORDER);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#fbfbfa] to-[#f1f5f9]">
      <Container>
        <SectionHeader
          eyebrow="Modular by design"
          title={
            <>
              Comece simples. <em className="italic-accent">Cresça por módulo</em>.
            </>
          }
          subtitle="Sem upgrade forçado. Sem letra miúda."
        />

        <AnimatedReveal>
          <div className="max-w-[920px] mx-auto bg-white rounded-3xl border border-[rgba(15,19,34,0.08)] shadow-[0_30px_60px_-20px_rgba(15,19,34,0.10)] overflow-hidden">
            {/* Panel header */}
            <div className="px-6 md:px-8 py-5 bg-[rgba(132,160,40,0.05)] border-b border-[rgba(15,19,34,0.06)] flex flex-col md:flex-row md:items-center md:justify-between gap-1.5">
              <div className="font-mono text-[12px] uppercase tracking-[2px] font-semibold text-[#4a7818]">
                Plataforma completa · 4 módulos
              </div>
              <div className="font-mono text-[10px] tracking-[1px] text-[rgba(15,19,34,0.5)]">
                Selecione e veja o total →
              </div>
            </div>

            {/* Module rows */}
            {MODULE_ORDER.map(key => {
              const m = MODULES[key];
              const isPremium = m.isPremium ?? false;
              const isBase = m.isBase;
              return <ModuleRow key={key} module={m} isPremium={isPremium} isBase={isBase} />;
            })}

            {/* Total footer */}
            <div className="px-6 md:px-8 py-6 bg-[#0a1322] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[2px] text-white/55 mb-1">
                  Plataforma completa
                </div>
                <div className="font-display text-3xl md:text-[32px] font-extrabold tracking-[-0.03em] leading-none">
                  R$ {formatPrice(total)}
                  <span className="text-base font-medium text-white/55 ml-1 tracking-normal">/mês</span>
                </div>
              </div>
              <Link
                href="/planos"
                className="inline-flex items-center justify-center bg-white text-[#0a1322] px-6 py-3 rounded-full font-bold text-sm tracking-tight hover:scale-[1.02] transition-transform"
              >
                Personalizar planos →
              </Link>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}

interface ModuleRowProps {
  module: (typeof MODULES)[ModuleId];
  isPremium: boolean;
  isBase: boolean;
}

function ModuleRow({ module: m, isPremium, isBase }: ModuleRowProps) {
  return (
    <div
      className={cn(
        'border-b border-[rgba(15,19,34,0.06)] transition-colors px-5 md:px-8 py-5',
        isPremium
          ? 'bg-gradient-to-r from-[rgba(132,160,40,0.05)] to-[rgba(74,120,24,0.05)] hover:from-[rgba(132,160,40,0.08)] hover:to-[rgba(74,120,24,0.07)]'
          : 'hover:bg-[rgba(132,160,40,0.03)]'
      )}
    >
      <div className="flex items-start md:items-center gap-4 md:gap-6">
        {/* Check icon */}
        <div
          className={cn(
            'flex-shrink-0 w-[26px] h-[26px] rounded-lg flex items-center justify-center text-white font-bold',
            isPremium
              ? 'bg-gradient-to-br from-[#4a7818] to-[#64a028] shadow-[0_0_0_3px_rgba(132,160,40,0.12)]'
              : 'bg-[#4a7818]'
          )}
        >
          <Check className="w-4 h-4" strokeWidth={3} />
        </div>

        {/* Right content: tag/name | description | price */}
        <div className="flex-1 min-w-0 flex flex-col md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] gap-2 md:gap-6 md:items-center">
          {/* Tag + Name */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={cn(
                  'font-mono text-[9px] uppercase tracking-[1.5px] font-semibold',
                  isBase ? 'text-[#4a7818]' : 'text-[rgba(15,19,34,0.5)]'
                )}
              >
                {isBase ? 'Plano Base' : '+ Módulo'}
              </span>
              {isPremium && (
                <span className="bg-gradient-to-br from-[#4a7818] to-[#64a028] text-white font-mono text-[8px] uppercase tracking-[1.5px] font-bold px-1.5 py-0.5 rounded">
                  Premium
                </span>
              )}
            </div>
            <div className="font-display text-lg font-bold tracking-[-0.02em] text-[#0a1322]">
              {m.name}
            </div>
          </div>

          {/* Description */}
          <p className="font-sans text-[13px] leading-[1.45] text-[rgba(15,19,34,0.6)] tracking-[-0.005em]">
            {m.shortDescription}
          </p>

          {/* Price */}
          <div className="md:text-right md:min-w-[130px]">
            <span className="font-mono text-base md:text-[17px] font-semibold tracking-[-0.02em] text-[#0a1322]">
              {isBase ? 'R$ ' : '+ R$ '}
              {formatPrice(m.monthlyPrice)}
            </span>
            <span className="font-mono text-[10px] text-[rgba(15,19,34,0.5)] ml-1 md:ml-0 md:block md:mt-0.5 tracking-[0.5px]">
              /mês
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
