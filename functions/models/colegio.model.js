const mongoose = require('mongoose')

const colegioSchema = mongoose.Schema({
  jurisdiccion:{
    type: String,
    trim: true
  },
  departamento:{
    type: String,
    trim: true
  },
  nombre:{
    type: String,
    trim: true
  },
  domicilio:{
    type: String,
    trim: true
  },
  telefono:{
    type: String,
    trim: true
  },
  mail:{
    type: String,
    trim: true
  },
  descripcion:{
    type: String,
    trim: true
  },
  tipo:{
    type: String,
    trim: true
  },
  imagen:{
    public_id: String,
    secure_url: String
  },
  caracteristicas:{
    type: [String]
  },
  nivel:{
    type: [String]
  },
  idiomas:{
    type: [String]
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Colegio', colegioSchema)