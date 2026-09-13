// src/lib/analytics.ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** O GTM só é carregado quando o ambiente fornece explicitamente o contêiner. */
export function resolveGtmId(configuredId = process.env.NEXT_PUBLIC_GTM_ID): string | null {
  if (!configuredId) return null;

  if (!/^GTM-[A-Z0-9]+$/.test(configuredId)) {
    throw new Error('NEXT_PUBLIC_GTM_ID must be a valid Google Tag Manager container ID');
  }

  return configuredId;
}

/** Produção configura o ID; preview, sandbox e E2E permanecem sem tracking. */
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
