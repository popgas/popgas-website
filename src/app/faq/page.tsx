// src/app/faq/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { FAQ_B2B } from '@/content/faq-b2b';
import { FinalCta } from '@/components/home/FinalCta';
import { JsonLd, faqPageLd } from '@/components/seo/JsonLd';
import { FaqAccordion } from '@/components/shared/FaqAccordion';

export const metadata: Metadata = {
  title: 'Perguntas frequentes',
  description: 'Tire suas dúvidas sobre planos, migração, segurança e suporte do PopGás Sistema.',
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageLd(FAQ_B2B.flatMap(c => c.items))} />
      <section className="pt-16 md:pt-24 pb-12">
        <Container className="max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 bg-[rgba(0,149,204,0.06)] border border-[rgba(0,149,204,0.20)] rounded-full font-mono text-[11px] uppercase tracking-[0.4px] text-[#006085] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0095cc]" aria-hidden />
            Central de ajuda
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-[-0.045em] leading-[1.05] text-[#0a1322] mb-4">
            Suas dúvidas, <em className="italic-accent">respondidas</em>.
          </h1>
          <p className="text-base md:text-lg text-[rgba(15,19,34,0.62)] leading-[1.5] tracking-[-0.01em]">
            Encontre respostas para as dúvidas mais comuns sobre o PopGás Sistema.
          </p>
        </Container>
      </section>
      <section className="pb-20 md:pb-28">
        <Container className="max-w-[820px] space-y-10">
          {FAQ_B2B.map(cat => (
            <div key={cat.id}>
              <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-[#0a1322] mb-4">
                {cat.name}
              </h2>
              <FaqAccordion items={cat.items} idPrefix={cat.id} />
            </div>
          ))}
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
