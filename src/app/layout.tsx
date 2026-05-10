import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
