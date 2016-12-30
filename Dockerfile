FROM node:7.3.0-alpine
ADD . .
RUN npm install
