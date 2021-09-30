FROM node:14 as build

RUN npm i -g @angular/cli@12.2.6

WORKDIR /src
COPY src src
COPY angular.json angular.json
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY server.ts server.ts
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.json tsconfig.json
COPY tsconfig.server.json tsconfig.server.json

RUN npm ci
RUN npm run build:ssr

FROM nginxinc/nginx-unprivileged:alpine

WORKDIR /user/share/nginx/html
COPY --from=build --chown=nginx /dist .

COPY .docker/default.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 80

ENTRYPOINT [ "node", "dist/server/main.js" ]
