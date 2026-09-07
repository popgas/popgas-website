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

ARG VCS_REF=local

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

LABEL org.opencontainers.image.source="https://github.com/popgas/popgas-website" \
  org.opencontainers.image.revision="${VCS_REF}"

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

HEALTHCHECK --interval=5s --timeout=3s --start-period=5s --retries=3 CMD ["node", "-e", "const http = require('node:http'); const request = http.get('http://127.0.0.1:3000/', (response) => { response.resume(); process.exit(response.statusCode >= 200 && response.statusCode < 300 ? 0 : 1); }); request.on('error', () => process.exit(1));"]

CMD ["node", "server.js"]
