FROM nginx

LABEL maintainer="saklab"
ADD ./client.conf /etc/nginx/conf.d/default.conf

RUN mkdir /root/logs
RUN chmod 755 -R /root

CMD ["nginx", "-g", "daemon off;"]