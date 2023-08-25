const express = require('express')
const app = express()
const port = 5002


app.use(require('../routes/routes'))


app.listen(port, ()=>{console.log('server')})