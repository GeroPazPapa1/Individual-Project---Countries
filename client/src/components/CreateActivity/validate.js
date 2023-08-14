// Validate, se utiliza para validar los datos ingresados en el formulario de creación
// de actividades. Esta función toma un objeto form como argumento, que contiene los datos
//  del formulario.

const validate = (form) => {
    
    let errors = {}; // Inicializa un objeto 'errors' vacío para almacenar los errores de validación
    
    // Validación para el campo 'name' = = esta línea de código verifica si el campo name cumple con la condición de tener menos de 10 caracteres y contener solo letras
    if(!(form.name.length <= 10) || !/^[a-zA-Z]+$/.test(form.name)) errors.name = 'Debe menos de 10 caracteres y no debe estar vacio';
    // !(form.name.length <= 10)Esto verifica si la longitud del valor en el campo name es mayor a 10 caracteres. El operador ! al principio invierte el resultado, lo que significa que esta condición se cumple si la longitud del nombre es mayor a 10 caracteres. Si esta condición es verdadera, se considera un error en la validación.
    // !/^[a-zA-Z]+$/.test(form.name): Aquí se utiliza una expresión regular (/^[a-zA-Z]+$/) para verificar si el valor en el campo name contiene solo letras (mayúsculas o minúsculas) y no contiene ningún otro carácter
    // El método .test(form.name) verifica si el valor del campo name coincide con el patrón definido en la expresión regular. Si esta condición es verdadera, significa que el valor contiene algún carácter que no es una letra, y por lo tanto, se considera un error en la validación.
    // Si cualquiera de estas dos condiciones es verdadera, significa que el campo name no cumple con los criterios de validación requeridos. En ese caso, se agrega un mensaje de error al objeto errors con la clave 'name' y el mensaje correspondiente: 'Debe tener menos de 10 caracteres y no debe estar vacío'.
    

    // Validación para el campo 'difficulty' = Esa línea de código verifica si el campo difficulty del formulario está vacío o no tiene un valor seleccionado.
    if(!form.difficulty) errors.difficulty = 'Dificultad Requerida';
    // !form.difficulty: Esta parte verifica si el campo difficulty no tiene un valor definido o está vacío. El operador ! al principio invierte el resultado. Si el campo está vacío, esta expresión será verdadera, lo que significa que no se ha seleccionado una dificultad.
    // errors.difficulty = 'Dificultad Requerida': Si la verificación anterior es verdadera (es decir, si no se seleccionó una dificultad), se agrega un mensaje de error al objeto errors
    // La clave 'difficulty' se utiliza para identificar este error en el objeto errors, y el valor 'Dificultad Requerida' es el mensaje de error que se mostrará en la interfaz para indicar que la dificultad es un campo requerido.
    

    // Validación para el campo 'duration' = Esta línea de código verifica si el campo duration del formulario está vacío o no tiene un valor seleccionado
    if(!form.duration) errors.duration = 'Duracion Requerida';
    // !form.duration: Esta parte verifica si el campo duration no tiene un valor definido o está vacío. El operador ! al principio invierte el resultado. Si el campo está vacío, esta expresión será verdadera, lo que significa que no se ha proporcionado una duración.
    // errors.duration = 'Duracion Requerida': Si la verificación anterior es verdadera (es decir, si no se ha proporcionado una duración), se agrega un mensaje de error al objeto errors. La clave 'duration' se utiliza para identificar este error en el objeto errors, y el valor 'Duracion Requerida' es el mensaje de error que se mostrará en la interfaz para indicar que la duración es un campo requerido.
    
    
    // Validación para el campo 'season' = Esta línea de código verifica si el campo season del formulario está vacío o no tiene un valor seleccionado
    if(!form.season) errors.season = 'Temporada Requerida';
    // !form.season: Esta parte verifica si el campo season no tiene un valor definido o está vacío. El operador ! al principio invierte el resultado. Si el campo está vacío, esta expresión será verdadera, lo que significa que no se ha proporcionado una temporada.
    // Si la verificación anterior es verdadera (es decir, si no se ha proporcionado una temporada), se agrega un mensaje de error al objeto errors. La clave 'season' se utiliza para identificar este error en el objeto errors, y el valor 'Temporada Requerida' es el mensaje de error que se mostrará en la interfaz para indicar que la temporada es un campo requerido.
    
    
    
    // Validación para el campo 'countryId' = Esta parte del código se encarga de validar el campo countryId, que representa la lista de países seleccionados en el formulario. La validación se realiza verificando si la longitud de la lista countryId es igual a cero, lo que significa que ningún país ha sido seleccionado.
    if(form.countryId.length == 0) errors.countryId = 'Debes seleccionar al menos un país';
    // form.countryId.length === 0: Esta parte verifica si la longitud de la lista countryId es igual a cero, lo que significa que no se ha seleccionado ningún país.
    // errors.countryId = 'Debes seleccionar al menos un país': Si la verificación anterior es verdadera (es decir, si no se ha seleccionado ningún país), se agrega un mensaje de error al objeto errors. La clave 'countryId' se utiliza para identificar este error en el objeto errors, y el valor 'Debes seleccionar al menos un país' es el mensaje de error que se mostrará en la interfaz para indicar que al menos un país debe ser seleccionado.



    // Devuelve el objeto 'errors' que contiene los mensajes de error de validación
    return errors;
    // Esta línea devuelve el objeto errors que se ha ido construyendo a medida que se realizaban las validaciones. Este objeto contiene mensajes de error específicos para cada campo del formulario que no cumpla con los requisitos de validación. Si no se encontraron errores en la validación, el objeto errors será un objeto vacío.
}

// Exporta la función 'validate' para que pueda ser utilizada en otros archivos.
// Esto permite reutilizar esta función de validación en diferentes partes del código, 
// como en el componente CreateActivity donde se utiliza para validar los datos del
// formulario antes de enviarlos.
export default validate;

// En resumen, esta función validate se encarga de verificar que los datos ingresados
// en el formulario cumplan con ciertas reglas de validación. Si encuentra algún error
//  en los datos ingresados, agrega un mensaje de error correspondiente en el objeto errors.
//   Al final, la función devuelve el objeto errors que contiene los mensajes de error de
//    validación. Esta función puede ser importada y utilizada en otras partes de tu código
//     para validar los formularios antes de enviarlos.