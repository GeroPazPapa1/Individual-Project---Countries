const { Router } = require("express");
//↑ En esta línea, se importa el objeto Router desde el módulo express. 
//   Al igual que en los archivos anteriores, este objeto permite crear manejadores
//    de rutas que luego se pueden montar en la aplicación principal de Express.

const countriesRouter = require('../routes/countryRoutes');
const activitiesRouter = require('../routes/activityRoutes');
//↑ En estas líneas, se importan los enrutadores countriesRouter y activitiesRouter
//   desde los archivos respectivos countriesRouter.js y activitiesRouter.js.
//    Estos enrutadores contienen las rutas y manejadores de rutas relacionados
//     con los países y las actividades.


const router = Router();
//↑ Aquí se crea una instancia de un enrutador (Router) utilizando el método Router() de Express.
//   Este enrutador principal se utilizará para configurar y montar los enrutadores específicos.

router.use('/countries', countriesRouter);
//↑ Esta línea configura el enrutador principal para usar el enrutador countriesRouter
// cuando las rutas tengan el prefijo /countries. En otras palabras, todas las rutas definidas
//  en countriesRouter serán accesibles bajo la ruta base /countries.


router.use('/activities', activitiesRouter);
//↑ De manera similar a la línea anterior, esta configuración agrega el enrutador
//   activitiesRouter bajo el prefijo /activities. Todas las rutas definidas en activitiesRouter
//  serán accesibles bajo la ruta base /activities.



module.exports = router;
//↑ Finalmente, se exporta el enrutador principal router. Este enrutador principal es el que se montará en la aplicación de Express para manejar todas las rutas relacionadas con países y actividades.

//↑ En resumen, el archivo index.js configura y monta los enrutadores countriesRouter y
//   activitiesRouter bajo los prefijos /countries y /activities, respectivamente.
//  Esto permite que las rutas definidas en los enrutadores específicos sean accesibles
//   en la aplicación principal. Cada enrutador se asocia con su conjunto correspondiente
//    de rutas y manejadores de rutas.