const { Country, Activity } = require('../db.js');
const axios = require('axios');
/*
-const { Country, Activity } = require('../db.js');: Importa los modelos Country y Activity
que has definido en tu archivo db.js. 
Estos modelos permitirán interactuar con la base de datos.

-const axios = require('axios');: Importa la biblioteca Axios, que se utiliza para realizar
solicitudes HTTP.

*/




//Obtengo la informacion de la Api
const ApiData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/countries'); 
        const countries = await response.data.map(country => {
            return{
                id: country.cca3,
                name: country.name.common,
                image: country.flags.png,
                continent: country.continents? country.continents[0]: 'undefined',
                capital: country.capital? country.capital.join(', '): 'undefined',
                subregion: country.subregion? country.subregion: 'undefined',
                area: country.area? country.area: 'undefined',
                population: country.population? country.population: 'undefined',
            }
        }); 
        return countries; 
    } catch (error) {
        console.log('Error al obtener los datos de la Api', error);
    }
};
/*
-"const ApiData = async () => {":
 Define una función asincrónica llamada ApiData. Esta función se encargará
  de obtener datos de la API.


-"try { ... } catch (error) { ... }":
 Encierra el bloque de código en un bloque try para manejar posibles errores.
 Si ocurre algún error dentro del bloque try, se capturará y se manejará en el bloque catch.


-"const response = await axios.get('http://localhost:5000/countries');":
 Utiliza Axios para realizar una solicitud GET a la URL 'http://localhost:5000/countries',
  que es la URL de la API que proporcionaste anteriormente.
   El resultado de la solicitud se almacena en la variable response.


-"const countries = await response.data.map(country => { ... });":
 Accede a la propiedad data de la respuesta de la API y aplica el método map para
  transformar los datos de cada país en el formato deseado.
   La información seleccionada se asigna a un objeto con propiedades como id, name,
    image, continent, capital, subregion, area y population.

-"return countries;": Devuelve el array countries, que contiene los datos transformados
 de los países.

-"console.log('Error al obtener los datos de la Api', error);": Si ocurre un error
 en el bloque try, se captura y se muestra un mensaje de error en la consola.
*/








//Traigo la info de la Api y la cargo en mi Base de Datos
const ApiToDB = async () => {
    try {
        const DataBase = await Country.findAll(); 
        // Intenta buscar todos los países en la base de datos utilizando el modelo "Country".
        if(DataBase.length < 1) {
             // Verifica si no hay datos en la base de datos.
            const allCountries = await ApiData();
            // Llama a la función "ApiData" que definiste previamente para obtener datos de la API.
            await Country.bulkCreate(allCountries)
            // Utiliza el método "bulkCreate" del modelo "Country" para insertar múltiples registros en la base de datos al mismo tiempo.
            // El array "allCountries" contiene los datos obtenidos de la API en el formato deseado.
            console.log('Base de datos cargada con exito')
            // Muestra un mensaje en la consola indicando que la base de datos se cargó exitosamente.
        }
    } catch (error) {
        console.log('Error al cargar los datos de la Api en la Data Base',error);
         // Si ocurre un error durante el proceso, muestra un mensaje de error en la consola.
    }
};

/* 
En resumen, este módulo ApiToDB tiene como objetivo cargar la información de la API en la base
 de datos. Comienza buscando todos los países en la base de datos utilizando el modelo Country.
  Si la base de datos está vacía (es decir, si la longitud del resultado de búsqueda es menor
     que 1), llama a la función ApiData para obtener los datos de la API en el formato deseado.
      Luego, utiliza el método bulkCreate para insertar estos datos en la base de datos.
       Si todo se realiza sin errores, muestra un mensaje en la consola indicando que la base
        de datos se cargó exitosamente. Si ocurre algún error durante el proceso, muestra un
         mensaje de error en la consola.
*/


module.exports = ApiToDB; 