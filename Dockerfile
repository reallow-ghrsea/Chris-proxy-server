FROM node:8
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
RUN npm run build-production
EXPOSE 9000 
CMD ["npm", "run", "start-production"] 