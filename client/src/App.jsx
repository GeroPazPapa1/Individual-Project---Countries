/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/


import './App.css'; // Importa el archivo de hoja de estilo './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'; // Estas importaciones son parte de la librería react-router-dom, que es utilizada para gestionar la navegación en una aplicación de React mediante la definición de rutas y componentes correspondientes.
//Route: Es un componente de enrutamiento que se utiliza para definir cómo se va a mostrar un componente específico cuando la URL coincide con una ruta determinada.
//Routes: Es un componente que contiene las definiciones de las rutas y los componentes correspondientes.
//useLocation: Es un hook que se utiliza para obtener información sobre la ubicación actual de la URL. Proporciona datos sobre la ruta actual y otros detalles de la ubicación.



import CreateActivity from './components/CreateActivity/CreateActivity'; // Importa el componente CreateActivity desde el archivo CreateActivity.jsx. Esto permite utilizar y renderizar el componente en la aplicación.
import Detail from './components/Detail/Detail'; // Importa el componente Detail desde el archivo Detail.jsx. Al igual que en el caso anterior, esto permite utilizar y renderizar el componente en la aplicación.
import HomePage from './components/HomePage/HomePage'; // Importa el componente HomePage desde el archivo HomePage.jsx. De manera similar, esto permite utilizar y renderizar el componente en la aplicación.
import LandingPage from './components/LandingPage/LandingPage'; // Importa el componente LandingPage desde el archivo LandingPage.jsx. Esto permite utilizar y renderizar el componente en la aplicación.
import Nav from './components/Nav/Nav'; //  Importa el componente Nav desde el archivo Nav.jsx. Este componente probablemente representa la barra de navegación de la aplicación, lo que permite navegar entre diferentes secciones de la aplicación.
import ResultsSearch from './components/SearchBar/ResultsSearch'; // Importa el componente ResultsSearch desde el archivo ResultsSearch.jsx. Este componente probablemente se utiliza para mostrar los resultados de una búsqueda en la aplicación.

// Define la función componente App. Esta es la parte principal del archivo y define
// cómo se organizarán las diferentes páginas y componentes en la aplicación.
function App() {
  
  const location = useLocation(); //  Utiliza el hook useLocation para obtener la ubicación actual de la URL. Esto se utiliza para determinar si se debe mostrar el componente de navegación (Nav) según la ubicación actual.
  
  return ( // El componente App devuelve el contenido JSX que representa la estructura general de la aplicación.
    <div className='Container'> {/* Un contenedor principal con la clase CSS 'Container' que envuelve todo el contenido de la aplicación.*/}
        {location.pathname!=='/' && <Nav/>} {/* Una condición que verifica si la ubicación actual no es la página de inicio ('/'). Si es cierto, se renderiza el componente Nav.*/}
        <Routes> {/* Utiliza el componente Routes para definir las rutas y los componentes correspondientes que deben renderizarse cuando se accede a esas rutas.*/}
          <Route path='/' element={<LandingPage/>}/> {/*  Define una ruta que coincide con la URL raíz ('/') y renderiza el componente LandingPage.*/}
          <Route path='/home' element={<HomePage/>}/> {/* Define una ruta que coincide con la URL '/home' y renderiza el componente HomePage.*/}
          <Route path='/result' element={<ResultsSearch/>}/> {/* Define una ruta que coincide con la URL '/result' y renderiza el componente ResultsSearch.*/}
          <Route path='/detail/:id' element={<Detail/>}/> {/* Define una ruta con un parámetro dinámico :id que renderiza el componente Detail.*/}
          <Route path='/create' element={<CreateActivity/>}/> {/* Define una ruta que coincide con la URL '/create' y renderiza el componente CreateActivity.*/}
        </Routes>
    </div>
  );
};

export default App;

// Exporta el componente App para que pueda ser utilizado por otros componentes y módulos de la aplicación.

// En resumen, este archivo es la raíz de tu aplicación y define cómo se organizan las diferentes páginas y componentes en función de las rutas especificadas. También gestiona la visibilidad del componente de navegación (Nav) y renderiza el componente correspondiente según la ruta actual.