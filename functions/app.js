const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const serverless = require('serverless-http');
const app = express();

// Importacion de rutas de colegios
const colegiosRoutes = require('./routes/colegios.routes')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) 

app.use('/.netlify/functions/app', colegiosRoutes);
module.exports.handler = serverless(app);
