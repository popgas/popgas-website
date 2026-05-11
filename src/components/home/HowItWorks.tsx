import type { ReactNode } from 'react';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';

interface Step {
  n: string;
  title: string;
  description: ReactNode;
  mock: ReactNode;
}

const STEPS: Step[] = [
  {
    n: '01',
    title: 'Cadastra grátis em 5 minutos',
    description: (
      <>
        Wizard guiado preenche dados da empresa via{' '}
        <strong className="text-[#4a7818] font-bold">CNPJ</strong>. Sem cartão de crédito. Trial de{' '}
        <strong className="text-[#4a7818] font-bold">7 dias</strong>.
      </>
    ),
    mock: <ScreenshotMock src="/screenshots/parceiros/app-web-cliente.png" alt="App web do cliente PopGás" />,
  },
  {
    n: '02',
    title: 'Migração assistida',
    description: (
      <>
        Nosso time importa seus dados (
        <strong className="text-[#4a7818] font-bold">clientes, produtos, estoque</strong>) e configura sua operação.
      </>
    ),
    mock: <MigrationMock />,
  },
  {
    n: '03',
    title: 'Adiciona módulos quando precisar',
    description: (
      <>
        Comece com o <strong className="text-[#4a7818] font-bold">Essencial</strong>. Ative{' '}
        <strong className="text-[#4a7818] font-bold">Gestão</strong>,{' '}
        <strong className="text-[#4a7818] font-bold">Fiscal</strong> e{' '}
        <strong className="text-[#4a7818] font-bold">Tech & IA</strong> conforme a operação cresce.
      </>
    ),
    mock: <ScreenshotMock src="/screenshots/parceiros/financeiro.png" alt="Painel financeiro do PopGás" />,
  },
];

function ScreenshotMock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full max-w-[280px] rounded-xl overflow-hidden border border-[rgba(15,19,34,0.08)] shadow-[0_8px_20px_rgba(15,19,34,0.08)] bg-white">
      <Image
        src={src}
        alt={alt}
        width={560}
        height={350}
        className="w-full h-auto block"
        sizes="280px"
      />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Como começar"
          title={
            <>
              3 passos. <em className="italic-accent">Sem complicação</em>.
            </>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map((s, i) => (
            <AnimatedReveal key={s.n} delay={i * 0.12}>
              <article className="h-full bg-white rounded-[22px] border border-[rgba(15,19,34,0.07)] shadow-[0_1px_3px_rgba(15,19,34,0.04)] hover:shadow-[0_14px_32px_rgba(15,19,34,0.08)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col">
                <div className="px-6 py-7 bg-gradient-to-br from-[#f8fafc] to-[#eff6ff] border-b border-[rgba(15,19,34,0.06)] min-h-[200px] flex items-center justify-center">
                  {s.mock}
                </div>
                <div className="px-7 pt-6 pb-8 flex-1">
                  <div className="inline-flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-full border border-[rgba(132,160,40,0.30)] flex items-center justify-center" style={{ boxShadow: '0 0 0 4px white, 0 0 0 5px rgba(132,160,40,0.12)' }}>
                      <span className="font-serif italic font-normal text-[18px] leading-none italic-accent">
                        {s.n}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-[rgba(15,19,34,0.5)] font-semibold">
                      Passo {s.n}
                    </span>
                  </div>
                  <h3 className="font-display text-[22px] font-bold tracking-[-0.025em] leading-[1.2] text-[#0a1322] mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-[1.55] text-[rgba(15,19,34,0.62)] tracking-[-0.005em]">
                    {s.description}
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

function MigrationMock() {
  return (
    <div className="bg-white rounded-xl p-4 border border-[rgba(15,19,34,0.08)] shadow-[0_4px_14px_rgba(15,19,34,0.06)] w-full max-w-[280px]">
      <ProgressRow icon="done" label="Clientes (322)" done />
      <ProgressRow icon="done" label="Produtos (28)" done />
      <ProgressRow icon="now" label="Estoque (importando...)" />
      <ProgressRow icon="todo" iconText="4" label="Configuração" muted />
      <div className="bg-[rgba(15,19,34,0.08)] h-[4px] rounded-full mt-3 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#4a7818] to-[#64a028] rounded-full" style={{ width: '65%' }} />
      </div>
    </div>
  );
}

function ProgressRow({
  icon,
  label,
  done = false,
  muted = false,
  iconText,
}: {
  icon: 'done' | 'now' | 'todo';
  label: string;
  done?: boolean;
  muted?: boolean;
  iconText?: string;
}) {
  const iconClass =
    icon === 'done'
      ? 'bg-[#64a028] text-white'
      : icon === 'now'
        ? 'bg-[rgba(132,160,40,0.15)] border border-[#64a028] text-[#4a7818] font-mono text-[9px] font-bold'
        : 'bg-white border border-[rgba(15,19,34,0.15)] text-[rgba(15,19,34,0.4)] font-mono text-[9px]';

  return (
    <div className="flex items-center gap-2.5 mb-2 last:mb-0">
      <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${iconClass}`}>
        {icon === 'done' ? '✓' : icon === 'now' ? '●' : iconText}
      </div>
      <span className={`text-[11px] flex-1 ${done ? 'text-[rgba(15,19,34,0.5)] line-through' : muted ? 'text-[rgba(15,19,34,0.4)]' : 'text-[#0a1322]'}`}>
        {label}
      </span>
    </div>
  );
}

