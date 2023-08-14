// Este código se refiere a la implementación del reducer principal en una aplicación
//  que utiliza Redux para gestionar el estado global. El reducer es responsable de gestionar
//   cómo el estado de la aplicación cambia en función de las acciones que se envían al store
//    de Redux

import { ALL_COUNTRY, FILTER, ORDER, SEARCH_COUNTRY, ORDER, SEARCH_COUNTRY } from "../action/action";
// Importa los tipos de acciones definidos en el archivo "action.js". Estos tipos son constantes que representan los nombres de las acciones que pueden ser despachadas desde los componentes para actualizar el estado de la aplicación.


const initialState = {
// Define el estado inicial de la aplicación. Este objeto contiene diferentes propiedades 
// que representan partes específicas del estado de la aplicación.
    resultSearch : [], // Almacenará el resultado de la búsqueda de países.
    Countries:[], // Almacena la lista de todos los países
    filterByContinent:[], // Almacena la lista de países filtrados por continente
    Activity:[] // Almacena la información de las actividades
                // (no está claro cómo se usa en este fragmento de código).
}

const rootReducer = (state = initialState, action) =>{ // Define el reducer principal, que es una función que toma el estado actual y una acción como argumentos y devuelve el nuevo estado. El estado actual se inicializa con el valor del estado inicial si no se proporciona otro estado.
    switch(action.type) { // Utiliza un bloque switch para manejar diferentes tipos de acciones. Dependiendo del tipo de acción, el reducer realizará una acción específica para actualizar el estado correspondiente.
        case SEARCH_COUNTRY:
            return {...state, resultSearch: action.payload} // Cuando se dispara una acción de tipo SEARCH_COUNTRY, el reducer crea un nuevo objeto de estado. Copia todas las propiedades del estado actual con el operador de propagación (...state) y sobrescribe la propiedad resultSearch con el valor del payload de la acción. Esto actualiza el estado con los resultados de la búsqueda.
        case ALL_COUNTRY:
            return {...state, Countries:action.payload, filterByContinent: action.payload} // Cuando se dispara una acción de tipo ALL_COUNTRY, el reducer también crea un nuevo objeto de estado. Copia todas las propiedades del estado actual y sobrescribe las propiedades Countries y filterByContinent con el valor del payload de la acción. Esto actualiza el estado con la lista completa de países y la lista filtrada por continente.
        case FILTER: // Este caso se activa cuando una acción con el tipo FILTER es despachada en la aplicación. Aquí es el caso para la acción FILTER, que se activa cuando se quiere filtrar los países por continente y actividad.
            let filteredCountries = state.Countries; // Se crea una copia de la lista de países actual en una variable llamada filteredCountries.
            
            if (action.payload.continent !== 'All') { // Si el payload de la acción contiene un continente diferente a 'All', se filtran los países según el continente especificado en el payload.
                filteredCountries = filteredCountries.filter(ct => ct.continent === action.payload.continent); // n ambos casos anteriores, la lista de países se filtra utilizando el método filter(). Si el continente o la actividad coinciden con los criterios de filtrado, los países correspondientes se mantendrán en la lista.
//NO NECESARIAMENTE DECIR, SOLO SI LO PREGUNTA:
/* ".filter(ct => ct.continent === action.payload)": Aquí utilizamos el método filter en la lista de países.
La función filter recibe una función de callback que se ejecutará por cada elemento del array Countries.
Esta función de callback se define utilizando la notación de función flecha (ct => ...).
ct.continent === action.payload: Dentro de la función de callback, estamos comparando la propiedad continent
de cada país (ct.continent) con el valor del payload de la acción (action.payload). Esto verifica si el
continente del país coincide con el continente especificado en la acción de filtro.
Si la condición ct.continent === action.payload es verdadera para un país específico, ese país se mantendrá
en la nueva lista que se está creando.*/        
        
            }
        
            if (action.payload.activityFilter !== 'All') { // Si el payload de la acción contiene una actividad diferente a 'All', se filtran los países según la actividad especificada en el payload.
                filteredCountries = filteredCountries.filter(ct =>
                    ct.Activities.some(act => act.name === action.payload.activityFilter)
            );
//LA MISMA EXPLICACION DE ARRIBA LARGA PERO CON ACTIVIDADES        
        }
        
            return { // Después de aplicar los filtros, se actualiza el estado con la lista de países filtrada según los criterios proporcionados. 
                ...state,
                filterByContinent: filteredCountries // El estado global se actualiza con la propiedad filterByContinent que contiene la nueva lista de países filtrada.
        };    

        case ORDER: // Si la acción es de tipo ORDER, realiza diferentes tipos de ordenamientos en la lista de países filtrados por continente.
            const order = [...state.filterByContinent]
            // Ordena los países por nombre de forma ascendente
            if(action.payload === 'AscName') return {...state, filterByContinent: order.sort((a,b) => a.name.localeCompare(b.name))}
            // Ordena los países por nombre de forma descendente
            if(action.payload === 'DescName') return {...state, filterByContinent: order.sort((a,b) => b.name.localeCompare(a.name))}
            // Ordena la poblacion de forma ascendente
            if(action.payload === 'DescPopulation') return {...state, filterByContinent: order.sort((a,b) => parseInt(a.population,10)-parseInt(b.population,10))}
            // Ordena la poblacion de forma descendente
            if(action.payload === 'AscPopulation') return {...state, filterByContinent: order.sort((a,b) => parseInt(b.population,10)-parseInt(a.population,10))}
        
// Además de las acciones de tipo ORDER, ahora el reducer también maneja las acciones de tipo GET_ACTIVITY y CREATE_ACTIVITY.
        
        case GET_ACTIVITY: // Cuando se recibe una acción de tipo GET_ACTIVITY, el reducer actualiza el estado asignando los datos de actividad proporcionados en el payload de la acción a la propiedad Activity del estado.
            return{...state, Activity: action.payload}
        case CREATE_ACTIVITY: // Cuando se recibe una acción de tipo CREATE_ACTIVITY, el reducer devuelve un nuevo estado, pero no realiza cambios en las propiedades existentes.
            return{...state}
        default: // Si la acción no coincide con ningún tipo de acción conocido, 
            return state; // simplemente devuelve el estado actual sin realizar cambios.
    }
}

export default rootReducer;


/*En resumen, este código define el reducer principal de la aplicación que gestiona cómo el estado global de
 la aplicación cambia en función de las acciones despachadas por los componentes. Cada caso en el switch se
  encarga de actualizar el estado de manera específica según el tipo de acción recibida. */