// src/app/sobre-nos/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { FinalCta } from '@/components/home/FinalCta';

export const metadata: Metadata = {
  title: 'Sobre nós — PopGás Tecnologia',
  description: 'Conheça a história da PopGás: uma revenda de gás de Uberlândia que criou o próprio sistema e agora o oferece a outras revendas.',
};

const MILESTONES = [
  { v: '2015', l: 'Início da nossa revenda de gás em Uberlândia, MG' },
  { v: 'Hoje', l: 'Lojas, frota, app do cliente, app do entregador e IA no WhatsApp rodando no sistema' },
  { v: '2026', l: 'PopGás Sistema aberto para outras revendas, por módulos e sem fidelidade' },
];

export default function SobreNosPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#0f172a] mb-6">
            Tecnologia feita por quem entende de revenda.
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed mb-6">
            A PopGás Comércio e Tecnologia nasceu de uma revenda de gás de verdade, em Uberlândia. Desde 2015 operamos lojas, frota e atendimento por telefone, app e WhatsApp, e cada funcionalidade do sistema foi criada para resolver um problema que vivemos no dia a dia: o acerto do entregador que não fecha, o vasilhame que some, a nota fiscal que atrasa, o cliente que liga e ninguém sabe quem é.
          </p>
          <p className="text-base text-[#475569] leading-relaxed mb-6">
            O PopGás Sistema roda a nossa operação todos os dias, do pedido no WhatsApp ao SPED no fim do mês. Em 2026 decidimos abrir o sistema para outras revendas, com módulos contratáveis e sem fidelidade, para que qualquer distribuidora tenha a mesma tecnologia sem precisar montar um time de desenvolvimento.
          </p>
          <p className="text-base text-[#475569] leading-relaxed mb-8">
            O time que desenvolve o sistema é o mesmo que atende a revenda. Quando você fala com o suporte, fala com quem conhece a rotina de uma distribuidora de gás por dentro.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
            {MILESTONES.map(s => (
              <div key={s.v} className="p-5 bg-white border border-[#e2e8f0] rounded-xl">
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
            src="https://www.google.com/maps?q=R.+Jo%C3%A3o+Balbino,+749,+Santa+M%C3%B4nica,+Uberl%C3%A2ndia+-+MG&output=embed"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: 16 }}
            loading="lazy"
            title="Localização PopGás"
          />
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
