# popgas-site (B2B)

Site institucional do PopGás Sistema (ERP para revendas de gás).

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind v4 · Prisma + Neon Postgres · Resend · Vercel.

## Setup

```bash
npm install
cp .env.example .env.local  # preencher chaves
npx prisma migrate dev
npm run dev
```

## Variáveis de ambiente

| Var | Descrição |
|---|---|
| `DATABASE_URL` | Postgres do Neon |
| `RESEND_API_KEY` | Chave do Resend (e-mail) |
| `RESEND_FROM_EMAIL` | Remetente verificado, ex: `leads@popgas.com.br` |

## Scripts

- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — produção
- `npm run test` — vitest watch
- `npm run test:run` — vitest CI
- `npm run typecheck` — tsc --noEmit
- `npm run db:migrate` — Prisma migrate
- `npm run db:studio` — Prisma Studio

## Pricing

Os preços ficam hardcoded em `src/lib/pricing.ts`. Atualize lá quando mudarem (e re-deploy).

## Estrutura

- `src/app/` — App Router (páginas)
- `src/components/{layout,home,pricing,recursos,shared,ui}/` — componentes
- `src/content/` — conteúdo typed (módulos, FAQs)
- `src/lib/` — pricing, email, db, analytics, utils
