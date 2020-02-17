FROM nginx:1.15

ENV http_proxy $http_proxy
ENV https_proxy $https_proxy
ENV no_proxy $no_proxy
ENV PATH /usr/local/bin:$PATH


COPY . .

RUN apt-get update && \
    sed 's/const HOST = "localhost"/const HOST = self.location.hostname/' graphexp-master/scripts/graphConf.js > graphConf.js && \
    mv graphConf.js graphexp-master/scripts && \
    mv graphexp-master/*  /usr/share/nginx/html


WORKDIR  /usr/share/nginx/html