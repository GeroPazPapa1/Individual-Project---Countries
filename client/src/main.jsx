/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/

import './index.css'; //  Esta línea importa el archivo de estilos index.css, que contiene estilos globales para la aplicación.

import App from './App.jsx'; // Importa el componente App desde el archivo App.jsx. El componente App es el componente principal de la aplicación y define la estructura y las rutas de la misma.
import { BrowserRouter } from 'react-router-dom'; // Importa el componente BrowserRouter de la librería react-router-dom. El BrowserRouter proporciona el enrutamiento y gestiona la historia del navegador, permitiendo que la aplicación cambie de contenido según la URL actual.
import { Provider } from 'react-redux'; // Importa el componente Provider de la librería react-redux. El Provider es un componente de nivel superior que permite que el store de Redux esté disponible para todos los componentes de la aplicación.
import React from 'react'; // Importa el módulo React, que es necesario para trabajar con componentes de React.
import ReactDOM from 'react-dom/client'; // Importa el módulo ReactDOM para renderizar los componentes de React en el DOM.
import store from './redux/store/store'; // Importa el store de Redux desde el archivo store.js en la carpeta store dentro de la carpeta redux. Este store centraliza el estado de la aplicación y las acciones que modifican ese estado.

ReactDOM.createRoot(document.getElementById('root')).render(
// crea un "root" en el DOM, que es el punto de entrada para renderizar componentes de React. El parámetro que se pasa a esta función es el elemento en el DOM en el que deseas que se renderice la aplicación. En este caso, se utiliza el elemento con el id 'root'
//  Este método se llama en el root creado en el paso anterior para iniciar el proceso de renderización. Lo que viene después del paréntesis es lo que se va a renderizar en el root.
  <Provider store={store}>
{/* El componente Provider es proporcionado por react-redux y se utiliza para envolver la aplicación con el store de Redux. Esto permite que todos los componentes de la aplicación puedan acceder al estado global de Redux y a las acciones para modificarlo.*/}
{/* El prop store={store} se utiliza para proporcionar el store creado en el archivo store.js.*/}
    <BrowserRouter> {/* Este componente de react-router-dom envuelve la aplicación y le proporciona las capacidades de enrutamiento. Permite que la aplicación responda a cambios en la URL y renderice los componentes correspondientes según la ruta actual.*/}
      <App /> {/* Esto es el componente App, que es el componente principal de la aplicación. Contiene las rutas y estructura general de la interfaz.*/}
    </BrowserRouter>
  </Provider>
);
// En resumen, esta parte del código crea un root en el DOM, configura el enrutamiento y el estado global de Redux para la aplicación y finalmente renderiza el componente App dentro de este contexto configurado. Esto establece la base para toda la aplicación y permite que se muestren los componentes apropiados según la URL y el estado de Redux.