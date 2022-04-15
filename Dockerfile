FROM nginx:latest
WORKDIR /var/www/html
ADD ./build .
RUN ls && rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
