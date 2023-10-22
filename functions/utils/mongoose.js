const mongoose = require('mongoose')

const { MONGODB_URI } = require('../config.js')

// Conexion a la base de datos de los colegios
const connectToDB = async function (){
  try{
    await mongoose.connect(MONGODB_URI)
    console.log('Conectado a MongoDB')
  }
  catch{
    console.log('Error de conexion a la base de datos', error)
  }
}

module.exports = connectToDB