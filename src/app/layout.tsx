import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { JsonLd, organizationLd } from '@/components/seo/JsonLd';
import { AttributionCapture } from '@/components/tracking/AttributionCapture';
import { GTM_ID } from '@/lib/analytics';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://popgas.com.br'),
  title: {
    default: 'PopGás Sistema — ERP completo para revendas de gás',
    template: '%s | PopGás Sistema',
  },
  description:
    'O ERP que automatiza sua revenda. Vendas, fiscal, WhatsApp e IA num só sistema. Comece com R$ 99,90/mês.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'PopGás Sistema',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* Google Tag Manager — único ponto de tracking (Pixel + GA4 vivem no contêiner) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AttributionCapture />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <JsonLd data={organizationLd()} />
        {/* Vercel Web Analytics: produto da Vercel, independente do GTM (não carrega GA4 nem Pixel) */}
        <VercelAnalytics />
      </body>
    </html>
  );
}
