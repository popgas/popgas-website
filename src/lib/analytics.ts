// src/lib/analytics.ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent =
  | { name: 'cta_click'; cta_text: string; page: string }
  | { name: 'pricing_calculator_changed'; modules: string; billing: string; total: number }
  | { name: 'lead_submitted'; lead_type: 'general' | 'enterprise' | 'support'; source: string }
  | { name: 'signup_redirect'; modules: string; billing: string };

export function track(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;
  const { name, ...params } = event;
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}
