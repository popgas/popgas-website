'use client';

import { useEffect, useRef } from 'react';
import { Container } from '@/components/shared/Container';
import { SignupLink } from '@/components/tracking/SignupLink';
import { buildSignupUrl, buildWhatsAppUrl, WHATSAPP_MESSAGE_SPECIALIST } from '@/lib/pricing';
import { HeroChatDemo } from './HeroChatDemo';

const ROTATING_PHRASES = ['moderniza', 'automatiza'];
// Reserva a largura da palavra mais longa para o título não mudar de linha enquanto digita.
const LONGEST_PHRASE = ROTATING_PHRASES.reduce((a, b) => (b.length > a.length ? b : a));

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

      <div className="relative pt-10 sm:pt-14 md:pt-[72px] pb-14 sm:pb-16 md:pb-[88px]">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-14 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:gap-[26px] min-w-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/70 dark:bg-[#1B2722] border border-[rgba(15,19,34,0.10)] dark:border-[#2E3E35] rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4px] text-[rgba(15,19,34,0.78)] dark:text-[#C3CCC5] backdrop-blur-md shadow-[0_1px_3px_rgba(15,19,34,0.04)]">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#64a028] shadow-[0_0_6px_rgba(132,160,40,0.45)]"
                style={{ animation: 'pulse-cyan 2.4s ease-in-out infinite' }}
              />
              Vendas, estoque, fiscal, WhatsApp e IA num só sistema
            </div>

            <h1 className="font-display font-extrabold tracking-[-0.05em] leading-[0.98] text-[#0a1322] dark:text-[#E8EEE6] text-[38px] sm:text-6xl lg:text-[76px]">
              O ERP que{' '}
              <span className="relative inline-block whitespace-nowrap text-left">
                <span aria-hidden className="invisible">{LONGEST_PHRASE}|</span>
                <span className="absolute left-0 top-0">
                  <span
                    ref={wordRef}
                    className="font-extrabold tracking-[-0.05em] text-[#4a7818] dark:text-[#9CCB6B]"
                    style={{ paddingRight: '0.02em' }}
                  >
                    {ROTATING_PHRASES[0]}
                  </span>
                  <span
                    aria-hidden
                    className="inline-block ml-0.5 font-display font-light text-[#64a028] dark:text-[#9CCB6B]"
                    style={{ transform: 'translateY(-0.05em)', animation: 'caret-blink 1.05s steps(2, end) infinite' }}
                  >
                    |
                  </span>
                </span>
              </span>
              <br />
              sua revenda.
            </h1>

            <p className="text-[15px] sm:text-base md:text-xl text-[rgba(15,19,34,0.62)] dark:text-[#A3AFA6] leading-[1.5] font-normal tracking-[-0.01em]">
              Comece com{' '}
              <span className="text-[#4a7818] dark:text-[#9CCB6B] bg-[rgba(132,160,40,0.12)] dark:bg-[#20301F] px-2 py-0.5 rounded-md font-semibold ring-1 ring-inset ring-[rgba(132,160,40,0.30)] dark:ring-[#2F4A27] whitespace-nowrap">
                R$ 99,90/mês
              </span>{' '}
              e escale conforme a operação cresce.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
              <SignupLink
                href={ctaUrl}
                className="inline-flex items-center justify-center px-7 py-4 bg-[#5E8F2E] hover:bg-[#64a028] text-white font-bold text-[17px] rounded-full transition-colors tracking-tight shadow-[0_10px_28px_rgba(92,138,46,0.30)]"
              >
                Começar grátis →
              </SignupLink>
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGE_SPECIALIST)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-[15px] rounded-full bg-white dark:bg-[#1B2722] border-[1.5px] border-[#6E9E3A] hover:bg-[#fafdf6] dark:hover:bg-[#20301F] text-[#3A5E15] dark:text-[#B5DB8C] font-bold text-[16px] tracking-tight transition-colors"
              >
                <WhatsAppGlyph />
                Fale conosco via WhatsApp
              </a>
            </div>
          </div>

          <HeroChatDemo />
        </Container>
      </div>
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
