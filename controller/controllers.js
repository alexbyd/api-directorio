const path = require('path')
const controller = {}

controller.saludar = (req, res)=>{
  res.send('hola desde controller')
}

controller.dbJson = (req, res)=>{
//  res.send('hola desde la base de datos')
  res.sendFile(path.resolve('.././db.json'))
}

module.exports = controller