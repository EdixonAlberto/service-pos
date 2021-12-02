#!/bin/sh
sudo docker build .
sudo docker run -d -p 3000:3000 -p 5000:5000 service-pos
