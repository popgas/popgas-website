// src/app/termos/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  alternates: { canonical: '/termos' },
  title: 'Termos de uso',
  description: 'Termos e condições de uso do PopGás Sistema (SaaS).',
};

export default function TermosPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-[#E8EEE6] mb-6">
          Termos de Uso — PopGás Sistema
        </h1>
        <p className="text-sm text-[#5B6472] dark:text-[#8F9A92] mb-8">Última atualização: 9 de maio de 2026</p>
        <div className="space-y-6 text-[#475569] dark:text-[#C3CCC5] leading-relaxed text-[15px]">
          <p>
            Versão resumida dos termos. Em caso de dúvidas, entre em contato pelo e-mail <a href="mailto:juridico@popgas.com.br" className="underline underline-offset-2 text-[#0E7490] dark:text-[#9CCB6B]">juridico@popgas.com.br</a>.
          </p>
          <h2 className="text-xl font-bold text-[#0f172a] dark:text-[#E8EEE6]">1. Aceite dos termos</h2>
          <p>Ao contratar o PopGás Sistema, você (ou a empresa que representa) concorda com estes termos.</p>
          <h2 className="text-xl font-bold text-[#0f172a] dark:text-[#E8EEE6]">2. Serviço prestado</h2>
          <p>A PopGás Comércio e Tecnologia LTDA (CNPJ 10.262.307/0001-14) presta serviço de software como serviço (SaaS) na modalidade assinatura.</p>
          <h2 className="text-xl font-bold text-[#0f172a] dark:text-[#E8EEE6]">3. Cancelamento</h2>
          <p>Sem fidelidade. Cancele a qualquer momento via painel ou suporte; acesso garantido até o fim do ciclo pago.</p>
          <h2 className="text-xl font-bold text-[#0f172a] dark:text-[#E8EEE6]">4. Disponibilidade</h2>
          <p>Trabalhamos para manter o serviço disponível de forma contínua, com infraestrutura em nuvem redundante. Manutenções programadas são comunicadas com antecedência pelo painel.</p>
          <h2 className="text-xl font-bold text-[#0f172a] dark:text-[#E8EEE6]">5. Foro</h2>
          <p>Comarca de Uberlândia/MG, com renúncia a qualquer outro.</p>
        </div>
      </Container>
    </section>
  );
}
