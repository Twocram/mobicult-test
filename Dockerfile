FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/.output ./

EXPOSE 3000

CMD ["node", "server/index.mjs"]
