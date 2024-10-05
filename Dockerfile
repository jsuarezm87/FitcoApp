# Utiliza una imagen de Node.js
FROM node:18 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación Angular para producción
RUN npm run build

# Usa una imagen de servidor web Nginx para servir la aplicación Angular
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

# Expon el puerto 80
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
