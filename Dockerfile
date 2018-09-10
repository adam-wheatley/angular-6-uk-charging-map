FROM node:8.11.4-alpine as builder
COPY package.json ./
RUN npm remove cypress --save
RUN npm install && mkdir /uk-charging-map && mv ./node_modules ./uk-charging-map
WORKDIR /uk-charging-map
COPY . .
RUN npm run-script build --prod --target=production --environment=prod --build-optimizer
FROM nginx:1.13.9-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /uk-charging-map/dist/acTest /usr/share/nginx/html
COPY --from=builder /uk-charging-map/entrypoint.sh /usr/share/nginx/
RUN chmod +x /usr/share/nginx/entrypoint.sh
CMD ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]
