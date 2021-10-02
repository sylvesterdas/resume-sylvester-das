#!/bin/env bash

docker rmi $(docker images -f "dangling=true" -q)

docker-compose up --build -d 
