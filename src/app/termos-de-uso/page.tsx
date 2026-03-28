import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso e Política de Privacidade | PopGas",
  description:
    "Termos de uso e política de privacidade do aplicativo PopGas.",
};

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif]">
      <section className="mx-auto max-w-[800px] px-4 py-[100px]">
        <h1
          className="mb-8 text-[28px] font-semibold"
          style={{ color: "#24355A" }}
        >
          Termos de Uso e Política de Privacidade
        </h1>

        <div
          className="leading-[25px] [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:text-[#24355A] [&_li]:mb-1 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          <h2>1. TERMOS</h2>
          <p>
            Ao acessar e utilizar o aplicativo PopGas, você concorda em cumprir
            os presentes Termos de Uso, todas as leis e regulamentos aplicáveis,
            e concorda que é responsável pelo cumprimento de todas as leis locais
            aplicáveis. Para os fins destes Termos, ficam definidos:
          </p>
          <ul>
            <li>
              <strong>Usuários:</strong> todas as pessoas que utilizam o
              aplicativo PopGas para realizar pedidos de gás de cozinha e
              produtos relacionados.
            </li>
            <li>
              <strong>Serviços:</strong> os serviços de intermediação de compra e
              entrega de gás liquefeito de petróleo (GLP) e produtos correlatos,
              disponibilizados por meio do aplicativo PopGas.
            </li>
            <li>
              <strong>Revenda PopGas:</strong> a empresa responsável pela
              comercialização e distribuição dos produtos, devidamente autorizada
              e registrada junto aos órgãos competentes.
            </li>
            <li>
              <strong>Entregadores:</strong> profissionais vinculados à Revenda
              PopGas, responsáveis pela entrega dos produtos nos endereços
              indicados pelos Usuários.
            </li>
          </ul>

          <h2>2. O APLICATIVO</h2>
          <p>
            O aplicativo PopGas é uma plataforma tecnológica destinada a
            facilitar a compra de gás liquefeito de petróleo (GLP), também
            conhecido como gás de cozinha, e produtos relacionados. Por meio do
            aplicativo, o Usuário pode realizar pedidos, acompanhar o status da
            entrega em tempo real e efetuar o pagamento de forma prática e
            segura.
          </p>
          <p>
            O aplicativo atua como intermediador entre o Usuário e a Revenda
            PopGas, não sendo responsável pela fabricação ou envase dos produtos
            comercializados.
          </p>

          <h2>3. CADASTRO</h2>
          <p>
            Para utilizar o aplicativo PopGas, o Usuário deverá realizar um
            cadastro fornecendo informações pessoais verdadeiras, completas e
            atualizadas. O Usuário se compromete a manter seus dados cadastrais
            sempre atualizados.
          </p>
          <p>
            O Usuário é inteiramente responsável pela veracidade das informações
            fornecidas, bem como pela guarda e sigilo de sua senha de acesso. A
            PopGas não se responsabiliza por acessos indevidos decorrentes da
            negligência do Usuário na proteção de suas credenciais.
          </p>
          <p>
            A PopGas se reserva o direito de recusar ou cancelar cadastros que
            apresentem informações falsas, incompletas ou que violem estes Termos
            de Uso.
          </p>

          <h2>4. OBRIGAÇÕES DO USUÁRIO</h2>
          <p>O Usuário se compromete a:</p>
          <ul>
            <li>
              Utilizar o aplicativo de forma voluntária e de boa-fé, respeitando
              os presentes Termos de Uso e a legislação vigente.
            </li>
            <li>
              Aceitar a área de atendimento definida pela PopGas, reconhecendo
              que a disponibilidade do serviço está sujeita à cobertura
              geográfica da empresa.
            </li>
            <li>
              Fornecer informações verdadeiras e precisas no momento do cadastro
              e durante a realização dos pedidos.
            </li>
            <li>
              Não utilizar o aplicativo para fins ilícitos, fraudulentos ou que
              possam causar danos à PopGas, a outros usuários ou a terceiros.
            </li>
            <li>
              Manter o endereço de entrega acessível e garantir que haja uma
              pessoa apta a receber o produto no local indicado.
            </li>
          </ul>

          <h2>5. OBRIGAÇÕES DA POPGAS</h2>
          <p>A PopGas se compromete a:</p>
          <ul>
            <li>
              Disponibilizar as funcionalidades do aplicativo de forma contínua,
              ressalvadas as interrupções necessárias para manutenção,
              atualização ou correção de eventuais falhas.
            </li>
            <li>
              Proteger os dados pessoais dos Usuários, adotando medidas de
              segurança adequadas e em conformidade com a legislação de proteção
              de dados aplicável.
            </li>
            <li>
              Garantir a qualidade dos produtos comercializados e a regularidade
              das entregas dentro da área de atendimento.
            </li>
            <li>
              Prestar suporte ao Usuário por meio dos canais de atendimento
              disponibilizados.
            </li>
          </ul>

          <h2>6. AVALIAÇÕES DOS USUÁRIOS</h2>
          <p>
            O aplicativo PopGas disponibiliza um sistema de avaliação que permite
            ao Usuário classificar o serviço de entrega recebido. As avaliações
            são utilizadas exclusivamente para fins de melhoria contínua do
            serviço e controle de qualidade.
          </p>
          <p>
            A PopGas se reserva o direito de remover avaliações que contenham
            conteúdo ofensivo, difamatório, ilegal ou que não reflitam uma
            experiência real de uso do serviço.
          </p>

          <h2>7. POLÍTICA DE PRIVACIDADE</h2>
          <p>
            A PopGas está comprometida com a proteção da privacidade dos seus
            Usuários, em conformidade com a Lei Geral de Proteção de Dados
            (LGPD — Lei nº 13.709/2018). Durante o uso do aplicativo, poderão
            ser coletados os seguintes dados pessoais:
          </p>
          <ul>
            <li>
              <strong>Localização:</strong> para determinar a área de atendimento
              e calcular o trajeto de entrega. A localização é coletada durante
              o uso do aplicativo e enviada aos nossos servidores para
              processamento do pedido.
            </li>
            <li>
              <strong>Nome e CPF:</strong> para identificação do Usuário,
              personalização do atendimento e emissão de documentos fiscais.
            </li>
            <li>
              <strong>Telefone:</strong> para autenticação da conta,
              comunicação relacionada aos pedidos e suporte ao cliente.
            </li>
            <li>
              <strong>Data de nascimento:</strong> para verificação de
              identidade durante o processo de cadastro.
            </li>
            <li>
              <strong>Endereço de entrega:</strong> para realização e
              acompanhamento das entregas dos pedidos.
            </li>
            <li>
              <strong>Foto:</strong> quando fornecida voluntariamente pelo
              Usuário para personalização do perfil.
            </li>
            <li>
              <strong>Dados do dispositivo:</strong> identificador do
              dispositivo, modelo, versão do sistema operacional e versão do
              aplicativo, para fins de suporte técnico e segurança.
            </li>
            <li>
              <strong>Dados de uso:</strong> histórico de pedidos, avaliações,
              interações com promoções e navegação no aplicativo, para melhoria
              contínua dos serviços.
            </li>
          </ul>

          <h2>7.1. RETENÇÃO DE DADOS</h2>
          <p>
            Os dados pessoais dos Usuários são retidos pelos seguintes períodos:
          </p>
          <ul>
            <li>
              <strong>Dados cadastrais (nome, telefone, CPF, data de
              nascimento):</strong> mantidos enquanto a conta do Usuário
              estiver ativa. Após a exclusão da conta, os dados são removidos
              em até 30 (trinta) dias, exceto quando houver obrigação legal de
              retenção.
            </li>
            <li>
              <strong>Dados de localização:</strong> utilizados em tempo real
              para processamento dos pedidos e não são armazenados de forma
              permanente após a conclusão da entrega.
            </li>
            <li>
              <strong>Histórico de pedidos e transações:</strong> mantido por
              até 5 (cinco) anos após a realização do pedido, para fins de
              cumprimento de obrigações fiscais e legais, conforme exigido pela
              legislação brasileira.
            </li>
            <li>
              <strong>Dados de pagamento:</strong> os dados de cartão de
              crédito e débito são processados pela plataforma{" "}
              <strong>e-Sitef</strong> e não são armazenados nos servidores da
              PopGas. Chaves Pix são mantidas enquanto a conta estiver ativa e
              removidas com a exclusão da conta.
            </li>
            <li>
              <strong>Dados do dispositivo e tokens de autenticação:</strong>{" "}
              mantidos enquanto a sessão estiver ativa. Os tokens são
              invalidados no momento do logout.
            </li>
            <li>
              <strong>Dados de uso e analytics:</strong> dados de navegação e
              interação são coletados de forma agregada e anonimizada por
              serviços de terceiros (Firebase Analytics) e retidos conforme as
              políticas de retenção desses serviços.
            </li>
          </ul>

          <h2>7.2. EXCLUSÃO DE DADOS E CONTA</h2>
          <p>
            O Usuário pode solicitar a exclusão de sua conta e de seus dados
            pessoais a qualquer momento diretamente pelo aplicativo, na seção
            de configurações da conta, ou entrando em contato pelo e-mail{" "}
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

          <h2>7.3. SEGURANÇA DOS DADOS</h2>
          <p>
            A PopGas adota medidas de segurança técnicas e organizacionais
            adequadas para proteger os dados pessoais contra acesso não
            autorizado, perda, alteração ou divulgação indevida, incluindo
            criptografia de dados em trânsito e controles de acesso aos
            servidores.
          </p>
          <p>
            Os pagamentos realizados por cartão de crédito ou débito são
            processados através da plataforma <strong>e-Sitef</strong>, que opera
            em conformidade com os padrões de segurança PCI-DSS. A PopGas não
            armazena dados de cartão de pagamento em seus servidores.
          </p>

          <h2>7.4. COMPARTILHAMENTO DE DADOS</h2>
          <p>
            Os dados dos Usuários poderão ser compartilhados com terceiros nas
            seguintes hipóteses:
          </p>
          <ul>
            <li>
              Com a Revenda PopGas e seus entregadores, para viabilizar a
              entrega dos pedidos.
            </li>
            <li>
              No âmbito do programa de indicação (referral), para fins de
              apuração e creditamento de bonificações.
            </li>
            <li>
              Com prestadores de serviços de analytics (Firebase Analytics) e
              notificações push (OneSignal), de forma anonimizada ou
              pseudonimizada, para melhoria dos serviços.
            </li>
            <li>
              Quando exigido por lei, ordem judicial ou determinação de
              autoridade competente.
            </li>
          </ul>
          <p>
            Todo compartilhamento é realizado em conformidade com a legislação
            de proteção de dados aplicável.
          </p>

          <h2>7.5. DIREITOS DO TITULAR DOS DADOS</h2>
          <p>
            Em conformidade com a LGPD, o Usuário tem direito a:
          </p>
          <ul>
            <li>
              Confirmar a existência de tratamento de seus dados pessoais.
            </li>
            <li>Acessar seus dados pessoais.</li>
            <li>
              Solicitar a correção de dados incompletos, inexatos ou
              desatualizados.
            </li>
            <li>
              Solicitar a anonimização, bloqueio ou eliminação de dados
              desnecessários ou tratados em desconformidade com a LGPD.
            </li>
            <li>
              Solicitar a portabilidade dos dados a outro fornecedor de
              serviço.
            </li>
            <li>Revogar o consentimento a qualquer momento.</li>
          </ul>
          <p>
            Para exercer qualquer desses direitos, entre em contato pelo
            e-mail:{" "}
            <a
              href="mailto:contato@popgas.com.br"
              className="underline hover:opacity-70"
            >
              contato@popgas.com.br
            </a>
          </p>

          <h2>7.6. NOTIFICAÇÕES PUSH</h2>
          <p>
            O aplicativo utiliza o serviço OneSignal para envio de notificações
            push relacionadas ao status dos pedidos, promoções e comunicações
            relevantes. O token de notificação é associado à conta do Usuário
            e desvinculado no momento do logout ou exclusão da conta.
          </p>

          <h2>8. SANÇÕES</h2>
          <p>
            A PopGas se reserva o direito de suspender ou cancelar a conta do
            Usuário, a qualquer momento e sem aviso prévio, nas seguintes
            hipóteses:
          </p>
          <ul>
            <li>
              Violação de quaisquer disposições dos presentes Termos de Uso.
            </li>
            <li>
              Prática de fraude, tentativa de fraude ou qualquer conduta
              desonesta relacionada ao uso do aplicativo.
            </li>
            <li>
              Realização de atos que causem danos à PopGas, a outros usuários, a
              entregadores ou a terceiros.
            </li>
            <li>
              Uso indevido do sistema de avaliações ou do programa de indicação.
            </li>
          </ul>

          <h2>9. LICENÇA</h2>
          <p>
            A PopGas concede ao Usuário uma licença limitada, pessoal, não
            exclusiva, não transferível e revogável para uso do aplicativo em
            dispositivos móveis compatíveis, exclusivamente para fins de
            aquisição de gás de cozinha e produtos relacionados.
          </p>
          <p>
            Esta licença não confere ao Usuário qualquer direito de propriedade
            intelectual sobre o aplicativo, sua marca, logotipo, código-fonte ou
            qualquer outro elemento protegido por direitos autorais ou
            propriedade industrial.
          </p>

          <h2>10. CONDIÇÕES GERAIS</h2>
          <p>
            Os presentes Termos de Uso são regidos pelas leis da República
            Federativa do Brasil. Para dirimir quaisquer controvérsias oriundas
            destes Termos, fica eleito o foro da Comarca de Uberlândia, Estado de
            Minas Gerais, com renúncia expressa a qualquer outro, por mais
            privilegiado que seja.
          </p>
          <p>
            A eventual tolerância da PopGas em relação ao descumprimento de
            qualquer disposição destes Termos não constituirá renúncia ao direito
            de exigir o cumprimento da obrigação.
          </p>

          <h2>11. ACEITE DOS TERMOS</h2>
          <p>
            O aceite eletrônico dos presentes Termos de Uso é realizado pelo
            Usuário no momento do cadastro no aplicativo PopGas. Ao clicar em
            &quot;Aceitar&quot; ou ao utilizar o aplicativo, o Usuário declara
            ter lido, compreendido e concordado integralmente com todas as
            disposições aqui estabelecidas.
          </p>
          <p>
            A PopGas se reserva o direito de alterar estes Termos de Uso a
            qualquer momento, notificando os Usuários por meio do aplicativo. O
            uso continuado do aplicativo após a notificação de alterações
            constitui aceitação das novas condições.
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
