import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { HELP_DOCS_URL } from '@/lib/pricing';

const COLUMNS = [
  {
    title: 'Produto',
    items: [
      { label: 'Recursos', href: '/recursos', external: false },
      { label: 'Planos', href: '/planos', external: false },
      { label: 'Para revendas de gás', href: '/recursos/revendas-de-gas', external: false },
      { label: 'Integrações', href: '/recursos#integracoes', external: false },
    ],
  },
  {
    title: 'Empresa',
    items: [
      { label: 'Sobre nós', href: '/sobre-nos', external: false },
      { label: 'Blog', href: '/blog', external: false },
      { label: 'Contato comercial', href: '/contato', external: false },
    ],
  },
  {
    title: 'Suporte',
    items: [
      { label: 'Central de ajuda', href: HELP_DOCS_URL, external: true },
      { label: 'Falar com suporte', href: '/contato?tipo=suporte', external: false },
      { label: 'WhatsApp', href: 'https://wa.me/553432387777', external: true },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Termos de uso', href: '/termos', external: false },
      { label: 'Política de privacidade', href: '/privacidade', external: false },
      { label: 'LGPD', href: '/privacidade#lgpd', external: false },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(15,19,34,0.08)] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {COLUMNS.map(col => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-[#0f172a] mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#475569] hover:text-[#0f172a] transition-colors"
                      {...(item.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[rgba(15,19,34,0.08)] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="PopGás" width={28} height={28} />
            <div className="text-xs text-[#475569]">
              © 2026 PopGás Tecnologia · CNPJ 10.262.307/0001-14<br />
              POPGAS COMERCIO E TECNOLOGIA LTDA · Uberlândia/MG
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/popgas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#e2e8f0] hover:border-[#0f172a] flex items-center justify-center text-[#475569] hover:text-[#0f172a] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/company/popgas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[#e2e8f0] hover:border-[#0f172a] flex items-center justify-center text-[#475569] hover:text-[#0f172a] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/@popgas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full border border-[#e2e8f0] hover:border-[#0f172a] flex items-center justify-center text-[#475569] hover:text-[#0f172a] transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
