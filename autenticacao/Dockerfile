#Imagem Base
FROM node:15
#Criar pasta de trabalho dentro da imagem
WORKDIR /auth
#Copiamos a app para lá
COPY package.json /auth/
COPY package-lock.json /auth/
RUN npm install
COPY . /auth/
#Expomos a porta que irá correr
EXPOSE 9000
#Indicamos como arrancar a aplicação

CMD [ "npm", "start" ]
