const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
//↑ En estas líneas, se importan los módulos necesarios para construir y configurar el servidor.
//   express es el marco de aplicación web utilizado para crear el servidor. cookieParser,
//    bodyParser y morgan son middlewares que se utilizan para gestionar cookies, analizar
//     el cuerpo de las solicitudes y registrar información de las solicitudes en la consola.
//      routes es el enrutador principal que definiste en el archivo index.js y contiene todas
//       las rutas configuradas para el proyecto.

/*Aquí se están importando los módulos necesarios para configurar y construir el servidor:

express: Es el marco de aplicación web que se utiliza para crear y configurar el servidor.

router: Se importa el enrutador principal que definiste en el archivo index.js, que 
contiene todas las rutas configuradas para el proyecto.

morgan: Es un middleware que se utiliza para registrar información sobre las solicitudes
entrantes en la consola.

cors: Es otro middleware que permite la comunicación entre diferentes dominios
(para manejar las solicitudes de origen cruzado).*/


require('./db.js');
//↑ Esta línea importa y ejecuta el archivo db.js, que se encarga de conectar la base
//   de datos utilizando Sequelize.

const server = express();
/*Se crea una instancia del servidor utilizando el módulo express.
  Esta instancia se almacenará en la variable server y se utilizará para configurar y manejar
  las solicitudes entrantes.*/


server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173/");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
/*-server.use((req, res, next) => {...}: Define un middleware personalizado que maneja las
 cabeceras CORS en las respuestas. Esto asegura que las solicitudes de diferentes dominios
  puedan acceder a tu API.

-res.header("Access-Control-Allow-Origin", "*");: Establece el encabezado
 Access-Control-Allow-Origin en *, lo que permite el acceso a tu API desde cualquier origen.

-res.header("Access-Control-Allow-Credentials", "true");: Habilita el envío de cookies y
 credenciales en las solicitudes CORS.

-res.header("Access-Control-Allow-Headers", ...);: Define los encabezados permitidos en las
 solicitudes CORS.

-res.header("Access-Control-Allow-Methods", ...);: Define los métodos HTTP permitidos en las
 solicitudes CORS.*/


 const Options = { origin: "*" };
// Crea un objeto de opciones para el middleware cors.
//  En este caso, se configura para permitir el acceso desde cualquier origen (*).

server.use(morgan("dev"));
server.use(express.json());
server.use(cors(Options));
/*Aquí se aplican varios middlewares al servidor:

morgan("dev"): Configura el middleware morgan para que registre información de las solicitudes
en la consola. El parámetro "dev" establece un formato de registro para el desarrollo.
express.json(): Middleware que analiza el cuerpo de las solicitudes entrantes con formato
JSON y lo convierte en un objeto JavaScript.
cors(): Middleware que habilita la comunicación entre diferentes dominios, lo que es esencial
cuando se construye una API para ser consumida por una aplicación web en un dominio diferente.*/




server.use("/", router);
/*Se monta el enrutador principal router en la ruta raíz / del servidor. 
Esto significa que todas las rutas definidas en el enrutador se agregarán después de la ruta
 raíz en las solicitudes entrantes.*/



module.exports = server;
/*Finalmente, el servidor configurado se exporta para que pueda ser utilizado y ejecutado desde otros archivos, como tu archivo principal de inicio (por ejemplo, index.js).

En resumen, este archivo server.js importa los módulos necesarios, configura el servidor
Express, aplica middlewares como morgan, express.json() y cors, monta el enrutador principal
en la ruta raíz y exporta el servidor configurado. Es el archivo que crea la base para la
construcción y configuración de tu servidor backend.*/

