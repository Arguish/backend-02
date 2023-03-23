# backend-02

## Estructura DB

![](/Screenshot%20from%202023-03-23%2009-46-31.png)

---

## Tecnologias

<img src="https://logo.clearbit.com/nodejs.org" width="21.5%"><img src="https://logo.clearbit.com/dotenv.org" width="21.5%"><img src="https://logo.clearbit.com/expressjs.org" width="21.5%"><img src="https://codezombiech.gallerycdn.vsassets.io/extensions/codezombiech/gitignore/0.9.0/1658773731427/Microsoft.VisualStudio.Services.Icons.Default" width="21.5%"><img src="https://logo.clearbit.com/sequelize.org" width="21.5%"><img src="https://logo.clearbit.com/npmjs.org" width="21.5%"><img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/6a813a0c-ba36-40ae-82f3-85b420391de1.png?auto=format&q=50&w=80&h=80&fit=max&dpr=3" width="21.5%"><img src="https://cdn.iconscout.com/icon/free/png-256/nodemon-226039.png" width="21.5%"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/morgan-freeman-1591029645.jpg?crop=0.668xw:1.00xh;0,0&resize=640:*" width="21.5%">

---

## NPM I

- npm i -y
- npm i nodemon
- npm i express
- npm i morgan
- npm i dotenv
- npm i sequelize
- npm i mysql2

---

## Procedimiento

- 1 Instalacion
- 2 Crear DB
- 3 Establecer conexion con DB en la carpeta DB
- 4 Establecer estructura de carpetas API
- 5 Modelos -> exportar modelo
- 6 Creamos un grupo de relaciones en DB y syncronizamos en el index
- 7 Si todo esta ok, las tablas se habran creado en la base de datos (ojo, el force:true machaca la tabla entera, hay que quitarlo de cara a la version final)
- 8 Ahora hay que empezar a crear las rutas que se vana requerir con EXPRESS, creamos un nodo general `/api` desde el que redireccionaremos todo lo demas
- 9 Con las rutas del CRUD creadas en el router, pasamos a crear el controlador
- 10

---
