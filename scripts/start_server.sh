#!/bin/bash

# Starts the parse server
pm2 start /opt/deschutesdesigngroup/apps/parse/process.yml --env production
