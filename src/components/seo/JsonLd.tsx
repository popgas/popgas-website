// src/components/seo/JsonLd.tsx
// Safety note: dangerouslySetInnerHTML is used here following the official Next.js JSON-LD
// pattern (https://nextjs.org/docs/app/guides/json-ld). All data passed to this component
// originates from server-side typed constants (src/lib/pricing.ts, src/content/), never
// from user input, so there is no XSS risk.

import { SITE_NAME, SITE_URL, SOCIAL_PROFILES, absoluteUrl } from '@/lib/site';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: 'POPGAS COMERCIO E TECNOLOGIA LTDA',
    taxID: '10.262.307/0001-14',
    url: SITE_URL,
    logo: absoluteUrl('/images/png_cor-principal.png'),
    description: 'Sistema (ERP) completo para revendas de gás GLP, com IA que atende e fecha pedidos no WhatsApp.',
    foundingDate: '2015',
    sameAs: SOCIAL_PROFILES,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. João Balbino, 749',
      addressLocality: 'Uberlândia',
      addressRegion: 'MG',
      postalCode: '38408-262',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-34-3238-7777',
      contactType: 'sales',
      availableLanguage: 'Portuguese',
    },
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

/** Produto na home: categoria, plataforma e faixa de preço (a partir do plano base). */
export function softwareApplicationLd({ lowPrice, highPrice }: { lowPrice: number; highPrice: number }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'ERP para revendas de gás',
    operatingSystem: 'Web, Android, iOS',
    description:
      'Sistema para revenda de gás: pedidos, app do entregador e do cliente, rastreamento, estoque, financeiro, NF-e/NFC-e e IA que atende no WhatsApp.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'BRL',
      lowPrice,
      highPrice,
      offerCount: 4,
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productLd(modules: { name: string; price: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: modules.map(m => ({
      '@type': 'Offer',
      name: m.name,
      price: m.price,
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        billingDuration: 'P1M',
      },
    })),
  };
}

export function faqPageLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}
