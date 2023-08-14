import { applyMiddleware, compose, createStore } from 'redux';
// Importa las funciones applyMiddleware, compose y createStore del paquete 'redux' para
// crear y configurar el store.

import rootReducer from '../reducer/reducer';
// Importa el reducer raíz (rootReducer) desde la ubicación correcta del proyecto.

import thunk from 'redux-thunk';
// Importa el middleware thunk para manejar acciones asincrónicas.

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Crea una variable llamada "composeEnhancer".

// La siguiente parte se refiere a la elección del "enhancer" para Redux DevTools:
// "window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE"__
// Accede a la propiedad global "window" y busca la propiedad "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__".
// Esta propiedad es proporcionada por la extensión de Redux DevTools.
// "|| compose;"
// Si la propiedad "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" no está definida (es decir, la extensión no está instalada),
// se utiliza la función "compose" predeterminada de Redux.

// En resumen, "composeEnhancer" será una función que se utilizará como parte de la configuración del store
// y permitirá la integración con Redux DevTools si está disponible.


const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
    );
// Crea el store de Redux con la función "createStore", que necesita dos argumentos:
// 1. rootReducer: El reducer raíz que combina todos los reducers de la aplicación.
// 2. composeEnhancer(applyMiddleware(thunk)): El segundo argumento es el enhancer.
//    - "composeEnhancer" permite usar Redux DevTools.
//    - "applyMiddleware(thunk)" agrega el middleware thunk para manejar acciones asincrónicas. 

export default store;
// Exporta el store configurado para que pueda ser utilizado en otras partes de la aplicación.


/* En resumen, el módulo store se encarga de crear y configurar el store de
   Redux para la aplicación. Es el punto central donde se almacena el estado global y
   proporciona métodos para realizar acciones, recibir actualizaciones de estado y
   administrar la lógica asincrónica de la aplicación.*/