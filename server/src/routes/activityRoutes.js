/*En resumen, las rutas son una parte esencial de tu proyecto ya que definen cómo se comunicarán las solicitudes entre el cliente y el servidor, y cómo se manejarán las operaciones relacionadas con las actividades y los países. Cada ruta está asociada a un controlador que contiene la lógica para realizar acciones específicas en base a la solicitud recibida.*/


const { Router } = require('express');
//↑ En esta línea, se importa el objeto Router desde el módulo express. 
//   El objeto Router permite crear manejadores de rutas que luego se pueden 
//    montar en la aplicación principal de Express.


const { getActivityHandler, postActivityHandler, putActivityHandler } = require('../handlers/activitiesHandlers');
//↑ En esta línea, se importan las funciones de los manejadores de rutas para las 
//   actividades desde el archivo activitiesHandlers.js.
//    Las funciones: getActivityHandler, postActivityHandler y putActivityHandler.

const activitiesRouter = Router();
//↑ Aquí se crea una instancia de un enrutador (Router) utilizando el método Router() de 
//   Express. Este enrutador se utilizará para definir las rutas específicas relacionadas con las
//    actividades.

activitiesRouter.get("/", getActivityHandler);
//↑ Esta línea define una ruta GET en el enrutador.
//   Cuando se haga una solicitud GET a la ruta /, el manejador de ruta getActivityHandler
//    se activará. Este manejador se encarga de obtener todas las actividades turísticas.

activitiesRouter.post("/", postActivityHandler);
//↑ Aquí se define una ruta POST en el enrutador. Cuando se haga una solicitud POST a la
//   ruta /, el manejador de ruta postActivityHandler se activará. Este manejador se encarga
//    de crear una nueva actividad turística.

activitiesRouter.put("/:id", putActivityHandler);
//↑ En esta línea se define una ruta PUT en el enrutador. 
//   Cuando se haga una solicitud PUT a la ruta /:id
//    (donde :id es un parámetro dinámico que representa el ID de la actividad),
//     el manejador de ruta putActivityHandler se activará. Este manejador se encarga
//      de actualizar una actividad existente.

module.exports = activitiesRouter;
// ↑Finalmente, se exporta el enrutador activitiesRouter para que pueda ser utilizado en otros 
//  archivos. Esto permite que este enrutador se monte en la aplicación principal de Express 
//   para manejar las rutas relacionadas con las actividades.

//En resumen, el archivo activityRoutes.js define un enrutador llamado activitiesRouter
// que maneja las rutas relacionadas con las actividades turísticas. Se definen tres rutas:
//  una para obtener todas las actividades (GET), una para crear una nueva actividad (POST) 
//   y otra para actualizar una actividad existente (PUT). Cada ruta se asocia con su respectivo
//    manejador de ruta, que contiene la lógica para realizar las operaciones correspondientes.