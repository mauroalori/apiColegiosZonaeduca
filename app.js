import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Importacion de rutas de colegios
import colegiosRoutes from './routes/colegios.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) 

app.use(colegiosRoutes)

export default app
