/*En resumen, las rutas son una parte esencial de tu proyecto ya que definen cómo se comunicarán las solicitudes entre el cliente y el servidor, y cómo se manejarán las operaciones relacionadas con las actividades y los países. Cada ruta está asociada a un controlador que contiene la lógica para realizar acciones específicas en base a la solicitud recibida.*/

const { Router } = require('express');
//↑ En esta línea, se importa el objeto Router desde el módulo express.
//  Al igual que en el archivo anterior, este objeto permite crear manejadores de 
//   rutas que luego se pueden montar en la aplicación principal de Express.

const { getCountriesHandler, getCountryIdHandler } = require("../handlers/countriesHandlers");
//↑ En esta línea, se importan las funciones de los manejadores de rutas para los países 
//   desde el archivo countriesHandlers.js. Estas funciones son getCountriesHandler y 
//    getCountryIdHandler.

const countriesRouter = Router();
//↑ Aquí se crea una instancia de un enrutador ("Router") utilizando el método Router() de Express. 
//   Este enrutador se utilizará para definir las rutas específicas relacionadas con los países.

countriesRouter.get("/", getCountriesHandler);
//↑ Esta línea define una ruta GET en el enrutador. Cuando se haga una solicitud "GET" a la 
//   ruta "/", el manejador de ruta getCountriesHandler se activará. Este manejador se encarga de
//    obtener todos los países.

countriesRouter.get("/:idPais", getCountryIdHandler);
//↑ Aquí se define una ruta GET en el enrutador. Esta ruta tiene un parámetro dinámico 
//     ":idPais" que representa el ID del país. Cuando se haga una solicitud "GET" a una ruta como 
//      "/countries/1" (donde 1 es un ejemplo de ID de país), el manejador de ruta 
//       "getCountryIdHandler"  se activará. Este manejador se encarga de obtener un país 
//        específico por su ID. 

module.exports = countriesRouter;
//↑Finalmente, se exporta el enrutador countriesRouter para que pueda ser utilizado en otros
// archivos. Al igual que en el archivo anterior, esto permite que este enrutador se monte
//  en la aplicación principal de Express para manejar las rutas relacionadas con los países.

//En resumen, el archivo countryRoutes.js define un enrutador llamado countriesRouter que
// maneja las rutas relacionadas con los países. Se definen dos rutas: una para obtener todos
//  los países (GET) y otra para obtener un país por su ID (GET con un parámetro dinámico).
//   Cada ruta se asocia con su respectivo manejador de ruta, que contiene la lógica para
//    realizar las operaciones correspondientes.