import React, { useEffect, useState } from "react";
import { allCountries, filter, getActivity, orderCountry } from "../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../Cards/Cards";
import Paginacion from "../Paginacion/Paginacion";
import style from "./Home.module.css";

//--------------------------------------------------------------------------------

function HomePage() { // Esto define una función llamada HomePage. Este será el componente de React que representará la página de inicio de tu aplicación.
  // Establece una conexión con el almacenamiento de Redux y obtiene el método "dispatch" para enviar acciones.
  const dispatch = useDispatch(); // Aquí se crea una constante llamada dispatch utilizando el hook useDispatch() de Redux. Este dispatch es una función que permite enviar acciones al almacenamiento Redux. Las acciones son objetos que describen qué tipo de cambio se debe realizar en el estado global de la aplicación


  //--------------------------------------------------------------------------------
  

// Selecciona el estado del país filtrado y las actividades desde el almacenamiento de Redux.

  const countryFilter = useSelector((state) => { // En esta línea, se utiliza el hook useSelector de Redux para obtener el estado del almacenamiento de Redux. Se pasa una función a useSelector que toma el estado actual como argumento y devuelve un valor específico del estado.
    if (state.filterByContinent === "All") { // Dentro de la función, se verifica si el valor de state.filterByContinent es igual a "All"
      return state.Countries; // Si es así, se devuelve state.Countries, que son todos los países en el estado. Esto significa que si no se ha aplicado ningún filtro por continente, se mostrarán todos los países.
    } else {
      return state.filterByContinent; // Si state.filterByContinent no es "All", se devuelve state.filterByContinent, que debería contener los países filtrados por continente.
    }
  });
  const activities = useSelector(state=>state.Activity) // En esta línea, también se utiliza useSelector para obtener el estado de las actividades desde el almacenamiento de Redux. Aquí, simplemente se obtiene el valor de state.Activity, que debería contener la lista de actividades.
/*En resumen, estas líneas de código utilizan el hook useSelector para obtener datos
  específicos del estado de Redux, en este caso, los países filtrados por continente y
  la lista de actividades. */



//--------------------------------------------------------------------------------

  // Define los estados locales para el filtro, la actividad seleccionada y el ordenamiento.

  const [filtered, setFiltered] = useState("All"); // Aquí se está utilizando useState para crear una variable de estado llamada filtered con un valor inicial de "All". El valor "All" probablemente se refiere a la opción predeterminada para mostrar todos los países sin filtrar por continente. La función setFiltered se utiliza para actualizar este estado.
  const [activityFilter,setActivityFilter] = useState('All') // De manera similar a la anterior, se crea una variable de estado llamada activityFilter con un valor inicial de 'All'. Esto podría ser la opción predeterminada para mostrar todas las actividades sin filtrar. La función setActivityFilter se utiliza para actualizar este estado.
  const [orderBy, setOrderBy] = useState("AscName"); // Aquí, nuevamente, se crea una variable de estado llamada orderBy con un valor inicial de "AscName". Esto podría indicar el orden predeterminado en el que se mostrarán los países, en este caso, en orden alfabético ascendente por nombre. La función setOrderBy se utiliza para actualizar este estado.

/*En resumen, estos tres estados locales se utilizan para rastrear la selección de filtros y el orden en la página HomePage.*/

//--------------------------------------------------------------------------------

// Efecto de carga inicial: obtiene todos los países y actividades

// En este fragmento de código, se utilizan dos efectos secundarios (useEffect)
// para realizar solicitudes de acciones al almacenamiento de Redux cuando el componente
// HomePage se monta en la interfaz de usuario y cada vez que el estado dispatch cambia.
  useEffect(() => { // Este efecto se activará cuando el componente HomePage se monte en la interfaz de usuario. 
    dispatch(allCountries()); // Luego, llama a la acción allCountries() utilizando el método dispatch. Esto es probablemente para cargar inicialmente todos los países en la página.
  }, [dispatch]);

  useEffect(()=>{ // Este efecto se activará cada vez que cambie el valor del estado dispatch. 
    dispatch(getActivity()) // Luego, llama a la acción getActivity() utilizando el método dispatch. Esto podría ser para obtener las actividades disponibles y mostrarlas en la página.
  },[dispatch])

/* Ambos efectos secundarios aseguran que los datos se carguen correctamente cuando el
   componente se monta y cuando el estado dispatch cambia. El uso del segundo argumento en
   el useEffect ([dispatch]) indica que el efecto solo se activará cuando cambie el valor
   de dispatch.*/

//HASTA AQUI LLEGUE VIERNES 

//--------------------------------------------------------------------------------

// Función para manejar el cambio de filtro de continente.

// En este bloque de código, se define la función onHandleFilter que se activa cuando
// el usuario selecciona una opción del filtro de continente en el componente.
  const onHandleFilter = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del evento, que en este caso es evitar que la página se recargue cuando se activa el evento.
    let selectCountry = event.target.value; // Obtiene el valor seleccionado en el elemento del evento (en este caso, el valor seleccionado en el menú desplegable de filtrado por continente).
    setFiltered(selectCountry); // Utiliza el estado setFiltered para actualizar el valor del filtro de continente seleccionado por el usuario.
    setPages(1); // Utiliza el estado setPages para restablecer la página actual a 1 cada vez que se cambia el filtro de continente. Esto se hace para asegurarse de que se muestren los resultados desde la primera página después de cambiar el filtro.
  };

  /*En resumen, esta función maneja el cambio de filtro de continente en la página, 
    actualizando el estado del filtro seleccionado y restableciendo la página a 1 para
    mostrar los resultados desde el principio.*/

