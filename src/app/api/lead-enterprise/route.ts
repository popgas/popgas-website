import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { sendEnterpriseLeadEmail } from '@/lib/email';
import { enterpriseLeadLimiter } from '@/lib/rate-limit';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  cnpj: z.string().optional().nullable(),
  message: z.string().min(10),
  modules: z.string().optional().nullable(),
  billing: z.string().optional().nullable(),
  source: z.string().optional().nullable(),
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

  const limit = enterpriseLeadLimiter.check(ip);
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
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        cnpj: data.cnpj ?? null,
        message: data.message,
        type: 'ENTERPRISE',
        source: data.source ?? null,
        modules: data.modules ?? null,
        billing: data.billing ?? null,
      },
    });

    try {
      await sendEnterpriseLeadEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        cnpj: data.cnpj ?? undefined,
        message: data.message,
        modules: data.modules ?? undefined,
        billing: data.billing ?? undefined,
        source: data.source ?? undefined,
        createdAt: message.createdAt,
      });
    } catch (emailErr) {
      console.error('[/api/lead-enterprise] email send failed:', emailErr);
    }

    return NextResponse.json({ success: true, id: message.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.flatten() },
        { status: 400 }
      );
    }
    console.error('[/api/lead-enterprise] error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
