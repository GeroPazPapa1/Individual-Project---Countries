import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom, que permite la navegación entre las diferentes rutas de tu aplicación.
import React from 'react'; // Importa el módulo react, que es necesario para definir componentes de React.
import SearchBar from '../SearchBar/SearchBar'; // Importa el componente SearchBar desde la ruta relativa '../SearchBar/SearchBar'.
import style from './Nav.module.css'; //  Importa los estilos CSS para este componente desde el archivo 'Nav.module.css' en la misma ubicación del componente.

function Nav({onSearch}) { // Define el componente funcional Nav que acepta un prop llamado onSearch.
  return ( // Retorna el contenido JSX del componente Nav
    <div className={style.Container}> {/* Crea un <div> con la clase CSS Container utilizando el estilo importado. */}
      <div className={style.links}>{/*Dentro del primer <div>, crea otro <div> con la clase CSS links, que contendrá los enlaces de navegación.*/}
        <Link to='/'>{/*Usa el componente Link para crear enlaces a diferentes rutas en tu aplicación. Cada enlace tiene un <h2> con un estilo de link que contiene el texto "INICIO", "HOME" y "ACTIVIDADES", respectivamente.*/}
          <h2 className={style.link}>INICIO</h2>
        </Link>

        <Link to='/home'>
          <h2 className={style.link}>HOME</h2>
        </Link>

        <Link to='/create'>
          <h2 className={style.link}>ACTIVIDADES</h2>
        </Link>
      </div>

      <div>
        <SearchBar onSearch={onSearch}/>{/* <div>: Crea un elemento <div> en el cual se colocará el componente SearchBar.
                                            <SearchBar onSearch={onSearch}/>: Renderiza el componente SearchBar y le pasa el prop onSearch, que es una función que se espera que el componente SearchBar utilice para manejar la búsqueda en la aplicación. En otras palabras, este prop es utilizado para pasar la función onSearch del componente Nav al componente SearchBar. Esto permitirá que el componente SearchBar realice acciones, como enviar consultas de búsqueda cuando el usuario interactúa con él.*/}
      </div>
    </div>
  )
}

export default Nav
{/*Exporta el componente Nav para que pueda ser utilizado en otros lugares de tu aplicación.

En resumen, este componente Nav crea una barra de navegación con enlaces a las rutas
 "INICIO", "HOME" y "ACTIVIDADES", y también renderiza el componente SearchBar para 
realizar búsquedas en la aplicación.*/}