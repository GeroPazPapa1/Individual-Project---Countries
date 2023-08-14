import { Link, useParams } from "react-router-dom"; // Link es importado desde "react-router-dom" y se usa para crear enlaces de navegación entre diferentes rutas en la aplicación. Se utiliza para crear enlaces a la página de inicio en este caso.
// useParams es también importado desde "react-router-dom" y se utiliza para obtener los parámetros de la URL definidos en las rutas. En este caso, se usa para obtener el valor del parámetro id de la URL, que representa el ID del país en la página de detalles.
import React, { useEffect, useState } from "react"; // son importados desde "react" y se utilizan para crear componentes funcionales, administrar efectos y estados respectivamente

import style from './Detail.module.css' // son importados desde "react" y se utilizan para crear componentes funcionales, administrar efectos y estados respectivamente

function Detail() {
    // Obtener el parámetro 'id' de la URL usando useParams()
    const {id} = useParams() // Utiliza el hook useParams de React Router para obtener el valor del parámetro 'id' de la URL. Este parámetro se utiliza para identificar el país cuyos detalles se mostrarán en esta página.
    // Inicializar el estado 'idDetail' como un array vacío
    const[idDetail,setIdDetail] = useState([]) // Aquí se establece un estado llamado 'idDetail' utilizando el hook useState. Inicialmente, se establece como un array vacío. Este estado se utilizará para almacenar los detalles del país que se obtengan de la API.
    

    // Efecto que se ejecuta cuando el componente se monta
    useEffect(()=>{ //Este es un efecto de efecto secundario que se ejecuta cuando el componente se monta. Utiliza la función asincrónica fetchCountryData para obtener los detalles del país a través de una solicitud a la API.
        // Función asincrónica para obtener los detalles del país
        const fetchCountryData=async()=>{
            try{ // Aquí se realiza una solicitud GET a la API utilizando el valor del parámetro 'id' para obtener los detalles del país específico. Luego, los datos obtenidos se convierten a formato JSON y se establecen en el estado 'idDetail' utilizando la función setIdDetail
                // Hacer una solicitud a la API para obtener los detalles del país
                const response = await fetch(`http://localhost:3001/countries/${id}`);
                // Obtener los datos en formato JSON
                const data = await response.json();
                // Establecer los detalles del país en el estado 'idDetail'
                setIdDetail(data);
            }catch(error){
                console.log(error);
            }
        };
         // Llamar a la función para obtener los detalles del país. Después de definir la función fetchCountryData, se llama a esta función en el cuerpo del efecto. Esto es lo que efectivamente inicia la obtención de los detalles del país. Al llamar a esta función, se realiza la solicitud a la API y se establecen los detalles en el estado 'idDetail'.
        fetchCountryData();
        // Retornar una función para limpiar el estado 'idDetail' cuando el componente se desmonte
        return ()=>{ // En el retorno de la función de efecto, se establece el estado 'idDetail' como un objeto vacío. Esto se hace para limpiar los datos almacenados en 'idDetail' cuando el componente se desmonte.
            setIdDetail({});
        };
    },[]);
    //En resumen, esta parte del código se encarga de obtener y gestionar los detalles de un país utilizando su ID como parámetro y establecer estos detalles en el estado 'idDetail'.

    // Mostrar los detalles del país en la consola para depuración
    console.log(idDetail) // La línea console.log(idDetail) se utiliza con fines de depuración. Muestra los detalles del país en la consola del navegador, lo que puede ser útil para verificar que los datos se estén obteniendo correctamente

    // Retornar la estructura JSX del componente
    return <div className={style.container}> {/* Esta clase se define en el archivo de estilos Detail.module.css y se utiliza para dar formato al contenedor principal del componente.*/}
        <div>

            {/* Enlace y flecha para regresar a la página de inicio */}
            <Link to='/home'> {/* div con flecha de regreso: Este <div> contiene un enlace (<Link>) que se utiliza para regresar a la página de inicio (/home). Dentro de este enlace, hay una imagen que representa una flecha de regreso. Esta imagen se encuentra en la ruta ../../../public/left-arrow.png y su estilo se maneja a través de la clase CSS arrow.*/}
                <img src='../../../public/left-arrow.png' className={style.arrow}/>
            </Link>
        </div>

        {/* Contenedor de la información del país, este bloque de código es un contenedor que contendrá la información del país. */}
        <div className={style.containerInfo}>

            {/* Contenedor de la imagen del país */}
            <div className={style.containerImage}> {/*Aquí comienza el contenedor que envuelve toda la información del país*/}
                <img src={idDetail.image} alt={idDetail.name} className={style.image}/> {/*Esta etiqueta de imagen (<img>) muestra la imagen del país. El atributo src se toma de idDetail.image, que debería ser la URL de la imagen del país. El atributo alt se establece como el nombre del país (idDetail.name) para proporcionar un texto alternativo en caso de que la imagen no se cargue.*/}
            </div>
{/*En resumen, esta parte del código crea un contenedor para la información del país, incluida su imagen. La imagen y su estilo son manejados por las clases CSS definidas en el archivo de estilos*/}

            {/* Nombre del país y su ID */}
            <div className={style.nameCountry}> {/*un <div> que contendrá tanto el nombre del país como su ID*/}
                <h2>{idDetail.name}</h2> {/*Esta etiqueta de encabezado (<h2>) muestra el nombre del país (idDetail.name). El valor del nombre se toma de idDetail.name, que es un campo en el objeto idDetail que almacena los detalles del país.*/}
                <h2>({idDetail.id})</h2> {/*Esta etiqueta de encabezado también muestra el ID del país (idDetail.id). El valor del ID se toma de idDetail.id, que también es un campo en el objeto idDetail.*/}
            </div>  

            {/* Información detallada del país */}
            <div className={style.info}> {/*Se inicia un <div> que contiene la información detallada del país.*/}
                <h2>Continente: {idDetail.continent}</h2> {/* Muestra el continente del país utilizando el valor de idDetail.continent.*/}
                <h2>Capital: {idDetail.capital}</h2> {/* Muestra la capital del país utilizando el valor de idDetail.capital.*/}
                {/* Mostrar la subregión si está definida */}
                {idDetail.subregion==='undefined' ? null: <h2>Subregion: {idDetail.subregion}</h2>} {/* Comprueba si idDetail.subregion está definido. Si lo está, muestra la subregión del país utilizando el valor de idDetail.subregion. Si no está definido, no se muestra nada (null)*/}
                 {/* Mostrar el área si está definida */}
                {idDetail.area==='undefined' ?  null:<h2>Area: {idDetail.area} m² </h2>} {/* Comprueba si idDetail.area está definido. Si lo está, muestra el área del país utilizando el valor de idDetail.area. Si no está definido, no se muestra nada (null).*/}
                <h2>Poblacion: {idDetail.population} Personas</h2> {/* Muestra la población del país utilizando el valor de idDetail.population.*/}
            </div>
            <Link to='/create'> {/* Se crea un enlace a la ruta /create.*/}
                <button>Nueva Actividad</button> {/* Se muestra un botón con el texto "Nueva Actividad".*/}
            </Link>  
        </div>
{/*En resumen, esta parte del código muestra la información detallada del país, incluyendo el continente, la capital, la subregión (si está definida), el área (si está definida) y la población. Luego, se crea un enlace a la ruta /create junto con un botón para agregar una nueva actividad.*/}
        {/* Sección de actividades */}
        <div className={style.infoActivity}>
                {/* Verificar si hay actividades */}
                {idDetail.Activities && idDetail.Activities.length === 0 ? ( //Verifica si hay actividades disponibles. Si no hay actividades, muestra el mensaje "SIN ACTIVIDADES". 
                    <h2 className={style.title}>SIN ACTIVIDADES</h2>
                    ) : (
                    <h2 className={style.title}>ACTIVIDADES</h2> // Si hay actividades, muestra el título "ACTIVIDADES".
                )}
                {/* Contenedor de tarjetas de actividades */}
                <div className={style.ContainerActs}>
                        {/* Mapear y mostrar las actividades,  Si hay actividades disponibles y la longitud del array de actividades es mayor que cero, se mapean y muestran las actividades. */}
                        {idDetail.Activities && idDetail.Activities.length > 0 && idDetail.Activities.map((activity, index) => (
                            <div className={style.activityCard}> {/* Cada actividad se muestra en una tarjeta individual con la clase de estilo activityCard.*/}
                                    <p key={index} className={style.p}> {/*// y un atributo key único para el mapeo.*/}
                                    <p className={style.name}>{activity.name}</p> {/*  Muestra el nombre de la actividad.*/}
                                    <p className={style.p}>Dificultad: {activity.difficulty}☆</p> {/* Muestra la dificultad de la actividad.*/}
                                    <p className={style.p}>Duración: {activity.duration} hs</p> {/* Muestra la duración de la actividad en horas.*/}
                                    <p className={style.p}>Temporada: {activity.season}</p> {/* Muestra la temporada en la que se realiza la actividad.*/}
                                </p>
                            </div>
                        ))}
                </div>
        </div>
    </div>;
}
// En resumen, esta parte del código se encarga de mostrar las actividades asociadas al país,
// incluyendo su nombre, dificultad, duración y temporada. Cada actividad se presenta en una
// tarjeta individual.


export default Detail;

// se utiliza para exportar el componente Detail, de modo que pueda ser importado y utilizado en otros archivos del proyecto.