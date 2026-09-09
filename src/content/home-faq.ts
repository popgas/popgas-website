// src/content/home-faq.ts
export interface FaqEntry {
  question: string;
  answer: string;
  /** Substrings of `answer` to render in <strong> for visual emphasis. JSON-LD ignores this. */
  emphasize?: string[];
}

export const HOME_FAQ: FaqEntry[] = [
  {
    question: 'Preciso migrar meus dados?',
    answer:
      'Não precisa começar do zero. Você importa sua base de clientes por planilha direto no sistema e nosso time ajuda com produtos e configurações iniciais durante o período de teste. Sem custo adicional.',
    emphasize: ['Sem custo adicional'],
  },
  {
    question: 'Funciona no celular?',
    answer:
      'O painel do ERP roda no navegador, de qualquer computador ou tablet. O entregador usa o app Android ou iPhone, e seu cliente faz pedidos pelo app ou pelo navegador, sem instalar nada.',
    emphasize: ['app Android ou iPhone'],
  },
  {
    question: 'Tenho NF-e e NFC-e?',
    answer:
      'Sim, com o módulo Fiscal (+R$ 49,90/mês). Emissão homologada junto à SEFAZ, com cálculo automático de impostos, NFS-e, CT-e, MDF-e e geração do SPED Fiscal.',
    emphasize: ['SEFAZ'],
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim. Sem fidelidade, sem multa. Cancele a qualquer momento direto pelo painel — você mantém acesso até o fim do ciclo pago.',
    emphasize: ['Sem fidelidade, sem multa'],
  },
  {
    question: 'A IA atende mesmo no WhatsApp?',
    answer:
      'Sim. Com o módulo Tech & IA, conectamos seu número (oficial Meta ou número comum via QR code), cadastramos as regras da sua revenda e a IA atende 24/7, criando pedidos e transferindo para um atendente quando necessário.',
    emphasize: ['atende 24/7'],
  },
  {
    question: 'Como é o suporte?',
    answer:
      'Suporte humano em português, em horário comercial, via WhatsApp e e-mail, além da central de ajuda dentro do sistema com busca por IA.',
    emphasize: ['Suporte humano em português'],
  },
];
