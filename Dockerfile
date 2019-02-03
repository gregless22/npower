# Dockerfile
FROM node:10
RUN mkdir /app
WORKDIR /app

#copy dependancies
COPY package*.json /app/
COPY webpack*.js /app/
RUN npm install
# COPY . .
EXPOSE 3000


