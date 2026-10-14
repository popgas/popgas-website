// src/app/privacidade/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  alternates: { canonical: '/privacidade' },
  title: 'Política de privacidade',
  description: 'Política de privacidade e LGPD do PopGás Sistema.',
};

export default function PrivacidadePage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f172a] dark:text-[#E8EEE6] mb-6">
          Política de Privacidade — PopGás Sistema
        </h1>
        <p className="text-sm text-[#5B6472] dark:text-[#8F9A92] mb-8">Última atualização: 9 de maio de 2026</p>
        <div className="space-y-6 text-[#475569] dark:text-[#C3CCC5] leading-relaxed text-[15px]">
          <p>
            Versão resumida da política. Dúvidas sobre seus dados: dpo@popgas.com.br.
          </p>
          <h2 className="text-xl font-bold text-[#0f172a] dark:text-[#E8EEE6]">1. Controlador</h2>
          <p>POPGAS COMERCIO E TECNOLOGIA LTDA · CNPJ 10.262.307/0001-14 · Uberlândia/MG.</p>
          <h2 className="text-xl font-bold text-[#0f172a] dark:text-[#E8EEE6]">2. Dados que coletamos</h2>
          <p>Coletamos dados cadastrais (nome, e-mail, telefone, CNPJ), dados de uso do sistema, e dados de pagamento via gateways autorizados.</p>
          <h2 className="text-xl font-bold text-[#0f172a] dark:text-[#E8EEE6]" id="lgpd">3. LGPD</h2>
          <p>Atuamos em conformidade com a Lei 13.709/2018. Você tem direito a acessar, corrigir, exportar ou eliminar seus dados a qualquer momento.</p>
          <h2 className="text-xl font-bold text-[#0f172a] dark:text-[#E8EEE6]">4. Encarregado (DPO)</h2>
          <p>E-mail: <a href="mailto:dpo@popgas.com.br" className="underline underline-offset-2 text-[#0E7490] dark:text-[#9CCB6B]">dpo@popgas.com.br</a></p>
        </div>
      </Container>
    </section>
  );
}
