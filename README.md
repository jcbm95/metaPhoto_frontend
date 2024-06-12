# Meta Photo frontend

Este repositorio contiene la aplicacion web para un ejercicio llamado metaphoto para poder visualizar fotos aplicando diferentes tipos de busqueda.

Link: [Link to Meta Photo Website](http://meta-photo-website.s3-website-us-east-1.amazonaws.com/photo)
Backend: [Link to Meta Photo Website](https://github.com/jcbm95/meta_photo_backend.git)
Tecnologia utilizada:

- Web app React + Vite in S3 bucket AWS
- Node JS backend in ec2 AWS

## Requisitos

- Photo display
- Search

## Configuración

1. Clona el repositorio: `git clone https://github.com/jcbm95/metaPhoto_frontend.git`
2. Instala las dependencias: `npm install`
3. Ejecuta el proyecto: `npm run dev`

## Estructura del Proyecto

1. **src**
   - **assets**
     - Carpeta para almacenar activos estáticos como imágenes, fuentes, etc.
   - **hooks**
     - `useForm.js`: Custom hook para manejar la lógica de formularios.
   - **metaPhotos**
     - **components**
       - `index.js`: Archivo de entrada para los componentes relacionados con Meta Photos.
       - `MetaPhotoCard.jsx`: Componente para mostrar una tarjeta de Meta Photo.
       - `MetaPhotoList.jsx`: Componente para listar Meta Photos.
     - **helpers**
       - `getAllPhotos.js`: Función para obtener todas las fotos.
       - `getPhotoById.js`: Función para obtener una foto por su ID.
       - `getPhotosPagination.js`: Función para obtener fotos con paginación.
       - `getPhotosSearch.js`: Función para buscar fotos.
       - `index.js`: Archivo de entrada para los helpers relacionados con Meta Photos.
     - **pages**
       - `AlbumPage.jsx`: Página para mostrar un álbum.
       - `InfoPhotoPage.jsx`: Página para mostrar información detallada de una foto.
       - `PhotoPage.jsx`: Página para mostrar fotos.
       - `SearchPhotoPage.jsx`: Página para buscar fotos.
       - `index.js`: Archivo de entrada para las páginas relacionadas con Meta Photos.
     - **routes**
       - `HeroesRoutes.jsx`: Define las rutas para los héroes (probablemente un remanente de otro proyecto o parte del proyecto actual).
       - `index.js`: Archivo de entrada para las rutas relacionadas con Meta Photos.
   - **router**
     - `AppRouter.jsx`: Componente de enrutamiento principal de la aplicación.
   - **ui**
     - **components**
       - `Navbar.jsx`: Componente para la barra de navegación.
     - `index.js`: Archivo de entrada para los componentes de la UI.
     - `main.jsx`: Punto de entrada principal de la aplicación.
     - `MetaPhotoApp.jsx`: Componente principal de la aplicación Meta Photo.
     - `styles.css`: Archivo de estilos CSS globales.
