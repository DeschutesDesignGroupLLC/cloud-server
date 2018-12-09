#!/bin/bash

# Check if gedit is running
# -x flag only match processes whose name (or command line if -f is
# specified) exactly match the pattern. 

echo "Killing node if it is still running..."

if pgrep -x "node" > /dev/null
then
    killall node
    echo "Node is no longer running..."
else
    echo "Node was not running..."
fi
