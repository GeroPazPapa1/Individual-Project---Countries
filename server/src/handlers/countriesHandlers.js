const { getCountries, getCountryById } = require('../controllers/countriesControllers');
//↑ En esta línea, se importan las funciones getCountries y getCountryById desde el 
//   archivo countriesController.js. Estas funciones son los controladores que  
//    manejan las operaciones relacionadas con los países.

const getCountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
      const country = await getCountries(name);
      res.status(200).json(country);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

//↑ Esta parte define el manejador de la ruta para obtener todos los países. 
//  El manejador es una función asincrónica (async) que se encarga de manejar la solicitud HTTP para obtener todos los países.

// Dentro del manejador, se obtiene el parámetro name de la consulta a través del 
//  objeto req.query. Este parámetro se utiliza para filtrar los países por nombre.

// Luego, se llama a la función getCountries con el parámetro name para obtener los países.
//  Si la función se ejecuta correctamente, se envía una respuesta con el código de
//   estado 200 y el resultado (los países) en formato JSON (res.status(200).json(country)).
//    Si ocurre algún error durante la ejecución de la función, se envía una respuesta de
//     error con el código de estado 400 y el mensaje de error en
//      formato JSON (res.status(400).json({ error: error.message })).


const getCountryIdHandler = async (req, res) => {
    const { idPais } = req.params;
    console.log( req.params );
    try {
      const country = await getCountryById(idPais);
      if (!country) throw new Error('Country not found');
      res.status(200).json(country);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
//↑ En esta parte, se define el manejador de la ruta para obtener un país por su ID.
//   El manejador es una función asincrónica que se encarga de manejar la solicitud HTTP 
//    para obtener un país específico.

// Se obtiene el parámetro idPais de los parámetros de la ruta (por ejemplo, /countries/1). 
//  Este parámetro se utiliza para buscar el país por su identificador.
  
// Luego, se llama a la función getCountryById con el parámetro idPais para obtener
//  el país correspondiente. Si la función se ejecuta correctamente y se encuentra el país,
//   se envía una respuesta con el código de estado 200 y el resultado (el país) en formato
//    JSON (res.status(200).json(country)). Si no se encuentra el país, se lanza un error con
//     el mensaje 'Country not found'. Si ocurre algún otro error durante la ejecución de la
//      función, se envía una respuesta de error con el código de estado 400 y el mensaje de
//       error en formato JSON (res.status(400).json({ error: error.message })).

module.exports = { getCountriesHandler, getCountryIdHandler };
//↑ Por último, se exportan los manejadores de las rutas como un objeto para que puedan
// ser utilizados en otros archivos.

// En resumen, el archivo countriesHandlers.js contiene dos manejadores de rutas
//  getCountriesHandler para obtener todos los países y getCountryIdHandler para obtener
//   un país por su ID. Ambos manejadores utilizan las funciones de los controladores
//    (getCountries y getCountryById) para realizar las operaciones relacionadas con los
//     países y envían las respuestas apropiadas en formato JSON.