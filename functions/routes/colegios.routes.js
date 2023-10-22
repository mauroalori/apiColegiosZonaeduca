const { Router } = require('express')
const {
  getColegios,
  getColegio,
  createColegio,
  updateColegio,
  deleteColegio
} =  require('../controllers/colegios.controller.js')
const fileUpload = require('express-fileupload')

const router = Router()

router.get('/', (_req, res) => {
  res.send('API REST Colegios')
})

router.get('/colegios', getColegios)

router.get('/colegios/:id', getColegio)

router.post('/colegios', fileUpload({ useTempFiles : true, tempFileDir : './uploads' }), createColegio)

router.put('/colegios/:id', updateColegio)

router.delete('/colegios/:id', deleteColegio)

module.exports = router