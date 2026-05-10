// src/components/home/PricingTeaser.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { MODULES, formatPrice } from '@/lib/pricing';

export function PricingTeaser() {
  const modules = ['essencial', 'gestao', 'fiscal', 'techia'] as const;

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="A partir de R$ 99,90/mês"
          title="Sem cartão. Sem fidelidade."
          subtitle="Pague só pelos módulos que usa. Adicione mais conforme cresce."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {modules.map(key => {
            const m = MODULES[key];
            return (
              <div
                key={key}
                className="p-5 bg-white border border-[#e2e8f0] rounded-xl text-center"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#06b6d4] mb-1">
                  {m.isBase ? 'BASE' : '+ MÓDULO'}
                </div>
                <div className="text-xl font-extrabold tracking-tight text-[#0f172a]">
                  {m.isBase ? 'R$ ' : '+ R$ '}
                  {formatPrice(m.monthlyPrice)}
                </div>
                <div className="text-sm font-semibold text-[#0f172a] mt-1">{m.name}</div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <Link
            href="/planos"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0f172a] hover:bg-[#1a2845] text-white font-semibold rounded-xl transition-colors"
          >
            Ver planos completos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
