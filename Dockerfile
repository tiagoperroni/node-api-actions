FROM node:alpine

EXPOSE 3000

WORKDIR /app

COPY *.json /app/

RUN npm install

COPY . /app/

CMD npm run dev