import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom, que se utiliza para crear enlaces y navegación dentro de la aplicación.
import React from 'react'; // Importa la biblioteca principal de React para poder utilizarlo en este componente.
import style from './Landing.module.css';  // Importa los estilos CSS específicos para este componente desde el archivo Landing.module.css. Los estilos importados se almacenan en el objeto style, lo que permite acceder a las clases CSS definidas en ese archivo.

function LandingPage() { // Define una función de componente llamada LandingPage.
  return (
    <div className={style.Container}>{/*Crea un contenedor <div> con la clase CSS Container. Esta clase define estilos específicos para el contenedor de la página de aterrizaje.*/}
        <div className={style.ContainerText}>{/*Crea otro contenedor <div> con la clase CSS ContainerText. Esta clase se utiliza para agrupar el contenido de texto y el botón en el centro de la página.*/}
            <h1 className={style.title}>BIENVENIDO A AVENTURAS SIN FRONTERAS</h1>{/*Crea un encabezado de nivel 1 (<h1>) con el texto "BIENVENIDO A AVENTURAS SIN FRONTERAS". La clase CSS title se aplica a este elemento para darle estilos específicos.*/}
            <Link to="/home"> {/*Crea un enlace utilizando el componente Link de react-router-dom. El atributo to especifica la URL a la que se redireccionará cuando se haga clic en el enlace.*/}
                <button className={style.button}>INGRESAR</button>{/*Crea un botón con el texto "INGRESAR". La clase CSS button se aplica para aplicar estilos al botón.*/}
            </Link>
        </div>
    </div>
  )
}

export default LandingPage;

{/*En resumen, este código define el componente LandingPage, que muestra un mensaje de 
bienvenida y un botón "INGRESAR". Al hacer clic en el botón, el usuario será redirigido
 a la página de inicio (/home) de la aplicación. Los estilos CSS específicos se aplican
 utilizando las clases definidas en el archivo Landing.module.css.*/}