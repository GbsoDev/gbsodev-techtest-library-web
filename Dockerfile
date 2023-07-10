# Usa una imagen base de Nginx
FROM nginx:stable-alpine
# Copia el archivo de configuración de Nginx al contenedor
COPY nginx.conf /etc/nginx/nginx.conf
# Establece el directorio de trabajo
WORKDIR /usr/share/nginx/html
# Copia los archivos de la compilación al directorio de trabajo establecido
COPY dist/gbsodev-techtest-library-web/ .
# Expone el puerto 80 para que el contenedor pueda recibir solicitudes HTTP
EXPOSE 80
# Comando de inicio del servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
