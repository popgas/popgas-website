// src/components/home/HomeFaqSection.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { HOME_FAQ } from '@/content/home-faq';

export function HomeFaqSection() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <Container className="max-w-3xl">
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title="Tira aquela dúvida antes de começar."
        />
        <Accordion className="bg-white border border-[#e2e8f0] rounded-2xl">
          {HOME_FAQ.map((q, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="px-6 border-b border-[#e2e8f0] last:border-b-0">
              <AccordionTrigger className="text-left font-semibold text-[#0f172a] hover:no-underline py-5 text-base">
                {q.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#475569] text-[15px] leading-relaxed pb-5">
                {q.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
