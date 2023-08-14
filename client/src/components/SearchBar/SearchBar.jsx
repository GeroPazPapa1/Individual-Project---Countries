import React, { useEffect, useState } from 'react'; // Importa los módulos React, useEffect y useState desde la librería 'react'. Estos módulos son necesarios para crear componentes de React y gestionar el estado y efectos secundarios en la aplicación.

import { Link } from 'react-router-dom'; // Importa el componente Link de la librería 'react-router-dom', que se utiliza para crear enlaces entre diferentes rutas de tu aplicación
import { search } from '../../redux/action/action'; // Importa la función search desde el archivo de acciones del directorio 'action' en el directorio 'redux'. Esto sugiere que se está utilizando Redux para gestionar el estado de la aplicación y realizar búsquedas.
import styles from './Search.module.css'; // Importa los estilos CSS del archivo 'Search.module.css' localizado en el mismo directorio que este componente. Los estilos importados se asignarán a los elementos JSX del componente
import {useDispatch} from 'react-redux'; // Importa la función useDispatch desde la librería 'react-redux'. Esto permitirá que el componente interactúe con el store de Redux y despache acciones


// --------- Comienza la definición del componente SearchBar. --------- //

function SearchBar() {
    const dispatch = useDispatch(); // Crea una constante dispatch utilizando la función useDispatch(). Esto permitirá que el componente despache acciones de Redux. 
    const [name,setName] = useState(''); // Luego, crea un estado local llamado name utilizando el hook useState. El estado inicial es una cadena vacía.

    const handleChange = (event) =>{ // Define una función handleChange que se ejecutará cuando cambie el contenido del campo de entrada.
        setName(event.target.value) // Esta función actualiza el estado name con el valor del campo de entrada.
    };

    const onHandleSearch = () =>{ // Define una función onHandleSearch que se ejecutará cuando se haga clic en el botón de búsqueda. 
        dispatch(search(name)) // Esta función despacha una acción de búsqueda utilizando el nombre ingresado en el campo de búsqueda, 
        setName('') // y luego restablece el estado name a una cadena vacía.
    };


// Renderiza el contenido del componente. //
    return (
        <div className={styles.Container}> {/* Dentro de un contenedor principal con clase Container*/}
            <div className={styles.ContainerInput}> {/* crea un contenedor ContainerInput que contiene un campo de entrada tipo search con el valor vinculado al estado name y el manejador handleChange.*/} 
                <input type='search' value={name} onChange={handleChange} className={styles.input}/>
                <Link to='/result'> {/*Además, hay un componente Link que redirige a la ruta '/result' y contiene un botón "BUSCAR". El botón activa la función onHandleSearch al hacer clic.*/}
                    <button onClick={onHandleSearch} className={styles.button}>BUSCAR</button>
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;

/*Finaliza la definición del componente SearchBar y lo exporta para que pueda ser utilizado
  en otros componentes. */