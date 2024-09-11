# Usa la imagen de Nginx
FROM nginx:alpine

# Copia los archivos estáticos generados por Vite a la carpeta de Nginx
COPY dist /usr/share/nginx/html

# Exponer el puerto 80 para que se pueda acceder desde el exterior
EXPOSE 80
