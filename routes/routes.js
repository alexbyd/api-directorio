const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
  res.send('respuesta desde el enrutador')
})

module.exports = routes