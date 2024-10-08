FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g eslint prettier

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
