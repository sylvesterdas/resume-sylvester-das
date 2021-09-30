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

FROM node:14-slim

WORKDIR /app
COPY --from=build /dist dist

EXPOSE 4000

ENTRYPOINT [ "node", "dist/server/main.js" ]
