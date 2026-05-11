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
}

const FEATURES: Feature[] = [
  {
    eyebrow: 'Atendimento 24/7',
    title: (
      <>
        IA negocia e <em className="italic-accent">fecha pedidos</em> sozinha.
      </>
    ),
    description:
      'Sua inteligência artificial conversa com cada cliente no WhatsApp como um vendedor experiente — responde dúvidas, oferece descontos personalizados e lança o pedido direto no sistema. Tudo automático.',
    bullets: [
      'Negociação natural com o tom da sua revenda',
      'Cria pedido direto sem precisar transferir pra humano',
      <>Reduz fila de atendimento em <strong className="text-[#4a7818] font-bold">até 70%</strong></>,
    ],
    tag: 'Tech & IA',
    ctaLabel: 'Ver módulo Tech & IA',
    ctaHref: '/recursos/tech-ia',
    imageSrc: '/screenshots/parceiros/ia-vendas-whatsapp.png',
    imageAlt: 'IA de vendas negociando via WhatsApp',
    imageW: 1184,
    imageH: 880,
  },
  {
    eyebrow: 'Logística com IA',
    title: (
      <>
        Rotas que <em className="italic-accent">se otimizam</em> sozinhas.
      </>
    ),
    description:
      'A IA distribui os pedidos pelos entregadores considerando trânsito em tempo real, distância, prioridades e capacidade de cada veículo. Menos km, mais entregas no mesmo turno.',
    bullets: [
      'Reduz tempo médio de entrega',
      'Considera trânsito e prioridades automaticamente',
      'Distribui carga proporcional por entregador',
    ],
    tag: 'Vertical Gás',
    ctaLabel: 'Ver vertical de gás',
    ctaHref: '/recursos/revendas-de-gas',
    imageSrc: '/screenshots/parceiros/distribuicao-rota.png',
    imageAlt: 'Distribuição de rota com IA',
    imageW: 1920,
    imageH: 1080,
  },
  {
    eyebrow: 'No bolso do entregador',
    title: (
      <>
        App pro <em className="italic-accent">campo</em>, dashboard pra você.
      </>
    ),
    description:
      'O entregador faz tudo pelo celular: recebe pedidos, lança vendas direto ao cliente, acerta contas, vê a escala da semana e suas premiações. Você vê tudo em tempo real.',
    bullets: [
      'Carregamentos, transferências e acerto diário',
      'Lança pedido na porta do cliente',
      'Escala de trabalho + ranking de premiações',
    ],
    tag: 'Essencial',
    ctaLabel: 'Ver módulo Essencial',
    ctaHref: '/recursos/essencial',
    imageSrc: '/screenshots/parceiros/app-entregador.png',
    imageAlt: 'App do entregador no celular',
    imageW: 1920,
    imageH: 1080,
    videoId: 'rYeGom5f7oo',
    videoOrientation: 'portrait',
  },
  {
    eyebrow: 'Pedido self-service',
    title: (
      <>
        App próprio com <em className="italic-accent">sua marca</em>.
      </>
    ),
    description:
      'Aplicativo web 100% personalizado com a identidade da sua revenda. Cliente faz pedido, acompanha entrega em tempo real e usa cupons de desconto — direto pelo navegador, sem precisar baixar nada.',
    bullets: [
      'Interface adaptada à sua marca',
      'Cupons, promoções e descontos configuráveis',
      'Cliente acompanha entrega em tempo real',
    ],
    tag: 'Essencial',
    ctaLabel: 'Ver módulo Essencial',
    ctaHref: '/recursos/essencial',
    imageSrc: '/screenshots/parceiros/app-web-cliente.png',
    imageAlt: 'Aplicativo web do cliente',
    imageW: 1920,
    imageH: 1080,
    videoId: 'ix-zV3e0An4',
    videoOrientation: 'landscape',
  },
  {
    eyebrow: 'Central telefônica integrada',
    title: (
      <>
        PABX com <em className="italic-accent">IA que avalia</em> seu atendimento.
      </>
    ),
    description:
      'Bina identifica o cliente assim que ele liga — atendente já vê histórico, endereço e pedidos anteriores. Cada chamada é gravada e a IA pontua a qualidade do atendimento automaticamente.',
    bullets: [
      'Bina automática com histórico do cliente',
      'Gravação + transcrição de chamadas',
      <><strong className="text-[#4a7818] font-bold">Score de qualidade por IA</strong> em cada atendimento</>,
    ],
    tag: 'Tech & IA',
    ctaLabel: 'Ver módulo Tech & IA',
    ctaHref: '/recursos/tech-ia',
    imageSrc: '/screenshots/parceiros/pabx-nuvem.png',
    imageAlt: 'PABX em nuvem integrado',
    imageW: 1472,
    imageH: 704,
  },
  {
    eyebrow: 'Controle total',
    title: (
      <>
        +30 relatórios. <em className="italic-accent">Zero planilhas</em>.
      </>
    ),
    description:
      'Dashboards de pedidos, clientes, contas a pagar e receber, mais de 30 relatórios cruzando estoque, financeiro, vendas e marketing. Você sabe exatamente o que está acontecendo, sem precisar exportar nada.',
    bullets: [
      'Dashboards em tempo real (web + mobile)',
      'Estoque, vendas, financeiro, marketing',
      'Exportação automática quando precisar',
    ],
    tag: 'Gestão',
    ctaLabel: 'Ver módulo Gestão',
    ctaHref: '/recursos/gestao',
    imageSrc: '/screenshots/parceiros/relatorios.png',
    imageAlt: 'Relatórios e dashboards',
    imageW: 1920,
    imageH: 1080,
  },
];

export function ProductShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-[#fbfbfa]">
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
  const imageBlock = (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[rgba(15,19,34,0.08)] bg-white shadow-[0_24px_48px_-12px_rgba(15,19,34,0.14),0_4px_14px_rgba(15,19,34,0.06)]">
      <Image
        src={feature.imageSrc}
        alt={feature.imageAlt}
        width={feature.imageW}
        height={feature.imageH}
        className="w-full h-auto block"
        sizes="(min-width: 1024px) 540px, (min-width: 640px) 90vw, 100vw"
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
