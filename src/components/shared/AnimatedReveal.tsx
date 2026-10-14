'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Sobe e aparece quando entra na tela. Só CSS + IntersectionObserver (sem framer-motion):
 * o conteúdo vem visível no HTML e só fica escondido para animar quando o JS marcou o <html> com
 * `.js-reveal` (ver globals.css), então Google, leitores e quem está sem JS sempre veem o texto.
 */
export function AnimatedReveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.dataset.revealed = 'true';
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          el.dataset.revealed = 'true';
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn('reveal', className)} style={{ '--reveal-delay': `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
