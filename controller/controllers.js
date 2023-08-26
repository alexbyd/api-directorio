const controller = {}

controller.saludar = (req, res)=>{
  res.send('hola desde controller')
}

module.exports = controller