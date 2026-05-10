import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { JsonLd, organizationLd } from '@/components/seo/JsonLd';
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <JsonLd data={organizationLd()} />
        <VercelAnalytics />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
