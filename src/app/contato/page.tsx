// src/app/contato/page.tsx
import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { ContactForm } from '@/components/shared/ContactForm';

export const metadata: Metadata = {
  title: 'Contato — Fale com a gente',
  description: 'Tire dúvidas, solicite uma demonstração ou abra um ticket de suporte.',
};

type ContactType = 'general' | 'sales' | 'support';

function resolveType(tipo: string | string[] | undefined): ContactType {
  const value = Array.isArray(tipo) ? tipo[0] : tipo;
  if (value === 'sales' || value === 'case') return 'sales';
  if (value === 'support' || value === 'suporte') return 'support';
  return 'general';
}

export default async function ContatoPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string | string[] }>;
}) {
  const params = await searchParams;
  const defaultType = resolveType(params.tipo);

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 sm:mb-6 bg-[rgba(0,149,204,0.06)] border border-[rgba(0,149,204,0.20)] rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4px] text-[#006085] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0095cc]" aria-hidden />
              Contato
            </div>
            <h1 className="font-display text-[30px] sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-[-0.045em] leading-[1.1] sm:leading-[1.05] text-[#0a1322] mb-3 sm:mb-4">
              Fale com <em className="italic-accent">a gente</em>.
            </h1>
            <p className="text-[15px] sm:text-base md:text-lg text-[rgba(15,19,34,0.62)] leading-[1.5] tracking-[-0.01em]">
              Dúvidas, demonstrações ou suporte — escolha o canal que preferir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 sm:gap-10 lg:gap-14">
            <div className="space-y-6">
              <ChannelRow icon={MessageCircle} label="WhatsApp" href="https://wa.me/553432387777">
                (34) 3238-7777
              </ChannelRow>
              <ChannelRow icon={Mail} label="E-mail" href="mailto:contato@popgas.com.br">
                contato@popgas.com.br
              </ChannelRow>
              <ChannelRow icon={Phone} label="Telefone" href="tel:+553432387777" subtitle="Seg-Sex 8h-18h">
                (34) 3238-7777
              </ChannelRow>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,149,204,0.06)] border border-[rgba(0,149,204,0.20)] flex items-center justify-center flex-shrink-0 text-[#006085]">
                  <MapPin className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[1.5px] text-[rgba(15,19,34,0.55)] mb-1.5">
                    Endereço
                  </div>
                  <div className="text-sm text-[#0a1322] leading-[1.55]">
                    R. João Balbino, 749<br />
                    Santa Mônica, Uberlândia – MG<br />
                    CEP 38408-262
                  </div>
                </div>
              </div>
            </div>
            <ContactForm defaultType={defaultType} />
          </div>
        </div>
      </Container>
    </section>
  );
}

interface ChannelRowProps {
  icon: LucideIcon;
  label: string;
  href: string;
  subtitle?: string;
  children: React.ReactNode;
}

function ChannelRow({ icon: Icon, label, href, subtitle, children }: ChannelRowProps) {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 rounded-lg bg-[rgba(0,149,204,0.06)] border border-[rgba(0,149,204,0.20)] flex items-center justify-center flex-shrink-0 text-[#006085]">
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>
      <div>
        <div className="font-mono text-[10px] font-semibold uppercase tracking-[1.5px] text-[rgba(15,19,34,0.55)] mb-1.5">
          {label}
        </div>
        <a
          href={href}
          className="text-base font-semibold text-[#0a1322] hover:text-[#0095cc] transition-colors"
        >
          {children}
        </a>
        {subtitle && <div className="text-xs text-[rgba(15,19,34,0.5)] mt-1 font-medium">{subtitle}</div>}
      </div>
    </div>
  );
}
