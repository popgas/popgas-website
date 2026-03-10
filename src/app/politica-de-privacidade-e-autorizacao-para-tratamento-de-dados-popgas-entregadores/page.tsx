import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - Entregadores | PopGas",
  description:
    "Política de privacidade e autorização para tratamento de dados dos entregadores PopGas.",
};

export default function PoliticaPrivacidadeEntregadoresPage() {
  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif]">
      <section className="mx-auto max-w-[800px] px-4 py-[100px]">
        <h1
          className="mb-8 text-[28px] font-semibold"
          style={{ color: "#24355A" }}
        >
          Política de Privacidade e Autorização para Tratamento de Dados –
          Entregadores
        </h1>

        <div
          className="leading-[25px] [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:text-[#24355A] [&_li]:mb-1 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          <p className="text-sm text-gray-500">
            PopGás LTDA — CNPJ: 10.262.307/0001-14 — Uberlândia, MG
          </p>

          <h2>1. Uso do Aplicativo</h2>
          <p>
            Os usuários são considerados &quot;Entregador Parceiro&quot; ao
            baixar o aplicativo, mesmo sem completar transações. O uso do
            aplicativo implica na aceitação desta política de privacidade.
          </p>

          <h2>2. Métodos de Coleta de Dados</h2>
          <p>A PopGás coleta informações através de:</p>
          <ul>
            <li>Envio direto do usuário via formulários e cadastro</li>
            <li>Monitoramento de uso do site e aplicativo</li>
            <li>Fontes públicas</li>
          </ul>

          <h2>3. Informações Coletadas</h2>
          <ul>
            <li>Nome completo, número de telefone celular e e-mail</li>
            <li>Números e imagens de CPF/CNPJ</li>
            <li>Informações de veículo e seguro</li>
            <li>
              Dados de localização precisa ou aproximada dos dispositivos móveis
            </li>
            <li>Detalhes de cartão de pagamento e chaves Pix</li>
            <li>Histórico de condução e verificação de antecedentes</li>
          </ul>

          <h2>4. Finalidades do Tratamento de Dados</h2>
          <p>
            Comunicações de marketing, prestação de serviços, conformidade legal,
            verificação de identidade e otimização da plataforma.
          </p>

          <h2>5. Direitos do Usuário</h2>
          <p>
            Os usuários podem solicitar consulta, modificação ou exclusão de
            dados pessoais por e-mail ao Encarregado de Proteção de Dados (DPO).
          </p>

          <h2>6. Segurança dos Dados</h2>
          <p>
            A PopGás implementa medidas de segurança apropriadas para proteger
            contra acesso não autorizado, alteração, divulgação ou destruição das
            informações coletadas.
          </p>

          <h2>7. Contato</h2>
          <p>
            Localizada em Uberlândia, MG. Horário de funcionamento: Segunda a
            Domingo, das 8h às 21h.
          </p>
          <p>
            Para questões relacionadas à privacidade e tratamento de dados, entre
            em contato pelo e-mail:{" "}
            <a
              href="mailto:contato@popgas.com.br"
              className="underline hover:opacity-70"
            >
              contato@popgas.com.br
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
