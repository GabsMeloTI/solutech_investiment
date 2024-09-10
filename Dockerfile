FROM node:17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 19000
EXPOSE 19001

CMD ["npm", "run"]
