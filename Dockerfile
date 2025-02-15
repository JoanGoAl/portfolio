FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install --omit-dev

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
