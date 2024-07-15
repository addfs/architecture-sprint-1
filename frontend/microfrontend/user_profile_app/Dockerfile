# dev-stage
FROM node:18-slim

ENV NODE_ENV development

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

COPY . /app

CMD ["sh", "-c", "yarn run start"]
