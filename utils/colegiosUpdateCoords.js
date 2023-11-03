import Colegio from '../models/colegio.model.js'
import datosColegios from '../data/datosColegios.js'

export default function colegiosUpdateCoords() {
  datosColegios.forEach(async (colegio) => {
    try {
      const newCole = await Colegio.findOneAndUpdate({ nombre: colegio.nombre }, { coordenadas: colegio.coordenadas })
    }
    catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
  })
}