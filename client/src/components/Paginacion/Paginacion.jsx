import React, { useEffect, useState } from 'react'; //  Importa las funciones necesarias de React para crear componentes funcionales y manejar el estado.

import style from './Paginacion.module.css'; // Importa el módulo de estilos CSS específico para este componente.

const buttonRight = '../../../public/arrow-right.png'; // : Define la ruta de la imagen de flecha derecha.
const buttonLeft = '../../../public/arrow.png'; // Define la ruta de la imagen de flecha izquierda.
//Estas rutas se utilizan posteriormente en el código para mostrar las imágenes de flechas en los botones de navegación de la paginación. La imagen de flecha derecha se utiliza cuando se desea avanzar a la siguiente página, y la imagen de flecha izquierda se utiliza cuando se desea retroceder a la página anterior. Estas imágenes son visualmente representativas de la dirección del movimiento en la paginación.


function Paginacion({ max, pages, setPages, country }) { // Comienza la definición del componente "Paginacion" que recibe varias propiedades: max (número máximo de páginas), pages (página actual), setPages (función para actualizar la página actual), y country (país actual).
    const [input, setInput] = useState(1); // Crea un estado local input con valor inicial 1. Este estado se utiliza para el campo de entrada de página.


    const nextPage = () => { // Define una función nextPage que aumenta el valor de input
        setInput(parseInt(input + 1)); // y actualiza pages para mostrar la siguiente página.
        setPages(parseInt(pages + 1));
    }

    const prevPage = () => { // Define una función prevPage que disminuye el valor de input
        setInput(parseInt(input - 1)); // y actualiza pages para mostrar la página anterior.
        setPages(parseInt(pages - 1));
    }

    useEffect(() => { // Utiliza el efecto useEffect para reiniciar el valor de input a 1 
        setInput(1); // cuando el país cambia.
    }, [country]);

    const onKey = (event) => { // La función onKey se ejecuta cuando ocurre un evento de teclado en el campo de entrada de página.
        if (event.keyCode == 13) { // El condicional if (event.keyCode === 13) verifica si la tecla presionada es la tecla "Enter" (código 13), lo que indica que el usuario ha terminado de ingresar un valor.
            setPages(parseInt(event.target.value)); // Se intenta convertir el valor ingresado en el campo de entrada a un número entero utilizando parseInt(event.target.value). Esto es necesario para poder comparar y evaluar el valor numéricamente.
            if (parseInt(event.target.value) < 1 || parseInt(event.target.value) > Math.ceil(max) || isNaN(event.target.value)) {
            //Luego, se verifica si el valor ingresado cumple con una serie de condiciones:
            //Si el valor es menor que 1.
            //Si el valor es mayor que el número máximo de páginas (max).
            //Si el valor no es un número válido (usando isNaN para verificar si no es un número).
                setInput(1); // Si alguna de estas condiciones no se cumple, significa que el valor ingresado no es válido para representar una página. En este caso, se restablece el valor del campo de entrada (setInput(1))
                setPages(1); // y también se restablece la página actual (setPages(1)).
            } else {
                setPages(parseInt(event.target.value)); // Si el valor ingresado pasa todas las condiciones y es válido, se actualiza la página actual (setPages(inputValue)) con el valor ingresado.
            };
        };
    };

/*En resumen, esta parte del código asegura que el usuario pueda ingresar un número de
página en el campo de entrada, y cuando presiona "Enter", se verifica si el número
ingresado es válido dentro del rango de páginas disponibles. Si es válido, se actualiza
la página actual; si no es válido, se restablecen tanto el campo de entrada como la página
actual a 1.*/

// Este código define la función onChange, que se activa cuando el contenido del campo de entrada (input) de la paginación cambia. 
// La función se encarga de actualizar el estado input con el nuevo valor del campo de entrada. En otras palabras, cada vez que el usuario modifica el número en el campo de entrada, esta función se ejecuta para reflejar ese cambio en el estado del componente.
const onChange = (event) => { {/* La función toma el evento de cambio como argumento (el evento que se produce cuando el contenido del campo de entrada cambia). Luego, utiliza event.target.value para obtener el nuevo valor del campo de entrada.*/}
        setInput(event.target.value); {/*Finalmente, actualiza el estado input con este nuevo valor.*/}
    }

    return (
        <div className={style.Container}> {/* Se establece un contenedor principal con la clase style.Container, que envuelve toda la estructura de la paginación.*/}
            {/* El primer botón representa la flecha izquierda para retroceder en las páginas. Si pages es igual a 1 (es decir, estamos en la primera página), */}
            {pages == 1 ?   
            <button  className = {style.disabled}> {/* se muestra un botón desactivado con una clase style.disabled, que evita que el usuario haga clic en él.*/}
                <img src={buttonLeft} className={style.image} /> 
            </button> 
            : 
            <button onClick={prevPage} className={style.button}> {/* De lo contrario, se muestra un botón activo que llama a la función prevPage cuando se hace clic.*/}
                <img src={buttonLeft} className={style.image} />
            </button>}

            <input name ='pages' autoComplete='off' value = {input} className = {style.Input} onKeyDown={onKey} onChange={onChange}/> {/* El campo de entrada (input) muestra el número de página actual y permite al usuario ingresar un número de página manualmente. Está conectado al estado input y a las funciones onKey y onChange para controlar los cambios.*/}
            <p  className={style.number}> DE {max}</p> {/* Se muestra un mensaje que indica el número total de páginas disponibles: DE {max}*/}
            {/* Si pages es igual a max (es decir, estamos en la última página), se muestra un botón desactivado*/}
            {pages == max ? 
            <button  className={style.disabled}> {/* El segundo botón representa la flecha derecha para avanzar en las páginas. */}
                <img src={buttonRight} className={style.image} /> 
            </button> 
            : // De lo contrario, se muestra un botón activo que llama a la función nextPage cuando se hace clic.
            <button onClick={nextPage} className={style.button}>
                <img src={buttonRight} className={style.image} />
            </button>}
        </div>
    );
};

//En resumen, esta sección de código define cómo se ve la paginación en la interfaz de usuario y cómo interactúa con las funciones y el estado para permitir la navegación y la entrada manual del número de página.

export default Paginacion;
//La línea export default Paginacion; al final del archivo Paginacion.jsx se utiliza para exportar el componente Paginacion, para que pueda ser utilizado en otros archivos de JavaScript o componentes React. 

//Este componente "Paginacion" se utiliza para mostrar controles de paginación en una interfaz web
    