import { Container } from '@/components/shared/Container';

const STATS = [
  { num: '1', unit: 'M+', label: 'Pedidos' },
  { num: 'R$ 50', unit: 'M+', label: 'Transacionados' },
  { num: '10', unit: 'K+', label: 'Clientes/mês' },
];

export function Stats() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-[#fdfcfa] border-y border-[rgba(15,19,34,0.06)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-center max-w-[1100px] mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[2px] text-[#4a7818] font-bold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#64a028]" aria-hidden />
              Em produção desde 2015
            </div>
            <h2 className="font-display text-[26px] sm:text-[30px] md:text-[32px] font-bold tracking-[-0.035em] leading-[1.1] text-[#0a1322]">
              Não é piloto, é <span className="italic-accent">produção real</span>.
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {STATS.map(s => (
              <div key={s.label} className="px-3 sm:px-4 py-3 sm:py-4 border-l-2 border-[#64a028]">
                <div className="font-display text-[20px] sm:text-[26px] md:text-[32px] font-extrabold tracking-[-0.035em] text-[#0a1322] leading-none mb-1.5">
                  {s.num}
                  <span className="italic-accent">{s.unit}</span>
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[1.2px] text-[rgba(15,19,34,0.55)] font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
