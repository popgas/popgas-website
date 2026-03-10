import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso - Entregadores | PopGas",
  description:
    "Termos de uso e política de privacidade para entregadores parceiros PopGas.",
};

export default function TermosEntregadoresPage() {
  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif]">
      <section className="mx-auto max-w-[800px] px-4 py-[100px]">
        <h1
          className="mb-8 text-[28px] font-semibold"
          style={{ color: "#24355A" }}
        >
          Termos de Uso e Política de Privacidade – Entregadores
        </h1>

        <div
          className="leading-[25px] [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:text-[#24355A] [&_li]:mb-1 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          <p className="text-sm text-gray-500">
            PopGás LTDA — CNPJ: 10.262.307/0001-14 — Uberlândia, MG
          </p>

          <h2>1. Descrição do Serviço</h2>
          <p>
            A plataforma PopGás funciona como intermediária para a compra de
            botijões de gás de cozinha e produtos relacionados. Todos os produtos
            e serviços são vendidos, transportados e entregues por fornecedores
            terceiros independentes, sem vínculo empregatício direto com a
            PopGás.
          </p>

          <h2>2. Requisitos do Usuário</h2>
          <ul>
            <li>Ter 18 anos ou mais de idade</li>
            <li>
              O cadastro requer nome, endereço, número de telefone e método de
              pagamento válido
            </li>
            <li>
              O usuário é responsável pela segurança da conta e
              confidencialidade das credenciais
            </li>
          </ul>

          <h2>3. Obrigações do Usuário</h2>
          <p>
            Os usuários devem fornecer informações precisas, manter a segurança
            da conta, utilizar os serviços de forma legal e não se envolver em
            atividades que comprometam a integridade da plataforma ou o acesso de
            outros usuários.
          </p>

          <h2>4. Obrigações da PopGás</h2>
          <p>
            A empresa se compromete a manter a acessibilidade do serviço,
            implementar medidas de segurança, fornecer informações claras sobre
            transações, oferecer suporte ao cliente, manter os aplicativos
            atualizados e operar dentro das leis aplicáveis.
          </p>

          <h2>5. Pagamento e Cancelamento</h2>
          <ul>
            <li>
              Múltiplas opções de pagamento disponíveis (Pix, cartões de
              crédito/débito)
            </li>
            <li>Cancelamentos permitidos antes do despacho da entrega</li>
            <li>Taxa mínima de cancelamento de R$10,00</li>
            <li>Prazos de reembolso variam conforme o método de pagamento</li>
          </ul>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>
            Os serviços são fornecidos &quot;como estão&quot;, sem garantias
            quanto à confiabilidade ou qualidade. A PopGás se isenta
            expressamente de responsabilidade por defeitos de produtos, problemas
            de transporte ou desempenho de parceiros independentes.
          </p>

          <h2>7. Resolução de Disputas</h2>
          <p>
            Regido pelas leis brasileiras; disputas sujeitas à jurisdição de
            Uberlândia, Minas Gerais.
          </p>
        </div>
      </section>
    </div>
  );
}
