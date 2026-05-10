// src/components/home/HowItWorks.tsx
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';

const STEPS = [
  {
    n: '01',
    title: 'Cadastra grátis em 5 minutos',
    description: 'Wizard guiado preenche dados da empresa via CNPJ. Sem cartão de crédito. Trial de 7 dias.',
  },
  {
    n: '02',
    title: 'Migração assistida',
    description: 'Nosso time importa seus dados (clientes, produtos, estoque) e configura sua operação.',
  },
  {
    n: '03',
    title: 'Adiciona módulos quando precisar',
    description: 'Comece com o Essencial. Ative Gestão, Fiscal e Tech & IA conforme a operação cresce.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <Container>
        <SectionHeader
          eyebrow="Como começar"
          title="3 passos. Sem complicação."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative">
          <div aria-hidden className="hidden md:block absolute top-7 left-[16.66%] right-[16.66%] h-[1px] bg-gradient-to-r from-[#06b6d4]/0 via-[#06b6d4] to-[#06b6d4]/0" />
          {STEPS.map((s, i) => (
            <AnimatedReveal key={s.n} delay={i * 0.12}>
              <div className="relative bg-white border border-[#e2e8f0] rounded-2xl p-7 md:p-8">
                <div className="w-14 h-14 rounded-xl gradient-bg-premium text-white flex items-center justify-center font-extrabold text-base mb-5 shadow-lg">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{s.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
