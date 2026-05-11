// src/components/pricing/PricingFaq.tsx
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { PRICING_FAQ } from '@/content/pricing-faq';

export function PricingFaq() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#fbfbfa] to-[#f1f5f9]">
      <Container>
        <SectionHeader
          eyebrow="FAQ de pricing"
          title={
            <>
              Tudo que você precisa saber <em className="italic-accent">antes de assinar</em>.
            </>
          }
        />
        <div className="max-w-[820px] mx-auto">
          <FaqAccordion items={PRICING_FAQ} initialOpen={[0, 1]} idPrefix="pricing-faq" />
        </div>
      </Container>
    </section>
  );
}
