import React, { type ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('next/font/google', () => {
  const font = () => ({ variable: 'test-font' });
  return { Geist: font, Geist_Mono: font, Instrument_Serif: font };
});

vi.mock('@vercel/analytics/next', () => ({
  Analytics: () => <span data-testid="vercel-analytics" />,
}));

vi.mock('@/components/layout/Header', () => ({ Header: () => <header /> }));
vi.mock('@/components/layout/Footer', () => ({ Footer: () => <footer /> }));
vi.mock('@/components/layout/WhatsAppButton', () => ({ WhatsAppButton: () => null }));
vi.mock('@/components/seo/JsonLd', () => ({ JsonLd: () => null, organizationLd: () => ({}) }));
vi.mock('@/components/tracking/AttributionCapture', () => ({ AttributionCapture: () => null }));

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

async function renderLayout(isolated: boolean): Promise<string> {
  vi.resetModules();
  vi.stubEnv('NEXT_PUBLIC_E2E_BROWSER_ISOLATION', isolated ? 'true' : '');
  const cssWarning = vi.spyOn(console, 'error').mockImplementation(() => undefined);
  try {
    const { default: RootLayout } = await import('@/app/layout');
    return renderToStaticMarkup(RootLayout({ children: <div>content</div> }) as ReactNode);
  } finally {
    cssWarning.mockRestore();
  }
}

describe('website E2E browser isolation', () => {
  it('omits runtime tracking only in the explicit E2E build', async () => {
    const isolatedHtml = await renderLayout(true);

    expect(isolatedHtml).not.toContain('googletagmanager.com');
    expect(isolatedHtml).not.toContain('data-testid="vercel-analytics"');

    const productionHtml = await renderLayout(false);
    expect(productionHtml).toContain('googletagmanager.com');
    expect(productionHtml).toContain('data-testid="vercel-analytics"');
  });

  it('renders the local deterministic operations map only in the E2E build', async () => {
    vi.stubEnv('NEXT_PUBLIC_E2E_BROWSER_ISOLATION', 'true');
    const { DeliveryMap: IsolatedDeliveryMap } = await import('@/components/home/DeliveryMap');
    const isolatedHtml = renderToStaticMarkup(<IsolatedDeliveryMap />);

    expect(isolatedHtml).toContain('data-testid="e2e-local-delivery-map"');
    expect(isolatedHtml).toContain('P13 · 2un');

    vi.resetModules();
    vi.stubEnv('NEXT_PUBLIC_E2E_BROWSER_ISOLATION', '');
    const { DeliveryMap: ProductionDeliveryMap } = await import('@/components/home/DeliveryMap');
    const productionHtml = renderToStaticMarkup(<ProductionDeliveryMap />);

    expect(productionHtml).not.toContain('data-testid="e2e-local-delivery-map"');
  });

  it('publishes an E2E-only local response policy for the real Next server', async () => {
    vi.stubEnv('NEXT_PUBLIC_E2E_BROWSER_ISOLATION', 'true');
    const { default: isolatedConfig } = await import('../next.config');
    const isolatedHeaders = await isolatedConfig.headers?.();
    const policy = isolatedHeaders
      ?.flatMap(rule => rule.headers)
      .find(header => header.key.toLowerCase() === 'content-security-policy')
      ?.value;

    expect(policy).toContain("default-src 'self'");
    expect(policy).toContain("connect-src 'self'");
    expect(policy).toContain("frame-src 'none'");
    expect(policy).toContain("object-src 'none'");
    expect(policy).not.toMatch(/https?:/);

    vi.resetModules();
    vi.stubEnv('NEXT_PUBLIC_E2E_BROWSER_ISOLATION', '');
    const { default: productionConfig } = await import('../next.config');
    expect(productionConfig.headers).toBeUndefined();
  });
});
