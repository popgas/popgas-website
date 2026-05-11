import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { PricingPlanCards } from '@/components/pricing/PricingPlanCards';
import { FeatureComparisonTable } from '@/components/pricing/FeatureComparisonTable';
import { EnterpriseCallout } from '@/components/pricing/EnterpriseCallout';
import { PricingFaq } from '@/components/pricing/PricingFaq';
import { FinalCta } from '@/components/home/FinalCta';
import { JsonLd, productLd } from '@/components/seo/JsonLd';
import { MODULES } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Planos — A partir de R$ 99,90/mês',
  description:
    'Comece com R$ 99,90/mês. Sem cartão. Sem fidelidade. Migração assistida.',
};

export default function PlanosPage() {
  return (
    <>
      <JsonLd
        data={productLd(
          Object.values(MODULES).map(m => ({ name: m.name, price: m.monthlyPrice }))
        )}
      />
      <section className="pt-12 sm:pt-16 md:pt-24 pb-10 sm:pb-12 md:pb-14 bg-gradient-to-b from-[#fbfbfa] to-white">
        <Container className="max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 sm:mb-6 bg-[rgba(132,160,40,0.08)] border border-[rgba(132,160,40,0.30)] rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4px] text-[#4a7818] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#64a028]" aria-hidden />
            Planos PopGás
          </div>
          <h1 className="font-display text-[32px] sm:text-4xl md:text-6xl lg:text-[64px] font-extrabold tracking-[-0.05em] leading-[1.05] sm:leading-[1.0] text-[#0a1322] mb-4 sm:mb-5">
            Escolha o plano <em className="italic-accent">certo</em> pra sua operação.
          </h1>
          <p className="text-[15px] sm:text-base md:text-lg text-[rgba(15,19,34,0.62)] leading-[1.5] tracking-[-0.01em]">
            Sem cartão. Sem fidelidade. Migração assistida.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28 bg-gradient-to-b from-white to-[#fbfbfa]">
        <Container>
          <PricingPlanCards />
        </Container>
      </section>

      <FeatureComparisonTable />
      <EnterpriseCallout />
      <PricingFaq />
      <FinalCta />
    </>
  );
}
