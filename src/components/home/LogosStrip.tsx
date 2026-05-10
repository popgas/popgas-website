// src/components/home/LogosStrip.tsx
import { Container } from '@/components/shared/Container';

const LOGOS = ['REVENDA SOL', 'GÁS NORTE', 'DISTRIBUIDORA M.', 'METROGÁS', 'REVENDA PAULISTA'];
const BADGES = [
  { label: 'SEFAZ', color: '#1e40af' },
  { label: 'LGPD', color: '#1e40af' },
  { label: 'SPED', color: '#1e40af' },
];

export function LogosStrip() {
  return (
    <section className="py-12 bg-[#f1f5f9] border-y border-[#e2e8f0]">
      <Container>
        <div className="text-center text-xs text-[#64748b] uppercase tracking-[1.5px] mb-6">
          Mais de 200 revendas em todo o Brasil
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-55">
          {LOGOS.map(name => (
            <div key={name} className="font-bold text-sm text-[#475569]">
              {name}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-xs">
          <span className="text-[#94a3b8]">Conformidade:</span>
          {BADGES.map(b => (
            <span key={b.label} className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#e2e8f0] rounded-full">
              <span className="w-3 h-3 rounded-full bg-[#dbeafe] text-[#1e40af] flex items-center justify-center text-[8px] font-bold">✓</span>
              <span className="font-semibold text-[#1e40af]">{b.label}</span>
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