//--------------------------------------------------------------------------------

// Función para manejar el cambio de filtro de actividad.

//Esta parte del código define la función onHandleActivity, que se activa cuando el usuario 
// selecciona una opción del filtro de actividades en el componente.
  const onHandleActivity = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del evento, que en este caso es evitar que la página se recargue cuando se activa el evento.
    setActivityFilter(event.target.value); // Utiliza el estado setActivityFilter para actualizar el valor del filtro de actividad seleccionado por el usuario. event.target.value obtiene el valor seleccionado en el menú desplegable de filtrado por actividad.
    setPages(1); // Utiliza el estado setPages para restablecer la página actual a 1 cada vez que se cambia el filtro de actividad. Esto se hace para asegurarse de que se muestren los resultados desde la primera página después de cambiar el filtro.
  };

  /*En resumen, esta función maneja el cambio de filtro de actividad en la página, 
    actualizando el estado del filtro seleccionado y restableciendo la página a 1 para
    mostrar los resultados desde el principio.*/
  
//--------------------------------------------------------------------------------

// Función para manejar el cambio de ordenamiento.
// En esta parte del código, se define la función orderFilter, que se activa cuando el usuario
// selecciona una opción del menú desplegable de ordenamiento

  const orderFilter = (event) => { // 
    event.preventDefault(); // Al igual que en las partes anteriores, esta línea previene el comportamiento predeterminado del evento, que en este caso es evitar que la página se recargue cuando se activa el evento.
    const selectOrder = event.target.value; // Aquí, event.target.value obtiene el valor seleccionado en el menú desplegable de ordenamiento, que representa el tipo de ordenamiento que el usuario desea aplicar.
    setOrderBy(selectOrder); //  Utiliza el estado setOrderBy para actualizar el tipo de ordenamiento (orderBy) con el valor seleccionado por el usuario. Esto permitirá que los resultados se muestren en el orden especificado
  };

  /*En resumen, esta función maneja el cambio de tipo de ordenamiento en la página,
    actualizando el estado orderBy para reflejar la preferencia del usuario en cuanto
    al orden en que se mostrarán los resultados. */

//--------------------------------------------------------------------------------

