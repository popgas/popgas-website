import type { ModuleContent } from './types';

export const fiscalContent: ModuleContent = {
  slug: 'fiscal',
  moduleKey: 'fiscal',
  hero: {
    eyebrow: 'MÓDULO ADICIONAL · + R$ 49,90/mês',
    title: 'Compliance fiscal sem dor.',
    subtitle:
      'Emissão de NF-e e NFC-e direto na SEFAZ, com cálculo automático de impostos e exportação SPED.',
  },
  screenshotPath: '/screenshots/05-nfe-emissao.png',
  screenshotAlt: 'Tela de emissão de NF-e do PopGás Sistema',
  features: [
    { title: 'Emissão de NF-e e NFC-e', description: 'Integração nativa SEFAZ com retorno em segundos.', icon: 'file-text' },
    { title: 'Carta de correção de NF-e', description: 'CC-e direto pelo sistema com validação SEFAZ.', icon: 'edit' },
    { title: 'Manifestação de NF-e', description: 'Ciência, confirmação, desconhecimento e não-realização.', icon: 'check-square' },
    { title: 'CT-e (Conhecimento de Transporte)', description: 'Documento eletrônico de transporte para frete.', icon: 'truck' },
    { title: 'MDF-e (Manifesto)', description: 'Manifesto eletrônico de documentos fiscais.', icon: 'clipboard-list' },
    { title: 'Cálculo automático de impostos', description: 'ICMS, ICMS monofásico, PIS/COFINS, IPI, ISS/ISSQN, DIFAL.', icon: 'percent' },
    { title: 'CFOP e NCM por produto', description: 'Códigos vinculados ao cadastro do produto.', icon: 'tag' },
    { title: 'Tabela ICMS interestadual (DIFAL)', description: 'Configuração de alíquotas por estado.', icon: 'map' },
    { title: 'Numeração e inutilização', description: 'Gestão de sequência numérica e inutilização junto à SEFAZ.', icon: 'hash' },
    { title: 'SPED Fiscal', description: 'Geração do arquivo para entrega ao fisco.', icon: 'database' },
    { title: 'Exportação de XMLs em lote', description: 'Download de XMLs de documentos fiscais.', icon: 'download' },
  ],
  synergies: [
    { moduleKey: 'essencial', reason: 'NF-e gerada automaticamente do pedido' },
    { moduleKey: 'gestao', reason: 'Estoque atualizado pela emissão fiscal' },
  ],
  nextModule: { slug: 'tech-ia', name: 'Tech & IA' },
};
