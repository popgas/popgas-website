// src/components/pricing/EnterpriseLeadDialog.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const schema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  company: z.string().min(2, 'Empresa obrigatória'),
  cnpj: z.string().optional(),
  message: z.string().min(10, 'Conte um pouco sobre sua operação'),
});

type FormData = z.infer<typeof schema>;

interface Props {
  trigger: React.ReactNode;
}

export function EnterpriseLeadDialog({ trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      const res = await fetch('/api/lead-enterprise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: '/planos' }),
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error((errData as { error?: string }).error ?? 'Erro ao enviar');
      }
      setSubmitted(true);
      reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro inesperado');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={trigger as React.ReactElement} />
      <DialogContent className="max-w-lg dark:bg-[#1B2722] dark:text-[#E8EEE6] dark:ring-[#2E3E35]">
        <DialogHeader>
          <DialogTitle className="dark:text-[#E8EEE6]">Falar com vendas Enterprise</DialogTitle>
        </DialogHeader>
        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] dark:bg-[#263C26] text-[#16a34a] dark:text-[#9CCB6B] flex items-center justify-center mx-auto mb-4 text-2xl">
              ✓
            </div>
            <h3 className="text-lg font-bold mb-2">Recebido!</h3>
            <p className="text-sm text-[#475569] dark:text-[#A3AFA6]">
              Nosso time comercial entra em contato em até 24h úteis.
            </p>
            <Button onClick={() => setOpen(false)} className="mt-6">Fechar</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome completo *</Label>
              <Input id="name" className="dark:bg-[#141E1A] dark:border-[#2E3E35] dark:text-[#E8EEE6] dark:placeholder:text-[#8F9A92]" {...register('name')} />
              {errors.name && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" className="dark:bg-[#141E1A] dark:border-[#2E3E35] dark:text-[#E8EEE6] dark:placeholder:text-[#8F9A92]" type="email" {...register('email')} />
                {errors.email && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Telefone *</Label>
                <Input id="phone" className="dark:bg-[#141E1A] dark:border-[#2E3E35] dark:text-[#E8EEE6] dark:placeholder:text-[#8F9A92]" type="tel" {...register('phone')} />
                {errors.phone && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.phone.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="company">Empresa *</Label>
              <Input id="company" className="dark:bg-[#141E1A] dark:border-[#2E3E35] dark:text-[#E8EEE6] dark:placeholder:text-[#8F9A92]" {...register('company')} />
              {errors.company && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.company.message}</p>}
            </div>
            <div>
              <Label htmlFor="cnpj">CNPJ (opcional)</Label>
              <Input id="cnpj" className="dark:bg-[#141E1A] dark:border-[#2E3E35] dark:text-[#E8EEE6] dark:placeholder:text-[#8F9A92]" {...register('cnpj')} />
            </div>
            <div>
              <Label htmlFor="message">Conte sobre sua operação *</Label>
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm dark:bg-[#141E1A] dark:border-[#2E3E35] dark:text-[#E8EEE6] dark:placeholder:text-[#8F9A92]"
              />
              {errors.message && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.message.message}</p>}
            </div>
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-sm rounded">
                {error}
              </div>
            )}
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Enviando...' : 'Solicitar contato comercial'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
