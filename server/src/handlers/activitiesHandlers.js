const { createActivity, getActivity, modifyActivity } = require('../controllers/activitiesControllers');
//↑ En esta línea, se importan las funciones createActivity, getActivity y modifyActivity
//   desde el archivo activitiesControllers.js. Estas funciones son los controladores que
//    manejan las operaciones relacionadas con las actividades turísticas.

const getActivityHandler = async (req, res) => {
    try {
        const activity = await getActivity();
        res.status(200).json(activity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
//↑ Esta parte define el manejador de la ruta para obtener todas las actividades. 
//   El manejador es una función asincrónica (async) que se encarga de manejar la solicitud HTTP
//     para obtener todas las actividades.
// Dentro del manejador, se llama a la función getActivity para obtener todas las actividades. 
//  Si la función se ejecuta correctamente, se envía una respuesta con el código de estado 200 
//   y las actividades en formato JSON (res.status(200).json(activity)). 
//    Si ocurre algún error durante la ejecución de la función, se envía una respuesta de error
//     con el código de estado 400 y el mensaje de error en formato
//      JSON (res.status(400).json({ error: error.message })).



const postActivityHandler = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        if (countries.length === 0) throw new Error('Debe estara asociado a un pais');
        const newActivity = await createActivity(name, difficulty, duration, season, countries);
        res.status(200).json(newActivity);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};
//↑ En esta parte, se define el manejador de la ruta para crear una nueva actividad. 
//   El manejador es una función asincrónica que se encarga de manejar la solicitud HTTP 
//    para crear una nueva actividad.

// Primero, se desestructura el objeto req.body para obtener los datos de la actividad 
//  que se enviaron en el cuerpo de la solicitud (nombre, dificultad, duración, temporada y 
//   países asociados).

// Luego, se verifica si la actividad está asociada a algún país. 
//  Si el array de países (countries) está vacío, se lanza un error con
//   el mensaje 'Debe estar asociado a un país'.

// Después, se llama a la función createActivity con los datos de la nueva actividad para crearla.
//  Si la función se ejecuta correctamente, se envía una respuesta con el código de estado 200
//   y la nueva actividad creada en formato JSON (res.status(200).json(newActivity)). 

// Si ocurre algún error durante la ejecución de la función, se envía una respuesta de 
//  error con el código de estado 400 y el mensaje de error en 
//   formato JSON (res.status(400).json({ error: error.message })).


const putActivityHandler = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    const { id } = req.params;
    try {
        if(countries.length === 0) throw new Error("Debe estar asociado a un país");
        const modifiedActivity = await modifyActivity (id, name, difficulty, duration, season, countries);
        res.status(200).json(modifiedActivity);
    } catch (error) {
        res.status(400).json({ error:error.message });
    }
};
//↑ En esta parte, se define el manejador de la ruta para modificar una actividad existente. 
//   El manejador es una función asincrónica que se encarga de manejar la solicitud HTTP para
//    modificar una actividad.

// Al igual que en el manejador anterior, se desestructuran los datos de la actividad del objeto
//  req.body (nombre, dificultad, duración, temporada y países asociados). 
//   Además, se obtiene el identificador (id) de la actividad desde los parámetros de la
//    URL (por ejemplo, /activities/1).

// Se verifica si la actividad está asociada a algún país. 
//  Si el array de países (countries) está vacío, se lanza un error con
//   el mensaje 'Debe estar asociado a un país'.

// Luego, se llama a la función modifyActivity con los datos de la actividad y el
//  identificador para modificarla. Si la función se ejecuta correctamente, 
//   se envía una respuesta con el código de estado 200 y la actividad modificada en 
//    formato JSON (res.status(200).json(modifiedActivity)). 
// Si ocurre algún error durante la ejecución de la función, se envía una respuesta
//  de error con el código de estado 400 y el mensaje de error en formato
//   JSON (res.status(400).json({ error: error.message })).



module.exports = { getActivityHandler, postActivityHandler, putActivityHandler };
//↑ Por último, se exportan los manejadores de las rutas como un objeto para que puedan ser 
// utilizados en otros archivos.

//↑ En resumen, el archivo activitiesHandlers.js contiene tres manejadores de rutas para
//   obtener todas las actividades, crear una nueva actividad y modificar una actividad existente.
//  Estos manejadores utilizan las funciones de los controladores
//   (createActivity, getActivity y modifyActivity) 
//    para realizar las operaciones relacionadas con las actividades turísticas y 
//     envían las respuestas apropiadas en formato JSON.