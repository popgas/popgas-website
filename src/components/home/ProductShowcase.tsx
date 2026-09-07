import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';
import { VideoModal } from '@/components/shared/VideoModal';

interface Feature {
  eyebrow: string;
  title: ReactNode;
  description: string;
  bullets: ReactNode[];
  tag: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imageW: number;
  imageH: number;
  videoId?: string;
  videoOrientation?: 'landscape' | 'portrait';
  /** Foto real com o aparelho na imagem: sem moldura desenhada. */
  imagePhoto?: boolean;
}

const FEATURES: Feature[] = [
  {
    eyebrow: 'Atendimento 24/7',
    title: (
      <>
        IA atende e <em className="italic-accent">fecha pedidos</em> sozinha.
      </>
    ),
    description:
      'A inteligência artificial conversa com cada cliente no WhatsApp como um atendente experiente: responde dúvidas com as regras da sua revenda, monta o carrinho, confirma endereço e pagamento e lança o pedido direto no sistema.',
    bullets: [
      'Atende no tom da sua revenda, com a sua base de conhecimento',
      'Cria o pedido direto, sem precisar transferir pra humano',
      'Transfere pra sua equipe quando o cliente pede ou o assunto foge do escopo',
    ],
    tag: 'Tech & IA',
    ctaLabel: 'Ver módulo Tech & IA',
    ctaHref: '/recursos/tech-ia',
    imageSrc: '/screenshots/04-conversa-whatsapp.png',
    imageAlt: 'Central de atendimento do WhatsApp com a IA transferindo a conversa para um atendente',
    imageW: 3200,
    imageH: 2000,
  },
  {
    eyebrow: 'Logística',
    title: (
      <>
        Entregadores <em className="italic-accent">no mapa</em>, em tempo real.
      </>
    ),
    description:
      'Defina como os pedidos são distribuídos (por prazo ou pela melhor rota), acompanhe a posição de cada entregador no mapa e deixe o cliente ver o dele chegando. Áreas de atendimento, taxas e tipos de entrega configurados por unidade.',
    bullets: [
      'Distribuição de rotas por prazo ou melhor rota',
      'Rastreamento GPS de todos os entregadores',
      'Áreas de cobertura com taxa e prazo por região',
    ],
    tag: 'Vertical Gás',
    ctaLabel: 'Ver vertical de gás',
    ctaHref: '/recursos/revendas-de-gas',
    imageSrc: '/screenshots/erp/rastrear-entregadores.png',
    imageAlt: 'Mapa de rastreamento de entregadores e unidades do PopGás Sistema',
    imageW: 1600,
    imageH: 1000,
  },
  {
    eyebrow: 'No bolso do entregador',
    title: (
      <>
        App pro <em className="italic-accent">campo</em>, acerto pra você.
      </>
    ),
    description:
      'O entregador faz tudo pelo celular: confere o carregamento, recebe pedidos na rota, lança vendas na porta do cliente, registra despesas e fecha o acerto do dia. Você confere cada acerto no painel, com dinheiro, cartão, PIX e troco separados.',
    bullets: [
      'Carregamentos, transferências e acerto diário',
      'Lança pedido na porta do cliente',
      'Escala de trabalho, ausências e pontuação',
    ],
    tag: 'Essencial',
    ctaLabel: 'Ver módulo Essencial',
    ctaHref: '/recursos/essencial',
    imageSrc: '/screenshots/07-acerto-entregador.png',
    imageAlt: 'Tela de acerto de contas dos entregadores no PopGás Sistema',
    imageW: 3200,
    imageH: 2000,
    videoId: 'rYeGom5f7oo',
    videoOrientation: 'portrait',
  },
  {
    eyebrow: 'Pedido self-service',
    title: (
      <>
        App do cliente com <em className="italic-accent">sua marca</em>.
      </>
    ),
    description:
      'Seu cliente faz o pedido sozinho, pelo app ou direto no navegador, sem instalar nada. Escolhe endereço, forma de pagamento e tipo de entrega, usa cupons e acompanha o entregador no mapa até a porta.',
    bullets: [
      'Logo, cores e nome da sua revenda',
      'Cupons, brindes e ofertas por horário',
      'Cliente acompanha a entrega em tempo real',
    ],
    tag: 'Essencial',
    ctaLabel: 'Ver módulo Essencial',
    ctaHref: '/recursos/essencial',
    imageSrc: '/screenshots/app-cliente-rastreamento-full.png',
    imageAlt: 'App do cliente mostrando o entregador a caminho no mapa',
    imageW: 450,
    imageH: 921,
    videoId: 'ix-zV3e0An4',
    videoOrientation: 'landscape',
  },
  {
    eyebrow: 'Cliente sempre informado',
    title: (
      <>
        Avisos automáticos <em className="italic-accent">no WhatsApp</em>.
      </>
    ),
    description:
      'Pedido confirmado, pagamento recebido, saiu para entrega com link de rastreamento, entregador chegando, entregue e cancelado. Cada aviso usa um template aprovado pela Meta e você liga só os que quiser.',
    bullets: [
      'Templates aprovados pela Meta, prontos pra usar',
      'Link de rastreamento no "saiu para entrega"',
      'Campanhas segmentadas pelo mesmo canal',
    ],
    tag: 'Tech & IA',
    ctaLabel: 'Ver módulo Tech & IA',
    ctaHref: '/recursos/tech-ia',
    imageSrc: '/screenshots/whatsapp-notificacoes-foto.png',
    imageAlt: 'Celular do cliente recebendo as notificações do pedido no WhatsApp',
    imageW: 621,
    imageH: 1104,
    imagePhoto: true,
  },
  {
    eyebrow: 'Controle total',
    title: (
      <>
        +25 relatórios. <em className="italic-accent">Zero planilhas</em>.
      </>
    ),
    description:
      'Dashboards de pedidos, clientes, contas a pagar e a receber, e mais de 25 relatórios cruzando estoque, financeiro, vendas e entregas. Você sabe exatamente o que está acontecendo, sem montar planilha.',
    bullets: [
      'Dashboards de vendas, financeiro e atendimento',
      'Estoque, faturamento, tempo de entrega, cancelamentos',
      'Exportação para Excel quando precisar',
    ],
    tag: 'Gestão',
    ctaLabel: 'Ver módulo Gestão',
    ctaHref: '/recursos/gestao',
    imageSrc: '/screenshots/erp/dashboard-contas-a-pagar.png',
    imageAlt: 'Dashboard de contas a pagar do PopGás Sistema',
    imageW: 3200,
    imageH: 2000,
  },
];

