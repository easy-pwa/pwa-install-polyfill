#!/bin/bash

DIRECTORY=$(dirname $(realpath $0 ))

TTY_FLAG=$([ -t 0 ] && echo "-it" || echo "-i")
docker run $TTY_FLAG --rm \
  -v "$DIRECTORY/..":/home/node/app \
  -w /home/node/app \
  -p 8080:8080 \
  -u $(id -u ${USER}):$(id -g ${USER}) \
  node:24-slim \
  "${@:-bash}"
