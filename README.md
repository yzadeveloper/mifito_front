# README - Proyecto miFito_Calc

Bienvenido al repositorio del proyecto miFito_Calc, una aplicación web desarrollada con React.js para el cálculo de dosis en tratamientos fitosanitarios. Este proyecto incluye tanto la parte cliente, desarrollada en React.js, como la parte servidor, construida en Laravel 10. La comunicación entre el cliente y el servidor se realiza a través de una API.

## Descripción del Proyecto

**miFito_Calc** es una herramienta destinada a facilitar el cálculo de dosis en tratamientos fitosanitarios para el sector agrícola. La aplicación permite a los usuarios acceder a información detallada sobre productos fitosanitarios, incluyendo dosis generales, precio por ml, fichas técnicas del Ministerio y otros datos relevantes como comentarios técnicos y recordatorios para el consumidor final.

## Tecnologías Utilizadas

- **Cliente (Frontend):** React.js
- **Servidor (Backend):** Laravel 10
- **Comunicación:** API RESTful

## Características Principales

- Búsqueda y consulta de productos fitosanitarios.
- Cálculo de dosis específicas para tratamientos agrícolas.
- Visualización de fichas técnicas y detalles de productos.
- Comentarios técnicos y recordatorios para el consumidor final.
- Importación de datos desde la API de Laravel 10.

## Configuración del Entorno de Desarrollo

### Cliente (React.js)

1. Clone el repositorio del cliente:
   ```bash
    git clone https://github.com/yzadeveloper/mifito_front.git
   ```

2. Navegue al directorio del cliente:
   ```bash
   cd miFito_Calc-client
   ```

3. Instale las dependencias del cliente:
   ```bash
   npm install
   ```

4. Inicie el servidor de desarrollo del cliente:
   ```bash
   npm start
   ```

4. Instale las siguientes dependencias adicionales:
   ```bash
   npm i tailwind
   npm i axios
   npm i react-router-dom
   npm i react-modal
   npm i react-toastify
   npm i jspdf --save
   ```


### Servidor (Laravel 10)

1. Clone el repositorio del servidor:
   ```bash
   https://github.com/yzadeveloper/mifito_back.git

   ```

2. Navegue al directorio del servidor:
   ```bash
   cd miFito_Calc-server
   ```

3. Instale las dependencias del servidor:
   ```bash
   composer install
   ```

4. Configure el archivo `.env` con los datos de su base de datos y otros parámetros.

5. Ejecute las migraciones y alimente la base de datos con datos iniciales:
   ```bash
   php artisan migrate --seed
   ```

6. Inicie el servidor Laravel:
   ```bash
   php artisan serve
   ```

## Uso de la API

La API de Laravel 10 proporciona datos esenciales para el funcionamiento de la aplicación cliente. Puede consultar la documentación de la API para obtener detalles sobre las rutas y los puntos finales disponibles.



## Contacto

Si tiene alguna pregunta o necesita asistencia, puede ponerse en contacto con el equipo de desarrollo a través de la siguiente dirección de correo electrónico: [alfaroyolanda@hotmail.com](mailto:alfaroyolanda@hotmail.com).

¡Gracias por contribuir al éxito de miFito_Calc!

---

