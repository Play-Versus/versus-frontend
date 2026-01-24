# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Enable pnpm via corepack (best practice)
RUN corepack enable

# Copy only files needed for dependency install
COPY package.json pnpm-lock.yaml ./

# Install deps (frozen = reproducible)
RUN pnpm install --frozen-lockfile

# Copy rest of the app
COPY . .

# Build Next.js
RUN pnpm build


# ---------- Runtime stage ----------
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

RUN corepack enable

# Copy only what runtime needs
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["pnpm", "start"]
