// Validate, se utiliza para validar los datos ingresados en el formulario de creación
// de actividades. Esta función toma un objeto form como argumento, que contiene los datos
//  del formulario.

const validate = (form) => {
    
    let errors = {}; // Inicializa un objeto 'errors' vacío para almacenar los errores de validación
    
    // Validación para el campo 'name'
    if(!(form.name.length <= 10) || !/^[a-zA-Z]+$/.test(form.name)) errors.name = 'Debe menos de 10 caracteres y no debe estar vacio';
    
    // Validación para el campo 'difficulty'
    if(!form.difficulty) errors.difficulty = 'Dificultad Requerida';
    
    // Validación para el campo 'duration'
    if(!form.duration) errors.duration = 'Duracion Requerida';
    
    // Validación para el campo 'season'
    if(!form.season) errors.season = 'Temporada Requerida';
    
    // Validación para el campo 'countryId'
    if(form.countryId.length == 0) errors.countryId = 'Debes seleccionar al menos un país';

    // Devuelve el objeto 'errors' que contiene los mensajes de error de validación
    return errors;
}

// Exporta la función 'validate' para que pueda ser utilizada en otros archivos
export default validate;

// En resumen, esta función validate se encarga de verificar que los datos ingresados
// en el formulario cumplan con ciertas reglas de validación. Si encuentra algún error
//  en los datos ingresados, agrega un mensaje de error correspondiente en el objeto errors.
//   Al final, la función devuelve el objeto errors que contiene los mensajes de error de
//    validación. Esta función puede ser importada y utilizada en otras partes de tu código
//     para validar los formularios antes de enviarlos.