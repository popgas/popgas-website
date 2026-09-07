import type { ModuleContent } from './types';

export const fiscalContent: ModuleContent = {
  slug: 'fiscal',
  moduleKey: 'fiscal',
  hero: {
    eyebrow: 'MÓDULO ADICIONAL · + R$ 49,90/mês',
    title: 'Nota fiscal sem dor de cabeça.',
    subtitle:
      'NF-e, NFC-e, NFS-e, CT-e e MDF-e emitidos de dentro do sistema, homologados junto à SEFAZ, com impostos calculados automaticamente e o SPED pronto para o contador.',
  },
  screenshotPath: '/screenshots/05-nfe-emissao-modal.png',
  screenshotAlt: 'Tela de emissão de nota fiscal do PopGás Sistema',
  sections: [
    {
      id: 'emissao',
      title: 'Emissão de documentos',
      intro:
        'Todos os documentos fiscais que uma revenda de gás precisa, emitidos a partir do pedido, da compra ou do zero.',
      screenshotPath: '/screenshots/05-nfe-emissao-modal.png',
      screenshotAlt: 'Assistente de emissão de nota fiscal com escolha entre NFC-e e NF-e',
      features: [
        {
          id: 'nfe-e-nfce',
          title: 'Emissão de NF-e e NFC-e',
          description:
            'Emita a nota a partir do pedido, da compra ou do zero, com retorno da autorização em segundos. A NFC-e pode sair automaticamente na entrega para as formas de pagamento e produtos que você escolher.',
          icon: 'file-text',
        },
        {
          id: 'nfse',
          title: 'NFS-e nacional',
          description:
            'Nota fiscal de serviço no padrão nacional para instalações, manutenções e outros serviços que a revenda presta, com sugestão do código de tributação por IA.',
          icon: 'file-text',
        },
        {
          id: 'carta-de-correcao',
          title: 'Carta de correção',
          description:
            'Corrija dados de uma nota já autorizada sem cancelar: a CC-e é enviada e validada junto à SEFAZ direto pela tela da nota.',
          icon: 'edit',
        },
        {
          id: 'manifestacao',
          title: 'Manifestação de notas recebidas',
          description:
            'Notas emitidas contra o seu CNPJ aparecem no sistema para ciência, confirmação, desconhecimento ou operação não realizada, e podem virar recebimento de mercadoria com um clique.',
          icon: 'check-square',
        },
        {
          id: 'cte-e-mdfe',
          title: 'CT-e e MDF-e',
          description:
            'Conhecimento de transporte para fretes e manifesto eletrônico para os caminhões que saem com carga, com os dados fiscais dos veículos e motoristas já cadastrados na frota.',
          icon: 'truck',
        },
      ],
    },
    {
      id: 'impostos-e-configuracao',
      title: 'Impostos e configuração',
      intro:
        'Configure uma vez, no cadastro do produto e da empresa, e cada nota sai com o imposto certo.',
      screenshotPath: '/screenshots/erp/configuracoes-fiscais.png',
      screenshotAlt: 'Configurações fiscais com abas de NFC-e, NF-e e NFS-e',
      features: [
        {
          id: 'calculo-de-impostos',
          title: 'Cálculo automático de impostos',
          description:
            'ICMS, ICMS monofásico do GLP, PIS/COFINS, IPI, ISS e DIFAL calculados conforme o regime tributário, o CFOP e o NCM de cada produto. A IA sugere natureza de operação e CFOP de devolução.',
          icon: 'percent',
        },
        {
          id: 'configuracoes-por-produto',
          title: 'Configurações fiscais por produto',
          description:
            'NCM, CFOP, CST/CSOSN e alíquotas ficam no cadastro do produto. Regimes tributários, CNAEs, naturezas de operação e a tabela de ICMS interestadual são configurados uma vez e valem para todas as notas.',
          icon: 'tag',
        },
        {
          id: 'numeracao-e-inutilizacao',
          title: 'Numeração e inutilização',
          description:
            'Controle da sequência de numeração de NF-e e NFC-e por unidade e série, com inutilização de faixas junto à SEFAZ quando necessário.',
          icon: 'hash',
        },
      ],
    },
    {
      id: 'obrigacoes',
      title: 'Obrigações e contador',
      intro:
        'O que o contador pede no fim do mês sai pronto do sistema.',
      screenshotPath: '/screenshots/erp/sped-fiscal.png',
      screenshotAlt: 'Arquivos do SPED Fiscal gerados por unidade e mês',
      features: [
        {
          id: 'sped-fiscal',
          title: 'SPED Fiscal',
          description:
            'Geração mensal do arquivo do SPED Fiscal por unidade a partir das notas emitidas e recebidas, com validação antes do download. Alinhe os blocos de apuração com o seu contador.',
          icon: 'database',
        },
        {
          id: 'exportacao-de-xmls',
          title: 'Exportação de XMLs e relatório mensal',
          description:
            'Baixe em lote os XMLs do mês fechado e o relatório mensal para enviar ao contador, sem precisar abrir nota por nota.',
          icon: 'download',
        },
        {
          id: 'monitoramento-de-erros',
          title: 'Monitoramento de erros de emissão',
          description:
            'Notas rejeitadas ou pendentes ficam em uma fila própria com o motivo da rejeição, para corrigir e reenviar sem perder a numeração.',
          icon: 'file-search',
        },
      ],
    },
  ],
  synergies: [
    { moduleKey: 'essencial', reason: 'NFC-e automática quando o pedido é entregue' },
    { moduleKey: 'gestao', reason: 'Compras, remessas e transferências geram os documentos fiscais' },
  ],
  nextModule: { slug: 'tech-ia', name: 'Tech & IA' },
};
