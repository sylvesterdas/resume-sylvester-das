#!/bin/env bash

docker rmi $(sudo docker images -f "[Cdangling=true" -q)

docker-compose up --build -d 
