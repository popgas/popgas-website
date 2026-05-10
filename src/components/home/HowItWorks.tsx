import type { ReactNode } from 'react';
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
        <strong className="text-[#006085] font-bold">CNPJ</strong>. Sem cartão de crédito. Trial de{' '}
        <strong className="text-[#006085] font-bold">7 dias</strong>.
      </>
    ),
    mock: <SignupMock />,
  },
  {
    n: '02',
    title: 'Migração assistida',
    description: (
      <>
        Nosso time importa seus dados (
        <strong className="text-[#006085] font-bold">clientes, produtos, estoque</strong>) e configura sua operação.
      </>
    ),
    mock: <MigrationMock />,
  },
  {
    n: '03',
    title: 'Adiciona módulos quando precisar',
    description: (
      <>
        Comece com o <strong className="text-[#006085] font-bold">Essencial</strong>. Ative{' '}
        <strong className="text-[#006085] font-bold">Gestão</strong>,{' '}
        <strong className="text-[#006085] font-bold">Fiscal</strong> e{' '}
        <strong className="text-[#006085] font-bold">Tech & IA</strong> conforme a operação cresce.
      </>
    ),
    mock: <ModulesMock />,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white">
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
                    <div className="w-8 h-8 rounded-full border border-[rgba(0,149,204,0.30)] flex items-center justify-center" style={{ boxShadow: '0 0 0 4px white, 0 0 0 5px rgba(0,149,204,0.10)' }}>
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

function SignupMock() {
  return (
    <div className="bg-white rounded-xl p-4 border border-[rgba(15,19,34,0.08)] shadow-[0_4px_14px_rgba(15,19,34,0.06)] w-full max-w-[280px]">
      <FormField label="CNPJ" value="10.262.307/0001-14" filled />
      <FormField label="Razão social" value="POPGAS COMERCIO E TEC..." filled />
      <FormField label="E-mail" value="você@empresa.com.br" />
    </div>
  );
}

function FormField({ label, value, filled = false }: { label: string; value: string; filled?: boolean }) {
  return (
    <div className="flex flex-col gap-1 mb-3 last:mb-0">
      <span className="font-mono text-[9px] uppercase tracking-[1px] text-[rgba(15,19,34,0.5)]">
        {label}
      </span>
      <div
        className={`flex items-center justify-between rounded-md px-2.5 py-2 font-mono text-[11px] text-[#0a1322] ${
          filled
            ? 'bg-[rgba(0,149,204,0.04)] border border-[rgba(0,149,204,0.4)]'
            : 'bg-[#f8fafc] border border-[#e2e8f0]'
        }`}
      >
        <span className="truncate">{value}</span>
        {filled && <span className="text-[#006085] font-bold ml-2">✓</span>}
      </div>
    </div>
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
        <div className="h-full bg-gradient-to-r from-[#006085] to-[#0095cc] rounded-full" style={{ width: '65%' }} />
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
      ? 'bg-[#006085] text-white'
      : icon === 'now'
        ? 'bg-[rgba(0,149,204,0.15)] border border-[#0095cc] text-[#006085] font-mono text-[9px] font-bold'
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

function ModulesMock() {
  return (
    <div className="bg-white rounded-xl p-3 border border-[rgba(15,19,34,0.08)] shadow-[0_4px_14px_rgba(15,19,34,0.06)] w-full max-w-[280px]">
      <ModuleRow name="Essencial" price="R$ 99,90/mês" active />
      <ModuleRow name="Gestão" price="+R$ 49,90" />
      <ModuleRow name="Fiscal" price="+R$ 49,90" />
      <ModuleRow name="Tech & IA" price="+R$ 199,90" />
    </div>
  );
}

function ModuleRow({ name, price, active = false }: { name: string; price: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg px-2.5 py-2 mb-1.5 last:mb-0 text-[11px] ${
        active ? 'bg-[rgba(0,149,204,0.04)] border border-[rgba(0,149,204,0.4)]' : 'border border-[#e2e8f0]'
      }`}
    >
      <span className="font-semibold text-[#0a1322] flex items-center gap-1.5">
        {active ? (
          <span className="w-3.5 h-3.5 rounded bg-[#006085] text-white inline-flex items-center justify-center text-[8px] font-bold">
            ✓
          </span>
        ) : (
          <span className="w-3.5 h-3.5 rounded border border-[rgba(15,19,34,0.20)] inline-block" />
        )}
        {name}
      </span>
      <span className="font-mono text-[10px] text-[rgba(15,19,34,0.55)]">{price}</span>
    </div>
  );
}
