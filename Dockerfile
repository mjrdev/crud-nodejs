FROM node:16-alpine
WORKDIR /usr/node/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]