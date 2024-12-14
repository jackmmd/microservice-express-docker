FROM node:18
LABEL maintainer=jackmmd
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
