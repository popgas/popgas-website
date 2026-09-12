// src/lib/analytics.ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const DEFAULT_GTM_ID = 'GTM-K6435QMB';

/** Permite isolar o tracking de ambientes não produtivos sem mudar o contêiner da produção. */
export function resolveGtmId(configuredId = process.env.NEXT_PUBLIC_GTM_ID): string {
  if (!configuredId) return DEFAULT_GTM_ID;

  if (!/^GTM-[A-Z0-9]+$/.test(configuredId)) {
    throw new Error('NEXT_PUBLIC_GTM_ID must be a valid Google Tag Manager container ID');
  }

  return configuredId;
}

/** Meta Pixel e GA4 são carregados pelo GTM, nunca diretamente pela aplicação. */
export const GTM_ID = resolveGtmId();

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
