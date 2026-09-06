// src/lib/attribution.ts
//
// Preservação da origem de campanha (Instrução Técnica PopGas, seção 7): guardamos os
// parâmetros com que o visitante CHEGOU no site e os repassamos nos CTAs para
// erp.popgas.com.br/signup. Parâmetro de campanha vence o UTM fixo do CTA; o fixo vira fallback.

export const ATTRIBUTION_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'campaign_id',
  'adset_id',
  'ad_id',
  'placement',
  'fbclid',
] as const;

export type AttributionParam = (typeof ATTRIBUTION_PARAMS)[number];

export type StoredAttribution = Partial<Record<AttributionParam, string>> & {
  landing_url?: string;
  referrer?: string;
};

const STORAGE_KEY = 'popgas_attribution';
const MAX_LEN = 512;

function defaultStorage(): Storage | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function parseAttribution(search: string): Partial<Record<AttributionParam, string>> {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
  const result: Partial<Record<AttributionParam, string>> = {};
  for (const key of ATTRIBUTION_PARAMS) {
    const value = params.get(key)?.trim();
    if (value) result[key] = value.slice(0, MAX_LEN);
  }
  return result;
}

export function getStoredAttribution(storage: Storage | null = defaultStorage()): StoredAttribution | null {
  if (!storage) return null;
  try {
    const raw = storage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredAttribution) : null;
  } catch {
    return null;
  }
}

/**
 * Captura os parâmetros da URL atual. Primeiro toque vence dentro da sessão.
 * Retorna a atribuição vigente (a nova ou a já guardada) ou null se não há nenhuma.
 */
export function captureAttributionFromLocation(
  location: { search: string; href: string } | null = typeof window !== 'undefined' ? window.location : null,
  referrer: string = typeof document !== 'undefined' ? document.referrer : '',
  storage: Storage | null = defaultStorage(),
): StoredAttribution | null {
  const existing = getStoredAttribution(storage);
  if (existing) return existing;
  if (!location) return null;

  const parsed = parseAttribution(location.search);
  if (Object.keys(parsed).length === 0) return null;

  const stored: StoredAttribution = {
    ...parsed,
    landing_url: location.href.slice(0, 2048),
    referrer: (referrer || '').slice(0, 2048),
  };

  try {
    storage?.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // sessionStorage indisponível: segue só em memória
  }

  return stored;
}

/**
 * Mescla a atribuição na URL do signup. Regras:
 *  - parâmetro capturado vence o fixo do CTA;
 *  - se veio utm_campaign de fora e o CTA tinha um utm_campaign fixo (posição), a posição
 *    vai para utm_content — a menos que utm_content também tenha vindo de fora;
 *  - landing_url/referrer NÃO vão na URL (o ERP captura os dele).
 */
export function appendAttribution(url: string, attribution: StoredAttribution | null): string {
  if (!attribution) return url;

  const entries = ATTRIBUTION_PARAMS
    .map((key) => [key, attribution[key]] as const)
    .filter(([, value]) => typeof value === 'string' && value !== '');

  if (entries.length === 0) return url;

  const target = new URL(url);
  const ctaPosition = target.searchParams.get('utm_campaign');

  for (const [key, value] of entries) {
    target.searchParams.set(key, value as string);
  }

  if (attribution.utm_campaign && ctaPosition && !attribution.utm_content) {
    target.searchParams.set('utm_content', ctaPosition);
  }

  return target.toString();
}
