import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regras do Programa Renda PopGás | PopGas",
  description:
    "Regulamento completo do Programa Renda PopGás — indicações e bonificações.",
};

export default function RegrasProgramaRendaPopgasPage() {
  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif]">
      <section className="mx-auto max-w-[800px] px-4 py-[100px]">
        <h1
          className="mb-8 text-[28px] font-semibold"
          style={{ color: "#24355A" }}
        >
          Regras do Programa Renda PopGás
        </h1>

        <div
          className="leading-[25px] [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:text-[#24355A] [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-[17px] [&_h3]:font-semibold [&_h3]:text-[#24355A] [&_li]:mb-1 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          <p>
            O presente regulamento estabelece as regras e condições de
            participação no Programa Renda PopGás, um programa de indicação e
            bonificação oferecido pela PopGas aos seus usuários.
          </p>

          <h2>1. Elegibilidade</h2>
          <p>
            Para participar do Programa Renda PopGás, o participante deverá
            atender aos seguintes requisitos:
          </p>
          <ul>
            <li>Ter idade mínima de 18 (dezoito) anos completos.</li>
            <li>
              Possuir plena capacidade civil, nos termos da legislação brasileira
              vigente.
            </li>
            <li>
              Realizar o cadastro no programa exclusivamente por meio do
              aplicativo PopGas, preenchendo todos os dados solicitados de forma
              verdadeira e completa.
            </li>
          </ul>

          <h2>2. Regras de Participação</h2>
          <p>
            O Programa Renda PopGás funciona por meio de um sistema de
            bonificação em três níveis, baseado na indicação de novos usuários e
            nas compras realizadas por estes:
          </p>

          <h3>Nível 1 (Direto)</h3>
          <p>
            Refere-se às indicações diretas feitas pelo participante. O
            participante recebe:
          </p>
          <ul>
            <li>
              <strong>R$5,00</strong> (cinco reais) quando o indicado direto
              realizar sua primeira compra pelo aplicativo PopGas.
            </li>
            <li>
              <strong>R$1,00</strong> (um real) por cada compra subsequente
              realizada pelo indicado direto.
            </li>
          </ul>

          <h3>Nível 2</h3>
          <p>
            Refere-se aos usuários indicados pelos indicados diretos do
            participante (indicação indireta de segundo grau). O participante
            recebe:
          </p>
          <ul>
            <li>
              <strong>R$1,00</strong> (um real) por cada unidade de gás adquirida
              pelos usuários do Nível 2.
            </li>
          </ul>

          <h3>Nível 3</h3>
          <p>
            Refere-se aos usuários indicados pelos indicados de Nível 2
            (indicação indireta de terceiro grau). O participante recebe:
          </p>
          <ul>
            <li>
              <strong>R$1,00</strong> (um real) por cada unidade de gás adquirida
              pelos usuários do Nível 3.
            </li>
          </ul>

          <h2>3. Cálculo e Pagamento de Bônus</h2>
          <p>
            Os bônus acumulados pelo participante estarão disponíveis para saque
            conforme as seguintes condições:
          </p>
          <ul>
            <li>
              <strong>Valor mínimo para saque:</strong> R$50,00 (cinquenta
              reais). O participante somente poderá solicitar o resgate de seus
              bônus quando o saldo acumulado atingir este valor mínimo.
            </li>
            <li>
              <strong>Valor máximo diário:</strong> R$1.000,00 (mil reais). O
              limite máximo de saque por dia é de R$1.000,00, independentemente
              do saldo acumulado.
            </li>
            <li>
              <strong>Prazo de processamento:</strong> as solicitações de saque
              serão processadas em até 48 (quarenta e oito) horas úteis após a
              confirmação do pedido de resgate.
            </li>
          </ul>
          <p>
            Os bônus não possuem valor monetário até o momento do efetivo resgate
            e não podem ser transferidos para outros participantes.
          </p>

          <h2>4. Propriedade Intelectual</h2>
          <p>
            Todos os direitos de propriedade intelectual relacionados ao Programa
            Renda PopGás, incluindo, mas não se limitando a, marca, logotipo,
            design, textos, imagens e software, são de propriedade exclusiva da
            PopGas.
          </p>
          <p>
            O participante não adquire qualquer direito de propriedade
            intelectual em razão de sua participação no programa, sendo vedada a
            reprodução, distribuição ou uso não autorizado de qualquer material
            relacionado ao programa.
          </p>

          <h2>5. Prevenção de Fraudes</h2>
          <p>
            A PopGas emprega mecanismos de monitoramento e auditoria para
            identificar e prevenir práticas fraudulentas no âmbito do Programa
            Renda PopGás. Consideram-se práticas fraudulentas, entre outras:
          </p>
          <ul>
            <li>
              A criação de contas falsas ou múltiplas para simular indicações.
            </li>
            <li>
              A manipulação do sistema de bonificação por qualquer meio
              artificial.
            </li>
            <li>
              O uso de informações falsas ou de terceiros sem autorização.
            </li>
            <li>
              Qualquer outra conduta que vise obter vantagem indevida do
              programa.
            </li>
          </ul>
          <p>
            A constatação de fraude resultará na exclusão imediata do
            participante do programa, no cancelamento de todos os bônus
            acumulados e na possibilidade de adoção das medidas legais cabíveis.
          </p>

          <h2>6. Confidencialidade e Proteção de Dados</h2>
          <p>
            A PopGas está comprometida com a proteção dos dados pessoais dos
            participantes do Programa Renda PopGás, em conformidade com a Lei
            Geral de Proteção de Dados (LGPD — Lei n. 13.709/2018).
          </p>
          <p>
            Os dados pessoais coletados no âmbito do programa serão utilizados
            exclusivamente para as finalidades de gestão do programa, apuração de
            bonificações e comunicação com os participantes.
          </p>
          <p>
            O participante tem o direito de solicitar acesso, correção,
            anonimização, bloqueio ou eliminação de seus dados pessoais, nos
            termos da LGPD, por meio dos canais de atendimento da PopGas.
          </p>

          <h2>7. Disposições Finais</h2>
          <p>
            A PopGas se reserva o direito de alterar, suspender ou encerrar o
            Programa Renda PopGás a qualquer momento, mediante comunicação prévia
            aos participantes por meio do aplicativo.
          </p>
          <p>
            Os casos omissos neste regulamento serão resolvidos exclusivamente
            pela PopGas, a seu critério.
          </p>
          <p>
            Para dirimir quaisquer controvérsias oriundas deste regulamento, fica
            eleito o foro da Comarca de Uberlândia, Estado de Minas Gerais, com
            renúncia expressa a qualquer outro, por mais privilegiado que seja.
          </p>

          <hr className="my-8 border-gray-200" />
          <p className="text-sm italic">
            Última atualização: 15 de Outubro de 2022
          </p>
        </div>
      </section>
    </div>
  );
}
