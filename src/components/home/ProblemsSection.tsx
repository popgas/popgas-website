import type { ReactNode } from 'react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';

interface Problem {
  question: string;
  solution: ReactNode;
}

const PROBLEMS: Problem[] = [
  {
    question: 'Caixa fechando atrasado?',
    solution: (
      <>
        Acerto manual diário consome horas. PopGás fecha em{' '}
        <strong className="text-[#006085] font-bold">5 minutos</strong> com auditoria automática.
      </>
    ),
  },
  {
    question: 'Cliente esperando atendente?',
    solution: (
      <>
        IA atende <strong className="text-[#006085] font-bold">24/7 no WhatsApp</strong> e cria pedidos sozinha. Seu time foca no que importa.
      </>
    ),
  },
  {
    question: 'NF-e dando erro?',
    solution: (
      <>
        Integração <strong className="text-[#006085] font-bold">nativa com SEFAZ</strong>. Emissão em segundos, sem dor de cabeça.
      </>
    ),
  },
  {
    question: 'Estoque desencontrado?',
    solution: (
      <>
        Lotes, condições, múltiplos depósitos.{' '}
        <strong className="text-[#006085] font-bold">Cada movimentação rastreada e auditável.</strong>
      </>
    ),
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#fbfbfa] to-[#f8fafc]">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEMS.map((p, i) => (
            <AnimatedReveal key={i} delay={i * 0.08}>
              <article className="h-full bg-white rounded-2xl overflow-hidden border border-[rgba(15,19,34,0.06)] shadow-[0_1px_3px_rgba(15,19,34,0.04)] hover:shadow-[0_12px_32px_rgba(15,19,34,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
                <div className="px-6 pt-6 pb-7 bg-gradient-to-b from-[rgba(254,215,170,0.40)] to-[rgba(254,215,170,0.10)] border-b border-[rgba(15,19,34,0.06)]">
                  <div className="inline-flex items-center gap-2 mb-3 font-mono text-[9px] uppercase tracking-[1.5px] text-[#9a3412] font-semibold">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#f97316]"
                      style={{ boxShadow: '0 0 6px rgba(249,115,22,0.5)' }}
                      aria-hidden
                    />
                    A dor
                  </div>
                  <p className="font-serif italic font-normal text-[24px] md:text-[26px] leading-[1.15] tracking-[-0.02em] text-[#0a1322]">
                    {p.question}
                  </p>
                </div>
                <div className="h-8 flex items-center justify-center text-[18px] text-[rgba(15,19,34,0.25)]" aria-hidden>
                  ↓
                </div>
                <div className="px-6 pb-7 pt-1 flex-1">
                  <div className="inline-flex items-center gap-1.5 mb-2 font-mono text-[9px] uppercase tracking-[1.5px] text-[#006085] font-semibold">
                    <span aria-hidden className="font-extrabold">✓</span>
                    A solução
                  </div>
                  <p className="font-sans text-sm leading-[1.55] text-[rgba(15,19,34,0.7)] font-medium tracking-[-0.01em]">
                    {p.solution}
                  </p>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
