// src/components/home/ModulesGrid.tsx
import Link from 'next/link';
import { ShoppingCart, BarChart3, FileText, Sparkles } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';
import { MODULES, formatPrice } from '@/lib/pricing';
import { cn } from '@/lib/utils';

const ICON_MAP = {
  'shopping-cart': ShoppingCart,
  'bar-chart-3': BarChart3,
  'file-text': FileText,
  sparkles: Sparkles,
};

const MODULE_LINKS: Record<string, string> = {
  essencial: '/recursos/essencial',
  gestao: '/recursos/gestao',
  fiscal: '/recursos/fiscal',
  techia: '/recursos/tech-ia',
};

export function ModulesGrid() {
  const modules = ['essencial', 'gestao', 'fiscal', 'techia'] as const;

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Modular by design"
          title="Comece simples. Cresça por módulo."
          subtitle="Sem upgrade forçado. Sem letra miúda."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((key, i) => {
            const m = MODULES[key];
            const Icon = ICON_MAP[m.icon as keyof typeof ICON_MAP];
            const isPremium = m.isPremium;
            return (
              <AnimatedReveal key={key} delay={i * 0.07}>
                <Link
                  href={MODULE_LINKS[key]}
                  className={cn(
                    'block h-full p-7 rounded-2xl transition-all hover:-translate-y-1',
                    isPremium
                      ? 'gradient-bg-premium text-white shadow-[0_8px_24px_rgba(36,53,90,0.25)]'
                      : 'bg-white border border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]'
                  )}
                >
                  {isPremium && (
                    <div className="inline-block mb-3 px-2.5 py-1 bg-white/20 text-white text-[10px] font-bold tracking-wider rounded-full">
                      PREMIUM
                    </div>
                  )}
                  <div
                    className={cn(
                      'mb-5 text-xs font-bold tracking-wider uppercase',
                      isPremium ? 'text-white/85' : 'text-[#06b6d4]'
                    )}
                  >
                    {m.isBase ? 'PLANO BASE' : '+ MÓDULO'}
                  </div>
                  <div
                    className={cn(
                      'text-3xl font-extrabold tracking-tight mb-1',
                      isPremium ? 'text-white' : 'text-[#0f172a]'
                    )}
                  >
                    {m.isBase ? 'R$ ' : '+ R$ '}
                    {formatPrice(m.monthlyPrice)}
                    <span
                      className={cn(
                        'text-sm font-medium',
                        isPremium ? 'text-white/85' : 'text-[#94a3b8]'
                      )}
                    >
                      /mês
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-5 mb-2">
                    <div
                      className={cn(
                        'w-9 h-9 rounded-lg flex items-center justify-center',
                        isPremium ? 'bg-white/20' : 'bg-[#fafafa]'
                      )}
                    >
                      <Icon className={cn('w-4 h-4', isPremium ? 'text-white' : 'text-[#0f172a]')} />
                    </div>
                    <h3
                      className={cn(
                        'text-lg font-bold tracking-tight',
                        isPremium ? 'text-white' : 'text-[#0f172a]'
                      )}
                    >
                      {m.name}
                    </h3>
                  </div>
                  <p
                    className={cn(
                      'text-sm leading-relaxed',
                      isPremium ? 'text-white/85' : 'text-[#475569]'
                    )}
                  >
                    {m.shortDescription}
                  </p>
                </Link>
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
