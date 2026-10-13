'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AI_DEMO_CHAT_URL } from '@/lib/pricing';
import { AiRobotIcon } from './AiRobotIcon';

interface Props {
  className?: string;
  iconClassName?: string;
  /** Chamado ao abrir o chat (ex.: fechar o menu mobile). */
  onOpen?: () => void;
}

/** Botão "Teste nossa IA" com o robozinho animado; abre o chat de demonstração num celular. */
export function TryAiButton({ className, iconClassName, onOpen }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
        className={cn('inline-flex items-center gap-2 cursor-pointer', className)}
      >
        <AiRobotIcon className={cn('w-9 h-9 shrink-0', iconClassName)} />
        Teste nossa IA
      </button>

      {/* Portal: o header usa backdrop-blur, que prenderia o `fixed` dentro dele. */}
      {open && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Teste nossa IA"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setOpen(false)}
            className="absolute inset-0 w-full h-full bg-[rgba(15,23,42,0.72)] backdrop-blur-sm cursor-pointer"
          />
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-full max-w-[380px] flex items-center justify-between gap-4 text-white">
              <div className="flex flex-col gap-0.5 text-left">
                <strong className="text-[18px] leading-tight">Converse com a IA do PopGás</strong>
                <span className="text-[13px] text-[#C9D3E0]">Mande uma mensagem como se fosse um cliente.</span>
              </div>
              <button
                type="button"
                aria-label="Fechar"
                onClick={() => setOpen(false)}
                className="shrink-0 w-11 h-11 rounded-full bg-white text-[#0a1322] flex items-center justify-center cursor-pointer"
              >
                <X className="w-[18px] h-[18px]" strokeWidth={2.5} />
              </button>
            </div>
            <div className="relative w-[380px] max-w-[calc(100vw-32px)] h-[760px] max-h-[calc(100dvh-140px)] p-3 rounded-[52px] bg-[#0B1220] shadow-[0_40px_80px_rgba(0,0,0,0.45),inset_0_0_0_2px_#2A3447]">
              <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#F7F8F5]">
                <iframe
                  src={AI_DEMO_CHAT_URL}
                  title="Chat de demonstração da IA do PopGás"
                  allow="microphone; clipboard-write"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
