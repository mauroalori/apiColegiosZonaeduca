import mongoose from 'mongoose'

import { MONGODB_URI } from '../config.js'

// Conexion a la base de datos de los colegios
export default async function connectToDB(){
  try{
    await mongoose.connect(MONGODB_URI)
    console.log('Conectado a MongoDB')
  }
  catch{
    console.log('Error de conexion a la base de datos', error)
  }
}