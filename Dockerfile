FROM node:22-alpine AS base
WORKDIR /usr/src/app

RUN npm install -g pnpm@10

COPY package.json pnpm-lock.yaml ./
COPY .npmrc* ./

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM gcr.io/distroless/nodejs22-debian12:nonroot
WORKDIR /usr/src/app

COPY --from=prod-deps /usr/src/app/node_modules ./node_modules/
COPY --from=build /usr/src/app/build ./build/
COPY --from=build /usr/src/app/package.json ./

EXPOSE 3000
CMD ["build/index.js"]
