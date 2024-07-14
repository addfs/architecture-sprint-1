# dev-stage
FROM node:18-slim

ENV NODE_ENV development

WORKDIR /app

COPY package.json /app
RUN yarn install

COPY . /app

CMD ["sh", "-c", "yarn run start"]
