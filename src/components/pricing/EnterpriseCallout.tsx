// src/components/pricing/EnterpriseCallout.tsx
import { Building2 } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import { EnterpriseLeadDialog } from './EnterpriseLeadDialog';

export function EnterpriseCallout() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="bg-[#0f172a] text-white rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                Mais de 5 mil pedidos/mês? Múltiplas filiais?
              </h3>
              <p className="text-[#94a3b8]">
                Negociamos plano sob medida para sua operação. Fale com a gente.
              </p>
            </div>
          </div>
          <EnterpriseLeadDialog
            trigger={
              <Button className="bg-white text-[#0f172a] hover:bg-white/90 px-7 py-3 rounded-xl font-semibold flex-shrink-0">
                Solicitar contato comercial
              </Button>
            }
          />
        </div>
      </Container>
    </section>
  );
}