// Función para aplicar los filtros y el ordenamiento.  
// Esta función, handleFilter, es llamada cuando el usuario hace clic en el botón "Aplicar"
// después de seleccionar opciones de filtro y ordenamiento.
  const handleFilter = () => {
    dispatch(filter(filtered,activityFilter)); // Aquí se utiliza la función dispatch para enviar la acción filter al almacenamiento Redux. Se le pasan dos argumentos: filtered (el valor del filtro de continente seleccionado por el usuario) y activityFilter (el valor del filtro de actividad seleccionado por el usuario). Estos valores se utilizarán en el reducer para actualizar el estado de los países filtrados.
    dispatch(orderCountry(orderBy)); // Luego de aplicar el filtro, se utiliza dispatch nuevamente para enviar la acción orderCountry al almacenamiento Redux. Se le pasa el valor de orderBy, que representa el tipo de ordenamiento seleccionado por el usuario. Este valor también se utilizará en el reducer para actualizar el estado de los países filtrados y ordenados.
  };

  // -----------------PAGINADO----------------------

/*La sección de "paginado" en el código se encarga de dividir la lista de países en páginas
  y mostrar solo un cierto número de países por página. Esto es útil cuando tienes una gran
  cantidad de elementos y deseas organizarlos en páginas para que la interfaz sea más
  manejable para los usuarios. */


  const [pages, setPages] = useState(1); //  Aquí se declara un estado llamado pages con valor inicial de 1. Esta variable se utiliza para realizar el paginado de la lista de países.
  const [forPage, setForPage] = useState(10); // Similar al paso anterior, aquí se declara un estado llamado forPage con valor inicial de 10. Esta variable representa la cantidad de países a mostrar por página.

  const max = Math.ceil(countryFilter.length / forPage);
  /* Se calcula el número máximo de páginas necesarias para mostrar todos los países,
     considerando la cantidad de países y la cantidad por página. Se utiliza Math.ceil para
     redondear hacia arriba, asegurando que todas las páginas estén disponibles.*/

  return (
    <div className={style.container}>
      <div>
      </div>
      {/* Contenedor para el formulario de filtro y ordenamiento */}
      <div className={style.containerFilter}> {/*  Este es el contenedor principal que envuelve todo el formulario de filtro y ordenamiento. La clase CSS containerFilter se asigna al elemento div a través de className, lo que implica que tiene un estilo definido en una hoja de estilos CSS correspondiente */}
        <div className={style.allFilter}> {/* Dentro del contenedor principal, este elemento div crea un espacio para agrupar los elementos de filtro y ordenamiento. La clase CSS allFilter se asigna para aplicar estilos específicos a este contenedor interno.*/}
            <div className={style.Filters}> {/* Dentro del contenedor de filtro y ordenamiento, este elemento div agrupa específicamente los elementos relacionados con los filtros. La clase CSS Filters se asigna para aplicar estilos a este contenedor interno que contiene los elementos de filtro.*/}
      {/* Selector de filtro por continente */}          
            <h2>Filter By</h2> {/* Esta etiqueta de encabezado (<h2>) muestra el texto "Filter By" (Filtrar por) en un tamaño de fuente más grande. Es una indicación para los usuarios de que esta sección del formulario se trata de filtros*/}
            <select onChange={onHandleFilter}> {/* Aquí se crea un elemento select que permite a los usuarios elegir un continente para filtrar los países. Los atributos clave son: onChange={onHandleFilter}: Esto asigna la función onHandleFilter como el manejador de eventos para cuando se cambia la opción seleccionada en el elemento select. La función se ejecutará cada vez que el usuario elija una opción diferente.*/} 
              {/* Opciones de filtro por continente */} 
              {/*Esta sección crea una serie de opciones desplegables en el elemento select, permitiendo a los usuarios elegir un continente específico como filtro para los países que desean ver en la interfaz. Cada opción representa un continente diferente, y el valor de la opción se utiliza para identificar la elección del usuario*/}
                <option value="All">Todos los paises</option>
                <option value="Antarctica">Antartida</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
            </select>
            {/* Selector de filtro por actividad */}
            {/* Esta parte del código crea otro elemento select, pero en este caso se trata de un selector que permite a los usuarios filtrar los países por actividad. Similar al selector de continentes, este selector de actividades también tiene opciones que los usuarios pueden elegir. onChange={onHandleActivity}: Aquí se establece un manejador de eventos onChange que se activará cuando el usuario cambie su selección en el selector. El valor de la opción seleccionada se pasará a la función onHandleActivity, que permitirá actualizar el filtro de actividades.*/} 
            <select onChange={onHandleActivity}>
            {/* Opciones de filtro por actividad */} 
            {/* Aquí se generan las opciones que los usuarios pueden seleccionar para filtrar los países por actividad.*/}    
                <option value="All">Actividades</option>  {/*Esta es la primera opción en el selector de actividades. Tiene un valor de "All", lo que significa que cuando se selecciona, no se aplicará ningún filtro de actividad y se mostrarán todos los países*/}
                {activities.length > 0 && activities.map(act=>( 
                  <option key={act.id} value={act.name}>{act.name}</option>
                ))} {/*Esta parte dinámica del código se encarga de generar opciones basadas en las actividades disponibles. Primero, verifica si hay actividades en la matriz activities. Si hay actividades disponibles, se utiliza el método map para recorrer cada actividad y crear una opción para cada una. Cada opción tiene un value que es el nombre de la actividad y un key que es el ID de la actividad. Esto permite que los usuarios seleccionen una actividad específica para aplicar como filtro*/}
            {/*En resumen, esta sección genera las opciones dentro del selector de filtro por actividad. La primera opción ("Actividades") permite al usuario seleccionar que no se aplique ningún filtro de actividad. Las opciones restantes se generan dinámicamente en función de las actividades disponibles en el estado de Redux.*/}
            </select>
            </div>
            <div className={style.orders}>
             {/* Selector de ordenamiento */}    
            <h2>Order By</h2> {/* Esta línea muestra el título "Order By" que le indica al usuario que este selector se utiliza para cambiar el orden de los países que se muestran en la lista.*/}
            <select onChange={orderFilter}> {/* Este es el menú desplegable que contiene las opciones de ordenamiento. El atributo onChange indica que cuando el usuario seleccione una opción, se llamará a la función orderFilter para manejar el cambio.*/}
            {/* Opciones de ordenamiento */}    
                <option value="AscName">A-Z</option> {/* Esta opción ordenará los países de forma ascendente según el nombre (de la A a la Z).*/}
                <option value="DescName">Z-A</option> {/* Esta opción ordenará los países de forma descendente según el nombre (de la Z a la A).*/}
                <option value="DescPopulation">Min Poblacion</option> {/* Esta opción ordenará los países de forma descendente según la población, mostrando primero los países con la población más baja.*/}
                <option value="AscPopulation">Max Poblacion</option> {/* Esta opción ordenará los países de forma ascendente según la población, mostrando primero los países con la población más alta.*/}
            </select> {/* Cada opción tiene un valor (value) que corresponde a una cadena que será utilizada para identificar la opción seleccionada en el código. Cuando el usuario selecciona una de estas opciones, se activa la función orderFilter que manejará el cambio de orden.*/}
            </div>
            {/* Botón para aplicar los filtros y el ordenamiento */}
            {/* En esta sección se define un botón que permite al usuario aplicar los filtros y el ordenamiento seleccionados. Al hacer clic en este botón, se activa la función handleFilter, que a su vez envía las acciones de filtrado y ordenamiento a través del Redux dispatch. La clase style.button se agrega al botón para aplicar estilos CSS predefinidos. El atributo onClick se establece para que, cuando el usuario haga clic en el botón, se llame a la función handleFilter, lo que desencadenará la aplicación de los filtros y el ordenamiento seleccionados en la lista de países. */}
            <button onClick={handleFilter} className={style.button}>
            Aplicar
            </button>
        </div>
        {/* Contenedor para las tarjetas de países */}
        {/* En esta parte del código se crea un contenedor visual para albergar las tarjetas de países. Se utiliza la clase CSS style.countriesContainer para aplicar estilos al contenedor principal.
        Dentro de este contenedor, se crea otro contenedor con la clase CSS style.countries que será utilizado para alojar y mostrar las tarjetas individuales de países. Esto proporciona una estructura organizada para la visualización de las tarjetas en la interfaz de usuario. Las tarjetas de países serán generadas y renderizadas en este espacio, lo que permitirá mostrar la información de cada país de manera ordenada y legible. */}
        <div className={style.countriesContainer}> 
            <div className={style.countries}>
            {/* Renderiza las tarjetas de países */}
{/*1-Se utiliza una expresión condicional (ternary operator) para determinar si countryFilter
(que contiene la lista de países filtrados) tiene elementos (length > 0). Si es así, se
ejecutará el código antes del signo de interrogación (?), y si no hay elementos, se ejecutará
el código después de los dos puntos (:). Si hay países en countryFilter, se realiza una serie
de operaciones:
2-.slice((pages - 1) * forPage, (pages - 1) * forPage + forPage): Esto toma una porción de la
lista de países filtrados basada en la página actual (pages) y la cantidad de elementos por
página (forPage). Esto asegura que se muestren solo los países que deben aparecer en la
página actual.
3-.map((count) => ( ... )): Se utiliza el método map para iterar sobre la porción de países
seleccionada y generar una tarjeta para cada uno.
En cada iteración del map, se crea una tarjeta (<Cards>) utilizando la información del país
actual, como su id, name, continent e image.
4-Si no hay países en countryFilter (es decir, no se cumple la condición length > 0), se muestra
un elemento <p> con la clase style.ActivityAlert que muestra el mensaje
"NO HAY ACTIVIDADES EN ESTE CONTINENTE".
En resumen, esta sección de código se encarga de mostrar las tarjetas de países filtrados
y paginados en la interfaz, o mostrar un mensaje si no hay países disponibles para el filtro
y la página actual. */}
            {countryFilter.length > 0 ? countryFilter 
                .slice((pages - 1) * forPage, (pages - 1) * forPage + forPage)
                .map((count) => (
                <Cards
                    key={count.id}
                    id={count.id}
                    name={count.name}
                    continent={count.continent}
                    image={count.image}
                />
                )):<p className={style.ActivityAlert}>NO HAY ACTIVIDADES EN ESTE CONTINENTE</p>}
            </div>
      </div>
      </div>

      {/* Componente de paginación */}
      {/* <Paginacion ... />: Esto llama al componente Paginacion y le pasa ciertos valores como propiedades.
1-max={max}: Aquí se pasa el valor máximo de páginas (max) como una propiedad al componente Paginacion. Esta información es necesaria para que el componente de paginación sepa cuántas páginas en total hay.
2-pages={pages}: Se pasa el número de página actual (pages) como una propiedad al componente Paginacion. Esto permite que el componente de paginación sepa en qué página se encuentra el usuario y muestre la paginación de manera adecuada.
3-setPages={setPages}: Se pasa la función setPages como una propiedad al componente Paginacion. Esto permite que el componente de paginación actualice el estado de la página actual cuando el usuario interactúa con los controles de paginación.
4-country={countryFilter}: Se pasa la lista de países filtrados (countryFilter) como una propiedad al componente Paginacion. Esto es necesario para que el componente de paginación pueda calcular la cantidad total de páginas y manejar la paginación correctamente.
En resumen, esta parte del código integra el componente de paginación en la página HomePage y le proporciona las propiedades necesarias para controlar la paginación de los resultados de países filtrados.*/}
      <Paginacion
        max={max}
        pages={pages}
        setPages={setPages}
        country={countryFilter}
      />
    </div>
  );
}

export default HomePage;
{/* En esta línea, se está exportando el componente HomePage.
Esto significa que este componente estará disponible para ser importado y utilizado en
otros lugares de tu aplicación. Por lo tanto, cualquier otro archivo que quiera usar este
componente podrá hacerlo al importarlo, como por ejemplo:
import HomePage from './ruta/al/archivo/HomePage';
Luego, este componente HomePage se puede renderizar y utilizar
en la estructura de tu aplicación.*/}


/*Este código representa la página de inicio (HomePage) de tu aplicación.
Permite filtrar y ordenar países, así como paginar los resultados.
Utiliza el almacenamiento de Redux para manejar los datos y las acciones.*/