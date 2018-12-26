# Deschutes Design Group LLC Cloud Server

![Build Status](https://codebuild.us-west-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoidGR5T3JCV2xnSlVjdW56MHJZTy9aL2luMmNYelpoWlRKdWw0OHJ2ZFdEU0pVM1lEcWROQ252OTVVdnhQZk1JVVAwdlMzMS9Lc1hOS09BS3Q3K21SSG4wPSIsIml2UGFyYW1ldGVyU3BlYyI6ImxlMWM1RHV2Y0ZhdzBBeGEiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)
[![Node version](https://img.shields.io/node/v/parse-server.svg?style=flat)](http://nodejs.org/download/)
[![npm version](https://badge.fury.io/js/parse-server.svg)](https://badge.fury.io/js/express)

### Description

A highly-available, scalable web application built on NodeJs, deployed with Amazon Web Services, to provide an API accessible database service. Using Nginx as a reverse proxy, MongoDb as our NoSQL database, our cloud server provides backend services for several of our web and mobile applications.

### DOCKER

#### Building

The docker container image can be built using the following command.

<code>docker build -t cloud-server .</code>

#### Running

<code>docker run -d --name cloud-server -p 80:1337 cloud-server</code>

#### Stopping

<code>docker stop cloud-server</code>

#### Inspecting NodeJs Runtime

<code>docker exec -it cloud-server pm2 show cloud-server</code>

#### Removing a container

<code>docker rm <container id|name></code>