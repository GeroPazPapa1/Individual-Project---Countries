const axios = require("axios");
const ApiToDb = require('./src/handlers/ApiToDb');
const server = require("./src/app");
const { conn } = require('./src/db.js');
const PORT = 5000;

/*En estas líneas, se están importando los módulos y objetos necesarios para el 
funcionamiento del servidor y la base de datos:

axios: Se importa el módulo axios, que es una biblioteca utilizada para realizar
solicitudes HTTP.

server: Se importa el servidor configurado desde el archivo server.js.

conn: Se importa el objeto conn desde el archivo db.js, que es la conexión a la base
de datos utilizando Sequelize.

PORT: Se define el número de puerto en el que se ejecutará el servidor. En este caso,
se establece en el puerto 3001.

loadDB: Se importa un módulo llamado loadDB, que esta relacionado con cargar
datos en la base de datos.*/


conn.sync({ force: true }).then(() => {

server.listen(PORT, async () => { // async await Para cargar todo en la base de datos al levantarlo
  console.log(`Server listening on port ${PORT}`);
  await ApiToDb(); });
})
.catch(error => console.error(error));
/*En esta parte del código, ocurre lo siguiente:

-"conn.sync({ force: true })": Se utiliza el método sync() de Sequelize para sincronizar los
modelos definidos en la base de datos. El parámetro force: true indica que se desea forzar 
la recreación de las tablas en la base de datos en cada inicio del servidor.
Esto eliminará todos los datos existentes y creará nuevas tablas.

-".then(() => { ... })": Si la sincronización es exitosa, se ejecuta el bloque de código dentro
de este "then()".

-"server.listen(PORT, async () => { ... })": Se inicia el servidor para escuchar
en el puerto definido.Dentro de esta función de escucha, se utiliza a"wait loadDB()" para
cargar los datos en la base de datos.

Esto indica que, después de que el servidor esté en
funcionamiento, se cargarán los datos.

-"console.log(Server listening on port ${PORT});":
Se muestra un mensaje en la consola indicando que el servidor está escuchando
en el puerto especificado.*/



/*En resumen, este archivo se encarga de realizar las siguientes acciones:

Sincronizar los modelos de la base de datos.
Iniciar el servidor en el puerto 3001.
Cargar los datos en la base de datos utilizando el módulo loadDB
(se asume que esta funcionalidad está definida en ese módulo).
Es importante tener en cuenta que el uso de force: true en la sincronización eliminará
y recreará las tablas en la base de datos cada vez que el servidor se inicie, lo que puede
ser útil durante el desarrollo, pero no es adecuado en producción, ya que eliminará datos
existentes.*/
