'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido').optional().or(z.literal('')),
  company: z.string().optional(),
  type: z.enum(['general', 'sales', 'support']),
  message: z.string().min(10, 'Mensagem muito curta'),
});

type FormData = z.infer<typeof schema>;

const labelClass =
  'block font-mono text-[10px] uppercase tracking-[1.5px] text-[rgba(15,19,34,0.55)] font-semibold mb-2';

const inputClass =
  'w-full border border-[rgba(15,19,34,0.14)] hover:border-[rgba(15,19,34,0.25)] rounded-[10px] px-3.5 py-3 ' +
  'font-sans text-sm text-[#0a1322] bg-white tracking-[-0.005em] ' +
  'placeholder:text-[rgba(15,19,34,0.40)] ' +
  'transition-all outline-none ' +
  'focus:border-[#64a028] focus:ring-4 focus:ring-[rgba(132,160,40,0.12)] focus:hover:border-[#64a028]';

const selectClass = cn(
  inputClass,
  'appearance-none bg-no-repeat pr-9',
  '[background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2716%27%20height%3D%2716%27%20viewBox%3D%270%200%2024%2024%27%20fill%3D%27none%27%20stroke%3D%27%23475569%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%3E%3Cpath%20d%3D%27m6%209%206%206%206-6%27%2F%3E%3C%2Fsvg%3E")] ' +
  '[background-position:right_14px_center]'
);

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
      const apiType =
        data.type === 'sales' ? 'ENTERPRISE' : data.type === 'support' ? 'SUPPORT' : 'GENERAL';
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-[rgba(15,19,34,0.08)] rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 shadow-[0_4px_14px_rgba(15,19,34,0.04)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field>
          <label htmlFor="name" className={labelClass}>Nome *</label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            className={inputClass}
            {...register('name')}
          />
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
        </Field>
        <Field>
          <label htmlFor="email" className={labelClass}>E-mail *</label>
          <input
            id="email"
            type="email"
            placeholder="você@empresa.com.br"
            className={inputClass}
            {...register('email')}
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field>
          <label htmlFor="phone" className={labelClass}>Telefone</label>
          <input
            id="phone"
            type="tel"
            placeholder="(34) 99999-9999"
            className={inputClass}
            {...register('phone')}
          />
          {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
        </Field>
        <Field>
          <label htmlFor="company" className={labelClass}>Empresa</label>
          <input
            id="company"
            type="text"
            placeholder="Nome da revenda"
            className={inputClass}
            {...register('company')}
          />
        </Field>
      </div>

      <Field>
        <label htmlFor="type" className={labelClass}>Tipo</label>
        <select id="type" className={selectClass} {...register('type')}>
          <option value="general">Dúvida geral</option>
          <option value="sales">Quero conhecer/contratar</option>
          <option value="support">Sou cliente, preciso de suporte</option>
        </select>
      </Field>

      <Field>
        <label htmlFor="message" className={labelClass}>Mensagem *</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Conte um pouco sobre sua operação..."
          className={cn(inputClass, 'resize-y min-h-[110px] leading-[1.5]')}
          {...register('message')}
        />
        {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
      </Field>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#64a028] hover:bg-[#84cc16] disabled:opacity-60 text-white font-bold text-sm tracking-[-0.01em] py-3.5 rounded-[10px] transition-colors shadow-[0_4px_14px_rgba(132,160,40,0.25)] mt-2"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem →'}
      </button>
    </form>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function ErrorMsg({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-red-600 mt-1.5 font-medium" role="alert">
      {children}
    </p>
  );
}
