'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { buildWhatsAppUrl, WHATSAPP_MESSAGE_SPECIALIST } from '@/lib/pricing';

const DEMO_VIDEO_URL = 'https://www.youtube.com/watch?v=mnVJSrz9Jlo';

const ROTATING_PHRASES = ['automatiza', 'digitaliza', 'moderniza', 'transforma', 'escala'];

const TYPE_SPEED = 75;
const DELETE_SPEED = 38;
const HOLD_AT_FULL = 1800;
const HOLD_AT_EMPTY = 220;
const INITIAL_DELAY = 2400;

export function Hero() {
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
            Vendas, estoque, fiscal, WhatsApp e IA num só sistema
          </div>

          <h1 className="font-display font-extrabold tracking-[-0.05em] leading-[0.96] text-[#0a1322] max-w-[980px] mx-auto text-[38px] sm:text-6xl lg:text-[88px] mb-6 sm:mb-7">
            O ERP que{' '}
            <span
              ref={wordRef}
              className="inline-block min-w-[0.8ch] font-extrabold tracking-[-0.05em] text-[#4a7818]"
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

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 p-2.5 sm:pl-6 rounded-[28px] sm:rounded-full bg-[#F3F7EC] border border-[#D3E3BE]">
            <span className="text-[15px] text-[#3F4756] px-2 sm:px-0">Prefere conversar antes de testar?</span>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGE_SPECIALIST)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-[22px] py-3 rounded-full bg-white border-[1.5px] border-[#6E9E3A] hover:bg-[#fafdf6] text-[#3A5E15] font-bold text-[15px] tracking-tight transition-colors"
            >
              <WhatsAppGlyph />
              Fale conosco via WhatsApp
            </a>
          </div>

          <div className="relative mt-12 sm:mt-16 max-w-[900px] mx-auto">
            <div
              aria-hidden
              className="absolute -inset-x-6 -inset-y-10 sm:-inset-x-10 sm:-inset-y-16 rounded-[40px] pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(132,160,40,0.18), transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <a
              href={DEMO_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Assistir demonstração do PopGás no YouTube"
              className="group relative block rounded-2xl sm:rounded-[26px] overflow-hidden border border-[rgba(15,19,34,0.10)] bg-white text-[#0a1322] shadow-[0_40px_80px_-20px_rgba(15,19,34,0.20),0_8px_24px_rgba(15,19,34,0.10)]"
            >
              <Image
                src="/screenshots/banner-ia-whatsapp.png"
                alt="IA no WhatsApp para revendas de gás e app web personalizado com o PopGás Sistema"
                width={1920}
                height={963}
                priority
                className="w-full h-auto block"
                sizes="(min-width: 900px) 900px, 100vw"
              />
              <span className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-5 px-4 sm:px-[22px] py-4 border-t border-[#EDEFEA]">
                <span className="flex items-center gap-3.5 text-left">
                  <span aria-hidden className="shrink-0 w-12 h-12 rounded-[14px] bg-[#FF0000] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24"><polygon points="8 5 20 12 8 19" fill="#FFFFFF" /></svg>
                  </span>
                  <span className="flex flex-col leading-[1.25]">
                    <strong className="text-[17px]">Assistir demonstração</strong>
                    <span className="text-[14px] text-[#5B6472]">Veja a IA atendendo no WhatsApp e o sistema na prática</span>
                  </span>
                </span>
                <span className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#CC0000] group-hover:bg-[#b30000] text-white font-extrabold text-[16px] shadow-[0_10px_24px_rgba(204,0,0,0.35)] transition-colors">
                  <svg aria-hidden width="24" height="17" viewBox="0 0 28 20"><rect width="28" height="20" rx="5" fill="#FFFFFF" /><polygon points="11 5.5 19 10 11 14.5" fill="#CC0000" /></svg>
                  Ver no YouTube
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} aria-hidden />
                </span>
              </span>
            </a>
          </div>
        </Container>
      </div>

      <HeroMarquee />
    </section>
  );
}

function WhatsAppGlyph() {
  return (
    <svg aria-hidden width="22" height="22" viewBox="0 0 32 32">
      <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3z" fill="#25D366" />
      <path
        d="M11.5 9.5c.4 0 .8 0 1 .6l1.2 2.8c.1.3 0 .6-.1.8l-.9 1.1c-.2.2-.2.5 0 .8a10 10 0 0 0 4.6 4.1c.3.1.6.1.8-.1l1.1-1.3c.2-.3.6-.3.9-.2l2.8 1.3c.3.2.5.4.4.8-.1 1.5-1.4 2.7-3 2.8-1.6.1-4.3-.8-7-3.4s-3.6-5.3-3.5-6.9c.1-1.6 1.2-2.8 1.7-3.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

const MARQUEE_ITEMS: string[] = [
  'Vendas',
  'Fiscal',
  'WhatsApp',
  'IA',
  'R$ 99,90/mês',
  '14 dias grátis',
  'Sem cartão',
  'Sem fidelidade',
];

function MarqueeRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center gap-7 pr-7" {...(ariaHidden ? { 'aria-hidden': true } : {})}>
      {MARQUEE_ITEMS.map((label, i) => (
        <span key={i} className="flex items-center gap-7">
          <span className="text-[#4a7818] font-bold text-[16px] leading-[15px] tracking-tight">
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
