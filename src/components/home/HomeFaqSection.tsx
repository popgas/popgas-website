import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { HOME_FAQ } from '@/content/home-faq';

export function HomeFaqSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#fbfbfa] to-[#f1f5f9]">
      <Container>
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Tira aquela dúvida <em className="italic-accent">antes de começar</em>.
            </>
          }
        />
        <div className="max-w-[820px] mx-auto">
          <FaqAccordion items={HOME_FAQ} initialOpen={[0, 2]} idPrefix="home-faq" />
        </div>
      </Container>
    </section>
  );
}
