export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';// SEARCH_COUNTRY: Esta constante representa el tipo de acción para buscar un país por nombre. Será utilizada para identificar las acciones relacionadas con la búsqueda de países en el reducer y en los componentes que despachan la acción.
export const ALL_COUNTRY = 'ALL_COUNTRY';// ALL_COUNTRY: Esta constante representa el tipo de acción para obtener todos los países. Será utilizada para identificar las acciones relacionadas con la obtención de todos los países en el reducer y en los componentes que despachan la acción.
export const FILTER = 'FILTER'; // FILTER: Esta constante representa el tipo de acción para filtrar los países por continente. Será utilizada para identificar las acciones relacionadas con el filtrado de países por continente en el reducer y en los componentes que despachan la acción.
export const ORDER = 'ORDER'; // ORDER: Esta constante representa el tipo de acción para ordenar los países. Será utilizada para identificar las acciones relacionadas con el ordenamiento de países en el reducer y en los componentes que despachan la acción.
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_ACTIVITY = 'GET_ACTIVITY'; // Estas dos constantes adicionales, CREATE_ACTIVITY y GET_ACTIVITY, estan relacionadas con la creación y obtención de actividades.
// Exporta constantes que representan los tipos de acciones que se pueden despachar en Redux.
// Estas constantes se utilizan para identificar la acción en los reducers.
/*Estas constantes son útiles para evitar errores de escritura y garantizar consistencia en
todo el flujo de datos de Redux. Al utilizar estas constantes en lugar de cadenas literales
en el código, se reduce la posibilidad de cometer errores tipográficos y facilita la
identificación de qué tipo de acción se está utilizando en diferentes partes del proyecto.*/


import axios from 'axios'; // ? no se usa ? 


//se define una acción search que realiza una búsqueda de países por nombre
// en el servidor a través de una solicitud HTTP.
export const search = (name) => { // Esto define una función llamada search que acepta un parámetro name, que es el nombre del país a buscar.
    const endpoint = `http://localhost:3001/countries/name?name=${name}` // Se construye una URL de búsqueda utilizando el valor del parámetro name. Esta URL apunta al endpoint del servidor donde se maneja la búsqueda de países por nombre.
    return async (dispatch) => {// La función search devuelve una función asíncrona que acepta dispatch como parámetro. dispatch es una función que permite despachar acciones a los reducers en Redux.
        try { // Aquí se maneja una estructura de manejo de errores para la solicitud y respuesta del servidor.
            const response = await fetch(endpoint) //  Aca, se realiza una solicitud al servidor utilizando la URL endpoint creada. fetch es una función nativa de JavaScript para hacer solicitudes HTTP.
            const data = await response.json() // Se espera la respuesta y se convierte en formato JSON en un objeto JavaScript utilizando response.json().
            return dispatch({ // Se despacha una acción utilizando la función dispatch. Se utiliza el tipo SEARCH_COUNTRY para identificar la acción y se proporciona data como carga útil (payload).
                type: SEARCH_COUNTRY,
                payload: data
            })
        } catch (error) {
            console.log('error:',error)
        }
    }
}
// En resumen, esta acción search realiza una solicitud de búsqueda de países al servidor por nombre utilizando una URL construida dinámicamente. Cuando la respuesta es exitosa, se despacha una acción con los datos de búsqueda para que los reducers puedan actualizar el estado en la aplicación. Si ocurre algún error, se registra en la consola.

export const allCountries = () =>{ // Se define una función llamada allCountries que no acepta ningún parámetro.
    return async(dispatch)=>{ // La función allCountries devuelve una función asíncrona que acepta dispatch como parámetro. dispatch es una función que permite despachar acciones a los reducers en Redux.
        try { // Nuevamente se maneja una estructura de manejo de errores para la solicitud y respuesta del servidor. 
            const response = await fetch('http://localhost:3001/countries') // Se realiza una solicitud al servidor para obtener todos los países. La URL apunta al endpoint del servidor donde se maneja la obtención de todos los países.
            const data = await response.json() // Se espera la respuesta y se convierte en formato JSON en un objeto JavaScript utilizando response.json()
            return dispatch({ // Se despacha una acción utilizando la función dispatch. Se utiliza el tipo ALL_COUNTRY para identificar la acción y se proporciona data como carga útil (payload).
                type:ALL_COUNTRY,
                payload:data
            })
        } catch (error) {
            console.log('error:',error)
        }
    }
}
// En resumen, esta acción allCountries realiza una solicitud al servidor para obtener todos los países. Cuando la respuesta es exitosa, se despacha una acción con los datos de todos los países para que los reducers puedan actualizar el estado en la aplicación. Si ocurre algún error, se registra en la consola.

export const filter = (continent, activityFilter) => { // Se define una función llamada filter que toma dos parámetro continent y activityFilter. Estos parámetros representan el continente y las actividades por la cual se quiere filtrar.
    return { // La función filter devuelve un objeto que representa una acción. Este objeto tiene dos propiedades:
        type: FILTER, // El tipo de acción se establece como FILTER. Esto permite a los reducers en Redux identificar qué tipo de acción se está realizando.
        payload: { // Contiene un objeto con dos propiedades:
            continent: continent, // La propiedad continent del objeto payload contiene el valor del parámetro continent, que es el continente por el cual se desea filtrar.
            activityFilter: activityFilter, //La propiedad activityFilter del objeto payload contiene el valor del parámetro activityFilter, que parece ser un filtro basado en actividades. 
        } // (si puedo obviar decirlo, mejor, sino si) = Estos valores serán utilizados por los reducers para actualizar el estado de la aplicación.
    }
}
// En resumen, esta acción filter se utiliza para crear una acción que representa un filtro por continente y actividades en la aplicación. (si puedo obviar decirlo, mejor, sino si) El tipo de acción es FILTER y el continente y actividad seleccionados se proporcionan como carga útil (payload) en la acción.


