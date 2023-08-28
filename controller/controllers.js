const path = require('path')
const controller = {}
const connection = require('./connection')
const e = require("express");

controller.saludar = (req, res)=>{
  res.send('hola desde controller')
}

controller.dbJson = (req, res)=>{
//  res.send('hola desde la base de datos')
  res.sendFile(path.resolve('.././db.json'))
}

controller.queryToMySQL = (req, res)=>{
  /**
   * [queryToMySQL]
  * @param {String} req Es la forma de hacer una req
  * esto es un docstring y cuando te posas sobre la variable te explica su contexto
  *  */

  req.path();
  connection.end()
}

module.exports = controller