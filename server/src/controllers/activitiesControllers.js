const { Activity, Country } = require('../db'); // Esta línea importa los modelos Activity y Country desde el archivo db.js, que representa las tablas correspondientes en la base de datos. La variable Activity representa el modelo de la tabla de actividades, y la variable Country representa el modelo de la tabla de países.

//↑ Importa los modelos Activity y Country desde el archivo db.js, que representan las tablas correspondientes en la base de datos.


const getActivity = async () => {
    //↑ Esta parte define una función getActivity que se encarga de obtener todas las actividades.
        
    return await Activity.findAll({
        //↑ Realiza el método findAll de Sequelize para realizar una consulta a la tabla de actividades y obtener todas las filas de datos.
        //↑ El método findAll devuelve una promesa, por lo que la función getActivity también es asíncrona (utiliza async y await).
        include: [
        //↑ Dentro de la consulta findAll, se utiliza la opción include para especificar las relaciones que se deben incluir en la consulta.
            {
                model: Country,
                attributes: ["id"]
                //↑ Especifica, que se incluye la relación con el modelo Country.
                //↑ Además, se especifica que solo se incluya el atributo "id" del modelo Country en la consulta.
            }
        ]
    });
};

const createActivity = async (name, difficulty, duration, season, countries) => {
    console.log(name, difficulty, duration, season, countries);
    //↑ Define una función createActivity que crea una nueva actividad.
    let durationN = +duration
    console.log(typeof durationN);
newActivity = await Activity.create({ name, difficulty, duration:durationN, season });
    //↑ Crea una nueva instancia del modelo Activity con los parámetros proporcionados anteriormente y la asigna a la variable newActivity. El método create devuelve una promesa.
newActivity.addCountries(countries);
    //↑ Asocia los países especificados a la nueva actividad utilizando el método addCountries, que es generado automáticamente por Sequelize debido a la relación definida entre Activity y Country. La asociación se basa en los identificadores de los países proporcionados en el parámetro countries.
return newActivity;
    //↑ Finalmente con return devuelve la nueva actividad creada.
}

const modifyActivity = async (id, name, difficulty, duration, season, countries) => {
    //↑ Se define la función modifyActivity que se encarga de modificar una actividad existente. La función toma como parámetros los de arriba
    try {
        const activity = await Activity.findByPk(id);
        if (!activity) {
            throw new Error("No se encontró la actividad");
        }
        //↑ Se utiliza el método findByPk de Sequelize para buscar una actividad por su id. 
        //  Si no se encuentra la actividad, se lanza un error.
        await activity.setCountry(countries);
        //↑ Se utiliza el método setCountries para asociar los países especificados a la actividad existente. El método setCountries actualiza la asociación entre la actividad y los países en base a los identificadores proporcionados en el parámetro countries.

        const updateActivity = await activity.update({name, difficulty, duration, season });
        //↑ Se utiliza el método update para actualizar los atributos name, difficulty, duration y season de la actividad con los valores proporcionados.
        return updateActivity;
        //↑ Finalmente, se devuelve la actividad modificada.
    } catch (error) {
        
    }
};

module.exports = { createActivity, getActivity, modifyActivity};
//↑ Esta línea exporta las funciones createActivity, getActivity y 
// modifyActivity para que puedan ser utilizadas en otros archivos.


//En resumen, estos controladores se encargan de manejar las operaciones 
// relacionadas con las actividades turísticas. La función getActivity obtiene
//  todas las actividades, createActivity crea una nueva actividad y la asocia
//   a los países proporcionados, y modifyActivity modifica una actividad existente
//    y actualiza su asociación con los países.