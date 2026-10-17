import { Gift } from 'lucide-react';
import { INTRO_PROMO, MODULES, formatPrice, introPromoPeriod } from '@/lib/pricing';
import { cn } from '@/lib/utils';

/**
 * Aviso da promoção de entrada (ver `INTRO_PROMO`): módulos adicionais grátis nos primeiros meses,
 * pagando só a mensalidade base. Some sozinho quando a promoção é desligada.
 */
export function IntroPromoBanner({ className }: { className?: string }) {
  if (!INTRO_PROMO.active) return null;

  return (
    <div
      data-testid="intro-promo-banner"
      className={cn(
        'max-w-[1200px] mx-auto flex flex-col sm:flex-row sm:items-center gap-3 px-5 sm:px-6 py-4 rounded-2xl border border-[rgba(132,160,40,0.35)] dark:border-[#2F4A27] bg-[rgba(132,160,40,0.08)] dark:bg-[#20301F] text-[#0a1322] dark:text-[#E8EEE6]',
        className,
      )}
    >
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#4A7818] text-white flex-shrink-0" aria-hidden>
        <Gift className="w-[18px] h-[18px]" strokeWidth={2.25} />
      </span>
      <p className="text-sm sm:text-[15px] leading-[1.45] tracking-[-0.01em]">
        <strong className="font-bold text-[#3D6614] dark:text-[#9CCB6B]">Promoção de entrada:</strong>{' '}
        {introPromoPeriod()}, todos os módulos adicionais saem <strong className="font-bold">grátis</strong>.
        Você paga só a mensalidade base de R$ {formatPrice(MODULES.essencial.monthlyPrice)}.
      </p>
    </div>
  );
}
