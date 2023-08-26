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


  connection.query('show databases;')
  res.send(results)
  connection.end()
}

module.exports = controller