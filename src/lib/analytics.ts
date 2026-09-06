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
  | { name: 'signup_redirect'; modules: string; billing: string };

/** Publica no dataLayer; o GTM decide quais tags disparam. */
export function track(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;
  const { name, ...params } = event;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
