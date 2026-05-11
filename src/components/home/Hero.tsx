'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { VideoModal } from '@/components/shared/VideoModal';
import { buildSignupUrl } from '@/lib/pricing';

const ROTATING_PHRASES = ['automatiza', 'digitaliza', 'moderniza', 'transforma', 'escala'];

const TYPE_SPEED = 75;
const DELETE_SPEED = 38;
const HOLD_AT_FULL = 1800;
const HOLD_AT_EMPTY = 220;
const INITIAL_DELAY = 2400;

export function Hero() {
  const ctaUrl = buildSignupUrl({
    modules: ['essencial'],
    billing: 'monthly',
    utmCampaign: 'home_hero',
  });

  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = wordRef.current;
    if (!el) return;

    let phraseIndex = 0;
    let charIndex = ROTATING_PHRASES[0].length;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = ROTATING_PHRASES[phraseIndex];
      if (!isDeleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex >= current.length) {
          isDeleting = true;
          timer = setTimeout(tick, HOLD_AT_FULL);
          return;
        }
        timer = setTimeout(tick, TYPE_SPEED);
      } else {
        charIndex--;
        el.textContent = current.slice(0, Math.max(0, charIndex));
        if (charIndex <= 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % ROTATING_PHRASES.length;
          charIndex = 0;
          timer = setTimeout(tick, HOLD_AT_EMPTY);
          return;
        }
        timer = setTimeout(tick, DELETE_SPEED);
      }
    };

    timer = setTimeout(() => {
      isDeleting = true;
      tick();
    }, INITIAL_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden -mt-[72px] pt-[72px]">
      <div aria-hidden className="absolute inset-0 -z-10 aurora-light" />
      <div aria-hidden className="absolute inset-0 -z-10 grain-light pointer-events-none" />

      <div aria-hidden className="absolute inset-0 -z-[5] pointer-events-none">
        <span
          className="absolute w-[4px] h-[4px] rounded-full bg-[#84cc16] shadow-[0_0_6px_rgba(132,204,22,0.30)]"
          style={{ top: '25%', left: '15%', animation: 'twinkle 4s ease-in-out infinite', animationDelay: '0s' }}
        />
        <span
          className="absolute w-[4px] h-[4px] rounded-full bg-[#84cc16] shadow-[0_0_6px_rgba(132,204,22,0.30)]"
          style={{ top: '55%', right: '18%', animation: 'twinkle 4s ease-in-out infinite', animationDelay: '1.4s' }}
        />
        <span
          className="absolute w-[4px] h-[4px] rounded-full bg-[#84cc16] shadow-[0_0_6px_rgba(132,204,22,0.30)]"
          style={{ bottom: '28%', left: '60%', animation: 'twinkle 4s ease-in-out infinite', animationDelay: '2.8s' }}
        />
      </div>

      <div className="relative pt-14 sm:pt-20 md:pt-28 pb-14 sm:pb-16 md:pb-20">
        <Container className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/70 border border-[rgba(15,19,34,0.10)] rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4px] text-[rgba(15,19,34,0.78)] mb-6 sm:mb-9 backdrop-blur-md shadow-[0_1px_3px_rgba(15,19,34,0.04)]">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#64a028] shadow-[0_0_6px_rgba(132,160,40,0.45)]"
              style={{ animation: 'pulse-cyan 2.4s ease-in-out infinite' }}
            />
            IA + WhatsApp em todos os planos com módulo Tech
          </div>

          <h1 className="font-display font-extrabold tracking-[-0.05em] leading-[0.96] text-[#0a1322] max-w-[980px] mx-auto text-[38px] sm:text-6xl lg:text-[88px] mb-6 sm:mb-7">
            O ERP que{' '}
            <span
              ref={wordRef}
              className="inline-block min-w-[0.8ch] font-serif italic font-normal tracking-[-0.025em] bg-gradient-to-br from-[#4a7818] to-[#64a028] bg-clip-text text-transparent"
              style={{ paddingRight: '0.02em' }}
            >
              automatiza
            </span>
            <span
              className="inline-block ml-0.5 font-display font-light text-[#64a028]"
              style={{ transform: 'translateY(-0.05em)', animation: 'caret-blink 1.05s steps(2, end) infinite' }}
            >
              |
            </span>
            <br />
            sua revenda.
          </h1>

          <p className="text-[15px] sm:text-base md:text-xl text-[rgba(15,19,34,0.62)] max-w-2xl mx-auto leading-[1.5] mb-9 sm:mb-11 font-normal tracking-[-0.01em]">
            Comece com{' '}
            <span className="text-[#4a7818] bg-[rgba(132,160,40,0.12)] px-2 py-0.5 rounded-md font-semibold ring-1 ring-inset ring-[rgba(132,160,40,0.30)] whitespace-nowrap">
              R$ 99,90/mês
            </span>{' '}
            e escale conforme a operação cresce.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 justify-center mb-10 sm:mb-12">
            <Link
              href={ctaUrl}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#64a028] hover:bg-[#84cc16] text-white font-bold text-base rounded-full transition-colors tracking-tight shadow-[0_8px_24px_rgba(132,160,40,0.28),inset_0_1px_0_rgba(255,255,255,0.20)]"
            >
              Começar grátis →
            </Link>
            <VideoModal
              videoId="mnVJSrz9Jlo"
              triggerClassName="inline-flex items-center justify-center gap-2 px-7 py-4 border border-[rgba(15,19,34,0.15)] hover:border-[rgba(15,19,34,0.45)] bg-white/50 hover:bg-white/80 text-[#0a1322] font-semibold text-[15px] rounded-full transition-all tracking-tight backdrop-blur-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              Assistir demonstração
            </VideoModal>
            <Link
              href="/planos"
              className="inline-flex items-center justify-center px-6 py-4 text-[rgba(15,19,34,0.70)] hover:text-[#0a1322] font-semibold text-[15px] tracking-tight transition-colors"
            >
              Ver planos
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center text-sm text-[rgba(15,19,34,0.62)]">
            <div className="flex">
              {['#cbd5e1', '#94a3b8', '#64748b', '#cbd5e1'].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#fbfbfa]"
                  style={{ background: c, marginLeft: i === 0 ? 0 : -8 }}
                />
              ))}
            </div>
            <span className="text-[rgba(15,19,34,0.72)] tracking-[1px] text-xs">★★★★★</span>
            <span>
              <strong className="text-[#0a1322] font-bold">200+ revendas</strong> confiam no PopGás
            </span>
          </div>

          <div className="relative mt-12 sm:mt-16 max-w-[1100px] mx-auto">
            <div
              aria-hidden
              className="absolute -inset-x-6 -inset-y-10 sm:-inset-x-10 sm:-inset-y-16 rounded-[40px] pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(132,160,40,0.18), transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="relative rounded-2xl sm:rounded-[20px] overflow-hidden border border-[rgba(15,19,34,0.10)] bg-white shadow-[0_40px_80px_-20px_rgba(15,19,34,0.20),0_8px_24px_rgba(15,19,34,0.10)]">
              <Image
                src="/screenshots/parceiros/dashboard.png"
                alt="Dashboard PopGás Sistema"
                width={1920}
                height={963}
                priority
                className="w-full h-auto block"
                sizes="(min-width: 1100px) 1100px, 100vw"
              />
            </div>
          </div>
        </Container>
      </div>

      <HeroMarquee />
    </section>
  );
}

const MARQUEE_ITEMS: string[] = [
  'Vendas',
  'Fiscal',
  'WhatsApp',
  'IA',
  'R$ 99,90/mês',
  '7 dias grátis',
  'Sem cartão',
  'Sem fidelidade',
];

function MarqueeRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center gap-7 pr-7" {...(ariaHidden ? { 'aria-hidden': true } : {})}>
      {MARQUEE_ITEMS.map((label, i) => (
        <span key={i} className="flex items-center gap-7">
          <span className="text-[#4a7818] font-serif italic font-normal text-[18px] leading-[15px] tracking-tight">
            {label}
          </span>
          <span className="text-[rgba(15,19,34,0.22)] select-none" aria-hidden>·</span>
        </span>
      ))}
    </div>
  );
}

function HeroMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-[rgba(15,19,34,0.06)] py-[18px] bg-white/60 backdrop-blur-md"
      style={{
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className="flex whitespace-nowrap font-display font-semibold text-[15px] text-[rgba(15,19,34,0.55)] tracking-[-0.01em] leading-none"
        style={{ animation: 'marquee 32s linear infinite' }}
      >
        <MarqueeRow />
        <MarqueeRow ariaHidden />
      </div>
    </div>
  );
}
