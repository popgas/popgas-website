// src/components/recursos/IntegrationsStrip.tsx
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

const INTEGRATIONS = [
  'SEFAZ',
  'Focus NFe',
  'WhatsApp Business (Meta)',
  'Meta Ads',
  'Google Gemini',
  'OpenRouter',
  'Google Maps',
  'Mapbox',
  'Efí',
  'Stripe',
  'OneSignal',
  'CNPJA',
];

export function IntegrationsStrip() {
  return (
    <section className="py-16 md:py-24" id="integracoes">
      <Container>
        <SectionHeader
          eyebrow="Ecossistema"
          title="Integrado nativamente, sem dor de cabeça."
          subtitle="As integrações que sua revenda precisa, prontas para usar desde o primeiro dia."
        />
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12">
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {INTEGRATIONS.map(name => (
              <div
                key={name}
                className="text-base font-bold text-[#475569] hover:text-[#0f172a] transition-colors opacity-65 hover:opacity-100"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
