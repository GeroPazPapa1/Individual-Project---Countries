import { Link } from "react-router-dom"; // En esta parte, se importa el componente Link de React Router para poder crear enlaces entre páginas.
import style from "./Cards.module.css"; // También se importa el archivo de estilos CSS específico para este módulo, que se almacena en la constante style.



//-------- Comienza la definición del componente Cards,----//
// que recibe cuatro propiedades: id, name, image y continent.

function Cards({ id, name, image, continent }) {
  return (
    //Dentro del componente, se devuelve una estructura de elementos JS. 
    // Comienza con un contenedor principal que utiliza la clase CSS container para aplicar
    // estilos específicos. Luego, se abre otro contenedor con la clase containerCards y se
    // asigna la propiedad key para ayudar a React a realizar un seguimiento eficiente de los
    // elementos en una lista.
    <div className={style.container}>
      <div key={id} className={style.containerCards}>
        <img src={image} alt={name} className={style.image} /> {/*Se inserta una etiqueta de imagen que muestra la imagen del país. La propiedad src se establece como la URL de la imagen proporcionada en la propiedad image, y se agrega un atributo alt para describir la imagen en caso de que no se cargue correctamente. La clase CSS image se utiliza para aplicar estilos específicos a la imagen.*/}
        {/*Dentro de este contenedor, se coloca la información relacionada con el país. Un contenedor con la clase containerInfo se utiliza para aplicar estilos específicos. Dentro de este contenedor, se coloca un encabezado h2 con la clase CSS text para mostrar el nombre del país (name) y un párrafo p con la clase parrafo para mostrar el continente del país (continent).*/}
        <div className={style.containerInfo}>
          <h2 className={style.text}>{name}</h2>
          <p className={style.parrafo}>{continent}</p>
            {/*Dentro de este contenedor, se coloca la información relacionada con el país. Un contenedor con la clase containerInfo se utiliza para aplicar estilos específicos. Dentro de este contenedor, se coloca un encabezado h2 con la clase CSS text para mostrar el nombre del país (name) y un párrafo p con la clase parrafo para mostrar el continente del país (continent).*/}
          <Link to={`/detail/${id}`}>
            <button className={style.button}>VER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;

//Se cierra la definición del componente Cards y se lo exporta utilizando export
// default para que pueda ser utilizado en otros componentes.