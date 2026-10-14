// src/lib/analytics.ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Contêiner GTM "PopGas - Web". Meta Pixel e GA4 são carregados por ele (não instalar direto). */
export const GTM_ID = 'GTM-K6435QMB';

export type AnalyticsEvent =
  | { name: 'cta_click'; cta_text: string; page: string }
  | { name: 'pricing_calculator_changed'; modules: string; billing: string; total: number }
  | { name: 'lead_submitted'; lead_type: 'general' | 'enterprise' | 'support'; source: string }
  | { name: 'signup_redirect'; modules: string; billing: string }
  // Contatos e intenções que não passam por formulário: viram conversões/públicos no GTM.
  | { name: 'whatsapp_click'; page: string; link_text: string }
  | { name: 'demo_video_click'; page: string; link_text: string }
  | { name: 'login_click'; page: string; link_text: string }
  | { name: 'ai_demo_open'; page: string };

/** Publica no dataLayer; o GTM decide quais tags disparam. */
export function track(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;
  const { name, ...params } = event;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}

export type OutboundClickEvent = 'whatsapp_click' | 'demo_video_click' | 'login_click';

/** Classifica um link clicado: WhatsApp, vídeo de demonstração no YouTube ou login no ERP. */
export function classifyOutboundClick(href: string): OutboundClickEvent | null {
  let url: URL;
  try {
    url = new URL(href, 'https://www.popgas.com.br');
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./, '');
  if (host === 'wa.me' || host === 'api.whatsapp.com' || host === 'web.whatsapp.com') return 'whatsapp_click';
  if (host === 'youtube.com' || host === 'youtu.be') return 'demo_video_click';
  if (host.startsWith('erp.') && url.pathname.startsWith('/login')) return 'login_click';
  return null;
}
