# base image
FROM alpine

# specify work dir on which to execute further commands
WORKDIR /usr/app

# Download and install dependency
RUN apk add --update nodejs npm
COPY ./package.json ./ 
RUN npm i
COPY ./index.js ./

# Tell the image what to do when it starts as container 
CMD [ "npm","start" ]