
FROM nginx

WORKDIR /secrets

COPY --chown=nginx fullchain.pem fullchain.pem
COPY --chown=nginx privkey.pem privkey.pem

COPY --chown=nginx default.conf.template /etc/nginx/conf.d/default.conf
