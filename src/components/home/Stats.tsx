'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { CalendarCheck, Flame, Package, ShieldCheck, TrendingUp, Users, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/shared/Container';

const FOUNDED_YEAR = 2015;
const COUNT_DURATION_MS = 2000;

const formatOrders = (v: number) => {
  if (v >= 1_000_000) return `${(Math.floor(v / 100_000) / 10).toLocaleString('pt-BR')}M`;
  if (v >= 1000) return `${Math.floor(v / 1000)}K`;
  return String(Math.round(v));
};
const formatThousands = (v: number) => (v >= 1000 ? `${Math.floor(v / 1000)}K` : String(Math.round(v)));

interface Metric {
  icon: LucideIcon;
  value: number;
  format: (v: number) => string;
  prefix?: string;
  suffix: string;
  label: string;
  detail: string;
  dark?: boolean;
}

const METRICS: Metric[] = [
  { icon: Package, value: 1_000_000, format: formatOrders, suffix: '+', label: 'Pedidos processados', detail: 'do atendimento à entrega, pelo sistema' },
  { icon: TrendingUp, value: 50, format: v => String(Math.round(v)), prefix: 'R$ ', suffix: ' mi+', label: 'Em vendas transacionadas', detail: 'com caixa e financeiro conciliados' },
  { icon: Users, value: 30_000, format: formatThousands, suffix: '+', label: 'Clientes atendidos por mês', detail: 'no app, no WhatsApp e no balcão' },
  {
    icon: Flame,
    value: new Date().getFullYear() - FOUNDED_YEAR,
    format: v => String(Math.round(v)),
    suffix: ' anos',
    label: 'Em operação real',
    detail: `desde ${FOUNDED_YEAR} no mercado`,
    dark: true,
  },
];

const FACTS: { icon: LucideIcon; text: ReactNode }[] = [
  { icon: Flame, text: <>Nascido em uma <strong className="text-[#0f172a] dark:text-[#E8EEE6] font-semibold">revenda real</strong>, em operação desde {FOUNDED_YEAR}</> },
  { icon: CalendarCheck, text: <><strong className="text-[#0f172a] dark:text-[#E8EEE6] font-semibold">14 dias grátis</strong>, sem cartão</> },
  { icon: ShieldCheck, text: <>Sem fidelidade, <strong className="text-[#0f172a] dark:text-[#E8EEE6] font-semibold">cancele quando quiser</strong></> },
];

/** Progresso 0→1 (ease-out) quando a seção entra na tela; 1 direto com movimento reduzido. */
function useCountUp(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      raf = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(raf);
    }

    const start = () => {
      observer.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const x = Math.min(1, (t - t0) / COUNT_DURATION_MS);
        setProgress(1 - Math.pow(1 - x, 4));
        if (x < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) start();
    }, { threshold: 0.35 });
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [ref]);

  return progress;
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useCountUp(sectionRef);

  return (
    <section ref={sectionRef} id="metricas" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-[#1B2722] border-y border-[rgba(15,19,34,0.06)] dark:border-[#2E3E35]">
      <Container>
        <div className="max-w-[1100px] mx-auto flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[32px] sm:text-[42px] md:text-[52px] font-extrabold tracking-[-0.04em] leading-[1.04] text-[#0a1322] dark:text-[#E8EEE6]">
              Feito por quem vive o dia a dia do gás.
            </h2>
            <ul className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3 text-[15px] sm:text-[16px] text-[#5B6472] dark:text-[#A3AFA6] list-none p-0 m-0">
              {FACTS.map((item, i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <item.icon className="w-[18px] h-[18px] text-[#4a7818] dark:text-[#9CCB6B] shrink-0" strokeWidth={2} aria-hidden />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {METRICS.map(m => (
              <div
                key={m.label}
                className={
                  m.dark
                    ? 'flex flex-col gap-3.5 rounded-[22px] px-[26px] py-7 bg-[#1F3A12] text-white'
                    : 'flex flex-col gap-3.5 rounded-[22px] px-[26px] py-7 bg-[#F7F8F5] dark:bg-[#141E1A] border border-[#E8EBE4] dark:border-[#2E3E35] text-[#0a1322] dark:text-[#E8EEE6]'
                }
              >
                <span
                  aria-hidden
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    m.dark ? 'bg-[#2F5219] text-[#B9DA8F]' : 'bg-[#E8F0DC] dark:bg-[#263C26] text-[#4a7818] dark:text-[#9CCB6B]'
                  }`}
                >
                  <m.icon className="w-[22px] h-[22px]" strokeWidth={2} />
                </span>
                <div className="font-display font-extrabold text-[42px] tracking-[-0.04em] leading-none tabular-nums whitespace-nowrap">
                  <span className="sr-only">{`${m.prefix ?? ''}${m.format(m.value)}${m.suffix}`}</span>
                  <span aria-hidden>
                    {m.prefix}
                    {m.format(m.value * progress)}
                    <span className={m.dark ? 'text-[#B9DA8F]' : 'text-[#5E8F2E] dark:text-[#9CCB6B]'}>{m.suffix}</span>
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <strong className="text-[16px]">{m.label}</strong>
                  <span className={`text-[14px] ${m.dark ? 'text-[#C9D8B6]' : 'text-[#5B6472] dark:text-[#A3AFA6]'}`}>{m.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
