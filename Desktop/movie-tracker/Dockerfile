FROM node

WORKDIR /app

COPY . .

RUN apk add npm
RUN npm i
RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html

COPY /app/forum-front/dist/. ./

COPY nginx.conf /etc/nginx/conf.d/default.conf