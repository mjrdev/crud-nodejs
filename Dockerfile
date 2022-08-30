FROM node:16-alpine
WORKDIR /home/node/app

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]