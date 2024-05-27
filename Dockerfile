FROM node:20-alpine3.19
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8787
CMD ["npm", "start"]

