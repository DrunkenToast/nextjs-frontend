FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /usr/app

RUN yarn global add pm2

COPY . .
RUN yarn install
RUN yarn build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /usr/app/.next

EXPOSE 8080
USER nextjs
CMD pm2-runtime 'yarn start --port 8080'

