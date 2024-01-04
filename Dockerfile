FROM node:18.13.0
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 9090
CMD [ "npm", "start" ]