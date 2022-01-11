# build stage
FROM node:lts-alpine as build-stage
WORKDIR /frontend
COPY package*.json /frontend/
RUN npm install
COPY . /frontend/
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /frontend/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/
COPY ./certs/__epl_di_uminho_pt_certificate.cer /etc/ssl/
COPY ./certs/epl.di.key /etc/ssl/
#EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
