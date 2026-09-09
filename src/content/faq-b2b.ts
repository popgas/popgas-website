// src/content/faq-b2b.ts
import type { FaqEntry } from './home-faq';

export interface FaqCategory {
  id: string;
  name: string;
  items: FaqEntry[];
}

export const FAQ_B2B: FaqCategory[] = [
  {
    id: 'planos',
    name: 'Planos & Cobrança',
    items: [
      { question: 'Quanto custa o plano mais barato?', answer: 'O plano Essencial custa R$ 99,90/mês, com 14 dias grátis para experimentar.' },
      { question: 'Como é a cobrança?', answer: 'Mensal, sem fidelidade, no cartão, PIX ou boleto. O primeiro mês é proporcional aos dias usados.' },
      { question: 'Como adiciono um módulo depois?', answer: 'Direto no painel do ERP. Cobrança proporcional aos dias restantes do ciclo e acesso imediato.' },
      { question: 'O que acontece se não pagar?', answer: 'O sistema avisa sobre a pendência e, passado o prazo de carência do plano, entra em modo bloqueio até a regularização. Seus dados ficam preservados.' },
    ],
  },
  {
    id: 'migracao',
    name: 'Migração & Setup',
    items: [
      { question: 'Vocês importam meus dados?', answer: 'A importação de clientes por planilha é feita por você direto no sistema. Nosso time ajuda com produtos, preços e configurações iniciais durante o teste, sem custo.' },
      { question: 'Tenho que comprar algum equipamento?', answer: 'Não. O painel roda no navegador. Para entregadores, basta um celular Android ou iPhone.' },
      { question: 'Quanto tempo até estar operando?', answer: 'O cadastro leva 5 minutos e o assistente de configuração guia os primeiros passos. A maioria das revendas está lançando pedidos no mesmo dia e com a operação completa dentro do período de teste.' },
    ],
  },
  {
    id: 'tech-ia',
    name: 'Tech & IA',
    items: [
      { question: 'A IA atende sozinha 100% do tempo?', answer: 'Ela resolve a maior parte dos atendimentos sozinha, inclusive criando o pedido. Quando o cliente pede ou o assunto foge do escopo, a conversa é transferida para um atendente da sua equipe.' },
      { question: 'Funciona com um número comum de WhatsApp?', answer: 'Sim. Você pode usar a API oficial do WhatsApp Business (Meta) ou conectar um número comum lendo um QR code.' },
      { question: 'Posso treinar a IA com minhas regras?', answer: 'Sim. Você cadastra a base de conhecimento da revenda (políticas, dúvidas frequentes, horários) e a IA responde com base nela.' },
    ],
  },
  {
    id: 'seguranca',
    name: 'Segurança & LGPD',
    items: [
      { question: 'Os dados estão seguros?', answer: 'Sim. Infraestrutura na AWS com banco de dados gerenciado e replicado, backups automáticos, criptografia em trânsito e em repouso e controle de acesso por perfil com trilha de auditoria.' },
      { question: 'Onde os dados ficam armazenados?', answer: 'Em nuvem, na AWS, com processamento na região de São Paulo.' },
      { question: 'Posso exportar meus dados?', answer: 'Sim. As principais telas e relatórios exportam para Excel a qualquer momento, e os XMLs fiscais podem ser baixados em lote.' },
      { question: 'Vocês seguem a LGPD?', answer: 'Sim. Atuamos em conformidade com a Lei 13.709/2018 e você pode falar com nosso encarregado pelo e-mail dpo@popgas.com.br.' },
    ],
  },
  {
    id: 'suporte',
    name: 'Suporte',
    items: [
      { question: 'Como funciona o suporte?', answer: 'WhatsApp e e-mail com atendimento humano em horário comercial, além da central de ajuda dentro do sistema com busca por IA.' },
      { question: 'Tem treinamento para meu time?', answer: 'Sim. O assistente de configuração e a documentação dentro do sistema cobrem cada tela, e o onboarding inclui uma sessão online com gestores e operadores.' },
    ],
  },
];
