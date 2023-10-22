const Colegio = require('../models/colegio.model.js')
const { uploadImage, deleteImageCloud } = require('../utils/cloudinary.js')
const fs = require('fs-extra')

const getColegio = async (req, res) => {
  try{
    const {id} = req.params
    const colegio = await Colegio.findById(id)

    if(!colegio) return res.status(404).json({
      message: "El colegio no existe"
    })

    res.json(colegio)
  }
  catch(error){
    return res.status(500).json({
      message: error.message
    })
  }
}
const getColegios = async (req, res) => {
  try{
    const colegios = await Colegio.find().limit(2)
    res.json(colegios)
  }
  catch(error){
    return res.status(500).json({
      message: error.message
    })
  }
}

const createColegio = async (req, res) => { 
  try{
    const {
      jurisdiccion,
      departamento,
      nombre,
      domicilio,
      telefono,
      mail,
      descripcion,
      tipo,
      imagen,
      caracteristicas,
      nivel,
      idiomas
    } = req.body
    const colegio = new Colegio({
      jurisdiccion,
      departamento,
      nombre,
      domicilio,
      telefono,
      mail,
      descripcion,
      tipo,
      caracteristicas,
      nivel,
      idiomas
    })
    if(req.files?.imagen){
      const result = await uploadImage(req.files.imagen.tempFilePath)
      colegio.imagen={
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.imagen.tempFilePath)
    }

    colegio.save()
    res.json('recibido')
  }
  catch(error){
    return res.status(500).json({
      message: error.message
    })
  }
}

const updateColegio = async (req, res) => { 
  try{
    const {id} = req.params
    const colegio = await Colegio.findByIdAndUpdate(id, req.body, {new:true})

    return res.json(colegio)
  }
  catch(error){
    return res.status(500).json({
      message: error.message
    })
  }
}

const deleteColegio = async (req, res) => { 
  try{
    const {id} = req.params
    const colegio = await Colegio.findByIdAndDelete(id)

    if(!colegio) return res.status(404).json({
      message: "El colegio no existe"
    })

    if(colegio.imagen?.public_id) await deleteImageCloud(colegio.imagen.public_id)

    return res.json(colegio)
  }
  catch(error){
    return res.status(500).json({
      message: error.message
    })
  }
}

module.exports = { 
  getColegio,
  getColegios,
  createColegio,
  updateColegio,
  deleteColegio  
}