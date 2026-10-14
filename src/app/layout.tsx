import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { JsonLd, organizationLd, websiteLd } from '@/components/seo/JsonLd';
import { AttributionCapture } from '@/components/tracking/AttributionCapture';
import { OutboundClickTracking } from '@/components/tracking/OutboundClickTracking';
import { GTM_ID } from '@/lib/analytics';
import { isE2EBrowserIsolation } from '@/lib/e2e-browser-isolation';
import { THEME_INIT_SCRIPT } from '@/lib/theme';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

// Identidade visual "Neutro SaaS": uma única família (Inter), sem serifa e sem itálico.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sistema para revenda de gás com IA no WhatsApp | PopGás',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Sistema para revenda de gás: pedidos, entregadores no mapa, estoque, financeiro, NF-e e IA que atende no WhatsApp. 14 dias grátis, a partir de R$ 99,90/mês.',
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: SITE_NAME,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  // Opcional: código de verificação do Google Search Console (meta tag), se a propriedade for por tag.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Aplica o tema salvo antes da pintura (o script mexe na classe do <html>, daí o suppressHydrationWarning). */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        {!isE2EBrowserIsolation && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {!isE2EBrowserIsolation && (
          /* Google Tag Manager — único ponto de tracking (Pixel + GA4 vivem no contêiner).
             afterInteractive: carrega logo após a hidratação, sem travar a primeira pintura no celular. */
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        <AttributionCapture />
        <OutboundClickTracking />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <JsonLd data={organizationLd()} />
        <JsonLd data={websiteLd()} />
        {!isE2EBrowserIsolation && <VercelAnalytics />}
      </body>
    </html>
  );
}
