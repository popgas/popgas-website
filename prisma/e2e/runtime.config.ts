const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required for E2E migrations");
}

export default {
  schema: "prisma/e2e/schema.prisma",
  migrations: {
    path: "prisma/e2e/migrations",
  },
  datasource: {
    url: databaseUrl,
  },
};
