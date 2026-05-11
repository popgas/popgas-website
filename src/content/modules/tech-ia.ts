import type { ModuleContent } from './types';

export const techIaContent: ModuleContent = {
  slug: 'tech-ia',
  moduleKey: 'techia',
  hero: {
    eyebrow: 'MÓDULO PREMIUM · + R$ 199,90/mês',
    title: 'IA, WhatsApp e App Web.',
    subtitle:
      'Automação completa de atendimento. Reduza em até 70% o trabalho manual e atenda 24/7 com inteligência artificial.',
  },
  screenshotPath: '/screenshots/04-conversa-whatsapp.png',
  screenshotAlt: 'Tela de conversa de WhatsApp com chatbot IA do PopGás Sistema',
  features: [
    { title: 'Chatbot com IA (LLM)', description: 'OpenAI e Anthropic integrados, múltiplos modelos suportados.', icon: 'sparkles' },
    { title: 'Construtor visual de fluxos', description: 'Editor drag-and-drop de fluxos conversacionais com triggers e eventos.', icon: 'workflow' },
    { title: 'Base de conhecimento (RAG)', description: 'Knowledge base com chunks para respostas contextualizadas.', icon: 'book-open' },
    { title: 'WhatsApp oficial (Meta)', description: 'Integração com a API oficial do WhatsApp Business.', icon: 'message-circle' },
    { title: 'WhatsApp não-oficial (whapi.cloud)', description: 'Conexão alternativa para números não-oficiais.', icon: 'message-square' },
    { title: 'Templates Meta aprovados', description: 'Criação e gestão de templates de mensagem aprovados.', icon: 'message-square-text' },
    { title: 'Fila de atendimento', description: 'Gestão de filas de conversas com priorização.', icon: 'list-ordered' },
    { title: 'Escalação para atendente humano', description: 'Transferência fluída do bot para humano quando necessário.', icon: 'user-check' },
    { title: 'App Web responsivo', description: 'Acesse de qualquer dispositivo, mobile ou desktop.', icon: 'globe' },
    { title: 'Dashboards em tempo real', description: 'Métricas de conversas, resoluções e custos de IA.', icon: 'activity' },
    { title: 'Logs de chamadas LLM', description: 'Registro detalhado de todas as chamadas à IA para debug e custo.', icon: 'file-search' },
    { title: 'Prompts versionados', description: 'Gestão de prompts com versionamento e rollback.', icon: 'git-branch' },
    { title: 'PABX em Nuvem Integrado', description: 'Bina identifica cliente automaticamente, gravação de chamadas, IA pontua qualidade do atendimento, URA e áudios de espera.', icon: 'phone' },
  ],
  synergies: [
    { moduleKey: 'essencial', reason: 'IA cria pedidos via WhatsApp diretamente' },
    { moduleKey: 'gestao', reason: 'Bot consulta estoque e financeiro em tempo real' },
  ],
  nextModule: { slug: 'revendas-de-gas', name: 'Para revendas de gás' },
};
