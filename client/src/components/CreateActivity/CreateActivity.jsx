import React, { useEffect, useState } from 'react'; //  Aquí estamos importando las funciones useEffect y useState de React. useEffect se utiliza para ejecutar efectos secundarios en componentes funcionales, mientras que useState permite agregar estado local a componentes funcionales.
import { allCountries, createActivity, getActivity } from '../../redux/action/action'; // Aquí estamos importando tres funciones de Redux que se encuentran en el archivo '../../redux/action/action'
import { useDispatch, useSelector } from 'react-redux'; // Estamos importando las funciones useDispatch y useSelector de React Redux. useDispatch nos permite obtener una función para despachar acciones a la store de Redux, mientras que useSelector nos permite seleccionar parte del estado global almacenado en la store de Redux para su uso en el componente.

import { Link } from 'react-router-dom'; // Aquí estamos importando el componente Link de React Router DOM. Link se utiliza para crear enlaces en nuestra aplicación y navegar entre diferentes rutas sin necesidad de recargar la página.
import style from './CreateActivity.module.css'; //  Estamos importando los estilos CSS del módulo 'CreateActivity.module.css' utilizando el nombre style. Esto nos permite acceder a las clases de estilo definidas en ese archivo para aplicar estilos a los elementos en el componente CreateActivity.
import validate from './validate'; // Estamos importando el módulo 'validate', que probablemente contiene funciones para validar los campos del formulario en el componente CreateActivity. La validación es importante para asegurarse de que los datos ingresados por el usuario sean correctos antes de enviarlos.

