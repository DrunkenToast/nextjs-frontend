FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /usr/app

RUN yarn global add pm2

COPY . .
RUN yarn install
RUN yarn build

EXPOSE 8080
USER node
CMD pm2-runtime 'yarn start --port 8080'

