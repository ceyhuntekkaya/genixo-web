# Dependencies stage
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Builder stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* değişkenleri build sırasında gömülür.
ARG NEXT_PUBLIC_SITE_URL=https://genixo.ai
ARG NEXT_PUBLIC_GA_ID=
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Runner stage - Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Dış API'lere HTTPS isteği için CA sertifikaları (chat API fetch için gerekli)
RUN apk add --no-cache ca-certificates

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Security: non-root user oluştur
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Public dosyaları kopyala
COPY --from=builder /app/public ./public

# Standalone output kullan (next.config.js'de output: 'standalone' olmalı)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]