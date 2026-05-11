'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  videoId: string;
  orientation?: 'landscape' | 'portrait';
  triggerClassName?: string;
  children: ReactNode;
}

export function VideoModal({ videoId, orientation = 'landscape', triggerClassName, children }: Props) {
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

  const aspectClass = orientation === 'portrait' ? 'aspect-[9/16] max-w-[420px]' : 'aspect-video max-w-[960px]';

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn('cursor-pointer', triggerClassName)}
      >
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo de demonstração"
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className={cn('relative w-full bg-black rounded-2xl overflow-hidden shadow-[0_30px_80px_-10px_rgba(0,0,0,0.5)]', aspectClass)}
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Demonstração PopGás"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
