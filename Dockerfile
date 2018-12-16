FROM node:latest

# File Author / Maintainer
MAINTAINER Deschutes Design Group LLC

# Install our process manager
RUN npm install pm2 -g && pm2 update

# Create our working directory and copy our source to it
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

# Install our NPM dependencies
RUN npm install

# Expose our node js server
EXPOSE 1337

# Start the server
CMD ["pm2-runtime", "start" ,"process.yml" ]