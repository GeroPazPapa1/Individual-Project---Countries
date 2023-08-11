require("dotenv").config();
const { Sequelize } = require("sequelize"); //(ya venia realizado por Soy Henry)

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
/*En estas primeras líneas, se importa y configura el paquete dotenv para cargar las variables
  de entorno desde un archivo .env. Luego, se importa el objeto Sequelize desde el módulo
  sequelize. Además, se importan módulos de Node.js como fs y path.*/


// Configuración de la base de datos:
// Crea un archivo database.js en la carpeta config y configura la conexión a la base de datos
// utilizando Sequelize(ya venia realizado por Soy Henry)
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});
/*En esta línea, se crea una instancia de Sequelize para establecer la conexión a la base
  de datos PostgreSQL. Se utiliza la información de las variables de entorno DB_USER,
  DB_PASSWORD y DB_HOST para configurar la conexión. Se configura logging como false
  para que Sequelize no registre consultas en la consola. El parámetro native se
  establece como false para evitar problemas con los drivers nativos. */



const basename = path.basename(__filename);


const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
/*Estas líneas se encargan de cargar automáticamente los modelos definidos en la carpeta
 "/models". Se obtiene el nombre del archivo actual (el archivo "db.js") utilizando "path.basename."
  Luego, se lee el contenido de la carpeta /models y se filtran los archivos JavaScript que no
  empiezan con un punto (".") y no tienen el mismo nombre que el archivo actual ("basename").
  Los archivos que cumplen con estas condiciones se requieren y se agregan al arreglo
  "modelDefiners". */

modelDefiners.forEach(model => model(sequelize));
/*Aquí se ejecutan las funciones que definen los modelos. Cada función de modelo toma
 la instancia de Sequelize (sequelize) como argumento y define el modelo en la base de datos.
*/






let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
/*Estas líneas convierten los nombres de los modelos en camel case
  (por ejemplo, country_activity se convierte en CountryActivity) y actualizan los nombres
  de los modelos en sequelize.models*/

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Country, Activity } = sequelize.models;
/*Aquí se realizan las importaciones de los modelos Country y Activity desde el objeto
 sequelize.models.*/





// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Country.belongsToMany(Activity, { through: 'country_activity'});
Activity.belongsToMany(Country, { through: 'country_activity'});
/*Estas líneas definen las relaciones entre los modelos Country y Activity utilizando el
  método belongsToMany. Esto indica que un país puede tener muchas actividades y una actividad
  puede estar asociada a muchos países. La tabla de unión se especifica
  como 'country_activity'.*/




module.exports = {
  ...sequelize.models, // Sirve para poder importar los modelos de la sgte manera: const { Product, User } = require('./db.js');
  conn: sequelize,     // Sirve para poder importar la conexión { conn } = require('./db.js');
};

/*Finalmente, se exportan los modelos definidos en sequelize.models y la instancia de conexión
 a la base de datos como conn.

En resumen, el archivo db.js configura la conexión a la base de datos utilizando Sequelize,
  carga automáticamente los modelos desde la carpeta /models, define las relaciones entre los
  modelos Country y Activity, y exporta los modelos y la conexión. Esto permite que los modelos
  y la conexión puedan ser utilizados en otras partes de la aplicación*/