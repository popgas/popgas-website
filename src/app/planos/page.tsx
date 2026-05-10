import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { PricingCalculator } from '@/components/pricing/PricingCalculator';
import { FeatureComparisonTable } from '@/components/pricing/FeatureComparisonTable';
import { EnterpriseCallout } from '@/components/pricing/EnterpriseCallout';
import { PricingFaq } from '@/components/pricing/PricingFaq';
import { FinalCta } from '@/components/home/FinalCta';

export const metadata: Metadata = {
  title: 'Planos — A partir de R$ 99,90/mês',
  description:
    'Comece com R$ 99,90/mês. Adicione módulos quando precisar. Sem cartão. Sem fidelidade.',
};

export default function PlanosPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 bg-gradient-to-b from-[#fafafa] to-white">
        <Container className="max-w-3xl text-center">
          <div className="inline-block px-3 py-1.5 bg-[#dbeafe] text-[#1e40af] text-xs font-semibold uppercase tracking-wider rounded-full mb-5">
            Planos modulares
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#0f172a] mb-5">
            Escolha o que cabe na sua operação.
          </h1>
          <p className="text-lg text-[#475569]">
            Comece com R$ 99,90/mês. Adicione módulos quando precisar.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <PricingCalculator />
        </Container>
      </section>

      <FeatureComparisonTable />
      <EnterpriseCallout />
      <PricingFaq />
      <FinalCta />
    </>
  );
}
