FROM node:22-bookworm-slim AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

RUN apt-get update \
  && apt-get install --no-install-recommends --yes openssl \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
COPY prisma ./prisma
COPY . .
ARG NEXT_PUBLIC_ERP_URL
ENV NEXT_PUBLIC_ERP_URL=$NEXT_PUBLIC_ERP_URL
RUN npm ci --cache=/tmp/npm-cache \
  && npm run build \
  && rm -rf node_modules /tmp/npm-cache

FROM node:22-bookworm-slim AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN apt-get update \
  && apt-get install --no-install-recommends --yes openssl \
  && rm -rf /var/lib/apt/lists/* \
  && groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
