'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Flame, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LOGIN_URL } from '@/lib/pricing';
import { SignupLink } from '@/components/tracking/SignupLink';

/** "Começar grátis" com popover: cadastrar (trial) ou acessar a conta existente. */
export function StartFreeMenu({ signupUrl, className }: { signupUrl: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#64a028] hover:bg-[#84cc16] text-white text-[13px] font-bold rounded-full transition-colors tracking-tight shadow-[0_4px_14px_rgba(132,160,40,0.25),inset_0_1px_0_rgba(255,255,255,0.18)] cursor-pointer"
      >
        Começar grátis
        <ChevronDown className={cn('w-3 h-3 transition-transform', open && 'rotate-180')} strokeWidth={3} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-[calc(100%+12px)] z-50 w-[320px] max-w-[calc(100vw-32px)] p-2 rounded-[20px] bg-white dark:bg-[#1B2722] border border-[#E3E7DE] dark:border-[#2E3E35] shadow-[0_24px_50px_rgba(15,23,42,0.16)] flex flex-col gap-1"
        >
          <SignupLink
            href={signupUrl}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3.5 p-3.5 rounded-[14px] bg-[#F3F7EC] dark:bg-[#20301F] hover:bg-[#EAF2DC] dark:hover:bg-[#263C26] text-[#0a1322] dark:text-[#E8EEE6] transition-colors"
          >
            <span aria-hidden className="shrink-0 w-10 h-10 rounded-xl bg-[#4a7818] text-white flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </span>
            <span className="flex flex-col leading-[1.3]">
              <strong className="text-[15px]">Cadastrar e testar de graça</strong>
              <span className="text-[13px] text-[#5B6472] dark:text-[#A3AFA6]">14 dias grátis, sem cartão</span>
            </span>
          </SignupLink>
          <a
            href={LOGIN_URL}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3.5 p-3.5 rounded-[14px] hover:bg-[rgba(15,19,34,0.03)] dark:hover:bg-[#24302A] text-[#0a1322] dark:text-[#E8EEE6] transition-colors"
          >
            <span aria-hidden className="shrink-0 w-10 h-10 rounded-xl bg-[#EEF1F4] dark:bg-[#263C26] text-[#0a1322] dark:text-[#E8EEE6] flex items-center justify-center">
              <LogIn className="w-5 h-5" />
            </span>
            <span className="flex flex-col leading-[1.3]">
              <strong className="text-[15px]">Acessar minha conta</strong>
              <span className="text-[13px] text-[#5B6472] dark:text-[#A3AFA6]">Já sou cliente PopGás</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
