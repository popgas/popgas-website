// src/app/cases/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { ContactForm } from '@/components/shared/ContactForm';

export const metadata: Metadata = {
  title: 'Cases de sucesso',
  description: 'Histórias de revendas que transformaram suas operações com o PopGás Sistema.',
};

export default function CasesPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 bg-[rgba(132,160,40,0.08)] border border-[rgba(132,160,40,0.30)] rounded-full font-mono text-[11px] uppercase tracking-[0.4px] text-[#4a7818] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#64a028]" aria-hidden />
            Em breve
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-[-0.045em] leading-[1.05] text-[#0a1322] mb-4">
            Histórias de quem <em className="italic-accent">cresceu</em> com o PopGás.
          </h1>
          <p className="text-base md:text-lg text-[rgba(15,19,34,0.62)] leading-[1.5] tracking-[-0.01em]">
            Estamos preparando cases detalhados de revendas que transformaram suas operações.
          </p>
        </div>
        <div className="bg-white border border-[rgba(15,19,34,0.08)] rounded-2xl p-8 text-center mb-12 shadow-[0_4px_14px_rgba(15,19,34,0.04)]">
          <h2 className="text-xl font-bold text-[#0a1322] mb-2">É cliente PopGás?</h2>
          <p className="text-[rgba(15,19,34,0.62)] mb-5">
            Compartilhe sua história e ajude outras revendas a tomar a decisão certa.
          </p>
          <Link
            href="/contato?tipo=sales"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#64a028] hover:bg-[#84cc16] text-white font-bold text-sm rounded-full transition-colors tracking-tight shadow-[0_4px_14px_rgba(132,160,40,0.25)]"
          >
            Quero contar minha história →
          </Link>
        </div>
        <h3 className="text-xl font-bold text-center text-[#0a1322] mb-6">
          Quer conhecer o sistema?
        </h3>
        <ContactForm defaultType="sales" />
      </Container>
    </section>
  );
}
