FROM node:8.11.4-alpine as builder
COPY package.json ./
RUN npm remove cypress --save
RUN npm install && mkdir /actest-adam && mv ./node_modules ./actest-adam
WORKDIR /actest-adam
COPY . .
RUN npm run-script build --prod --target=production --environment=prod --build-optimizer
FROM nginx:1.13.9-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /actest-adam/dist/acTest /usr/share/nginx/html
COPY --from=builder /actest-adam/entrypoint.sh /usr/share/nginx/
RUN chmod +x /usr/share/nginx/entrypoint.sh
CMD ["/bin/sh", "/usr/share/nginx/entrypoint.sh"]
