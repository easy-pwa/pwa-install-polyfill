#!/bin/bash

DIRECTORY=$(dirname $(realpath $0 ))

docker run -it --rm \
  --name pwa-install-polyfill \
  -v "$DIRECTORY/..":/home/node/app \
  -w /home/node/app \
  -p 8080:8080 \
  -u $(id -u ${USER}):$(id -g ${USER}) \
  node:20 \
  bash
