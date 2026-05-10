import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';

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

export async function POST(req: Request) {
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
