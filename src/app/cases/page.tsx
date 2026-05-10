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
          <div className="inline-block px-3 py-1.5 bg-[#dbeafe] text-[#1e40af] text-xs font-semibold uppercase tracking-wider rounded-full mb-5">
            Em breve
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] text-[#0f172a] mb-4">
            Histórias de quem cresceu com o PopGás.
          </h1>
          <p className="text-lg text-[#475569]">
            Estamos preparando cases detalhados de revendas que transformaram suas operações.
          </p>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 text-center mb-12">
          <h2 className="text-xl font-bold text-[#0f172a] mb-2">É cliente PopGás?</h2>
          <p className="text-[#475569] mb-5">
            Compartilhe sua história e ajude outras revendas a tomar a decisão certa.
          </p>
          <Link
            href="/contato?tipo=case"
            className="inline-block px-6 py-3 bg-[#0f172a] hover:bg-[#1a2845] text-white font-semibold rounded-xl transition-colors"
          >
            Quero contar minha história →
          </Link>
        </div>
        <h3 className="text-xl font-bold text-center text-[#0f172a] mb-6">
          Quer conhecer o sistema?
        </h3>
        <ContactForm defaultType="sales" />
      </Container>
    </section>
  );
}
