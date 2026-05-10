// src/app/contato/page.tsx
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { ContactForm } from '@/components/shared/ContactForm';

export const metadata: Metadata = {
  title: 'Contato — Fale com a gente',
  description: 'Tire dúvidas, solicite uma demonstração ou abra um ticket de suporte.',
};

export default function ContatoPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] text-[#0f172a] mb-4">
              Fale com a gente.
            </h1>
            <p className="text-lg text-[#475569]">
              Dúvidas, demonstrações ou suporte — escolha o canal que preferir.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14">
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fafafa] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#0f172a]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-1">
                    WhatsApp
                  </div>
                  <a
                    href="https://wa.me/553432387777"
                    className="text-base font-semibold text-[#0f172a] hover:text-[#06b6d4]"
                  >
                    (34) 3238-7777
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fafafa] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0f172a]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-1">
                    E-mail
                  </div>
                  <a
                    href="mailto:contato@popgas.com.br"
                    className="text-base font-semibold text-[#0f172a] hover:text-[#06b6d4]"
                  >
                    contato@popgas.com.br
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fafafa] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0f172a]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-1">
                    Telefone
                  </div>
                  <a href="tel:+553432387777" className="text-base font-semibold text-[#0f172a]">
                    (34) 3238-7777
                  </a>
                  <div className="text-xs text-[#94a3b8] mt-1">Seg-Sex 8h-18h</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fafafa] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0f172a]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-1">
                    Endereço
                  </div>
                  <div className="text-sm text-[#475569] leading-relaxed">
                    R. João Balbino, 749<br />
                    Santa Mônica, Uberlândia – MG<br />
                    CEP 38408-262
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
