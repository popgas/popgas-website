// src/app/sobre-nos/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { FinalCta } from '@/components/home/FinalCta';

export const metadata: Metadata = {
  title: 'Sobre nós — PopGás Tecnologia',
  description: 'Conheça a história, missão e o time da PopGás Comércio e Tecnologia.',
};

export default function SobreNosPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#0f172a] mb-6">
            Tecnologia feita por quem entende de revenda.
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed mb-8">
            A PopGás Comércio e Tecnologia nasceu da operação real de uma distribuidora de gás. Cada funcionalidade do nosso ERP foi pensada para resolver um problema vivido em primeira mão — desde o caixa do entregador até a emissão fiscal.
          </p>
          <p className="text-base text-[#475569] leading-relaxed mb-8">
            Hoje, mais de 200 distribuidoras em todo o Brasil rodam suas operações no PopGás Sistema, processando dezenas de milhares de pedidos por dia, com IA atendendo no WhatsApp e fechamento automático de caixa.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
            {[
              { v: '200+', l: 'Distribuidoras ativas' },
              { v: '87K', l: 'Pedidos processados/dia' },
              { v: '96%', l: 'Atendimento por IA' },
              { v: '99,9%', l: 'SLA de uptime' },
            ].map(s => (
              <div key={s.l} className="p-5 bg-white border border-[#e2e8f0] rounded-xl">
                <div className="text-3xl font-extrabold tracking-tight text-[#0f172a]">{s.v}</div>
                <div className="text-sm text-[#475569] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0f172a] mb-4">Onde estamos</h2>
          <p className="text-base text-[#475569] mb-6">
            <strong>POPGAS COMERCIO E TECNOLOGIA LTDA</strong><br />
            CNPJ 10.262.307/0001-14<br />
            R. João Balbino, 749 — Santa Mônica<br />
            Uberlândia – MG · CEP 38408-262
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d-48!2d-18.91!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMTjCsDU0JzM2LjAiUyA0OMKwMTUnMDAuMCJX"
            width="100%"
            height="320"
            loading="lazy"
            className="rounded-xl border border-[#e2e8f0]"
            title="Localização PopGás"
          />
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
