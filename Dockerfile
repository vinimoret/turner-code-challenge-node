FROM node:10.12-alpine


WORKDIR /
ADD . .

RUN apk add --no-cache make gcc g++ python && \
  npm run install:all && \
  apk del make gcc g++ python && \
  npm run build 

WORKDIR /

CMD [ "npm", "start" ]

EXPOSE 5000
EXPOSE 80