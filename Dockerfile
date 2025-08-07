FROM node/alpine18

COPY . /app

RUN cd /app

RUN npm install

EXPOSE 8000:3000

CMD [ "node start" ]