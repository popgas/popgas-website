import type { ModuleContent } from './types';

export const revendasDeGasContent: ModuleContent = {
  slug: 'revendas-de-gas',
  moduleKey: 'gas-vertical',
  hero: {
    eyebrow: 'VERTICAL ESPECIALIZADA',
    title: 'Pensado pelo dono de revenda, para o dono de revenda.',
    subtitle:
      'Funcionalidades exclusivas para distribuição de gás GLP. Vasilhames, carregamentos, acerto e máquinas 24h — tudo que sua operação precisa.',
  },
  screenshotPath: '/screenshots/07-acerto-entregador.png',
  screenshotAlt: 'Tela de acerto de contas do entregador no PopGás Sistema',
  features: [
    { title: 'Carregamentos de veículos', description: 'Montagem de carga com seleção de veículo e produtos.', icon: 'truck' },
    { title: 'Gestão de vasilhames', description: 'Controle de reposição de vasilhames/containers.', icon: 'cylinder' },
    { title: 'Acerto do entregador (settlement)', description: 'Cálculo automático do fechamento diário do entregador.', icon: 'calculator' },
    { title: 'App do entregador', description: 'App mobile com pedidos, rotas, acerto e despesas.', icon: 'smartphone' },
    { title: 'Máquinas de autoatendimento 24h', description: 'Vending machines integradas com cancelamento automático e foto de segurança.', icon: 'monitor' },
    { title: 'Rastreamento GPS em tempo real', description: 'Localização do entregador atualizada continuamente.', icon: 'navigation' },
    { title: 'Mapa de distribuição', description: 'Visualização dos pedidos com recomendação de atribuição.', icon: 'map' },
    { title: 'Áreas de atendimento', description: 'Definição geográfica das áreas de cobertura.', icon: 'map-pinned' },
    { title: 'Tipos de entrega configuráveis', description: 'Expressa, agendada, retirada — você escolhe.', icon: 'sliders' },
    { title: 'Manutenção de frota', description: 'Agendamento e registro de manutenções preventivas e corretivas.', icon: 'wrench' },
    { title: 'Controle de combustível', description: 'Registro de abastecimentos e consumo por veículo.', icon: 'fuel' },
    { title: 'Brindes e promoções', description: 'Sistema de brindes baseado na quantidade do produto principal.', icon: 'gift' },
  ],
};