export function ProductShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-[#fbfbfa] overflow-x-clip">
      <Container>
        <SectionHeader
          eyebrow="Veja em ação"
          title={
            <>
              Tudo que sua revenda <em className="italic-accent">precisa</em>.
            </>
          }
          subtitle="Sistema completo desenhado por quem viveu o caminhão por dentro."
        />
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 max-w-[1100px] mx-auto">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.imageSrc} feature={f} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeatureRow({ feature, reverse }: { feature: Feature; reverse: boolean }) {
  const portrait = feature.imageH > feature.imageW;
  const imageBlock = (
    <div
      className={`relative w-full h-full rounded-2xl overflow-hidden border border-[rgba(15,19,34,0.08)] shadow-[0_24px_48px_-12px_rgba(15,19,34,0.14),0_4px_14px_rgba(15,19,34,0.06)] ${
        portrait ? 'bg-gradient-to-br from-[#f4f7ee] to-[#e6eedb] py-6 sm:py-8' : 'bg-white'
      }`}
    >
      <Image
        src={feature.imageSrc}
        alt={feature.imageAlt}
        width={feature.imageW}
        height={feature.imageH}
        className={
          portrait
            ? feature.imagePhoto
              ? 'block mx-auto w-auto h-[400px] sm:h-[480px] rounded-2xl shadow-[0_12px_32px_rgba(15,19,34,0.18)]'
              : 'block mx-auto w-auto h-[400px] sm:h-[480px] rounded-[22px] border-[6px] border-[#0a1322] shadow-[0_16px_40px_rgba(15,19,34,0.25)]'
            : 'w-full h-auto block'
        }
        sizes={portrait ? '300px' : '(min-width: 1024px) 540px, (min-width: 640px) 90vw, 100vw'}
      />
      {feature.videoId && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 text-[#4a7818] fill-current ml-0.5" />
          </span>
        </div>
      )}
    </div>
  );

  return (
    <AnimatedReveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className={reverse ? 'lg:order-2' : ''}>
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-[10px] font-bold uppercase tracking-[2px] text-[#4a7818]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#64a028]" aria-hidden />
            {feature.eyebrow}
          </div>
          <h3 className="font-display text-[28px] sm:text-[30px] md:text-[32px] font-bold tracking-[-0.035em] leading-[1.1] text-[#0a1322] mb-3.5">
            {feature.title}
          </h3>
          <p className="text-[15px] sm:text-base text-[rgba(15,19,34,0.65)] leading-[1.55] mb-5">
            {feature.description}
          </p>
          <ul className="flex flex-col gap-2 mb-6">
            {feature.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[14px] text-[rgba(15,19,34,0.72)] leading-[1.5]">
                <span className="text-[#64a028] font-extrabold shrink-0" aria-hidden>✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href={feature.ctaHref}
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#4a7818] border-b-[1.5px] border-[#64a028] pb-0.5 hover:gap-2.5 transition-all"
            >
              {feature.ctaLabel} →
            </Link>
            {feature.videoId && (
              <VideoModal
                videoId={feature.videoId}
                orientation={feature.videoOrientation}
                triggerClassName="inline-flex items-center gap-1.5 text-[13px] font-bold text-[rgba(15,19,34,0.62)] hover:text-[#0a1322] transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Ver demonstração
              </VideoModal>
            )}
          </div>
        </div>
        <div className={`relative group ${reverse ? 'lg:order-1' : ''}`}>
          <div
            className="absolute -inset-6 sm:-inset-10 rounded-[40px] -z-10"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(132,160,40,0.10), transparent 70%)',
              filter: 'blur(30px)',
            }}
            aria-hidden
          />
          <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center bg-white border border-[rgba(15,19,34,0.08)] font-mono text-[10px] font-bold tracking-[1px] uppercase text-[rgba(15,19,34,0.62)] px-2.5 py-1 rounded-full shadow-sm">
            {feature.tag}
          </div>
          {feature.videoId ? (
            <VideoModal
              videoId={feature.videoId}
              orientation={feature.videoOrientation}
              triggerClassName="block w-full"
            >
              {imageBlock}
            </VideoModal>
          ) : (
            imageBlock
          )}
        </div>
      </div>
    </AnimatedReveal>
  );
}
