'use client';

import { useEffect } from 'react';
import { classifyOutboundClick, track } from '@/lib/analytics';

/**
 * Sem UI: um único listener registra cliques em WhatsApp, vídeo de demonstração e login,
 * em qualquer lugar do site (hero, botão flutuante, rodapé, contato…), sem instrumentar cada link.
 */
export function OutboundClickTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const name = classifyOutboundClick(anchor.href);
      if (!name) return;
      const linkText = (anchor.getAttribute('aria-label') || anchor.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);
      track({ name, page: window.location.pathname, link_text: linkText });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
