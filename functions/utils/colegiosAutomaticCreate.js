import fs from 'fs-extra'
import Colegio from '../models/colegio.model.js'
import { uploadImage } from './cloudinary.js'

import datosColegios from '../data/datosColegios.js'

export default function colegiosAutomaticCreate(){
  datosColegios.forEach(async ({jurisdiccion, departamento, nombre, domicilio, telefono, mail, descripcion, tipo, imagen, caracteristicas, nivel, idiomas}) => {
      try{
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
        const result = await uploadImage(imagen)
          colegio.imagen={
          public_id: result.public_id,
          secure_url:   result.secure_url
        }
        await fs.unlink(imagen)
        colegio.save()
      }
      catch(error){
        console.log("la carga de archivos o registros no funcionó:", error)
      }
  })
}