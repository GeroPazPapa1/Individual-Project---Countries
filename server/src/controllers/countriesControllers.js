const { Country, Activity } = require('../db');
const { Op } = require('sequelize');
//↑ En estas lineas se importan los modelos "Country" y "Activity"
//   desde el archivo db.js, que representa las tablas correspondientes
//    en la base de datos.  Además, se importa el objeto Op de Sequelize 
//     para utilizar operadores en las consultas.

const getCountries = async (name) => {
    if(!name) {
        return await Country.findAll({
            include: Activity,
            });
        }
    
//↑ Aquí se define la función getCountries, que se encarga de obtener países. 
//   La función toma un parámetro llamado name, que es opcional y se utiliza para 
//    realizar un filtrado de países por nombre.

// Si el parámetro name no está presente (es null o undefined), la función realiza 
//  una consulta a la tabla Country utilizando el método findAll de Sequelize para 
//   obtener todos los países. El argumento include se utiliza para incluir la asociación
//    con la tabla Activity en la consulta. Esto significa que para cada país obtenido, 
//     también se obtendrán las actividades turísticas asociadas a ese país.//


const countries = await Country.findAll({
    where: {
        name: {
            [Op.iLike]: `%${name}%`,
        },
    },
    include: Activity,
});
//↑ Si el parámetro name está presente, se realiza otra consulta a la tabla Country, 
//   pero esta vez se utiliza la opción where para filtrar los países cuyo nombre coincida
//    (parcialmente) con el valor proporcionado en name.
//     Se utiliza el operador Op.iLike para realizar una búsqueda case-insensitive 
//      (sin distinguir mayúsculas y minúsculas).

// En esta consulta también se incluye la asociación con la tabla Activity, 
//  de manera que para cada país obtenido, también se obtendrán las actividades
//   turísticas asociadas.

if (countries.length ===0) {
    throw new Error("Country not found");
}
//↑ Después de obtener los países, se verifica si la lista de países obtenidos es vacía
//   (countries.length === 0). Si no se encontraron países que coincidan con el filtro, 
//    se lanza un error con el mensaje 'Country not found'.
    return countries;   
    //↑ Finalmente, la función devuelve la lista de países obtenidos, que puede estar vacía si no se proporcionó un valor para name.
};



const getCountryById = async (id) => {
//↑ En esta parte, se define la función getCountryById, que se encarga de obtener
//   un país por su identificador (id).
    return await Country.findByPk(id, {
        include: Activity,
//↑ Se utiliza el método findByPk de Sequelize para
//    buscar un país por su clave primaria (en este caso, el identificador). 
//     Al igual que en la función anterior, se incluye la asociación con la tabla Activity 
//      en la consulta.
    });
}


module.exports = { getCountries, getCountryById };

//↑Por último, se exportan las funciones getCountries y 
// getCountryById para que puedan ser utilizadas en otros archivos.



//En resumen, el archivo countryControllers.js contiene dos funciones: 
// getCountries para obtener países con un filtro opcional por nombre y getCountryById 
//  para obtener un país por su identificador. Ambas funciones utilizan los modelos Country
//   y Activity junto con Sequelize para realizar consultas a la base de datos y obtener los
//    resultados deseados.