function CreateActivity() { // Esto define la función del componente CreateActivity. Es un componente funcional de React que se utiliza para renderizar la página de creación de actividad.
    const reload = () => { //  Esto define una función llamada reload. Esta función se utiliza para recargar la página actual. Está vinculada a un botón en el formulario y se llama después de que se haya creado una actividad
        window.location.reload(false) // La línea window.location.reload(false); se utiliza para recargar la página actual. Cuando se llama a esta función, la página se vuelve a cargar desde el servidor. La función reload se activa cuando el usuario ha completado la creación de una actividad y se presiona el botón "CREAR". El propósito de recargar la página en este contexto podría ser para reflejar los cambios recién realizados en la lista de actividades, ya que es posible que la nueva actividad creada se agregue a la lista existente.
//El parámetro false que se pasa a window.location.reload(false) significa que el caché del
// navegador se utiliza si está disponible. Esto puede mejorar el rendimiento y la velocidad de
//  recarga de la página. Si se pasa true en lugar de false, se obligará a recargar la página
//   sin usar el caché.

// En resumen, window.location.reload(false) se utiliza en el contexto de la función reload para recargar la página actual y actualizar su contenido.

};  
    const dispatch = useDispatch() // Aquí estamos utilizando el hook useDispatch de React Redux. Este hook proporciona acceso al método dispatch, que se utiliza para enviar acciones a la tienda de Redux.
    const countries = useSelector(state => state.Countries); // Aquí estamos utilizando el hook useSelector de React Redux para seleccionar el estado Countries de la tienda de Redux. countries contendrá la lista de países almacenados en el estado
    const countriesOrder = countries.sort((a,b) => a.name.localeCompare(b.name)); // Estamos ordenando la lista de países almacenada en el estado según el nombre del país utilizando la función sort. Esto nos dará la lista de países ordenada alfabéticamente por su nombre. La función localeCompare se utiliza para comparar cadenas de texto y garantizar un ordenamiento adecuado según el idioma.

    //En resumen, esta parte del código configura algunas funciones y ganchos de React Redux necesarios para manejar la creación de actividades y acceder a la lista de países desde el estado. También incluye una función reload para recargar la página después de crear una actividad.

    useEffect(()=>{ // useEffect es un gancho (hook) en React que permite ejecutar efectos secundarios en componentes funcionales. En este caso, se está usando para cargar la lista de países al cargar el componente CreateActivity. El efecto se activa cuando el componente se monta ([] vacío como segundo argumento significa que se activa solo en la fase de montaje).
        dispatch(allCountries()) // Esto está enviando una acción a Redux para cargar todos los países. dispatch es una función proporcionada por el hook useDispatch, que se utiliza para enviar acciones a la store de Redux.
    },[dispatch]); // [dispatch] como segundo argumento de useEffect especifica las dependencias del efecto. El efecto se volverá a ejecutar si alguna de estas dependencias cambia. En este caso, se volverá a ejecutar si la función dispatch cambia (lo cual no es común, pero en este caso asegura que el efecto se ejecute correctamente).

    const [form,setForm] = useState({ // es otro gancho de React que se usa para gestionar el estado local dentro de un componente funcional. En este caso, se utiliza para manejar el estado del formulario de creación de actividad.
        name:'', // "form" es el estado que almacena los valores del formulario, como el nombre, la dificultad, la duración, la temporada y el ID del país.
        difficulty:'', // setForm es la función que se utiliza para actualizar el estado form.
        duration:'',
        season:'',
        countryId:[] // El objeto pasado como argumento inicializa el estado del formulario con valores iniciales en blanco o vacíos.
    });
// En resumen, esta parte del código configura el efecto para cargar la lista de países al montar el componente y establece el estado inicial del formulario de creación de actividad.


    const[errors,setErrors] = useState({}); // "errors" es el estado que almacena los mensajes de error para cada campo del formulario. Inicialmente, se establece como un objeto vacío.
                                            // "setErrors" es la función que se utiliza para actualizar el estado errors.
    const handleChange = (event) =>{ // "handleChange" es una función que se llama cada vez que ocurre un evento onChange en los campos del formulario. Recibe el evento como argumento.
        const property = event.target.name // "property" captura el atributo name del campo del formulario que está siendo modificado. Este atributo debe coincidir con la propiedad en el estado form
        const value = event.target.value // "value" captura el valor introducido en el campo del formulario.
        setForm({ // "setForm" se utiliza para actualizar el estado form.
            ...form, // Se utiliza el operador spread (...form) para copiar los valores existentes en el estado form
            [property]:value // luego se actualiza la propiedad correspondiente con property usando el valor value.
        });
    };

// En resumen, esta parte del código configura el manejo de cambios en los campos del
// formulario y actualiza el estado form con los nuevos valores introducidos por el usuario.
// También maneja los mensajes de error asociados a cada campo utilizando el estado errors.

    const handleCountry = (event) =>{ // Esta función se ejecuta cuando cambian las opciones seleccionadas en el campo de selección múltiple de países. Toma el evento onChange como argumento.
        const selectedCountryIds = Array.from(event.target.selectedOptions, option => option.value); // es un array que se construye utilizando la función Array.from(). Recorre las opciones seleccionadas en el campo y extrae sus valores. Estos valores son los IDs de los países seleccionados.
        setForm({ // se utiliza para actualizar el estado form
            ...form, // e usa el operador spread (...form) para copiar los valores existentes en el estado form
            countryId:selectedCountryIds // luego se actualiza la propiedad countryId con los IDs de los países seleccionados almacenados en selectedCountryIds.
        });
    };

// En resumen, esta parte del código maneja los cambios en las opciones seleccionadas en el campo de selección múltiple de países y actualiza el estado form con los IDs de los países seleccionados.  


    const onHandleSubmit = (event) =>{ // Esta función se ejecuta cuando se envía el formulario, es decir, cuando el usuario hace clic en el botón "CREAR". Toma el evento onSubmit como argumento.
        event.preventDefault() // previene el comportamiento predeterminado del envío de formularios, que sería recargar la página.
        const validateError = validate(form) //  es el resultado de la función validate(form), que se utiliza para validar los datos del formulario. Esta función probablemente verifica si los campos cumplen ciertas condiciones 
        setErrors(validateError) // y devuelve un objeto con mensajes de error si es necesario.
        // "setErrors(validateError)" se utiliza para actualizar el estado errors con los mensajes de error generados por la validación
        

        //La siguiente condición verifica si no hay errores de validación (es decir, si el objeto validateError está vacío).
        if (Object.keys(validateError).length === 0){ 
            // Si es así, se ejecutan las siguientes acciones:
            dispatch(createActivity(form)) // Se envía una acción al almacenamiento Redux para crear una nueva actividad utilizando los datos del formulario.
            setForm({ // Se reinicia el estado form a sus valores iniciales vacíos, lo que restablece el formulario.
                name:'',
                difficulty:'',
                duration:'',
                season:'',
                countryId:[]
            })
            reload(); // Llama a la función reload() que recarga la página actual, esto probablemente se hace para actualizar la vista después de crear una nueva actividad.
        };
    };
    


    const isNotComplete = //Esta variable se utiliza para verificar si el formulario está completo o no. Devolverá true si al menos uno de los siguientes casos se cumple:
    !form.name || // está vacío (sin nombre de actividad).
    !form.difficulty || // está vacío (sin dificultad seleccionada).
    !form.duration || // está vacío (sin duración seleccionada).
    !form.season || //  está vacío (sin temporada seleccionada).
    form.countryId.length === 0; // es igual a 0 (ningún país seleccionado).
//Si alguno de estos campos requeridos está vacío o no se ha seleccionado ningún país, la variable isNotComplete será true, lo que significa que el formulario no está completo.
//Esto podría usarse más adelante para deshabilitar el botón "CREAR" si el formulario no se ha completado en su totalidad. Por ejemplo, en el botón
    
    const formCreated = () =>{ // Esta función se utiliza para mostrar una alerta después de que el formulario se haya enviado. Su propósito es informar al usuario si la actividad se creó con éxito o si hay campos faltantes en el formulario.
        if (form.name && form.difficulty && form.duration && form.season && form.countryId){ //La función verifica si todos los campos requeridos del formulario están completos: form.name, form.difficulty, form.duration, form.season y form.countryId. Si todos estos campos tienen un valor (es decir, no son vacíos), 
            alert('Actividad creada ✔') // se muestra una alerta que indica que la actividad se creó con éxito.
        } else {
            alert('Campos incompletos ❌') // Si alguno de estos campos está vacío, se muestra una alerta que indica que hay campos incompletos en el formulario.
        };
    };

{/* este "console.log(errors)" sirve para verificar y depurar los mensajes de error que se generan durante el proceso de envío del formulario. Al inspeccionar la consola del navegador, podrás ver los detalles de los errores si los hubiera, lo que facilita la identificación de cualquier problema con la validación del formulario. Esto es útil para asegurarse de que los errores de validación se están manejando correctamente y proporcionar una mejor experiencia al usuario.*/}    
    console.log(errors); 
    
    return ( // En esta sección, se está devolviendo el contenido JSX del componente CreateActivity.
        <div className={style.Container}> {/* Esto se utiliza para aplicar estilos específicos al contenedor principal del componente.*/}
            <div className={style.ContainerArrow}> 
                <Link to='/home'> {/* Este <div> contiene un enlace <Link> que redirige al usuario de nuevo a la página de inicio ('/home').*/}
                    <img src='../../../public/left-arrow.png' className={style.arrow}  /> {/* También hay una imagen dentro del enlace que parece ser una flecha de regreso. El estilo de esta flecha parece estar controlado por la clase CSS style.arrow*/}
                </Link>
            </div>

            <form className={style.Form} onSubmit={onHandleSubmit}> {/*  El formulario tiene un atributo onSubmit que hace referencia a la función onHandleSubmit, lo que significa que esta función se ejecutará cuando el usuario envíe el formulario.*/}
                <div className={style.input}> {/* Dentro del formulario, hay varios <div> con la clase CSS style.input, que contienen campos de entrada para diferentes atributos de la actividad.*/}
                    <label>Nombre de la actividad:</label> {/* Por ejemplo, el primer campo de entrada se etiqueta con "Nombre de la actividad". */}
                    <input name="name" type="text" onChange={handleChange} /> {/* Su valor y cambios se manejan con handleChange cuando el usuario ingresa información.*/}
                    {errors.name && <p className={style.errors}>{errors.name}</p>} {/* Debajo del campo de entrada, hay una condición {errors.name && <p className={style.errors}>{errors.name}</p>}. Esto está relacionado con la validación. Si hay un error en el atributo "name" en el objeto errors, se mostrará un mensaje de error en un elemento <p> con la clase CSS style.errors.*/}
                </div>
{/* Esta parte del código forma la interfaz de usuario para crear una nueva actividad. Los campos de entrada permiten al usuario ingresar información relevante y se maneja la validación de los datos ingresados para mostrar mensajes de error si es necesario.*/}

{/* En este bloque de código, se está creando un campo de selección de dificultad */}
                <div className={style.input}> {/* El <div> que lo rodea tiene la clase CSS style.input, lo que probablemente aplique estilos específicos al diseño del campo.*/}
                    <label>Dificultad:</label> {/* Hay una etiqueta <label> que indica el propósito del campo, que en este caso es "Dificultad"*/}
                    <select name="difficulty" onChange={handleChange} > {/* Luego viene un elemento <select> que permite al usuario elegir un nivel de dificultad. El atributo name está configurado como "difficulty", que coincide con la propiedad name del estado form.*/}
                                                                        {/* El atributo "onChange" está configurado para ejecutar la función handleChange cada vez que cambia el valor de selección. Esto actualiza el estado form con la nueva dificultad seleccionada.*/}
                        <option>Seleccionar Dificultad</option> {/* Dentro del elemento <select>, */}
                        <option value='1'>1</option> {/* hay una opción por defecto que dice "Seleccionar Dificultad".*/} 
                        <option value='2'>2</option> {/* Luego hay opciones numeradas del 1 al 5 que representan diferentes niveles de dificultad.*/}
                        <option value='3'>3</option> 
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    {errors.difficulty && <p className={style.errors}>{errors.difficulty}</p>} {/* Esto está relacionado con la validación. Si hay un error en la propiedad "difficulty" en el objeto errors, se mostrará un mensaje de error en un elemento <p> con la clase CSS style.errors.*/}
                </div>
{/* En resumen, esta parte del código crea un campo de selección de dificultad en el formulario. Los usuarios pueden elegir un nivel de dificultad y se maneja la validación para mostrar mensajes de error si es necesario.*/}


{/*Igual que en el fragmento anterior, se está creando un campo de selección, esta vez para la duración de la actividad.*/}
                <div className={style.input}>
                    <label>Duracion de la actividad</label> {/* Hay una etiqueta <label> que indica el propósito del campo, que aquí es "Duracion de la actividad".*/}
                    <select name="duration" onChange={handleChange}> {/* El elemento <select> permite al usuario elegir la duración de la actividad. El atributo name está configurado como "duration", que coincide con la propiedad name en el estado form.*/}
                                                                    {/* El atributo onChange está configurado para ejecutar la función handleChange cada vez que cambie el valor de selección. Esto actualizará el estado form con la nueva duración seleccionada.*/}
                        <option>Seleccionar Duracion</option> {/* Dentro del elemento <select>, hay una opción por defecto "Seleccionar Duracion", seguida de varias opciones que representan diferentes duraciones en horas.*/}
                        <option value='1'>1 hs</option>
                        <option value='2'>2 hs</option>
                        <option value='3'>3 hs</option>
                        <option value='4'>4 hs</option>
                        <option value='5'>5 hs</option>
                        <option value='6'>6 hs</option>
                        <option value='7'>7 hs</option>
                        <option value='8'>8 hs</option>
                        <option value='9'>9 hs</option>
                        <option value='10'>10 hs</option>
                        <option value='11'>11 hs</option>
                        <option value='12'>12 hs</option>
                        <option value='13'>13 hs</option>
                        <option value='14'>14 hs</option>
                        <option value='15'>15 hs</option>
                        <option value='16'>16 hs</option>
                        <option value='17'>17 hs</option>
                        <option value='18'>18 hs</option>
                        <option value='19'>19 hs</option>
                        <option value='20'>20 hs</option>
                        <option value='21'>21 hs</option>
                        <option value='22'>22 hs</option>
                        <option value='23'>23 hs</option>
                        <option value='24'>24 hs</option>
                    </select> {/* se encuentra una condición {errors.duration && <p className={style.errors}>{errors.duration}</p>}. Esto maneja la validación. Si hay un error en la propiedad "duration" en el objeto errors, se mostrará un mensaje de error en un elemento <p> con la clase CSS style.errors.*/}
                    {errors.duration && <p className={style.errors}>{errors.duration}</p>}
                </div>
{/*En resumen, esta parte del código crea un campo de selección para la duración de la actividad en el formulario. Los usuarios pueden elegir la duración y se maneja la validación para mostrar mensajes de error si es necesario.*/}


{/*Al igual que en los fragmentos anteriores, se está creando un campo de selección, esta vez para la temporada de la actividad.*/}
                <div className={style.input}> {/* circundante tiene la clase CSS style.input, que probablemente proporciona estilos específicos.*/}
                    <label>Temporada</label> {/* Hay una etiqueta <label> que describe el propósito del campo, que aquí es "Temporada".*/}
                    <select name="season" onChange={handleChange} > {/*El elemento <select> permite al usuario elegir la temporada de la actividad. El atributo name está configurado como "season", que coincide con la propiedad name en el estado form.*/}
                                                                    {/* El atributo onChange está configurado para ejecutar la función handleChange cada vez que cambie el valor de selección. Esto actualizará el estado form con la nueva temporada seleccionada.*/}
                        <option>Seleccionar Temporada</option> {/* Dentro del elemento <select>, hay una opción por defecto "Seleccionar Temporada", seguida de opciones que representan las diferentes temporadas.*/}
                        <option value='Verano'>Verano</option>
                        <option value='Otoño'>Otoño</option>
                        <option value='Invierno'>Invierno</option>
                        <option value='Primavera'>Primavera</option>
                    </select>
                    {errors.season && <p className={style.errors}>{errors.season}</p>} {/* Esto maneja la validación. Si hay un error en la propiedad "season" en el objeto errors, se mostrará un mensaje de error en un elemento <p> con la clase CSS style.errors.*/}
                </div>
{/*En resumen, esta parte del código crea un campo de selección para la temporada de la actividad en el formulario. Los usuarios pueden elegir la temporada y se maneja la validación para mostrar mensajes de error si es necesario.*/}


{/*En esta parte del código, se crea un campo de selección múltiple para elegir los países asociados a la actividad.
Se usa multiple en el atributo select para permitir la selección de múltiples países.*/}
                <div className={style.input}>
                    <label disabled>Seleccionar País</label> {/* Esta etiqueta <label> sirve para proporcionar una descripción o título al campo de selección*/}
                    <select name="countryId" multiple onChange={handleCountry}> {/**Esta etiqueta <select> crea el campo de selección múltiple para elegir países. El atributo name es importante ya que se utilizará para acceder a este valor en el estado del formulario. multiple se usa para permitir la selección de múltiples opciones.*/}
                        <option>Seleccionar País</option> {/**Esta es una opción predeterminada en el campo de selección, que actúa como una instrucción para seleccionar un país.*/}
                        {countriesOrder.map(ct=>(
                            <option key={ct.id} value={ct.id}>{ct.name}</option>
                        ))} {/* Esta parte utiliza la función map para iterar sobre el array countriesOrder que contiene la lista de países ordenados. Por cada país, se crea un elemento <option> con el key establecido como el id del país y el value establecido también como el id. El contenido de la opción es el nombre del país.*/}
                    </select>
                    {errors.countryId && <p className={style.errors}>{errors.countryId}</p>} {/*Esto muestra un mensaje de error si existe un error relacionado con el campo countryId en el objeto errors. Si errors.countryId tiene un valor, se mostrará el mensaje de error usando la clase de estilo style.errors.*/}
                </div>
                {/* Esto podría usarse más adelante para deshabilitar el botón "CREAR" si el formulario no se ha completado en su totalidad. Por ejemplo, en el botón*/}
                <button type="submit" disabled={isNotComplete} className={isNotComplete && style.disabled} onClick={formCreated}>CREAR</button>
        </form> 
        </div>
    );
};
{/*En resumen, esta parte del código crea un campo de selección múltiple para elegir países, 
proporciona una opción predeterminada, muestra mensajes de error si es necesario y establece 
los valores de los países seleccionados en el estado del formulario.*/}


export default CreateActivity;

{/* se encuentra al final del archivo y exporta el componente CreateActivity, que es una función que define cómo se renderiza y se comporta la página de creación de actividades. Al exportar el componente con export default, estás permitiendo que otros archivos en tu aplicación importen y utilicen este componente en su código.*/}