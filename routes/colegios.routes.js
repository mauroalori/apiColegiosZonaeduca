import { Router } from 'express'
import{
  getColegios,
  getColegio,
  createColegio,
  updateColegio,
  deleteColegio
} from '../controllers/colegios.controller.js'
import fileUpload from 'express-fileupload'

const router = Router()

router.get('/', (_req, res) => {
  res.send('API REST Colegios')
})

router.get('/colegios', getColegios)

router.get('/colegios/:id', getColegio)

router.post('/colegios', fileUpload({ useTempFiles : true, tempFileDir : './uploads' }), createColegio)

router.put('/colegios/:id', updateColegio)

router.delete('/colegios/:id', deleteColegio)

export default router