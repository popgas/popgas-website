import { afterEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => {
  class MockPrismaClient {
    constructor(readonly options: { adapter: unknown }) {}
  }

  class MockNeonPool {
    constructor(readonly options: { connectionString?: string }) {}
  }

  class MockPgPool {
    constructor(readonly options: { connectionString?: string }) {}
  }

  class MockPrismaNeon {
    constructor(readonly pool: MockNeonPool) {}
  }

  class MockPrismaPg {
    constructor(readonly pool: MockPgPool) {}
  }

  return {
    MockPgPool,
    MockPrismaClient,
    MockPrismaNeon,
    MockPrismaPg,
    MockNeonPool,
  };
});

vi.mock('@/generated/prisma/client', () => ({ PrismaClient: mocks.MockPrismaClient }));
vi.mock('@neondatabase/serverless', () => ({ Pool: mocks.MockNeonPool }));
vi.mock('pg', () => ({ Pool: mocks.MockPgPool }));
vi.mock('@prisma/adapter-neon', () => ({ PrismaNeon: mocks.MockPrismaNeon }));
vi.mock('@prisma/adapter-pg', () => ({ PrismaPg: mocks.MockPrismaPg }));

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

async function createClient(driver?: 'neon' | 'postgres') {
  vi.stubEnv('NODE_ENV', 'production');
  vi.stubEnv('DATABASE_URL', 'postgresql://postgres:postgres@localhost:5432/popgas');
  vi.stubEnv('DATABASE_DRIVER', driver ?? '');

  const { createPrismaClient } = await import('./db');
  return createPrismaClient();
}

describe('createPrismaClient', () => {
  it('uses PrismaNeon when DATABASE_DRIVER is unset', async () => {
    const client = await createClient();

    expect(client).toBeInstanceOf(mocks.MockPrismaClient);
    expect((client as unknown as { options: { adapter: unknown } }).options.adapter)
      .toBeInstanceOf(mocks.MockPrismaNeon);
  });

  it('uses PrismaPg when DATABASE_DRIVER is postgres', async () => {
    const client = await createClient('postgres');

    expect(client).toBeInstanceOf(mocks.MockPrismaClient);
    expect((client as unknown as { options: { adapter: unknown } }).options.adapter)
      .toBeInstanceOf(mocks.MockPrismaPg);
  });
});
