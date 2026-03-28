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

          <h2>7. Política de Privacidade</h2>
          <p>
            A PopGás está comprometida com a proteção da privacidade dos
            Entregadores Parceiros, em conformidade com a Lei Geral de Proteção
            de Dados (LGPD — Lei nº 13.709/2018). Durante o uso do aplicativo,
            são coletados os seguintes dados:
          </p>
          <ul>
            <li>Nome completo, e-mail, telefone e CPF/CNPJ</li>
            <li>Informações de veículo e seguro</li>
            <li>
              Dados de localização em tempo real (GPS), coletados
              continuamente durante o período de trabalho para rastreamento de
              entregas e otimização de rotas
            </li>
            <li>Dados do dispositivo (modelo, sistema operacional, versão do app)</li>
            <li>Histórico de entregas e desempenho</li>
            <li>Dados de pagamento (chaves Pix, dados bancários)</li>
          </ul>

          <h2>7.1. Retenção de Dados</h2>
          <p>
            Os dados pessoais dos Entregadores são retidos pelos seguintes
            períodos:
          </p>
          <ul>
            <li>
              <strong>Dados cadastrais (nome, e-mail, telefone, CPF/CNPJ,
              dados de veículo):</strong> mantidos enquanto o vínculo como
              Entregador Parceiro estiver ativo. Após o desligamento, os dados
              são removidos em até 30 (trinta) dias, exceto quando houver
              obrigação legal de retenção.
            </li>
            <li>
              <strong>Dados de localização (GPS):</strong> coletados em tempo
              real durante o período de trabalho e retidos no servidor por até
              90 (noventa) dias para fins de auditoria, resolução de disputas
              e otimização de rotas. Após esse período, os dados são
              anonimizados ou excluídos.
            </li>
            <li>
              <strong>Histórico de entregas e desempenho:</strong> mantido por
              até 5 (cinco) anos para fins de cumprimento de obrigações
              fiscais e trabalhistas.
            </li>
            <li>
              <strong>Dados de pagamento:</strong> mantidos enquanto o vínculo
              estiver ativo e removidos em até 30 (trinta) dias após o
              desligamento, exceto dados necessários para cumprimento de
              obrigações fiscais.
            </li>
            <li>
              <strong>Tokens de autenticação e notificação:</strong> invalidados
              e removidos imediatamente no momento do logout. O token de
              notificação push (FCM) é desvinculado do servidor ao encerrar a
              sessão.
            </li>
          </ul>

          <h2>7.2. Exclusão de Dados</h2>
          <p>
            O Entregador Parceiro pode solicitar a exclusão de seus dados
            pessoais a qualquer momento, entrando em contato pelo e-mail{" "}
            <a
              href="mailto:contato@popgas.com.br"
              className="underline hover:opacity-70"
            >
              contato@popgas.com.br
            </a>
            . Após a solicitação, os dados serão excluídos em até 30 (trinta)
            dias, ressalvados os dados que devam ser mantidos por obrigação
            legal ou regulatória.
          </p>

          <h2>7.3. Direitos do Titular dos Dados</h2>
          <p>
            Em conformidade com a LGPD, o Entregador Parceiro tem direito a
            confirmar a existência de tratamento, acessar seus dados,
            solicitar correção, anonimização, bloqueio ou eliminação de dados,
            solicitar portabilidade e revogar o consentimento a qualquer
            momento, por meio do e-mail{" "}
            <a
              href="mailto:contato@popgas.com.br"
              className="underline hover:opacity-70"
            >
              contato@popgas.com.br
            </a>
            .
          </p>

          <h2>8. Resolução de Disputas</h2>
          <p>
            Regido pelas leis brasileiras; disputas sujeitas à jurisdição de
            Uberlândia, Minas Gerais.
          </p>

          <hr className="my-8 border-gray-200" />
          <p className="text-sm italic">
            Última atualização: 28 de Março de 2026
          </p>
        </div>
      </section>
    </div>
  );
}
