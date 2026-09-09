// src/app/recursos/[module]/[feature]/page.tsx — página de uma funcionalidade
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createElement } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/recursos/Breadcrumb';
import { ScreenshotLightbox } from '@/components/recursos/ScreenshotLightbox';
import { getIcon } from '@/components/recursos/feature-icons';
import { FinalCta } from '@/components/home/FinalCta';
import { MODULES, buildSignupUrl, type ModuleId } from '@/lib/pricing';
import { SignupLink } from '@/components/tracking/SignupLink';
import { allFeatureParams, findFeature, MODULE_META, type ModuleSlug } from '@/content/modules';

type Params = { module: string; feature: string };

export function generateStaticParams() {
  return allFeatureParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { module, feature } = await params;
  const found = findFeature(module, feature);
  if (!found) return {};
  const moduleName = MODULE_META[module as ModuleSlug].name;
  return {
    title: `${found.feature.title} — ${moduleName}`,
    description: found.feature.description,
    openGraph: found.feature.screenshotPath ? { images: [{ url: found.feature.screenshotPath }] } : undefined,
  };
}

export default async function FeaturePage({ params }: { params: Promise<Params> }) {
  const { module, feature } = await params;
  const found = findFeature(module, feature);
  if (!found) notFound();
  const { content, section, feature: f, prev, next } = found;
  const meta = MODULE_META[module as ModuleSlug];
  const moduleHref = `/recursos/${module}`;
  const moduleDef = content.moduleKey === 'gas-vertical' ? null : MODULES[content.moduleKey];
  const isVertical = moduleDef === null;
  const price = moduleDef ? `${moduleDef.isBase ? '' : '+ '}R$ ${moduleDef.monthlyPrice.toFixed(2).replace('.', ',')}/mês` : 'Incluída em todos os planos';
  const shot = f.screenshotPath ?? section.screenshotPath;
  const portrait = f.screenshotPath ? !!f.screenshotPortrait : !!section.screenshotPortrait;
  const photo = f.screenshotPath ? !!f.screenshotPhoto : !!section.screenshotPhoto;
  const siblings = section.features.filter(x => x.id !== f.id);
  const signupModules: ModuleId[] = content.moduleKey === 'gas-vertical' ? ['essencial'] : [content.moduleKey];
  const signupUrl = buildSignupUrl({ modules: signupModules, utmCampaign: `feature_${f.id}` });

  return (
    <>
      <div className="pt-8">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Recursos', href: '/recursos' },
              { label: meta.name, href: moduleHref },
              { label: section.title, href: `${moduleHref}#${section.id}` },
              { label: f.title },
            ]}
          />
        </Container>
      </div>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-14 items-start">
            <div className="min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] flex items-center justify-center shrink-0">
                  {createElement(getIcon(f.icon), { className: 'w-5 h-5', strokeWidth: 2 })}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#94a3b8]">
                  {meta.name} · {section.title}
                </div>
              </div>
              <h1 className="text-[34px] md:text-[46px] font-extrabold tracking-[-0.035em] leading-[1.05] text-[#0f172a] mb-5">
                {f.title}
              </h1>
              <p className="text-lg text-[#475569] leading-[1.6] max-w-2xl mb-8">{f.description}</p>

              {shot && (
                <div className="mb-4 rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white shadow-[0_24px_48px_-12px_rgba(15,23,42,0.14),0_4px_14px_rgba(15,23,42,0.06)]">
                  <ScreenshotLightbox src={shot} alt={`${f.title} no PopGás Sistema`} portrait={portrait}>
                    {portrait ? (
                      <div className="flex items-center justify-center bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] py-10">
                        <Image src={shot} alt={`${f.title} no PopGás Sistema`} width={photo ? 621 : 450} height={photo ? 1104 : 921} className={photo ? 'block w-auto h-[520px] rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.18)]' : 'block w-auto h-[520px] rounded-[26px] border-[7px] border-[#0f172a] shadow-[0_16px_40px_rgba(15,23,42,0.25)]'} sizes="300px" />
                      </div>
                    ) : (
                      <Image src={shot} alt={`${f.title} no PopGás Sistema`} width={1600} height={1000} className="block w-full h-auto" sizes="(min-width: 1024px) 860px, 100vw" />
                    )}
                  </ScreenshotLightbox>
                </div>
              )}
              <p className="text-[13px] text-[#64748b] mb-10">
                Tela real do PopGás Sistema, com dados de exemplo. Clique na imagem para ampliar.
              </p>

              <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-6 md:p-7 mb-10">
                <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#94a3b8] mb-2">Faz parte de</div>
                <h2 className="text-xl font-bold text-[#0f172a] tracking-[-0.02em] mb-2">
                  <Link href={`${moduleHref}#${section.id}`} className="hover:text-[#15803d] transition-colors">{section.title}</Link>
                </h2>
                <p className="text-[15px] text-[#475569] leading-[1.55]">{section.intro}</p>
                {f.link && (
                  <Link href={f.link.href} className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#15803d] hover:gap-2.5 transition-all">
                    {f.link.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              {siblings.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-[#0f172a] tracking-[-0.02em] mb-4">Também em {section.title}</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
                    {siblings.map(s => (
                      <li key={s.id}>
                        <Link
                          href={`${moduleHref}/${s.id}`}
                          className="flex items-start gap-3 p-4 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#bbf7d0] hover:shadow-[0_4px_14px_rgba(21,128,61,0.10)] transition-all"
                        >
                          <span className="w-8 h-8 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] flex items-center justify-center shrink-0">
                            {createElement(getIcon(s.icon), { className: 'w-4 h-4', strokeWidth: 2 })}
                          </span>
                          <span>
                            <span className="block text-[14px] font-semibold text-[#0f172a] leading-snug">{s.title}</span>
                            <span className="block text-[12.5px] text-[#64748b] leading-snug mt-0.5 line-clamp-2">{s.description}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <nav className="flex items-center justify-between gap-4 border-t border-[#e2e8f0] pt-6" aria-label="Funcionalidade anterior e próxima">
                {prev ? (
                  <Link href={`${moduleHref}/${prev.id}`} className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#475569] hover:text-[#0f172a]">
                    <ArrowLeft className="w-4 h-4" /> {prev.title}
                  </Link>
                ) : <span />}
                {next ? (
                  <Link href={`${moduleHref}/${next.id}`} className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#475569] hover:text-[#0f172a] text-right">
                    {next.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : <span />}
              </nav>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#94a3b8] mb-1.5">
                  {isVertical ? 'Vertical especializada' : 'Módulo'}
                </div>
                <div className="text-2xl font-bold text-[#0f172a] tracking-[-0.02em]">{meta.name}</div>
                <div className="text-[14px] font-semibold text-[#475569] mb-4">{price}</div>
                <p className="text-[14px] text-[#475569] leading-[1.55] mb-5">{content.hero.subtitle}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2 mb-6">
                  {['14 dias grátis, sem cartão', 'Sem fidelidade', 'Suporte humano em português'].map(t => (
                    <li key={t} className="flex items-center gap-2 text-[13.5px] text-[#0f172a]"><Check className="w-4 h-4 text-[#16a34a]" /> {t}</li>
                  ))}
                </ul>
                <SignupLink href={signupUrl} className="block text-center py-3 px-5 rounded-xl bg-[#64a028] hover:bg-[#84cc16] text-white font-bold text-sm transition-colors mb-3">
                  Começar grátis →
                </SignupLink>
                <Link href={`/planos?preset=${meta.planPreset}`} className="block text-center py-3 px-5 rounded-xl border border-[#e2e8f0] hover:border-[#0f172a] text-[#0f172a] font-semibold text-sm transition-colors">
                  Ver planos
                </Link>
                <Link href={moduleHref} className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803d] hover:gap-2.5 transition-all">
                  Todas as funcionalidades de {meta.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
