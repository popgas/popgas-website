import type { ReactNode } from 'react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';

interface Problem {
  category: string;
  question: string;
  solution: ReactNode;
}

const FEATURED: Problem = {
  category: 'A dor mais comum',
  question: 'Caixa fechando atrasado?',
  solution: (
    <>
      Acerto manual diário consome horas e gera erros que custam caro.{' '}
      <strong className="text-[#4a7818] font-bold">
        PopGás fecha em 5 minutos com auditoria automática
      </strong>
      , conferindo acerto do entregador, saldo de contas e movimentações bancárias do dia.
    </>
  ),
};

const SIDE_PROBLEMS: Problem[] = [
  {
    category: 'Atendimento',
    question: 'Cliente esperando atendente?',
    solution: (
      <>
        IA atende <strong className="text-[#4a7818] font-bold">24/7 no WhatsApp</strong> e cria pedidos sozinha.
      </>
    ),
  },
  {
    category: 'Fiscal',
    question: 'NF-e dando erro?',
    solution: (
      <>
        Integração <strong className="text-[#4a7818] font-bold">nativa com SEFAZ</strong>. Emissão em segundos.
      </>
    ),
  },
  {
    category: 'Estoque',
    question: 'Estoque desencontrado?',
    solution: (
      <>
        Lotes, depósitos, <strong className="text-[#4a7818] font-bold">cada movimentação rastreada</strong>.
      </>
    ),
  },
];

export function ProblemsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#fbfbfa] to-[#f8fafc]">
      <Container>
        <SectionHeader
          eyebrow="Reconhece estas dores?"
          title={
            <>
              Resolvemos o que <em className="italic-accent">tira seu sono</em>.
            </>
          }
          subtitle="O sistema que conhece os problemas reais de uma distribuidora — porque foi desenhado por quem viveu o caminhão por dentro."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 sm:gap-5 max-w-[1100px] mx-auto">
          {/* Featured */}
          <AnimatedReveal>
            <article className="h-full bg-white rounded-[22px] overflow-hidden border border-[rgba(15,19,34,0.06)] shadow-[0_8px_24px_rgba(15,19,34,0.06)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,19,34,0.10)] transition-all duration-200 flex flex-col">
              <div className="px-7 pt-7 pb-8 bg-gradient-to-br from-[rgba(186,230,253,0.50)] to-[rgba(186,230,253,0.15)]">
                <PainChip>{FEATURED.category}</PainChip>
                <h3 className="font-display font-bold text-[26px] sm:text-[28px] md:text-[30px] leading-[1.15] tracking-[-0.03em] text-[#0a1322] mt-2.5">
                  {FEATURED.question}
                </h3>
              </div>
              <div className="px-7 pt-6 pb-8 flex-1">
                <SolutionChip />
                <p className="font-sans text-[15px] sm:text-base leading-[1.55] text-[rgba(15,19,34,0.72)] font-medium tracking-[-0.005em] mt-2">
                  {FEATURED.solution}
                </p>
              </div>
            </article>
          </AnimatedReveal>

          {/* Side stack */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {SIDE_PROBLEMS.map((p, i) => (
              <AnimatedReveal key={i} delay={(i + 1) * 0.08}>
                <article className="bg-white rounded-2xl border border-[rgba(15,19,34,0.06)] shadow-[0_1px_3px_rgba(15,19,34,0.04)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(15,19,34,0.06)] transition-all duration-200 px-5 py-4 flex flex-col gap-1.5">
                  <PainChip>{p.category}</PainChip>
                  <h4 className="font-display font-bold text-[15px] sm:text-base leading-[1.25] tracking-[-0.015em] text-[#0a1322]">
                    {p.question}
                  </h4>
                  <p className="text-[13px] leading-[1.5] text-[rgba(15,19,34,0.65)] font-medium tracking-[-0.005em]">
                    {p.solution}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PainChip({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[1.5px] text-[#1e40af] font-semibold">
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#0095cc]"
        style={{ boxShadow: '0 0 6px rgba(0,149,204,0.5)' }}
        aria-hidden
      />
      {children}
    </div>
  );
}

function SolutionChip() {
  return (
    <div className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[1.5px] text-[#4a7818] font-semibold">
      <span aria-hidden className="font-extrabold">
        ✓
      </span>
      A solução
    </div>
  );
}
