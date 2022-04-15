#!/bin/sh

sudo docker rm -f bsm_project_container | true
sudo docker rmi react_nginx_image:latest | true
sudo docker-compose up -d
sudo docker container prune -f


                
                
                
                   
                   
                   
                   
                   
                   
                   
                