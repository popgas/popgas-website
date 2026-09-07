import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/e2e/schema.prisma",
  migrations: {
    path: "prisma/e2e/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
