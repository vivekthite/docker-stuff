# base image
FROM node:alpine

# specify work dir on which to execute further commands
WORKDIR /app

# Download and install dependency
COPY ./package.json ./ 
RUN npm i
COPY ./ ./

# Tell the image what to do when it starts as container 
CMD [ "npm","start" ]