export const orderCountry = (order) =>{ // Se define una función llamada orderCountry que toma un parámetro order. Este parámetro representa el criterio de ordenamiento que se va a aplicar.
    return{ // La función orderCountry devuelve un objeto que representa una acción. Este objeto tiene dos propiedades:
        type:ORDER, // El tipo de acción se establece como ORDER. Esto permite que los reducers en Redux identifiquen qué tipo de acción se está realizando.
        payload:order // La propiedad payload contiene el valor del parámetro order, que es el criterio de ordenamiento que se desea aplicar. Este valor será utilizado por los reducers para actualizar el estado de la aplicación y aplicar el ordenamiento correspondiente.
    }
} 

/* Este archivo exporta constantes que representan los tipos de acciones que se pueden
 despachar en Redux. Luego, exporta funciones de acción, como "search", "allCountries",
  "filter" y "orderCountry". Cada función de acción devuelve un objeto que contiene un tipo
   de acción y un posible payload (datos) asociado. Las funciones de acción asincrónicas
    utilizan async/await para realizar solicitudes a la API y luego despachan las acciones
     correspondientes con los datos obtenidos. Las funciones de acción síncronas simplemente
      devuelven un objeto de acción con el tipo y el payload proporcionados. Estas acciones
       serán despachadas por los componentes para actualizar el estado en la tienda Redux. */




export const createActivity = (activities) => { // Define una función llamada createActivity que toma un parámetro activities, que es la información de la actividad que se va a crear.
    return async (dispatch) => { // La función createActivity devuelve una función asíncrona que toma un argumento dispatch, que es la función que Redux proporciona para enviar acciones al store.
        try { // Comienza un bloque try-catch para manejar posibles errores durante la solicitud de creación de actividad.
            const response = await fetch('http://localhost:3001/activities', { // Esta línea utiliza la función fetch para realizar una solicitud HTTP a la URL http://localhost:3001/activities. En este caso, se trata de una solicitud POST para crear una nueva actividad en el servidor.
                method: 'POST', // Se especifica que se está realizando una solicitud POST. Esto indica al servidor que la solicitud está destinada a crear nuevos recursos en el servidor.
                headers: { 'Content-Type': 'application/json'}, // Se configuran los encabezados de la solicitud. En este caso, se establece el encabezado Content-Type como application/json, lo que indica que el cuerpo de la solicitud está en formato JSON.
                body: JSON.stringify(activities) // Aquí se proporciona el cuerpo de la solicitud. La función JSON.stringify() convierte el objeto activities (que contiene información sobre la nueva actividad a crear) en una cadena JSON. Esto significa que los datos se envían en el formato JSON en el cuerpo de la solicitud.
            });
            
            if (!response.ok) { // Verifica si la respuesta no es exitosa.
                throw new Error('Failed to create activity'); //  Si la respuesta no es OK (código 200), se lanza un error para manejarlo en el bloque catch.
            }

            const activityCreated = await response.json(); // Convierte la respuesta de la creación de actividad a formato JSON y almacena la actividad creada en la variable activityCreated.
            console.log(activityCreated0); // Imprime en la consola la actividad creada, lo cual puede ser útil para depuración.

            dispatch({ // Despacha una acción con el tipo CREATE_ACTIVITY y el payload activityCreated.
                type: CREATE_ACTIVITY,
                payload: activityCreated,
            }); // Esto actualiza el estado de la aplicación con la nueva actividad creada.
        } catch (error) { // Captura y maneja cualquier error que ocurra durante el proceso de creación de actividad, 
            console.log(error); // mostrándolo en la consola.
        }
    };
};
// En resumen, el código define una acción createActivity que envía una solicitud POST
// para crear una nueva actividad en el servidor y luego despacha una acción con los datos
//  de la actividad creada para actualizar el estado de la aplicación en el store de Redux.


export const getActivity = () => { // Esta es una función llamada getActivity que devuelve un objeto función. La función interna es una función asíncrona que manejará la obtención de actividades desde el servidor.
    return async (dispatch) => { // Esta línea define la función interna que es asíncrona y toma el parámetro dispatch. dispatch es una función proporcionada por Redux para despachar acciones.
        try { // Aquí comienza un bloque try-catch, donde se intentará realizar la solicitud GET a la URL de las actividades y manejar cualquier error que ocurra.
            const response = await fetch('http://localhost:3001/activities'); // Se realiza una solicitud GET a la URL http://localhost:3001/activities para obtener todas las actividades almacenadas en el servidor.
            // Me parece q nosotros estamos trabajando en el 5000 y no en el 3000
            const data = await response.json(); // Se convierte la respuesta en formato JSON en un objeto JavaScript. Esto permite acceder y utilizar los datos de las actividades.

            return dispatch({ // Si todo va bien, se despacha una acción con el tipo GET_ACTIVITY y los datos de las actividades como payload. 
                type: GET_ACTIVITY,
                payload: data,
            }); // Esto permitirá que el reducer actualice el estado de la aplicación con la nueva lista de actividades.
        } catch (error) { // En caso de que ocurra algún error durante la obtención de actividades, se captura y se muestra en la consola.
            console.log(error);
        }
    };
};

/* En resumen, este código define una acción llamada getActivity que realiza una
 solicitud GET para obtener todas las actividades desde el servidor y luego despacha
 una acción con el tipo GET_ACTIVITY y los datos de las actividades como payload.*/