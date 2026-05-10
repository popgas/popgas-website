// src/components/shared/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const schema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido').optional().or(z.literal('')),
  company: z.string().optional(),
  type: z.enum(['general', 'sales', 'support']),
  message: z.string().min(10, 'Mensagem muito curta'),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({ defaultType = 'general' }: { defaultType?: FormData['type'] }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: defaultType },
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      const apiType = data.type === 'sales' ? 'GENERAL' : data.type === 'support' ? 'SUPPORT' : 'GENERAL';
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          type: apiType,
          source: '/contato',
        }),
      });
      if (!res.ok) throw new Error('Falha ao enviar');
      setSubmitted(true);
      reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro inesperado');
    }
  };

  if (submitted) {
    return (
      <div className="p-8 bg-[#dcfce7] border border-[#86efac] rounded-2xl text-center">
        <div className="text-2xl mb-3">✓</div>
        <h3 className="font-bold text-[#16a34a] mb-2">Mensagem enviada!</h3>
        <p className="text-sm text-[#15803d]">Retornamos em até 24h úteis.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white border border-[#e2e8f0] rounded-2xl p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Nome *</Label>
          <Input id="name" {...register('name')} />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">E-mail *</Label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" type="tel" {...register('phone')} />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="company">Empresa</Label>
          <Input id="company" {...register('company')} />
        </div>
      </div>
      <div>
        <Label htmlFor="type">Tipo</Label>
        <select
          id="type"
          {...register('type')}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="general">Dúvida geral</option>
          <option value="sales">Quero conhecer/contratar</option>
          <option value="support">Sou cliente, preciso de suporte</option>
        </select>
      </div>
      <div>
        <Label htmlFor="message">Mensagem *</Label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded">{error}</div>
      )}
      <Button type="submit" disabled={isSubmitting} className="w-full bg-[#0f172a] hover:bg-[#1a2845]">
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  );
}
