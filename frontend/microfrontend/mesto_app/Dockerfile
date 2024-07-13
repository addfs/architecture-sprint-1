# dev-stage
FROM node:18-slim

ENV NODE_ENV development

WORKDIR /app

COPY package.json /app
RUN yarn install

WORKDIR /shared_library
COPY package.json /app
RUN yarn install
COPY . /shared_library

WORKDIR /app
COPY . /app

#RUN npm i -g jest \
#    && npx playwright install --with-deps chromium

CMD ["sh", "-c", "yarn run start"]