import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import React from "react";
import styles from "./Search.module.css";
import { useSelector } from "react-redux";

//Importa los módulos y componentes necesarios para este componente, incluyendo
// Cards, Nav, React, estilos de CSS y la función useSelector de 'react-redux',
// que se utiliza para acceder al estado de Redux



// --------- Comienza la definición del componente ResultsSearch.----//

function ResultsSearch() {
  const countriesResult = useSelector((state) => state.resultSearch); // useSelector permite acceder al estado de Redux. Aquí se utiliza para obtener el valor de state.resultSearch, que contiene los resultados de la búsqueda de países. El valor se almacena en la variable countriesResult
  if (!Array.isArray(countriesResult)) { // Esta sección verifica si countriesResult es un array. 
    // Si no es un array, mostramos un mensaje de error o retorno de componente vacío
    return <h2 className={styles.text}>DEBES INGRESAR UN PAIS ‼.</h2>; // Si no lo es, significa que no se ingresó un país válido en la búsqueda. En ese caso, se renderiza un mensaje de error usando los estilos definidos en styles.text.
  };

  // Aquí se define la estructura de la presentación de resultados.
  // El contenido se coloca dentro de un contenedor con la clase Container.
  return (
    <div className={styles.Container}>
      <h2 className={styles.text}>RESULTADOS DE LA BÚSQUEDA:</h2> {/*Se muestra un título "RESULTADOS DE LA BÚSQUEDA:" usando los estilos definidos en styles.text.*/}
      <div className={styles.ContainerCountry}> {/*Luego, dentro de un contenedor con la clase ContainerCountry, se verifica si hay resultados en countriesResult*/}
        {/*Si no hay resultados (su longitud es 0), se muestra un mensaje indicando que no se encontraron países. 
        Si hay resultados, se utiliza la función map() para iterar a través de los países en
        countriesResult. Por cada país, se renderiza el componente Cards
        (que representa una tarjeta de país) con los detalles correspondientes como
        id, name, continent e image.*/}
        {countriesResult.length === 0 ? ( 
          <h2 className={styles.text}>No se encontraron países.</h2>
          ) : (
          countriesResult.map((count) => (
            <Cards
              className={styles.cards}
              key={count.id}
              id={count.id}
              name={count.name}
              continent={count.continent}
              image={count.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ResultsSearch;

// Finalmente, se cierra la definición del componente ResultsSearch y se lo exportamos para que pueda ser utilizado en otros componentes.