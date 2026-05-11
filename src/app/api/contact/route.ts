import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { contactLimiter } from '@/lib/rate-limit';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
  cnpj: z.string().optional().nullable(),
  message: z.string().min(10),
  type: z.enum(['GENERAL', 'ENTERPRISE', 'SUPPORT']).default('GENERAL'),
  source: z.string().optional().nullable(),
  modules: z.string().optional().nullable(),
  billing: z.string().optional().nullable(),
});

function getClientIp(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const limit = contactLimiter.check(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Muitas tentativas. Tente novamente em alguns minutos.' },
      {
        status: 429,
        headers: { 'X-RateLimit-Reset': String(limit.resetAt) },
      }
    );
  }

  try {
    const body = await req.json();
    const data = schema.parse(body);

    const message = await prisma.contactMessage.create({
      data: {
        ...data,
        phone: data.phone ?? null,
        company: data.company ?? null,
        cnpj: data.cnpj ?? null,
        source: data.source ?? null,
        modules: data.modules ?? null,
        billing: data.billing ?? null,
      },
    });

    return NextResponse.json({ success: true, id: message.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.flatten() },
        { status: 400 }
      );
    }
    console.error('[/api/contact] error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
