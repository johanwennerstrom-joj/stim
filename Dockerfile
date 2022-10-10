FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]

COPY package.json .

COPY package-lock.json .

RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "run", "serve"]