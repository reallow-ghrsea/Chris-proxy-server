FROM node:8
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
EXPOSE 9000 
CMD ["npm", "run", "start"] 