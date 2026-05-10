// src/app/faq/page.tsx
import type { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Container } from '@/components/shared/Container';
import { FAQ_B2B } from '@/content/faq-b2b';
import { FinalCta } from '@/components/home/FinalCta';

export const metadata: Metadata = {
  title: 'Perguntas frequentes',
  description: 'Tire suas dúvidas sobre planos, migração, segurança e suporte do PopGás Sistema.',
};

export default function FaqPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <Container className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#0f172a] mb-5">
            Perguntas frequentes
          </h1>
          <p className="text-lg text-[#475569]">
            Encontre respostas para as dúvidas mais comuns sobre o PopGás Sistema.
          </p>
        </Container>
      </section>
      <section className="pb-20 md:pb-28">
        <Container className="max-w-3xl space-y-12">
          {FAQ_B2B.map(cat => (
            <div key={cat.id}>
              <h2 className="text-xl font-bold tracking-tight text-[#0f172a] mb-4">{cat.name}</h2>
              <Accordion className="bg-white border border-[#e2e8f0] rounded-2xl">
                {cat.items.map((q, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat.id}-${i}`}
                    className="px-6 border-b border-[#e2e8f0] last:border-b-0"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[#0f172a] hover:no-underline py-5 text-base">
                      {q.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#475569] text-[15px] leading-relaxed pb-5">
                      {q.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
