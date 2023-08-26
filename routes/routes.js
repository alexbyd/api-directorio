const express = require('express')
const routes = express.Router()
const controller = require('../controller/controllers')

routes.get('/', controller.saludar)
routes.get('/db', controller.dbJson)

module.exports = routes