// src/components/seo/JsonLd.tsx
// Safety note: dangerouslySetInnerHTML is used here following the official Next.js JSON-LD
// pattern (https://nextjs.org/docs/app/guides/json-ld). All data passed to this component
// originates from server-side typed constants (src/lib/pricing.ts, src/content/), never
// from user input, so there is no XSS risk.

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
    name: 'PopGás Sistema',
    legalName: 'POPGAS COMERCIO E TECNOLOGIA LTDA',
    taxID: '10.262.307/0001-14',
    url: 'https://popgas.com.br',
    logo: 'https://popgas.com.br/logo.svg',
    description: 'ERP completo para revendas de gás GLP.',
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

export function productLd(modules: { name: string; price: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PopGás Sistema',
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
