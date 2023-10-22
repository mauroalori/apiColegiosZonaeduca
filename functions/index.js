const connectToDB = require('./utils/mongoose.js')
const handler = require('./app.js')
const colegiosAutomaticCreate = require('./utils/colegiosAutomaticCreate.js')
const colegiosUpdateCoords = require('./utils/colegiosUpdateCoords.js')

const cargarRegistros = false;
const updateCoords = false;

// Cuando se ejecuta la IIFE, se realiza la conexion a la base de datos y la app empieza a correr en el puerto 3000
(async function () {
  await connectToDB()
  handler.listen(3000)
  console.log('Server en puerto 3000 OK')
  if(cargarRegistros){
    colegiosAutomaticCreate()
  }
  if(updateCoords){
    colegiosUpdateCoords()
  }
}());